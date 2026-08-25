{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a preferred node affinity rule {id="nodes-scheduler-node-affinity-configuring-preferred_{{ context }}"}

You can use a _preferred_ rule to instruct the scheduler that if a matching node is not available, schedule the pod on a different node to ensure the workload application runs. {._abstract}

For a preferred rule, the scheduler tries to enforce the rule, but does not guarantee enforcement. 

The following procedure demonstrates a simple configuration that creates a node and a pod that the scheduler tries to place on the node.

**Procedure**

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
1.  Add a label to a node using the `oc label node` command:
    ```terminal
    $ oc label node node1 e2e-az-name=e2e-az3
    ```
{% endif %}
1.  Create a pod with a specific label:
    1.  Create a YAML file with the following content:

        :::note

        You cannot add an affinity directly to a scheduled pod.
        
        :::

        ```yaml
        apiVersion: v1
        kind: Pod
        metadata:
          name: s1
        spec:
          affinity:
            nodeAffinity:
              preferredDuringSchedulingIgnoredDuringExecution:
              - weight:
                preference:
                  matchExpressions:
                  - key: e2e-az-name
                    values:
                    - e2e-az3
                    operator: In
        #...
        ```

        where:

        `spec.affinity.nodeAffinity`
        :   Specifies the stanza to configure node affinity.

        `spec.affinity.nodeAffinity.preferredDuringSchedulingIgnoredDuringExecution`
        :   Specifies a _preferred_ rule. Configure a weight and the following `preference.matchExpressions` parameters. If you want the new pod to be scheduled on the node you edited, use the same `key` and `values` parameters as the label in the node.

        `weight`
        :   Specifies a weight for the node, as a number 1-100. The node with highest weight is preferred.

        `key`
        :   Specifies the key of the key/value pair (label) that must be matched to apply the rule.

        `operator`
        :   Specifies the relationship between the label on the node and the set of values in the `matchExpression` parameters in the `Pod` spec. This value can be `In`, `NotIn`, `Exists`, or `DoesNotExist`, `Lt`, or `Gt`. There is no explicit _node anti-affinity_ concept, but using the `NotIn` or `DoesNotExist` operator replicates that behavior.

        `values`
        :   Specifies the value of the key/value pair (label) that must be matched to apply the rule.

    1.  Create the pod.
        ```terminal
        $ oc create -f <file-name>.yaml
        ```