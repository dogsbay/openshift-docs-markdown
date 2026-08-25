{%- set _mod_docs_content_type = "PROCEDURE" %}
# Embedding a CSI inline ephemeral volume in the pod specification {id="ephemeral-storage-csi-inline-pod_{{ context }}"}

To provision temporary storage that automatically follows your pod’s lifecycle, embed a Container Storage Interface (CSI) inline ephemeral volume in the pod specification so the CSI driver manages volume creation and cleanup as pods start/stop. {._abstract}

**Procedure**

1.  Create the `Pod` object definition and save it to a file.
1.  Embed the CSI inline ephemeral volume in the file as in the following pod YAML file:
    ```yaml title="Example pod YAML file with embedded ephemeral volume"
    kind: Pod
    apiVersion: v1
    metadata:
      name: my-csi-app
    spec:
      containers:
        - name: my-frontend
          image: busybox
          volumeMounts:
          - mountPath: "/data"
            name: my-csi-inline-vol
          command: [ "sleep", "1000000" ]
      volumes:
        - name: my-csi-inline-vol
          csi:
            driver: inline.storage.kubernetes.io
            volumeAttributes:
              foo: bar
    ```

    Where `spec.volumes.name`is the name of the volume that is used by pods.
1.  Create the object definition file that you saved in the previous step by running the following command.
    ```terminal
    $ oc create -f my-csi-app.yaml
    ```