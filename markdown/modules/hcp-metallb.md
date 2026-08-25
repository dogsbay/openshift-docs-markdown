{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring MetalLB {id="hcp-metallb_{{ context }}"}

Before you can create a hosted cluster on the KubeVirt platform, you must have the MetalLB load balancer configured. {._abstract}

**Prerequisites**

*   You have installed the MetalLB Operator. For more information, see "Installing the MetalLB Operator".

**Procedure**

1.  Create a `MetalLB` resource by saving the following sample YAML content in the `configure-metallb.yaml` file:
    ```yaml
    apiVersion: metallb.io/v1beta1
    kind: MetalLB
    metadata:
      name: metallb
      namespace: metallb-system
    ```
1.  Apply the YAML content by entering the following command:
    ```terminal
    $ oc apply -f configure-metallb.yaml
    ```
    ```terminal title="Example output"
    metallb.metallb.io/metallb created
    ```
1.  Create a `IPAddressPool` resource by saving the following sample YAML content in the `create-ip-address-pool.yaml` file:
    ```yaml
    apiVersion: metallb.io/v1beta1
    kind: IPAddressPool
    metadata:
      name: metallb
      namespace: metallb-system
    spec:
      addresses:
      - 192.168.216.32-192.168.216.122
    ```

    Create an address pool with an available range of IP addresses within the node network. Replace the IP address range with an unused pool of available IP addresses in your network.
1.  Apply the YAML content by entering the following command:
    ```terminal
    $ oc apply -f create-ip-address-pool.yaml
    ```
    ```terminal title="Example output"
    ipaddresspool.metallb.io/metallb created
    ```
1.  Create a `L2Advertisement` resource by saving the following sample YAML content in the `l2advertisement.yaml` file:
    ```yaml
    apiVersion: metallb.io/v1beta1
    kind: L2Advertisement
    metadata:
      name: l2advertisement
      namespace: metallb-system
    spec:
      ipAddressPools:
       - metallb
    ```
1.  Apply the YAML content by entering the following command:
    ```terminal
    $ oc apply -f l2advertisement.yaml
    ```
    ```terminal title="Example output"
    l2advertisement.metallb.io/metallb created
    ```