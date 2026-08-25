{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a required node affinity rule {id="nodes-scheduler-node-affinity-configuring-required_{{ context }}"}

You can use a _required_ rule to instruct the scheduler that the rules **must** be met before a pod can be scheduled on a node. {._abstract}

The following steps demonstrate a simple configuration that creates a node and a pod that the scheduler is required to place on the node.

**Procedure**

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
1.  Add a label to a node using the `oc label node` command:
    ```terminal
    $ oc label node node1 e2e-az-name=e2e-az1
    ```

    :::tip

    You can alternatively apply the following YAML to add the label:

    ```yaml
    kind: Node
    apiVersion: v1
    metadata:
      name: <node_name>
      labels:
        e2e-az-name: e2e-az1
    #...
    ```
    
    :::

{% endif %}
1.  Create a pod with a specific label in the pod spec:
    1.  Create a YAML file with the following content:

        :::note

        You cannot add an affinity directly to a scheduled pod.
        
        :::

        ```yaml title="Example output"
        apiVersion: v1
        kind: Pod
        metadata:
          name: s1
        spec:
          affinity:
            nodeAffinity:
              requiredDuringSchedulingIgnoredDuringExecution:
                nodeSelectorTerms:
                - matchExpressions:
                  - key: e2e-az-name
                    values:
                    - e2e-az1
                    - e2e-az2
                    operator: In
        #...
        ```

        where:

        `spec.affinity.nodeAffinity`
        :   Specifies the stanza to configure node affinity.

        `spec.affinity.nodeAffinity.requiredDuringSchedulingIgnoredDuringExecution`
        :   Specifies a _required_ rule. Configure the following `nodeSelectorTerms.matchExpressions` parameters:

        `key`
        :   Specifies the key of the key/value pair (label) that must be matched to apply the rule.

        `operator`
        :   Specifies the relationship between the label on the node and the set of values in the `matchExpression` parameters in the `Pod` spec. This value can be `In`, `NotIn`, `Exists`, or `DoesNotExist`, `Lt`, or `Gt`. There is no explicit _node anti-affinity_ concept, but using the `NotIn` or `DoesNotExist` operator replicates that behavior.

        `values`
        :   Specifies the value of the key/value pair (label) that must be matched to apply the rule.

    1.  Create the pod:
        ```terminal
        $ oc create -f <file-name>.yaml
        ```