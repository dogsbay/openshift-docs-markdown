{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a pod affinity rule {id="nodes-scheduler-pod-affinity-configuring_{{ context }}"}

You can use the following example pod specifications to create a pod with a label and a pod that uses affinity to allow scheduling with that pod. {._abstract}


:::note

You cannot add an affinity directly to a scheduled pod.

:::


**Procedure**

1.  Create a pod with a specific label in the pod spec:
    1.  Create a YAML file with the following content:
        ```yaml
        apiVersion: v1
        kind: Pod
        metadata:
          name: security-s1
          labels:
            security: S1
        spec:
          securityContext:
            runAsNonRoot: true
            seccompProfile:
              type: RuntimeDefault
          containers:
          - name: security-s1
            image: docker.io/ocpqe/hello-pod
            securityContext:
              runAsNonRoot: true
              seccompProfile:
                type: RuntimeDefault
        ```
    1.  Create the pod.
        ```terminal
        $ oc create -f <pod-spec>.yaml
        ```
1.  When creating other pods, configure the following parameters to add the affinity:
    1.  Create a YAML file with the following content:
        ```yaml
        apiVersion: v1
        kind: Pod
        metadata:
          name: security-s1-east
        # ...
        spec:
          affinity:
            podAffinity:
              requiredDuringSchedulingIgnoredDuringExecution:
              - labelSelector:
                  matchExpressions:
                  - key: security
                    values:
                    - S1
                    operator: In
                topologyKey: topology.kubernetes.io/zone
        # ...
        ```

        where:

        `spec.affinity.podAffinity`
        :   Specifies a stanza to configure pod affinity.

        `spec.affinity.podAffinity.requiredDuringSchedulingIgnoredDuringExecution`
        :   Specifies the parameters for a _required_ rule. Alternatively, you can configure a _preferred_ rule by using the `preferredDuringSchedulingIgnoredDuringExecution` paarmeter. 
        Configure the following `labelSelector.matchExpressions` parameters. If you want the new pod to be scheduled with the other pod, use the same `key` and `values` parameters as the label on the first pod.

        `key`
        :   Specifies the key of the key/value pair (label) that must be matched to apply the rule.

        `value`
        :   Specifies the value of the key/value pair (label) that must be matched to apply the rule.

        `operator`
        :   Specifies the relationship between the label on the existing pod and the set of values in the `matchExpression` parameters in the specification for the new pod. Can be `In`, `NotIn`, `Exists`, or `DoesNotExist`.

        `topologyKey`
        :   Specifies a prepopulated Kubernetes label that the system uses to denote such a topology domain.

    1.  Create the pod.
        ```terminal
        $ oc create -f <pod-spec>.yaml
        ```