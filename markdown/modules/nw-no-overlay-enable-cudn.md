{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a ClusterUserDefinedNetwork CR that uses underlay routing {id="nw-no-overlay-enable-cudn_{{ context }}"}

Create a layer 3 `ClusterUserDefinedNetwork` (CUDN) custom resource (CR) with no-overlay transport and unmanaged routing so pods use BGP routes instead of encapsulation for east-west traffic. {._abstract}

You advertise pod subnets using `FRRConfiguration` and `RouteAdvertisements` CRs. For managed routing and a full-mesh BGP fabric between nodes on the default cluster network, see "Enable underlay routing for the default cluster network".


:::important

*   On a primary CUDN, `NoOverlay` mode supports unmanaged routing only. Managed routing (full-mesh BGP between nodes without external peers) is supported on the default cluster network only.
*   On a primary CUDN, `NoOverlay` `transport` and `outboundSNAT` set to `Enabled` are not supported.

:::


**Prerequisites**

*   You have cluster-admin privileges.
*   Your cluster is installed on bare-metal infrastructure with single-node zone interconnect mode.
*   You have enabled the `NoOverlayMode` feature flag in the `TechPreviewNoUpgrade` feature set.
*   You enabled BGP routing support for the cluster.
*   You deployed FRR-K8s on cluster nodes.

**Procedure**

1.  Create a `ClusterUserDefinedNetwork` CR that uses no-overlay transport.

    :::note

    For a primary layer 3 `ClusterUserDefinedNetwork` CR, every namespace that matches `spec.namespaceSelector` must include the `k8s.ovn.org/primary-user-defined-network` label before workloads can use the network; that label can only be set when the namespace is created.
    
    :::

    1.  Set `spec.network.noOverlayOptions.routing` to `Unmanaged`.
        ```yaml title="Example ClusterUserDefinedNetwork CR for no-overlay mode with outboundSNAT set to Disabled"
        apiVersion: k8s.ovn.org/v1
        kind: ClusterUserDefinedNetwork
        metadata:
          name: high-perf-network
          labels:
            network: high-perf-network
        spec:
          namespaceSelector:
            matchLabels:
              app: performance-sensitive
          network:
            topology: Layer3
            layer3:
              role: Primary
              subnets:
              - cidr: 10.200.0.0/16
                hostSubnet: 24
            transport: "NoOverlay"
            noOverlayOptions:
              outboundSNAT: "Disabled"
              routing: "Unmanaged"
        ```

        :::important

        Pods running on a CUDN running `NoOverlay` mode cannot establish TCP connections to `NodePort` services. This occurs when `externalTrafficPolicy` is set to `Cluster` and the backend pod resides on a different node than the one targeted by the request. This issue occurs regardless of whether outbound SNAT is enabled or disabled.
        
        :::

    1.  Apply the `ClusterUserDefinedNetwork` CR by entering the following command:
        ```terminal
        $ oc apply -f <cudn_file>.yaml
        ```

        Replace `<cudn_file>.yaml` with the name of your `ClusterUserDefinedNetwork` CR file.
1.  Create a `RouteAdvertisements` CR
    1.  Set `spec.advertisements` to `PodNetwork` to advertise the CUDN pod subnets to your external BGP infrastructure.
        ```yaml title="Example RouteAdvertisements CR advertising the CUDN pod subnets"
        apiVersion: k8s.ovn.org/v1
        kind: RouteAdvertisements
        metadata:
          name: high-perf-network
        spec:
          nodeSelector: {}
          frrConfigurationSelector:
            matchLabels:
              network: high-perf-network
          networkSelectors:
          - networkSelectionType: ClusterUserDefinedNetworks
            clusterUserDefinedNetworkSelector:
              networkSelector:
                matchLabels:
                  network: high-perf-network
          advertisements:
          - PodNetwork
        ```

        where:

        `spec.nodeSelector`
        :   Specifies which nodes to include in the advertisements; when empty (`{}`), all nodes are selected.

        `spec.frrConfigurationSelector`
        :   Specifies the `FRRConfiguration` that peers with your external routers. Use `matchLabels` to select the `FRRConfiguration` by its labels.

        `spec.networkSelectors.networkSelectionType`
        :   Specifies the type of network to advertise. Set to `ClusterUserDefinedNetworks` to advertise a cluster user-defined network (CUDN). Set to `DefaultNetwork` to advertise the default cluster network.

        `spec.advertisements`
        :   Specifies the type of networks to advertise. Set to `PodNetwork` to advertise pod subnets. Set to `EgressIP` to advertise EgressIPs.
    1.  Apply the `RouteAdvertisements` CR by entering the following command:
        ```terminal
        $ oc apply -f <routeadvertisements_file>.yaml
        ```

        Replace `<routeadvertisements_file>.yaml` with the name of your `RouteAdvertisements` CR file.
1.  Verify that the no-overlay transport was accepted by entering the following command:
    ```terminal
    $ oc get clusteruserdefinednetwork high-perf-network -o yaml
    ```