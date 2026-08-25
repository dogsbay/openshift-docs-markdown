{%- set _mod_docs_content_type = "CONCEPT" %}
# Using a cloned PVC as a storage volume {id="persistent-storage-csi-cloning-using_{{ context }}"}

A newly cloned persistent volume claim (PVC) can be consumed, cloned, snapshotted, or deleted independently of its original `dataSource` PVC.

Pods can access storage by using the cloned PVC as a volume. For example:

```yaml title="Use CSI volume clone in the Pod"
kind: Pod
apiVersion: v1
metadata:
  name: mypod
spec:
  containers:
    - name: myfrontend
      image: dockerfile/nginx
      volumeMounts:
      - mountPath: "/var/www/html"
        name: mypd
  volumes:
    - name: mypd
      persistentVolumeClaim:
        claimName: pvc-1-clone (1)
```

1.  The cloned PVC created during the CSI volume cloning operation.