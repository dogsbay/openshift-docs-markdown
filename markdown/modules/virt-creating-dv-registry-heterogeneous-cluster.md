{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a data volume from a registry source in a heterogeneous cluster {id="virt-creating-dv-registry-heterogeneous-cluster_{{ context }}"}

To pull the correct architecture-specific image in a heterogeneous cluster, specify the architecture in the `DataVolume` manifest. This step is only required for data volumes that you create outside the boot source image pipeline. {._abstract}


:::note

Boot source images managed through the `HyperConverged` custom resource (CR) select the correct architecture automatically. You do not need to specify the architecture for those images.

:::


**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a `DataVolume` manifest and save it as a YAML file:
    ```yaml
    apiVersion: cdi.kubevirt.io/v1beta1
    kind: DataVolume
    metadata:
      name: <datavolume_name>
    spec:
      source:
        registry:
          url: <image_url>
          platform:
            architecture: <architecture>
      storage:
        resources:
          requests:
            storage: <storage_size>
    ```

    where:

    `<datavolume_name>`
    :   Specifies the name of the data volume.

    `<image_url>`
    :   Specifies the URL of the container image, for example `docker://quay.io/containerdisks/centos-stream:9`.

    `<architecture>`
    :   Specifies the architecture of the image to pull, for example `amd64`, `arm64`, or `s390x`.

    `<storage_size>`
    :   Specifies the size of the storage requested, for example `10Gi`.

1.  Create the data volume:
    ```terminal
    $ oc create -f <datavolume_manifest>.yaml
    ```

**Verification**

*   Verify that the data volume was created and is importing by running the following command:
    ```terminal
    $ oc get dv <datavolume_name>
    ```

    The `PHASE` column should show `ImportScheduled`, `ImportInProgress`, or `Succeeded`.