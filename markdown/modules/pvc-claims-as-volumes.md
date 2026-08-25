{%- set _mod_docs_content_type = "CONCEPT" %}
# Claims as volumes {id="pvc-claims-as-volumes_{{ context }}"}

To enable pods to access storage resources, configure Persistent Volume Claims (PVCs) as volumes. By mounting the claim to the host and into the pod, the cluster locates the backing `PersistentVolume` (PV) in the same namespace, ensuring the workload can read and write data effectively. {._abstract}

Claims use the same conventions as volumes when requesting storage with specific access modes.

Claims, such as pods, can request specific quantities of a resource. In this case, the request is for storage. The same resource model applies to volumes and claims.

```yaml title="Mount volume to the host and into the pod example"
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
        claimName: myclaim
# ...
```

where:


`volumeMounts.mountPath`
:   Specifies the path to mount the volume inside the pod.


`volumeMounts.name`
:   Specifies the name of the volume to mount. Do not mount to the container root, `/`, or any path that is the same in the host and the container. This can corrupt your host system if the container is sufficiently privileged, such as the host `/dev/pts` files. Using `/host` is a safe option for mounting the host.


`persistentVolumeClaim.claimName`
:   Specifies the name of the PVC, that exists in the same namespace, to use.