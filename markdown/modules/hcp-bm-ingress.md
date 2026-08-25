{% if context == "hcp-manage-non-bm" %}
{%- set non_bm = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
{%- if not non_bm %}
# Handling ingress in a hosted cluster on bare metal {id="hcp-bm-ingress_{{ context }}"}

{% endif %}

{% if non_bm %}
# Handling ingress in a hosted cluster on non-bare-metal agent machines {id="_handling_ingress_in_a_hosted_cluster_on_non-bare-metal_agent_machines"}

{% endif %}

Every {{ product_title }} cluster has a default application Ingress Controller that typically has an external DNS record associated with it.  {._abstract}

For example, if you create a hosted cluster named `example` with the base domain `krnl.es`, you can expect the wildcard domain `*.apps.example.krnl.es` to be routable.

To set up a load balancer and wildcard DNS record for the `*.apps` domain, perform the following actions on your hosted cluster.

**Procedure**

1.  Deploy MetalLB by creating a YAML file that has the configuration for the MetalLB Operator:
    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
      name: metallb
      labels:
        openshift.io/cluster-monitoring: "true"
      annotations:
        workload.openshift.io/allowed: management
    ---
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: metallb-operator-operatorgroup
      namespace: metallb
    ---
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: metallb-operator
      namespace: metallb
    spec:
      channel: "stable"
      name: metallb-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
    ```
1.  Save the file as `metallb-operator-config.yaml`.
1.  Enter the following command to apply the configuration:
    ```terminal
    $ oc apply -f metallb-operator-config.yaml
    ```
1.  After the Operator is running, create the MetalLB instance:
    1.  Create a YAML file that has the configuration for the MetalLB instance:
        ```yaml
        apiVersion: metallb.io/v1beta1
        kind: MetalLB
        metadata:
          name: metallb
          namespace: metallb
        ```
    1.  Save the file as `metallb-instance-config.yaml`.
    1.  Create the MetalLB instance by entering this command:
        ```terminal
        $ oc apply -f metallb-instance-config.yaml
        ```
1.  Create an `IPAddressPool` resource with a single IP address. This IP address must be on the same subnet as the network that the cluster nodes use.
    1.  Create a file, such as `ipaddresspool.yaml`, with content similar to the following example:
        ```yaml
        apiVersion: metallb.io/v1beta1
        kind: IPAddressPool
        metadata:
          namespace: metallb
          name: <ip_address_pool_name>
        spec:
          addresses:
            - <ingress_ip>-<ingress_ip>
          autoAssign: false
        ```
        *   `metadata.name` specifies the `IPAddressPool` resource name.
        *   `spec.addresses` specifies the IP address for your environment. For example, `192.168.122.23`.
    1.  Apply the configuration for the IP address pool by entering the following command:
        ```terminal
        $ oc apply -f ipaddresspool.yaml
        ```
1.  Create a L2 advertisement.
    1.  Create a file, such as `l2advertisement.yaml`, with content similar to the following example:
        ```yaml
        apiVersion: metallb.io/v1beta1
        kind: L2Advertisement
        metadata:
          name: <l2_advertisement_name>
          namespace: metallb
        spec:
          ipAddressPools:
           - <ip_address_pool_name>
        ```
        *   `metadata.name` specifies the `L2Advertisement` resource name.
        *   `spec.ipAddressPools` specifies the `IPAddressPool` resource name.
    1.  Apply the configuration by entering the following command:
        ```terminal
        $ oc apply -f l2advertisement.yaml
        ```
1.  After creating a service of the `LoadBalancer` type, MetalLB adds an external IP address for the service.
    1.  Configure a new load balancer service that routes ingress traffic to the ingress deployment by creating a YAML file named `metallb-loadbalancer-service.yaml`:
        ```yaml
        kind: Service
        apiVersion: v1
        metadata:
          annotations:
           metallb.io/address-pool: ingress-public-ip
          name: metallb-ingress
          namespace: openshift-ingress
        spec:
          ports:
            - name: http
              protocol: TCP
              port: 80
              targetPort: 80
            - name: https
              protocol: TCP
              port: 443
              targetPort: 443
          selector:
            ingresscontroller.operator.openshift.io/deployment-ingresscontroller: default
          type: LoadBalancer
        ```
    1.  Save the `metallb-loadbalancer-service.yaml` file.
    1.  Enter the following command to apply the YAML configuration:
        ```terminal
        $ oc apply -f metallb-loadbalancer-service.yaml
        ```
    1.  Enter the following command to reach the {{ product_title }} console:
        ```bash
        $ curl -kI https://console-openshift-console.apps.example.krnl.es
        ```
        ```terminal title="Example output"
        HTTP/1.1 200 OK
        ```
    1.  Check the `clusterversion` and `clusteroperator` values to verify that everything is running. Enter the following command:
        ```terminal
        $ oc --kubeconfig <hosted_cluster_name>.kubeconfig get clusterversion,co
        ```
        ```terminal title="Example output"
        NAME                                         VERSION   AVAILABLE   PROGRESSING   SINCE   STATUS
        clusterversion.config.openshift.io/version   4.x.y      True        False        3m32s   Cluster version is 4.x.y

        NAME                                                                             VERSION   AVAILABLE   PROGRESSING   DEGRADED   SINCE   MESSAGE
        clusteroperator.config.openshift.io/console                                      4.x.y     True        False         False      3m50s
        clusteroperator.config.openshift.io/ingress                                      4.x.y     True        False         False      53m
        ```

        Replace `<4.x.y>` with the supported {{ product_title }} version that you want to use, for example, `4.22.0-multi`.

{% if context == "hcp-manage-non-bm" %}
{%- set non_bm = false -%}
{% endif %}