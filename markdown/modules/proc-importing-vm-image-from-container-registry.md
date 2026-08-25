{%- set _mod_docs_content_type = "PROCEDURE" %}
# Import a VM image from a container registry {id="proc-importing-vm-image-from-container-registry_{{ context }}"}

You can import a virtual machine (VM) image from a container registry into a persistent volume claim (PVC) by using the `DataVolume` API.
The Containerized Data Importer (CDI) creates a data volume and an associated PVC to store the imported image. {._abstract}

**Prerequisites**

*   You have access to the container registry.
*   If the registry is private, registry credentials are stored in a `Secret` object.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a `DataVolume` object that specifies the container registry as the source:
    ```yaml
    apiVersion: cdi.kubevirt.io/v1beta1
    kind: DataVolume
    metadata:
      name: registry-image-datavolume
    spec:
      source:
        registry:
          url: "docker://registry.example.com/my-vm-image:latest"
          pullMethod: node
          secretRef: <registry_secret>
          certConfigMap: <ca_certs_configmap>
      storage:
        resources:
          requests:
            storage: 20Gi
    ```

    where:

    `url`
    :   Specifies the container registry URL with the `docker://` prefix.

    `pullMethod`
    :   Optional: Set to `node` to use the node container runtime cache and pull secrets. The default value is `pod`.

    `secretRef`
    :   Optional: Specifies the name of a `Secret` object that stores the registry credentials.

    `certConfigMap`
    :   Optional: Specifies the name of a `ConfigMap` object that stores custom CA certificates for the registry.

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
    NAME                        PHASE       PROGRESS
    registry-image-datavolume   Succeeded   100.0%
    ```
*   Confirm that the PVC is created and bound by running the following command:
    ```terminal
    $ oc get pvc
    ```

    Example output:
    ```terminal
    NAME                        STATUS   VOLUME     CAPACITY   ACCESS MODES
    registry-image-datavolume   Bound    pv-name    20Gi       RWO
    ```