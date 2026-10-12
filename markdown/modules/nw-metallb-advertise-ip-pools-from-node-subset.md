{%- set _mod_docs_content_type = "PROCEDURE" %}
# Advertise an IP address pool from a subset of nodes {id="nw-metallb-advertise-ip-pools-to-node-subset_{{ context }}"}

You can use the `.spec.nodeSelector` field in the `BGPAdvertisement` CR to advertise IP addresses from a pool on a specific set of nodes, such as nodes on a public-facing subnet. {._abstract}

**Prerequisites**

*   Install the {{ oc_first }}.
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  Create an IP address pool by using a CR:
    ```yaml
    apiVersion: metallb.io/v1beta1
    kind: IPAddressPool
    metadata:
      namespace: metallb-system
      name: pool1
    spec:
      addresses:
        - 4.4.4.100-4.4.4.200
        - 2001:100:4::200-2001:100:4::400
    # ...
    ```
1.  Control which cluster nodes advertise the IP address from `pool1` by setting the `.spec.nodeSelector` value in the `BGPAdvertisement` CR. The following example advertises the IP address from `pool1` only from `NodeA` and `NodeB`.
    ```yaml
    apiVersion: metallb.io/v1beta1
    kind: BGPAdvertisement
    metadata:
      name: example
    spec:
      ipAddressPools:
      - pool1
      nodeSelector:
      - matchLabels:
          kubernetes.io/hostname: NodeA
      - matchLabels:
          kubernetes.io/hostname: NodeB
    # ...
    ```