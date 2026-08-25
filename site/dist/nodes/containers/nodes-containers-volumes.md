---
title: Using volumes to persist container data
---

# Using volumes to persist container data {#nodes-containers-volumes}

You can use *volumes* to persist the data used by the containers in a pod. A volume is directory, accessible to the containers in a pod, where data is stored for the life of the pod.

Files in a container are ephemeral. As such, when a container crashes or stops, the data is lost.

## Understanding volumes {#nodes-containers-volumes-about_nodes-containers-volumes}

You can provide persistent or temporary storage for your applications by mounting volumes to pods and containers. Using volumes ensures that data remains available even if a container restarts by backing the file system with host-local or network-attached storage.

Volumes are mounted file systems available to pods and their containers which may be backed by a number of host-local or network attached storage endpoints. Containers are not persistent by default; on restart, their contents are cleared.

To ensure that the file system on the volume contains no errors and, if errors are present, to repair them when possible, OpenShift Container Platform invokes the `fsck` utility prior to the `mount` utility. This occurs when either adding a volume or updating an existing volume.

The simplest volume type is `emptyDir`, which is a temporary directory on a single machine. Administrators may also allow you to request a persistent volume that is automatically attached to your pods.

> [!NOTE]
> `emptyDir` volume storage may be restricted by a quota based on the pod’s FSGroup, if the FSGroup parameter is enabled by your cluster administrator.

## Working with volumes using the OpenShift Container Platform CLI {#nodes-containers-volumes-cli_nodes-containers-volumes}

You can use the CLI command `oc set volume` to add and remove volumes and volume mounts for any object that has a pod template like replication controllers or deployment configs. You can also list volumes in pods or any object that has a pod template.

The `oc set volume` command uses the following general syntax:

```terminal
$ oc set volume <object_selection> <operation> <mandatory_parameters> <options>
```

Object selection
:   Specify one of the following for the `object_selection` parameter in the `oc set volume` command:

<a name="vol-object-selection_nodes-containers-volumes"></a>

```
***Object Selection***
```

<table>
<thead>
<tr>
  <th>Syntax</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Description</td>
</tr>
<tr>
  <td>Example</td>
</tr>
<tr>
  <td><code>_<object_type><em> </em><name>_</code></td>
</tr>
<tr>
  <td>Selects <code><em><name></em></code> of type <code>_<object_type>_</code>.</td>
</tr>
<tr>
  <td><code>deploymentConfig registry</code></td>
</tr>
<tr>
  <td><code>_<object_type><em>/</em><name>_</code></td>
</tr>
<tr>
  <td>Selects <code><em><name></em></code> of type <code>_<object_type>_</code>.</td>
</tr>
<tr>
  <td><code>deploymentConfig/registry</code></td>
</tr>
<tr>
  <td><code>_<object_type>_</code><code>--selector=_<object_label_selector>_</code></td>
</tr>
<tr>
  <td>Selects resources of type <code>_<object_type>_</code> that matched the given labelselector.</td>
</tr>
<tr>
  <td><code>deploymentConfig</code><code>--selector="name=registry"</code></td>
</tr>
<tr>
  <td><code>_<object_type>_ --all</code></td>
</tr>
<tr>
  <td>Selects all resources of type <code>_<object_type>_</code>.</td>
</tr>
<tr>
  <td><code>deploymentConfig --all</code></td>
</tr>
<tr>
  <td><code>-f</code> or<code>--filename=_<file_name>_</code></td>
</tr>
<tr>
  <td>File name, directory, or URL to file to use to edit the resource.</td>
</tr>
<tr>
  <td><code>-f registry-deployment-config.json</code></td>
</tr>
</tbody>
</table>

Operation
:   Specify `--add` or `--remove` for the `operation` parameter in the `oc set volume` command.

Mandatory parameters
:   Any mandatory parameters are specific to the selected operation and are discussed in later sections.

Options
:   Any options are specific to the selected operation and are discussed in later sections.

## About listing volumes and volume mounts in a pod {#nodes-containers-volumes-listing_nodes-containers-volumes}

You can list volumes and volume mounts in pods or pod templates.

You can list volumes by running the following command:

```terminal
$ oc set volume <object_type>/<name> [options]
```

List volume supported options:

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
  <td></td>
</tr>
<tr>
  <td><code>-c, --containers</code></td>
</tr>
<tr>
  <td>Select containers by name. It can also take wildcard <code>'*'</code> that matches anycharacter.</td>
</tr>
<tr>
  <td><code>'*'</code></td>
</tr>
</tbody>
</table>

For example:

- To list all volumes for pod **p1**:

  ```terminal
  $ oc set volume pod/p1
  ```
- To list volume **v1** defined on all deployment configs:

  ```terminal
  $ oc set volume dc --all --name=v1
  ```

## About adding volumes to a pod {#nodes-containers-volumes-adding_nodes-containers-volumes}

You can add volumes and volume mounts to a pod. Volumes persist the data used by the containers, even if container crashes or stops.

You can add a volume, a volume mount, or both to pod templates by running the following command:

```terminal
$ oc set volume <object_type>/<name> --add [options]
```

***Supported Options for Adding Volumes***

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
  <td>Name of the volume source. Supported values: <code>emptyDir</code>, <code>hostPath</code>, <code>secret</code>,<code>configmap</code>, <code>persistentVolumeClaim</code> or <code>projected</code>.</td>
</tr>
<tr>
  <td><code>emptyDir</code></td>
</tr>
<tr>
  <td><code>-c, --containers</code></td>
</tr>
<tr>
  <td>Select containers by name. It can also take wildcard <code>'*'</code> that matches anycharacter.</td>
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
  <td>Name of the persistent volume claim. Mandatory parameter for<code>--type=persistentVolumeClaim</code>.</td>
</tr>
<tr>
  <td></td>
</tr>
<tr>
  <td><code>--source</code></td>
</tr>
<tr>
  <td>Details of volume source as a JSON string. Recommended if the desired volumesource is not supported by <code>--type</code>.</td>
</tr>
<tr>
  <td></td>
</tr>
<tr>
  <td><code>-o, --output</code></td>
</tr>
<tr>
  <td>Display the modified objects instead of updating them on the server. Supportedvalues: <code>json</code>, <code>yaml</code>.</td>
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

- To add a new volume source **emptyDir** to the **registry** `DeploymentConfig` object:

  ```terminal
  $ oc set volume dc/registry --add
  ```

  > [!TIP]
  > You can alternatively apply the following YAML to add the volume:

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

  - To add volume **v1** with secret **secret1** for replication controller **r1** and mount inside the containers at ***/data***:

  ```terminal
  $ oc set volume rc/r1 --add --name=v1 --type=secret --secret-name='secret1' --mount-path=/data
  ```

  > [!TIP]
  > You can alternatively apply the following YAML to add the volume:

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

    - To add existing persistent volume **v1** with claim name **pvc1** to deployment configuration ***dc.json*** on disk, mount the volume on container **c1** at ***/data***, and update the `DeploymentConfig` object on the server:

    ```terminal
    $ oc set volume -f dc.json --add --name=v1 --type=persistentVolumeClaim \
      --claim-name=pvc1 --mount-path=/data --containers=c1
    ```

    > [!TIP]
    > You can alternatively apply the following YAML to add the volume:

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

    - To add a volume **v1** based on Git repository **$$https://github.com/namespace1/project1$$** with revision **5125c45f9f563** for all replication controllers:

    ```terminal
    $ oc set volume rc --all --add --name=v1 \
      --source='{"gitRepo": {
                    "repository": "https://github.com/namespace1/project1",
                    "revision": "5125c45f9f563"
                }}'
    ```

## About updating volumes and volume mounts in a pod {#nodes-containers-volumes-updating_nodes-containers-volumes}

You can modify the volumes and volume mounts in a pod.

You can update existing volumes by using the `--overwrite` option:

```terminal
$ oc set volume <object_type>/<name> --add --overwrite [options]
```

For example:

- To replace existing volume **v1** for replication controller **r1** with existing persistent volume claim **pvc1**:

  ```terminal
  $ oc set volume rc/r1 --add --overwrite --name=v1 --type=persistentVolumeClaim --claim-name=pvc1
  ```

  > [!TIP]
  > You can alternatively apply the following YAML to replace the volume:

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
        labels:
          app: httpd
          deployment: example-1
          deploymentconfig: example
      spec:
        volumes:
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

  The `spec.template.spec.volumes` stanza sets the persistent volume claim to `pvc1`.
- To change the `DeploymentConfig` object **d1** mount point to ***/opt*** for volume **v1**:

  ```terminal
  $ oc set volume dc/d1 --add --overwrite --name=v1 --mount-path=/opt
  ```

  > [!TIP]
  > You can alternatively apply the following YAML to change the mount point:

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
          - name: v2
            persistentVolumeClaim:
              claimName: pvc1
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
                mountPath: /opt
  ```

  The `spec.template.spec.containers.volumeMounts` stanza sets the mount point to `/opt`.

## About removing volumes and volume mounts from a pod {#nodes-containers-volumes-removing_nodes-containers-volumes}

You can remove a volume or volume mount from a pod.

You can remove a volume from a pod template by running the following command:

```terminal
$ oc set volume <object_type>/<name> --remove [options]
```

***Supported options for removing volumes***

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
  <td></td>
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
  <td><code>--confirm</code></td>
</tr>
<tr>
  <td>Indicate that you want to remove multiple volumes at once.</td>
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

- To remove a volume **v1** from the `DeploymentConfig` object **d1**:

  ```terminal
  $ oc set volume dc/d1 --remove --name=v1
  ```
- To unmount volume **v1** from container **c1** for the `DeploymentConfig` object **d1** and remove the volume **v1** if it is not referenced by any containers on **d1**:

  ```terminal
  $ oc set volume dc/d1 --remove --name=v1 --containers=c1
  ```
- To remove all volumes for replication controller **r1**:

  ```terminal
  $ oc set volume rc/r1 --remove --confirm
  ```

## Configuring volumes for multiple uses in a pod {#nodes-containers-volumes-subpath_nodes-containers-volumes}

You can configure a volume to share one volume for multiple uses in a single pod by using the `volumeMounts.subPath` property to specify a `subPath` value inside a volume instead of the volume’s root.

> [!NOTE]
> You cannot add a `subPath` parameter to an existing scheduled pod.

**Procedure**

1. To view the list of files in the volume, run the `oc rsh` command:

   ```terminal
   $ oc rsh <pod>
   ```

   ```terminal {title="Example output"}
   sh-4.2$ ls /path/to/volume/subpath/mount
   example_file1 example_file2 example_file3
   ```
2. Specify the `subPath`:

   ```yaml {title="Example Pod spec with subPath parameter"}
   apiVersion: v1
   kind: Pod
   metadata:
     name: my-site
   spec:
       securityContext:
         runAsNonRoot: true
         seccompProfile:
           type: RuntimeDefault
       containers:
       - name: mysql
         image: mysql
         volumeMounts:
         - mountPath: /var/lib/mysql
           name: site-data
           subPath: mysql
         securityContext:
           allowPrivilegeEscalation: false
           capabilities:
             drop: [ALL]
       - name: php
         image: php
         volumeMounts:
         - mountPath: /var/www/html
           name: site-data
           subPath: html
         securityContext:
           allowPrivilegeEscalation: false
           capabilities:
             drop: [ALL]
       volumes:
       - name: site-data
         persistentVolumeClaim:
           claimName: my-site-data
   ```

   where:

   `spec.containers.volumeMounts.subPath.mysql`
   :   Specifies that databases are stored in the `mysql` folder.

   `spec.containers.volumeMounts.subPath.html`
   :   Specifies that HTML content is stored in the `html` folder.
