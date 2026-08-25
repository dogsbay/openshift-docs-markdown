{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying an egress service {id="nw-egress-service-ovn_{{ context }}"}

You can deploy an egress service to manage egress traffic for pods behind a `LoadBalancer` service. {._abstract}

The following example configures the egress traffic to have the same source IP address as the ingress IP address of the `LoadBalancer` service.

**Prerequisites**

*   Install the {{ oc_first }}.
*   Log in as a user with `cluster-admin` privileges.
*   You configured MetalLB `BGPPeer` resources.

**Procedure**

1.  Create an `IPAddressPool` CR with the desired IP for the service:
    1.  Create a file, such as `ip-addr-pool.yaml`, with content like the following example:
        ```yaml
        apiVersion: metallb.io/v1beta1
        kind: IPAddressPool
        metadata:
          name: example-pool
          namespace: metallb-system
        spec:
          addresses:
          - 172.19.0.100/32
        ```
    1.  Apply the configuration for the IP address pool by running the following command:
        ```terminal
        $ oc apply -f ip-addr-pool.yaml
        ```
1.  Create `Service` and `EgressService` CRs:
    1.  Create a file, such as `service-egress-service.yaml`, with content like the following example:
        ```yaml
        apiVersion: v1
        kind: Service
        metadata:
          name: example-service
          namespace: example-namespace
          annotations:
            metallb.io/address-pool: example-pool
        spec:
          selector:
            app: example
          ports:
            - name: http
              protocol: TCP
              port: 8080
              targetPort: 8080
          type: LoadBalancer
        ---
        apiVersion: k8s.ovn.org/v1
        kind: EgressService
        metadata:
          name: example-service
          namespace: example-namespace
        spec:
          sourceIPBy: "LoadBalancerIP"
          nodeSelector:
            matchLabels:
              node-role.kubernetes.io/worker: ""
        ```

        where:

        `metadata.annotations.metallb.io/address-pool`
        :   Specifies the `LoadBalancer` service uses the IP address assigned by MetalLB from the `example-pool` IP address pool.

        `spec.sourceIPBy`
        :   This example uses the `LoadBalancerIP` value to assign the ingress IP address of the `LoadBalancer` service as the source IP address of egress traffic.

        `spec.nodeSelector`
        :   When you specify the `LoadBalancerIP` value, a single node handles the `LoadBalancer` service’s traffic. In this example, only nodes with the `worker` label can be selected to handle the traffic. When a node is selected, OVN-Kubernetes labels the node in the following format `egress-service.k8s.ovn.org/<svc-namespace>-<svc-name>: ""`.

        :::note

        If you use the `sourceIPBy: "LoadBalancerIP"` setting, you must specify the load-balancer node in the `BGPAdvertisement` custom resource (CR).
        
        :::

    1.  Apply the configuration for the service and egress service by running the following command:
        ```terminal
        $ oc apply -f service-egress-service.yaml
        ```
1.  Create a `BGPAdvertisement` CR to advertise the service:
    1.  Create a file, such as `service-bgp-advertisement.yaml`, with content like the following example:
        ```yaml
        apiVersion: metallb.io/v1beta1
        kind: BGPAdvertisement
        metadata:
          name: example-bgp-adv
          namespace: metallb-system
        spec:
          ipAddressPools:
          - example-pool
          nodeSelectors:
          - matchLabels:
              egress-service.k8s.ovn.org/example-namespace-example-service: ""
        ```

        where:

        `spec.nodeSelectors.matchLabels`
        :   In the example, the `EgressService` CR configures the source IP address for egress traffic to use the load-balancer service IP address. Therefore, you must specify the load-balancer node for return traffic to use the same return path for the traffic originating from the pod.

**Verification**

1.  Verify that you can access the application endpoint of the pods running behind the MetalLB service by running the following command:
    ```terminal
    $ curl <external_ip_address>:<port_number>
    ```

    `<external_ip_address>:<port_number`
    :   Update the external IP address and port number to suit your application endpoint.

1.  If you assigned the `LoadBalancer` service’s ingress IP address as the source IP address for egress traffic, verify this configuration by using tools such as `tcpdump` to analyze packets received at the external client.