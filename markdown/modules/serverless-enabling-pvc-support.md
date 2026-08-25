{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling PVC support {id="serverless-enabling-pvc-support_{{ context }}"}

**Procedure**

1.  To enable Knative Serving to use PVCs and write to them, modify the `KnativeServing` custom resource (CR) to include the following YAML:
    ```yaml title="Enabling PVCs with write access"
    ...
    spec:
      config:
        features:
          "kubernetes.podspec-persistent-volume-claim": enabled
          "kubernetes.podspec-persistent-volume-write": enabled
    ...
    ```
    *   The `kubernetes.podspec-persistent-volume-claim` extension controls whether persistent volumes (PVs) can be used with Knative Serving.
    *   The `kubernetes.podspec-persistent-volume-write` extension controls whether PVs are available to Knative Serving with the write access.
1.  To claim a PV, modify your service to include the PV configuration. For example, you might have a persistent volume claim with the following configuration:

    :::note

    Use the storage class that supports the access mode that you are requesting. For example, you can use the `ocs-storagecluster-cephfs` class for the `ReadWriteMany` access mode.
    
    :::

    ```yaml title="PersistentVolumeClaim configuration"
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: example-pv-claim
      namespace: my-ns
    spec:
      accessModes:
        - ReadWriteMany
      storageClassName: ocs-storagecluster-cephfs
      resources:
        requests:
          storage: 1Gi
    ```

    In this case, to claim a PV with write access, modify your service as follows:
    ```yaml title="Knative service PVC configuration"
    apiVersion: serving.knative.dev/v1
    kind: Service
    metadata:
      namespace: my-ns
    ...
    spec:
     template:
       spec:
         containers:
             ...
             volumeMounts: (1)
               - mountPath: /data
                 name: mydata
                 readOnly: false
         volumes:
           - name: mydata
             persistentVolumeClaim: (2)
               claimName: example-pv-claim
               readOnly: false (3)
    ```
    1.  Volume mount specification.
    1.  Persistent volume claim specification.
    1.  Flag that enables read-only access.

        :::note

        To successfully use persistent storage in Knative services, you need additional configuration, such as the user permissions for the Knative container user.
        
        :::