{%- set _mod_docs_content_type = "PROCEDURE" %}
# Specifying the number of pods that must be up with pod disruption budgets {id="nodes-pods-pod-disruption-configuring_{{ context }}"}

You can use a `PodDisruptionBudget` object to specify the minimum number or percentage of replicas that must be up at a time. This ensures pod availability during voluntary disruptions such as node maintenance or cluster updates. {._abstract}

The following procedure shows how to configure a pod disruption budget.

**Procedure**

1.  Create a YAML file with the an object definition similar to the following:
    ```yaml
    apiVersion: policy/v1
    kind: PodDisruptionBudget
    metadata:
      name: my-pdb
    spec:
      minAvailable: 2
      selector:
        matchLabels:
          name: my-pod
    ```

    where:

    `apiVersion`
    :   Specifies the `policy/v1` API group.

    `spec.minAvailable`
    :   Specifies the minimum number of pods that must be available simultaneously. This can
        be either an integer or a string specifying a percentage, for example, `20%`.

    `spec.selector`
    :   Specifies a label query over a set of resources. The result of `matchLabels` and
         `matchExpressions` are logically conjoined. Leave this parameter blank, for example `selector {}`, to select all pods in the project.

    Or:
    ```yaml
    apiVersion: policy/v1
    kind: PodDisruptionBudget
    metadata:
      name: my-pdb
    spec:
      maxUnavailable: 25%
      selector:
        matchLabels:
          name: my-pod
    ```

    where:

    `apiVersion`
    :   Specifies the `policy/v1` API group.

    `spec.maxUnavailable`
    :   Specifies the maximum number of pods that can be unavailable simultaneously. This can
        be either an integer or a string specifying a percentage, for example, `20%`.

    `spec.selector`
    :   Specifies a label query over a set of resources. The result of `matchLabels` and
         `matchExpressions` are logically conjoined. Leave this parameter blank, for example `selector {}`, to select all pods in the project.
1.  Run the following command to add the object to project:
    ```terminal
    $ oc create -f </path/to/file> -n <project_name>
    ```