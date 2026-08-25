{%- set _mod_docs_content_type = "PROCEDURE" %}
# Modifying a common boot source image in a heterogeneous cluster {id="virt-mod-boot-source-image-heterogeneous-clusters_{{ context }}"}

You can modify the source of a common boot source image in a heterogeneous cluster by specifying the supported architectures in the `ssp.kubevirt.io/dict.architectures` annotation in the `HyperConverged` custom resource (CR). {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with `cluster-admin` permissions.
*   You have installed the {{ oc_first }}.
*   You have enabled the `enableMultiArchBootImageImport` feature gate in the `HyperConverged` CR.

**Procedure**

1.  Open the `HyperConverged` CR in your default editor by running the following command:
    ```terminal {minja}
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Edit the `HyperConverged` CR to add the appropriate values for the `ssp.kubevirt.io/dict.architectures` annotation in the `dataImportCronTemplates` section. For example:
    ```yaml
    #...
    spec:
      dataImportCronTemplates:
      - metadata:
          name: kubevirt-hyperconverged
          annotations:
            ssp.kubevirt.io/dict.architectures: "<architecture_list>"
        spec:
          schedule: "0 */12 * * *"
          template:
            spec:
              source:
                registry:
                    url: docker://my-private-registry/my-own-version-of-centos:8
          managedDataSource: centos-stream8
    #...
    ```

    where:

    `ssp.kubevirt.io/dict.architectures`
    :   Specifies a comma-separated list of supported architectures for this image. For example, if the image supports `amd64` and `arm64` architectures, the value would be `"amd64,arm64"`.

1.  Save and exit the editor to update the `HyperConverged` CR.

**Verification**

*   Verify that architecture-suffixed data sources are created by running the following command:
    ```terminal
    $ oc get datasources -n openshift-virtualization-os-images
    ```

    Architecture-suffixed data sources, such as `centos-stream8-amd64` and `centos-stream8-arm64`, should appear in the output.