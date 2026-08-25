{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a pod anti-affinity rule {id="nodes-scheduler-pod-anti-affinity-configuring_{{ context }}"}

To specify a preference to prevent a pod from being scheduling with another pod, you can create a pod with a label and a pod that uses an anti-affinity preferred rule. {._abstract}

The following steps demonstrate a simple two-pod configuration that creates pod with a label and a pod that uses an anti-affinity preferred rule to attempt to prevent scheduling with that pod.


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
              allowPrivilegeEscalation: false
              capabilities:
                drop: [ALL]
        ```
    1.  Create the pod.
        ```terminal
        $ oc create -f <pod-spec>.yaml
        ```
1.  When creating other pods, configure the following parameters:
    1.  Create a YAML file with the following content:
        ```yaml
        apiVersion: v1
        kind: Pod
        metadata:
          name: security-s2-east
        # ...
        spec:
        # ...
          affinity:
            podAntiAffinity:
              preferredDuringSchedulingIgnoredDuringExecution:
              - weight: 100
                podAffinityTerm:
                  labelSelector:
                    matchExpressions:
                    - key: security
                      values:
                      - S1
                      operator: In
                  topologyKey: kubernetes.io/hostname
        # ...
        ```

        where:

        `spec.affinity.podAffinity`
        :   Specifies a stanza to configure pod affinity.

        `spec.affinity.podAffinity.preferredDuringSchedulingIgnoredDuringExecution`
        :   Specifies the parameters for a _preferred_ rule. Alternatively, you can configure a _required_ rule by using the `requiredDuringSchedulingIgnoredDuringExecution` parameter. 
        Configure a weight and the following `podAffinityTerm.labelSelector.matchExpressions` parameters. If you want the new pod to be scheduled with the other pod, use the same `key` and `values` parameters as the label on the first pod.

        `weight`
        :   For a preferred rule, specifies a weight for the node, as a number 1-100. The node with highest weight is preferred.

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