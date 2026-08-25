{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring MetalLB with an L2 advertisement {id="nw-metallb-configure-with-L2-advertisement_{{ context }}"}

You can configure MetalLB so that the `IPAddressPool` is advertised with the L2 protocol. {._abstract}

**Prerequisites**

*   Install the {{ oc_first }}.
*   Log in as a user with `cluster-admin` privileges.
*   Install the MetalLB Operator and start MetalLB.

**Procedure**

1.  Create an IP address pool.
    1.  Create a file, such as `ipaddresspool.yaml`, with content like the following example:
        ```yaml
        apiVersion: metallb.io/v1beta1
        kind: IPAddressPool
        metadata:
          namespace: metallb-system
          name: doc-example-l2
        spec:
          addresses:
            - <ip_address_range>
          autoAssign: false
        ```
        *   `<ip_address_range>` specifies a range of IP addresses that are routable on your network, for example `4.4.4.0/24`.
    1.  Apply the configuration for the IP address pool:
        ```terminal
        $ oc apply -f ipaddresspool.yaml
        ```
1.  Create an L2 advertisement.
    1.  Create a file, such as `l2advertisement.yaml`, with content like the following example:
        ```yaml
        apiVersion: metallb.io/v1beta1
        kind: L2Advertisement
        metadata:
          name: l2advertisement
          namespace: metallb-system
        spec:
          ipAddressPools:
           - doc-example-l2
        ```
    1.  Apply the configuration:
        ```terminal
        $ oc apply -f l2advertisement.yaml
        ```

**Verification**

1.  Verify that the IP address pool is created:
    ```terminal
    $ oc get ipaddresspool -n metallb-system
    ```

    The following is example output:
    ```terminal
    NAME             AUTO ASSIGN   AVOID BUGGY IPS   ADDRESSES
    doc-example-l2   false         false             ["4.4.4.0/24"]
    ```
1.  Verify that the L2 advertisement is created:
    ```terminal
    $ oc get l2advertisement -n metallb-system
    ```

    The following is example output:
    ```terminal
    NAME              IPADDRESSPOOLS     IPADDRESSPOOL SELECTORS   INTERFACES
    l2advertisement   ["doc-example-l2"]
    ```