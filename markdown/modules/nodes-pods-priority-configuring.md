{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring priority and preemption {id="nodes-pods-priority-configuring_{{ context }}"}

Configure pod priority and preemption by creating priority class objects with assigned values and referencing them in pod specifications through the `priorityClassName` field. {._abstract}


:::note

You cannot add a priority class directly to an existing scheduled pod.

:::


**Procedure**

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
1.  Create one or more priority classes:
    1.  Create a YAML file similar to the following:
        ```yaml
        apiVersion: scheduling.k8s.io/v1
        kind: PriorityClass
        metadata:
          name: high-priority
        value: 1000000
        preemptionPolicy: PreemptLowerPriority
        globalDefault: false
        description: "This priority class should be used for XYZ service pods only."
        ```

        where:

        `metadata.name`
        :   Specifies the name of the priority class object.

        `value`
        :   Specifies the priority value of the object.

        `preemptionPolicy`
        :   Optional. Specifies whether this priority class is preempting or non-preempting. The preemption policy defaults to `PreemptLowerPriority`, which allows pods of that priority class to preempt lower-priority pods. If the preemption policy is set to `Never`, pods in that priority class are non-preempting.

        `globalDefault`
        :   Optional. Specifies whether this priority class should be used for pods without a priority class name specified. This field is `false` by default. Only one priority class with `globalDefault` set to `true` can exist in the cluster. If there is no priority class with `globalDefault:true`, the priority of pods with no priority class name is zero. Adding a priority class with `globalDefault:true` affects only pods created after the priority class is added and does not change the priorities of existing pods.

        `description`
        :   Optional. Describes which pods developers should use with this priority class. Enter an arbitrary text string.

    1.  Create the priority class:
        ```terminal
        $ oc create -f <file-name>.yaml
        ```
1.  Create a pod spec to include the name of a priority class:
    1.  Create a YAML file similar to the following:
{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
        ```yaml
        apiVersion: v1
        kind: Pod
        metadata:
          name: nginx
          labels:
            env: test
        spec:
          securityContext:
            runAsNonRoot: true
            seccompProfile:
              type: RuntimeDefault
          containers:
          - name: nginx
            image: nginx
            imagePullPolicy: IfNotPresent
            securityContext:
              allowPrivilegeEscalation: false
              capabilities:
                drop: [ALL]
          priorityClassName: high-priority
        ```

        where:

        `spec.priorityClassName`
        :   Specifies the priority class to use with this pod.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
            ```yaml
            apiVersion: v1
            kind: Pod
            metadata:
              name: nginx
              labels:
                env: test
            spec:
              containers:
              - name: nginx
                image: nginx
                imagePullPolicy: IfNotPresent
              priorityClassName: system-cluster-critical
            ```
        where:
        `spec.priorityClassName`:: Specifies the priority class to use with this pod.
{% endif %}

    1.  Create the pod:
        ```terminal
        $ oc create -f <file-name>.yaml
        ```
{% endif %}

{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
1.  Define a pod spec to include the name of a priority class by creating a YAML file similar to the following:
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: nginx
      labels:
        env: test
    spec:
      containers:
      - name: nginx
        image: nginx
        imagePullPolicy: IfNotPresent
      priorityClassName: system-cluster-critical
    ```

    where:

    `spec.priorityClassName`
    :   Specifies the priority class to use with this pod.

1.  Create the pod:
    ```terminal
    $ oc create -f <file-name>.yaml
    ```
{% endif %}

        You can add the priority name directly to the pod configuration or to a pod template.