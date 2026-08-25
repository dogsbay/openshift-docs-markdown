{%- set _mod_docs_content_type = "PROCEDURE" %}
# Moving resources to infrastructure machine sets {id="moving-resources-to-infrastructure-machinesets_{{ context }}"}

Some of the infrastructure resources are deployed in your cluster by default. You can move them to the infrastructure machine sets that you created by adding the infrastructure node selector. {._abstract}

Applying a specific node selector to all infrastructure components causes {{ product_title }} to schedule those workloads on nodes with that label.

**Procedure**

1.  Add a `nodeSelector` parameter with the appropriate value to the component you want to move. You can use a `nodeSelector` in the format shown or use `<key>: <value>` pairs, based on the value specified for the node. See the following example:
    ```yaml
    apiVersion: imageregistry.operator.openshift.io/v1
    kind: Config
    metadata:
      name: cluster
    # ...
    spec:
      nodePlacement:
        nodeSelector:
          matchLabels:
            node-role.kubernetes.io/infra: ""
        tolerations:
        - effect: NoSchedule
          key: node-role.kubernetes.io/infra
          value: reserved
        - effect: NoExecute
          key: node-role.kubernetes.io/infra
          value: reserved
    ```
1.  If you added a taint to the infrastructure node, also add a matching toleration.