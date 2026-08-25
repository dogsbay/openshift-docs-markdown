{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a custom NodeSelector for the SR-IOV Network Config daemon {id="configuring-custom-nodeselector_{{ context }}"}

The SR-IOV Network Config daemon discovers and configures the SR-IOV network devices on cluster nodes. By default, the daemon is deployed to all the compute nodes in the cluster. You can use node labels to specify on which nodes the SR-IOV Network Config daemon runs. {._abstract}


:::important

When you update the `configDaemonNodeSelector` field, the SR-IOV Network Config daemon is recreated on each selected node.
While the daemon is recreated, cluster users are unable to apply any new SR-IOV Network node policy or create new SR-IOV pods.

:::


**Procedure**

*   To update the node selector for the Operator, enter the following command:
    ```terminal
    $ oc patch sriovoperatorconfig default --type=json \
      -n openshift-sriov-network-operator \
      --patch '[{
          "op": "replace",
          "path": "/spec/configDaemonNodeSelector",
          "value": {<node_label>}
        }]'
    ```

    Replace `<node_label>` with a label to apply as in the following example:
    `"node-role.kubernetes.io/worker": ""`.

    :::tip

    You can alternatively apply the following YAML to update the Operator:

    ```yaml
    apiVersion: sriovnetwork.openshift.io/v1
    kind: SriovOperatorConfig
    metadata:
      name: default
      namespace: openshift-sriov-network-operator
    spec:
      configDaemonNodeSelector:
        <node_label>
    # ...
    ```
    
    :::