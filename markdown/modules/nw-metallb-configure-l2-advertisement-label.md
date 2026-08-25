{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring MetalLB with an L2 advertisement and labels {id="nw-metallb-configure-with-L2-advertisement-label_{{ context }}"}

You can use the `ipAddressPoolSelectors` field in the `L2Advertisement` custom resource definition to associate the `IPAddressPool` with the advertisement based on the label assigned to the pool instead of the pool name.
The example configures MetalLB to advertise the pool over Layer 2 by using `ipAddressPoolSelectors`. {._abstract}

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
          name: doc-example-l2-label
          labels:
            zone: east
        spec:
          addresses:
            - 172.31.249.87/32
        # ...
        ```
    1.  Apply the configuration for the IP address pool:
        ```terminal
        $ oc apply -f ipaddresspool.yaml
        ```
1.  Create an L2 advertisement that advertises the IP address by using `ipAddressPoolSelectors`.
    1.  Create a file, such as `l2advertisement.yaml`, with content like the following example:
        ```yaml
        apiVersion: metallb.io/v1beta1
        kind: L2Advertisement
        metadata:
          name: l2advertisement-label
          namespace: metallb-system
        spec:
          ipAddressPoolSelectors:
            - matchExpressions:
                - key: zone
                  operator: In
                  values:
                    - east
        # ...
        ```
    1.  Apply the configuration:
        ```terminal
        $ oc apply -f l2advertisement.yaml
        ```