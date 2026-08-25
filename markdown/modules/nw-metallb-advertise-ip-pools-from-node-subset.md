{%- set _mod_docs_content_type = "PROCEDURE" %}
# Advertising an IP address pool from a subset of nodes {id="nw-metallb-advertise-ip-pools-to-node-subset_{{ context }}"}

To advertise an IP address from an IP addresses pool, from a specific set of nodes only, use the `.spec.nodeSelector` specification in the `BGPAdvertisement` custom resource (CR). This specification associates a pool of IP addresses with a set of nodes in the cluster. This is useful when you have nodes on different subnets in a cluster and you want to advertise an IP addresses from an address pool from a specific subnet, for example a public-facing subnet only. {._abstract}

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