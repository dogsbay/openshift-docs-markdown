{%- set _mod_docs_content_type = "PROCEDURE" %}
# Advertising a basic address pool configuration with BGP {id="nw-metallb-advertise-a-basic-address-pool-configuration-bgp_{{ context }}"}

Configure MetalLB to advertise the `IPAddressPool` by using Border Gateway Protocol (BGP). {._abstract}

**Prerequisites**

*   Install the {{ oc_first }}.
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  Create an IP address pool.
    1.  Create a file, such as `ipaddresspool.yaml`, with content like the following example:
        ```yaml
        apiVersion: metallb.io/v1beta1
        kind: IPAddressPool
        metadata:
          namespace: metallb-system
          name: doc-example-bgp-basic
        spec:
          addresses:
            - 203.0.113.200/30
            - fc00:f853:ccd:e799::/124
        # ...
        ```
    1.  Apply the configuration for the IP address pool:
        ```terminal
        $ oc apply -f ipaddresspool.yaml
        ```
1.  Create a BGP advertisement.
    1.  Create a file, such as `bgpadvertisement.yaml`, with content like the following example:
        ```yaml
        apiVersion: metallb.io/v1beta1
        kind: BGPAdvertisement
        metadata:
          name: bgpadvertisement-basic
          namespace: metallb-system
        spec:
          ipAddressPools:
          - doc-example-bgp-basic
        # ...
        ```
    1.  Apply the configuration:
        ```terminal
        $ oc apply -f bgpadvertisement.yaml
        ```