{%- set _mod_docs_content_type = "PROCEDURE" %}
# Moving the default registry {id="infrastructure-moving-registry_{{ context }}"}

Deploying the registry pod on an infrastructure node can reduce your {{ product_title }} subscription size. Move the registry pod by editing the `configs.imageregistry.operator.openshift.io/cluster` config object. {._abstract}

**Prerequisites**

*   Configure additional compute machine sets in your {{ product_title }} cluster.

**Procedure**

1.  Edit the `configs.imageregistry.operator.openshift.io/cluster` object by running the following command:
    ```terminal
    $ oc edit configs.imageregistry.operator.openshift.io/cluster
    ```
1.  Add a `nodeSelector` parameter with the appropriate value to the component you want to move, as shown in the following example.
    ```yaml
    apiVersion: imageregistry.operator.openshift.io/v1
    kind: Config
    metadata:
      name: cluster
    # ...
    spec:
      logLevel: Normal
      managementState: Managed
      nodeSelector:
        node-role.kubernetes.io/infra: ""
      tolerations:
      - effect: NoSchedule
        key: node-role.kubernetes.io/infra
        value: reserved
    ```

    You can use a `nodeSelector` parameter in the format shown or use `<key>: <value>` pairs, based on the value specified for the node. If you added a taint to the infrastructure node, also add a matching toleration.

**Verification**

*   Verify the registry pod has been moved to the infrastructure node.
    1.  Identify the node where the registry pod is located by running the following command:
        ```terminal
        $ oc get pods -o wide -n openshift-image-registry
        ```
    1.  Confirm the node has the label you specified:
        ```terminal
        $ oc describe node <node_name>
        ```

        where:

        `<node_name>`
        :   Specifies the name of the node that you modified. Review the command output and confirm that `node-role.kubernetes.io/infra` is in the `LABELS` list.