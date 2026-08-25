{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using the LVMS {id="microshift-lvms-using_{{ context }}"}

To automatically provision and mount a logical volume to a pod, use the LVMS default `StorageClass`. By creating a `PersistentVolumeClaim` object without defining the `.spec.storageClassName` field, you trigger the dynamic provisioning of a `PersistentVolume` from this default resource. {._abstract}

Use the following procedure to provision and mount a logical volume to a pod.

**Procedure**

*   To provision and mount a logical volume to a pod, run the following command:
    ```terminal
    $ cat <<EOF | oc apply -f -
    kind: PersistentVolumeClaim
    apiVersion: v1
    metadata:
      name: my-lv-pvc
    spec:
      accessModes:
      - ReadWriteOnce
      resources:
        requests:
          storage: 1G
    ---
    apiVersion: v1
    kind: Pod
    metadata:
      name: my-pod
    spec:
      containers:
      - name: nginx
        image: nginx
        command: ["/usr/bin/sh", "-c"]
        args: ["sleep", "1h"]
        volumeMounts:
        - mountPath: /mnt
          name: my-volume
        securityContext:
          allowPrivilegeEscalation: false
          capabilities:
            drop:
              - ALL
          runAsNonRoot: true
          seccompProfile:
            type: RuntimeDefault
      volumes:
        - name: my-volume
          persistentVolumeClaim:
            claimName: my-lv-pvc
    EOF
    ```