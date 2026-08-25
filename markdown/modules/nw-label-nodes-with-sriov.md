{%- set _mod_docs_content_type = "PROCEDURE" %}
# Labeling nodes with an SR-IOV enabled NIC {id="nw-labeling-sriov-enabled-nodes_{{ context }}"}

If you want to enable SR-IOV on only SR-IOV capable nodes there are a couple of ways to do this. {._abstract}

**Procedure**

1.  Install the Node Feature Discovery (NFD) Operator. NFD detects the presence of SR-IOV enabled NICs and labels the nodes with `node.alpha.kubernetes-incubator.io/nfd-network-sriov.capable = true`.
1.  Examine the `SriovNetworkNodeState` CR for each node. The `interfaces` stanza includes a list of all of the SR-IOV devices discovered by the SR-IOV Network Operator on the worker node. Label each node with `feature.node.kubernetes.io/network-sriov.capable: "true"` by using the following command:
    ```yaml
    $ oc label node <node_name> feature.node.kubernetes.io/network-sriov.capable="true"
    ```

    :::note

    You can label the nodes with whatever name you want.
    
    :::