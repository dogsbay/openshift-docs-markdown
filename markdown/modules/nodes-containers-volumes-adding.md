{%- set _mod_docs_content_type = "REFERENCE" %}
# About adding volumes to a pod {id="nodes-containers-volumes-adding_{{ context }}"}

You can add volumes and volume mounts to a pod. Volumes persist the data used by the containers, even if container crashes or stops. {._abstract}

You can add a volume, a volume mount, or both to pod templates by running the following command:

```terminal
$ oc set volume <object_type>/<name> --add [options]
```

**Supported Options for Adding Volumes**

<table>
<thead>
<tr>
  <th>Option</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Description</td>
</tr>
<tr>
  <td>Default</td>
</tr>
<tr>
  <td><code>--name</code></td>
</tr>
<tr>
  <td>Name of the volume.</td>
</tr>
<tr>
  <td>Automatically generated, if not specified.</td>
</tr>
<tr>
  <td><code>-t, --type</code></td>
</tr>
<tr>
  <td>Name of the volume source. Supported values: <code>emptyDir</code>, <code>hostPath</code>, <code>secret</code>, <code>configmap</code>, <code>persistentVolumeClaim</code> or <code>projected</code>.</td>
</tr>
<tr>
  <td><code>emptyDir</code></td>
</tr>
<tr>
  <td><code>-c, --containers</code></td>
</tr>
<tr>
  <td>Select containers by name. It can also take wildcard <code>'*'</code> that matches any character.</td>
</tr>
<tr>
  <td><code>'*'</code></td>
</tr>
<tr>
  <td><code>-m, --mount-path</code></td>
</tr>
<tr>
  <td>Mount path inside the selected containers. Do not mount to the container root, <code>/</code>, or any path that is the same in the host and the container. This can corrupt your host system if the container is sufficiently privileged, such as the host <code>/dev/pts</code> files. It is safe to mount the host by using <code>/host</code>.</td>
</tr>
<tr>
  <td></td>
</tr>
<tr>
  <td><code>--path</code></td>
</tr>
<tr>
  <td>Host path. Mandatory parameter for <code>--type=hostPath</code>. Do not mount to the container root, <code>/</code>, or any path that is the same in the host and the container. This can corrupt your host system if the container is sufficiently privileged, such as the host <code>/dev/pts</code> files. It is safe to mount the host by using <code>/host</code>.</td>
</tr>
<tr>
  <td></td>
</tr>
<tr>
  <td><code>--secret-name</code></td>
</tr>
<tr>
  <td>Name of the secret. Mandatory parameter for <code>--type=secret</code>.</td>
</tr>
<tr>
  <td></td>
</tr>
<tr>
  <td><code>--configmap-name</code></td>
</tr>
<tr>
  <td>Name of the configmap. Mandatory parameter for <code>--type=configmap</code>.</td>
</tr>
<tr>
  <td></td>
</tr>
<tr>
  <td><code>--claim-name</code></td>
</tr>
<tr>
  <td>Name of the persistent volume claim. Mandatory parameter for <code>--type=persistentVolumeClaim</code>.</td>
</tr>
<tr>
  <td></td>
</tr>
<tr>
  <td><code>--source</code></td>
</tr>
<tr>
  <td>Details of volume source as a JSON string. Recommended if the desired volume source is not supported by <code>--type</code>.</td>
</tr>
<tr>
  <td></td>
</tr>
<tr>
  <td><code>-o, --output</code></td>
</tr>
<tr>
  <td>Display the modified objects instead of updating them on the server. Supported values: <code>json</code>, <code>yaml</code>.</td>
</tr>
<tr>
  <td></td>
</tr>
<tr>
  <td><code>--output-version</code></td>
</tr>
<tr>
  <td>Output the modified objects with the given version.</td>
</tr>
<tr>
  <td><code>api-version</code></td>
</tr>
</tbody>
</table>

For example:

*   To add a new volume source **emptyDir** to the **registry** `DeploymentConfig` object:
    ```terminal
    $ oc set volume dc/registry --add
    ```

    ::::tip

    You can alternatively apply the following YAML to add the volume:

    :::details{title="Sample deployment config with an added volume"}
    ```yaml
    kind: DeploymentConfig
    apiVersion: apps.openshift.io/v1
    metadata:
      name: registry
      namespace: registry
    spec:
      replicas: 3
      selector:
        app: httpd
      template:
        metadata:
          labels:
            app: httpd
        spec:
          volumes:
            - name: volume-pppsw
              emptyDir: {}
          containers:
            - name: httpd
              image: >-
                image-registry.openshift-image-registry.svc:5000/openshift/httpd:latest
              ports:
                - containerPort: 8080
                  protocol: TCP
    ```
    where:


    `spec.template.spec.volumes`
    :   Specifies the volume source **emptyDir**.
    :::
    
    ::::

*   To add volume **v1** with secret **secret1** for replication controller **r1** and mount
inside the containers at **_/data_**:
    ```terminal
    $ oc set volume rc/r1 --add --name=v1 --type=secret --secret-name='secret1' --mount-path=/data
    ```

    ::::tip

    You can alternatively apply the following YAML to add the volume:

    :::details{title="Sample replication controller with added volume and secret"}
    ```yaml
    kind: ReplicationController
    apiVersion: v1
    metadata:
      name: example-1
      namespace: example
    spec:
      replicas: 0
      selector:
        app: httpd
        deployment: example-1
        deploymentconfig: example
      template:
        metadata:
          creationTimestamp: null
          labels:
            app: httpd
            deployment: example-1
            deploymentconfig: example
        spec:
          volumes:
            - name: v1
              secret:
                secretName: secret1
                defaultMode: 420
          containers:
            - name: httpd
              image: >-
                image-registry.openshift-image-registry.svc:5000/openshift/httpd:latest
              volumeMounts:
                - name: v1
                  mountPath: /data
    ```
    where:


    `spec.template.spec.volumes`
    :   Specifies the volume and secret.

    `spec.template.spec.containers.volumeMounts`
    :   Specifies the container mount path.
    :::
    
    ::::

*   To add existing persistent volume **v1** with claim name **pvc1** to deployment
configuration **_dc.json_** on disk, mount the volume on container **c1** at
**_/data_**, and update the `DeploymentConfig` object on the server:
    ```terminal
    $ oc set volume -f dc.json --add --name=v1 --type=persistentVolumeClaim \
      --claim-name=pvc1 --mount-path=/data --containers=c1
    ```

    ::::tip

    You can alternatively apply the following YAML to add the volume:

    :::details{title="Sample deployment config with persistent volume added"}
    ```yaml
    kind: DeploymentConfig
    apiVersion: apps.openshift.io/v1
    metadata:
      name: example
      namespace: example
    spec:
      replicas: 3
      selector:
        app: httpd
      template:
        metadata:
          labels:
            app: httpd
        spec:
          volumes:
            - name: volume-pppsw
              emptyDir: {}
            - name: v1
              persistentVolumeClaim:
                claimName: pvc1
          containers:
            - name: httpd
              image: >-
                image-registry.openshift-image-registry.svc:5000/openshift/httpd:latest
              ports:
                - containerPort: 8080
                  protocol: TCP
              volumeMounts:
                - name: v1
                  mountPath: /data
    ```
    where:


    `spec.template.spec.volumes.name.v1`
    :   Specifies the persistent volume claim named `pvc1`.

    `spec.template.spec.containers.volumeMounts`
    :   Specifies the container mount path.
    :::
    
    ::::

*   To add a volume **v1** based on Git repository
**$$https://github.com/namespace1/project1$$** with revision **5125c45f9f563** for
all replication controllers:
    ```terminal
    $ oc set volume rc --all --add --name=v1 \
      --source='{"gitRepo": {
                    "repository": "https://github.com/namespace1/project1",
                    "revision": "5125c45f9f563"
                }}'
    ```