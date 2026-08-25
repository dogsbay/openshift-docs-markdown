{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating generic ephemeral volumes {id="generic-ephemeral-vols-procedure_{{ context }}"}

To create ephemeral volumes that are automatically provisioned and deleted with pod lifecycle, define a `volumeClaimTemplate` in your pod spec specifying storage class, size, and access modes. {._abstract}

**Procedure**

1.  Create the `pod` object definition and save it to a file.
1.  Include the generic ephemeral volume information in the file.
    ```yaml title="my-example-pod-with-generic-vols.yaml" {minja}
    kind: Pod
    apiVersion: v1
    metadata:
      name: my-app
    spec:
      containers:
        - name: my-frontend
          image: busybox:1.28
          volumeMounts:
          - mountPath: "/mnt/storage"
            name: data
          command: [ "sleep", "1000000" ]
      volumes:
        - name: data
          ephemeral:
            volumeClaimTemplate:
              metadata:
                labels:
                  type: my-app-ephvol
              spec:
                accessModes: [ "ReadWriteOnce" ]
    {%- if not microshift %}
                storageClassName: "gp2-csi"
    {%- endif %}
    {%- if microshift %}
                storageClassName: "topolvm-provisioner"
    {%- endif %}
                resources:
                  requests:
                    storage: 1Gi

    ```

    Where `spec.volumes.name` is the name of the generic ephemeral volume.