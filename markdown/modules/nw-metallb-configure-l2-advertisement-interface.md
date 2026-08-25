{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring MetalLB with an L2 advertisement for selected interfaces {id="nw-metallb-configure-with-L2-advertisement-interface_{{ context }}"}

By default, the IP addresses from IP address pool that has been assigned to the service, is advertised from all the network interfaces. You can use the `interfaces` field in the `L2Advertisement` custom resource definition to restrict those network interfaces that advertise the IP address pool. {._abstract}

The example in the procedure shows how to configure MetalLB so that the IP address pool is advertised only from the network interfaces listed in the `interfaces` parameter of all nodes.

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You are logged in as a user with `cluster-admin` privileges.

**Procedure**

1.  Create an IP address pool.
    1.  Create a file, such as `ipaddresspool.yaml`, and enter the configuration details as shown in the following example:
        ```yaml
        apiVersion: metallb.io/v1beta1
        kind: IPAddressPool
        metadata:
          namespace: metallb-system
          name: doc-example-l2
        spec:
          addresses:
            - 4.4.4.0/24
          autoAssign: false
        # ...
        ```
    1.  Apply the configuration for the IP address pool as shown in the following example:
        ```terminal
        $ oc apply -f ipaddresspool.yaml
        ```
1.  Create an L2 advertisement with the `interfaces` selector to advertise the IP address.
    1.  Create a YAML file, such as `l2advertisement.yaml`, and enter the configuration details as shown the following example:
        ```yaml
        apiVersion: metallb.io/v1beta1
        kind: L2Advertisement
        metadata:
          name: l2advertisement
          namespace: metallb-system
        spec:
          ipAddressPools:
           - doc-example-l2
           interfaces:
           - interfaceA
           - interfaceB
        # ...
        ```
    1.  Apply the configuration for the advertisement as shown in the following example:
        ```terminal
        $ oc apply -f l2advertisement.yaml
        ```

        :::important

        The interface selector does not affect how MetalLB chooses the node to announce a given IP by using L2. The chosen node does not announce the service if the node does not have the selected interface.
        
        :::