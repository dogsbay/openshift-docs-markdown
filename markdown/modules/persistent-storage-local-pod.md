{%- set _mod_docs_content_type = "PROCEDURE" %}
# Attach the local claim {id="local-pod_{{ context }}"}

After a local volume has been mapped to a persistent volume claim (PVC), attach the claim to a pod by specifying it in the pod specification to make the local storage available to the application. {._abstract}

**Prerequisites**

*   A persistent volume claim exists in the same namespace.

**Procedure**

1.  Include the defined claim in the resource spec. The following example declares the persistent volume claim inside a pod:
    ```yaml
    apiVersion: v1
    kind: Pod
    spec:
    # ...
      containers:
        volumeMounts:
        - name: local-disks
          mountPath: /data
      volumes:
      - name: local-disks
        persistentVolumeClaim:
          claimName: local-pvc-name
    # ...
    ```
    *   `spec...containers.volumeMounts.name`: Specifies the name of the volume to mount.
    *   `spec...containers.volumeMounts.mountPath`: Specifies the path inside the pod where the volume is mounted. Do not mount to the container root, `/`, or any path that is the same in the host and the container. This can corrupt your host system if the container is sufficiently privileged, such as the host `/dev/pts` files. It is safe to mount the host by using `/host`.
    *   `spec...volumes.persistentVolumeClaim.claimName`: Specifies the name of the existing persistent volume claim to use.
1.  Create the resource in the {{ product_title }} cluster, specifying the file you just created, by running the following command:
    ```terminal
    $ oc create -f <local-pod>.yaml
    ```