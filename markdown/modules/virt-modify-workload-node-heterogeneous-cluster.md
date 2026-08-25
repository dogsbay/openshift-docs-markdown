{%- set _mod_docs_content_type = "PROCEDURE" %}
# Modifying workloads node placement in a heterogeneous cluster {id="virt-modify-workload-node-heterogeneous-cluster_{{ context }}"}

If you have a heterogeneous cluster but do not want to enable multiple architecture support, you can modify the workloads node placement in the `HyperConverged` custom resource (CR) to include only nodes with a specific architecture. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with `cluster-admin` permissions.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Open the `HyperConverged` CR in your default editor by running the following command:
    ```terminal {minja}
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Edit the `HyperConverged` CR, to modify the workloads node placement to include only nodes with a specific architecture. For example:
    ```yaml
    apiVersion: hco.kubevirt.io/v1beta1
    kind: HyperConverged
    metadata:
      name: kubevirt-hyperconverged
    spec:
    #...
      workloads:
        nodePlacement:
          affinity:
            nodeAffinity:
              requiredDuringSchedulingIgnoredDuringExecution:
                nodeSelectorTerms:
                  - matchExpressions:
                      - key: kubernetes.io/arch
                        operator: In
                        values:
                          - <node_architecture>

    ```

    where:

    `<node_architecture>`
    :   Specifies the target architecture. For example, to limit placement to AMD nodes, use `amd64`.

1.  Save and exit the editor to update the `HyperConverged` CR.

**Verification**

*   Verify that the node affinity is applied by running the following command:
    ```terminal {minja}
    $ oc get {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }} \
      -o jsonpath='{.spec.deployment.nodePlacements.workload}'
    ```

    The output should show the node affinity configuration with the architecture you specified.