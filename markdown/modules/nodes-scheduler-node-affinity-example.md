{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample node affinity rules {id="nodes-scheduler-node-affinity-example_{{ context }}"}

To use node affinity, the pod spec that you want to schedule on a node must have a node selector that matches a label on the node. {._abstract}

The following examples demonstrate node affinity with or without matching labels.

## Node affinity with matching labels {id="admin-guide-sched-affinity-examples1_{{ context }}"}

The following example demonstrates node affinity for a node and pod with matching labels:

*   The Node1 node has the label `zone:us`:
    ```terminal
    $ oc label node node1 zone=us
    ```

    :::tip

    You can alternatively apply the following YAML to add the label:

    ```yaml
    kind: Node
    apiVersion: v1
    metadata:
      name: <node_name>
      labels:
        zone: us
    #...
    ```
    
    :::

*   The pod-s1 pod has the `zone` and `us` key/value pair under a required node affinity rule:
    ```terminal
    $ cat pod-s1.yaml
    ```
    ```yaml title="Example output"
    apiVersion: v1
    kind: Pod
    metadata:
      name: pod-s1
    spec:
      securityContext:
        runAsNonRoot: true
        seccompProfile:
          type: RuntimeDefault
      containers:
        - image: "docker.io/ocpqe/hello-pod"
          name: hello-pod
          securityContext:
            allowPrivilegeEscalation: false
            capabilities:
              drop: [ALL]
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
              - matchExpressions:
                - key: "zone"
                  operator: In
                  values:
                  - us
    #...
    ```
*   The pod-s1 pod can be scheduled on Node1:
    ```terminal
    $ oc get pod -o wide
    ```
    ```terminal title="Example output"
    NAME     READY     STATUS       RESTARTS   AGE      IP      NODE
    pod-s1   1/1       Running      0          4m       IP1     node1
    ```

## Node affinity with no matching labels {id="admin-guide-sched-affinity-examples2_{{ context }}"}

The following example demonstrates node affinity for a node and pod without matching labels:

*   The Node1 node has the label `zone:emea`:
    ```terminal
    $ oc label node node1 zone=emea
    ```

    :::tip

    You can alternatively apply the following YAML to add the label:

    ```yaml
    kind: Node
    apiVersion: v1
    metadata:
      name: <node_name>
      labels:
        zone: emea
    #...
    ```
    
    :::

*   The pod-s1 pod has the `zone` and `us` key/value pair under a required node affinity rule:
    ```terminal
    $ cat pod-s1.yaml
    ```
    ```yaml title="Example output"
    apiVersion: v1
    kind: Pod
    metadata:
      name: pod-s1
    spec:
      securityContext:
        runAsNonRoot: true
        seccompProfile:
          type: RuntimeDefault
      containers:
        - image: "docker.io/ocpqe/hello-pod"
          name: hello-pod
          securityContext:
            allowPrivilegeEscalation: false
            capabilities:
              drop: [ALL]
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
              - matchExpressions:
                - key: "zone"
                  operator: In
                  values:
                  - us
    #...
    ```
*   The pod-s1 pod cannot be scheduled on Node1:
    ```terminal
    $ oc describe pod pod-s1
    ```
    ```terminal title="Example output"
    ...

    Events:
     FirstSeen LastSeen Count From              SubObjectPath  Type                Reason
     --------- -------- ----- ----              -------------  --------            ------
     1m        33s      8     default-scheduler Warning        FailedScheduling    No nodes are available that match all of the following predicates:: MatchNodeSelector (1).
    ```