{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring in-place pod resizing {id="nodes-pods-adjust-resources-in-place-configuring_{{ context }}"}

You can use in-place pod resizing to scale pod resources up or down without application disruption by adding a resize policy to a pod specification.  {._abstract}

You cannot add or modify a resize policy in an existing pod, but you can add or edit the policy in the pod’s owner object, such as a deployment, if the pod has an owner object. 

**Procedure**

1.  Create a pod spec with a resize policy or add a resize policy to the owner object of an existing pod:
    1.  Create a YAML file similar to the following example:
        ```yaml
        apiVersion: v1
        kind: Pod
        metadata:
          name: resize-pod
        spec:
        # ...
          containers:
          - name: pause
            resizePolicy:
            - resourceName: cpu
              restartPolicy: NotRequired
            - resourceName: memory
              restartPolicy: RestartContainer
        # ...
        ```

        where:

        `spec.containers.resizePolicy`
        :   Specifies a resize policy. For CPU and/or memory resources specify one of the following values:
    *   `NotRequired`: Apply any resource changes without restarting the pod. This is the default when using a resize policy.
    *   `RestartContainer`: Apply any resource changes and restart the pod.
    1.  Create the object by running a command similar to the following:
        ```terminal
        $ oc create -f <file_name>.yaml
        ```

**Verification**

*   Check that the resize policy is applied by modifying the CPU or memory requests or limits by running a command similar to the following. You must include the `--subresource resize` flag. If the pod has a owner object, such as a deployment, you must edit the owner object. 
    ```terminal
    $ oc edit pod <pod_name>  --subresource resize
    ```

    If the policy is applied, the pod responds as expected.
    ```terminal
    $ oc get pods
    ```

    If the resize policy is `NotRequired`, the pod is not restarted.
    ```terminal title="Example output"
    NAME                          READY   STATUS    RESTARTS     AGE
    resize-pod                    1/1     Running   0            5s
    ```

    If the resize policy is `RestartContainer`, the pod is restarted.
    ```terminal title="Example output"
    NAME                         READY   STATUS    RESTARTS    AGE
    resize-pod                   1/1     Running   1 (5s ago)  5s
    ```