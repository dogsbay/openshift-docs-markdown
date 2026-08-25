{%- set _mod_docs_content_type = "REFERENCE" %}
# About updating volumes and volume mounts in a pod {id="nodes-containers-volumes-updating_{{ context }}"}

You can modify the volumes and volume mounts in a pod. {._abstract}

You can update existing volumes by using the `--overwrite` option:

```terminal
$ oc set volume <object_type>/<name> --add --overwrite [options]
```

For example:

*   To replace existing volume **v1** for replication controller **r1** with existing
persistent volume claim **pvc1**:
    ```terminal
    $ oc set volume rc/r1 --add --overwrite --name=v1 --type=persistentVolumeClaim --claim-name=pvc1
    ```

    :::tip

    You can alternatively apply the following YAML to replace the volume:

    
    :::

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

*   To change the `DeploymentConfig` object **d1** mount point to **_/opt_** for volume **v1**:
    ```terminal
    $ oc set volume dc/d1 --add --overwrite --name=v1 --mount-path=/opt
    ```

    :::tip

    You can alternatively apply the following YAML to change the mount point:

    
    :::

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