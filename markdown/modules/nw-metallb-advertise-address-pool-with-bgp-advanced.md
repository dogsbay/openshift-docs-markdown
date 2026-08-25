{%- set _mod_docs_content_type = "PROCEDURE" %}
# Advertising an advanced address pool configuration with BGP {id="nw-metallb-advertise-an-advanced-address-pool-configuration-bgp_{{ context }}"}

Configure MetalLB to advertise an advanced address pool by using BGP attributes such as BGP communities, route aggregation, and local preference. {._abstract}

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
          name: doc-example-bgp-adv
          labels:
            zone: east
        spec:
          addresses:
            - 203.0.113.200/30
            - fc00:f853:ccd:e799::/124
          autoAssign: false
        # ...
        ```
    1.  Apply the configuration for the IP address pool:
        ```terminal
        $ oc apply -f ipaddresspool.yaml
        ```
1.  Create a BGP advertisement.
    1.  Create a file, such as `bgpadvertisement1.yaml`, with content like the following example:
        ```yaml
        apiVersion: metallb.io/v1beta1
        kind: BGPAdvertisement
        metadata:
          name: bgpadvertisement-adv-1
          namespace: metallb-system
        spec:
          ipAddressPools:
            - doc-example-bgp-adv
          communities:
            - 65535:65282
          aggregationLength: 32
          localPref: 100
        # ...
        ```
    1.  Apply the configuration:
        ```terminal
        $ oc apply -f bgpadvertisement1.yaml
        ```
    1.  Create a file, such as `bgpadvertisement2.yaml`, with content like the following example:
        ```yaml
        apiVersion: metallb.io/v1beta1
        kind: BGPAdvertisement
        metadata:
          name: bgpadvertisement-adv-2
          namespace: metallb-system
        spec:
          ipAddressPools:
            - doc-example-bgp-adv
          communities:
            - 8000:800
          aggregationLength: 30
          aggregationLengthV6: 124
        # ...
        ```
    1.  Apply the configuration:
        ```terminal
        $ oc apply -f bgpadvertisement2.yaml
        ```