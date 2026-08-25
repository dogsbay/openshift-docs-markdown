{%- set _mod_docs_content_type = "PROCEDURE" %}
# Import a VM image from an HTTP or HTTPS source {id="proc-importing-vm-image-from-http-source_{{ context }}"}

You can import a virtual machine (VM) image from an HTTP or HTTPS source by creating a `DataVolume` object.
The Containerized Data Importer (CDI) controller creates a data volume and an underlying persistent volume claim (PVC), then downloads the image from the specified URL into the PVC. {._abstract}

**Prerequisites**

*   A VM image is accessible from an HTTP or HTTPS URL.
*   Optional: Custom CA certificates for HTTPS connections are stored in a `ConfigMap` object.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a `DataVolume` object that specifies the HTTP or HTTPS source of the VM image:
    ```yaml
    apiVersion: cdi.kubevirt.io/v1beta1
    kind: DataVolume
    metadata:
      name: http-image-datavolume
    spec:
      source:
        http:
          url: "https://example.com/images/my-vm-image.qcow2"
          secretRef: <http_secret>
          certConfigMap: <ca_certs_configmap>
      storage:
        resources:
          requests:
            storage: 20Gi
    ```

    where:

    `url`
    :   Specifies the HTTP or HTTPS URL of the VM image.

    `secretRef`
    :   Optional: Specifies the name of a `Secret` object that stores Basic authentication credentials. The `Secret` must contain `username` and `password` keys.

    `certConfigMap`
    :   Optional: Specifies the name of a `ConfigMap` object that stores custom CA certificates for HTTPS connections.

1.  Create the data volume by running the following command:
    ```terminal
    $ oc create -f <datavolume_manifest>.yaml
    ```
1.  Monitor the import progress by running the following command:
    ```terminal
    $ oc get dv <datavolume_name>
    ```

**Verification**

*   Confirm that the data volume reaches the `Succeeded` phase by running the following command:
    ```terminal
    $ oc get dv <datavolume_name>
    ```

    Example output:
    ```terminal
    NAME                     PHASE       PROGRESS
    http-image-datavolume    Succeeded   100.0%
    ```
*   Confirm that the PVC is created and bound by running the following command:
    ```terminal
    $ oc get pvc
    ```

    Example output:
    ```terminal
    NAME                     STATUS   VOLUME     CAPACITY   ACCESS MODES
    http-image-datavolume    Bound    pv-name    20Gi       RWO
    ```