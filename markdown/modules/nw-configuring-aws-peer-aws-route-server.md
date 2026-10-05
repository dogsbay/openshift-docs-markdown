{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring BGP to peer with AWS Route Server {id="nw-configuring-aws-peer-aws-route-server_{{ context }}"}

After you prepare the {{ aws_short }} environment, configure BGP Cloud Connector so that {{ product_title }} compute nodes establish BGP peering sessions with the {{ aws_short }} Route Server and advertise {{ VirtProductName }} virtual machine (VM) network routes. {._abstract}

When BGP peering establishes, the cluster advertises `<pod_network_cidr>` routes to the {{ aws_short }} Route Server by using Elastic Network Interface (ENI) IP addresses of compute nodes.
Each compute node must have a matching `routerNodeSelector` label.
The Route Server injects these routes into VPC route tables.

If ingress traffic reaches a non-target node, the Cluster User Defined Network (CUDN) transparently forwards the traffic, enabling direct, NAT-free access. 
If a next-hop node fails, the Route Server automatically points route tables to an alternate node.

**Prerequisites**

*   You have prepared the {{ aws_short }} environment for BGP peering.
*   You have installed the BGP Cloud Connector Operator on your cluster.
*   You have the {{ aws_short }} Region, Route Server ID, and an {{ aws_short }} autonomous system number (ASN) that you noted while preparing the {{ aws_short }} environment.

**Procedure**

1.  Create a `BGPCloudConfiguration` custom resource (CR) to define the cluster-wide BGP configuration:
    ```yaml
    apiVersion: networking.openshift.io/v1beta1
    kind: BGPCloudConfiguration
    metadata:
      name: cluster
    spec:
      platform: AWS
      bgp:
        localASN: <local_asn>
        livenessDetection: bgp-keepalive
      routerNodeSelector:
        bgp_router: "true"
      aws:
        region: <aws_region>
        routeServerIDs:
          - <route_server_id>
    ```

    where:

    `spec.bgp.localASN.<local_asn>`
    :   Specifies the Autonomous System Number (ASN) for the `FRRouting` (FRR) router of your cluster. The `<local_asn>` value must be different from the Route Server ASN that you configured with `--amazon-side-asn`, which the Operator discovers automatically. Ensure you note the ARN of the role from the output.


    `spec.routerNodeSelector.bgp_router`
    :   Specifies the label key used in the `routerNodeSelector` to identify which compute nodes participate in BGP routing. Nodes that match this selector have the following characteristics:
        *   Establish BGP peering sessions with Route Server Endpoints in their local subnet.
        *   Act as the next-hop for BGP-advertised routes for traffic that ingresses from the VPC to the primary Cluster User Default Network (CUDN) of the workload.
        *   Have source/destination checks disabled on their Elastic Network Interfaces (ENIs).

        :::important


        Traffic always egresses from pods or VMs directly through their own compute node ENI. Therefore, you must apply this selector to any node where these workloads can be scheduled, not just the nodes intended to receive incoming traffic.
        
        :::


    `spec.aws.region.<aws_region>`
    :   Specifies the {{ aws_short }} region in which cloud resources get created.
        Replace `<aws_region>` with the {{ aws_short }} Region of your Route Server.


    `spec.aws.routeServerIDs.<route_server_id>`
    :   Specifies the Route Server ID. Replace `<route_server_id>` with the Route Server ID that you noted while preparing the {{ aws_short }} environment.
1.  Apply the updates to the BGP cloud configuration resource on your cluster by entering the following command:
    ```terminal
    $ oc apply -f bgpcloudconfiguration.yaml
    ```

    :::note

    `BGPCloudConfiguration` is a cluster-scoped singleton.
    You must provide the name `cluster` to the CR.
    
    :::

1.  Create a namespace for your workload. Use the labels that the BGP Cloud Connector requires.
    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
      name: <namespace_name>
      labels:
        k8s.ovn.org/primary-user-defined-network: ""
        cluster-udn: <network_name>
    ```

    Replace `<namespace_name>` with a name for the namespace.
    Replace `<network_name>` with the network name that you plan to use in the following step.

    :::important

    You must set the `k8s.ovn.org/primary-user-defined-network` label when you create the namespace.
    {{ product_title }} admission policy prevents you from adding this label to an existing namespace.
    
    :::

1.  Create the `Namespace` object by running the following command:
    ```terminal
    $ oc apply -f namespace.yaml
    ```
1.  Create a `BGPRouting` CR to declare the network to advertise over BGP:
    ```yaml
    apiVersion: networking.openshift.io/v1beta1
    kind: BGPRouting
    metadata:
      name: <routing_name>
    spec:
      network:
        name: <network_name>
        subnets:
          - <pod_network_cidr>
    ```

    where:

    `<routing_name>`
    :   Specifies the name for the CR.

    `<network_name>`
    :   Specifies the Layer 2 `ClusterUserDefinedNetwork` to create. The value must be the same value that you used for `cluster-udn` in an earlier step.

    `<pod_network_cidr>`
    :   The CIDR block that the primary network interfaces of each VM get assigned from. For example `10.100.0.0/16`. The value is set as the `spec.network.layer2.subnets` of the CUDN. The value must not overlap with any of the CIDRs in your VPC.

        :::note


        `BGPRouting` resources create a Layer 2 `ClusterUserDefinedNetwork` based upon the name and subnets you specify. BGP Cloud Connector advertises routes for the subnets to your {{ aws_short }} Route Server.


        The `spec.namespaceSelector.matchLabels` label for `ClusterUserDefinedNetwork` is set to `cluster-udn: <network_name>` to match the namespace you created in an earlier step. The name of the CUDN is `cluster-udn-<network_name>`.


        Layer 2 CUDNs only allow a single IPv4 and a single IPv6 CIDR per subnet.
        
        :::

1.  Apply the `BGPRouting` CR by running the following command:
    ```terminal
    $ oc apply -f bgprouting.yaml
    ```

**Verification**

1.  Confirm that both custom resources report a `Ready` phase by entering the following commands:
    ```terminal
    $ oc get bgpcloudconfiguration cluster -o jsonpath='{.status.phase}'
    ```
    ```terminal
    $ oc get bgprouting <routing_name> -o jsonpath='{.status.phase}'
    ```
1.  Optional: If either resource reports `Degraded`, inspect its conditions for the failure reason by running the following command:
    ```terminal
    $ oc get bgpcloudconfiguration cluster -o jsonpath='{.status.conditions}' | jq .
    ```
1.  Confirm that the Operator generated the supporting resources by entering the following commands:
    ```terminal
    $ oc get frrconfiguration -n openshift-frr-k8s
    ```
    ```terminal
    $ oc get clusteruserdefinednetwork
    ```
    ```terminal
    $ oc get routeadvertisements
    ```
1.  Deploy a virtual machine into the namespace that you created, and verify that it uses `bridge` binding on its network interface:
    ```yaml
    spec:
      domain:
        devices:
          interfaces:
            - name: default
              bridge: {}
      networks:
        - name: default
          pod: {}
    ```

    :::important

    Use `bridge` binding, not `masquerade` binding. `masquerade` binding installs nftables rules that drop inbound traffic on the user-defined network (UDN) interface, which blocks the direct connectivity that this feature provides.
    
    :::

1.  From an EC2 instance within the VPC, verify that you can reach the VM at its pod network IP address by entering the following command:
    ```terminal
    $ ping <vm_pod_ip> 
    ```

    Replace `<vm_pod_ip>` with the pod network IP address of the VM.
1.  Optional: To verify connectivity from an external network, such as an on-premises network connected over {{ aws_short }} Direct Connect or a VPN, first ensure that the external network can route traffic for the VM pod network into the VPC.