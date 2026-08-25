{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring volumes for multiple uses in a pod {id="nodes-containers-volumes-subpath_{{ context }}"}

You can configure a volume to share one volume for
multiple uses in a single pod by using the `volumeMounts.subPath` property to specify a `subPath` value inside a volume
instead of the volume’s root. {._abstract}


:::note

You cannot add a `subPath` parameter to an existing scheduled pod.

:::


**Procedure**

1.  To view the list of files in the volume, run the `oc rsh` command:
    ```terminal
    $ oc rsh <pod>
    ```
    ```terminal title="Example output"
    sh-4.2$ ls /path/to/volume/subpath/mount
    example_file1 example_file2 example_file3
    ```
1.  Specify the `subPath`:
    ```yaml title="Example Pod spec with subPath parameter"
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