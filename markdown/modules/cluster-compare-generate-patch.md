{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using the cluster-compare plugin to generate a patch {id="cluster-compare-generate-patch_{{ context }}"}

You can use the `cluster-compare` plugin to generate a patch for specific template files. The plugin adjusts the template to ensure it matches with the cluster custom resource (CR). Any previously valid differences in the patched template are not reported. The plugin highlights the patched files in the output. {._abstract}

**Procedure**

1.  Generate patches for templates by running the following command:
    ```terminal
    $ oc cluster-compare -r <path_to_reference_config>/metadata.yaml -o 'generate-patches' --override-reason "A valid reason for the override" --generate-override-for "<template1_path>" --generate-override-for "<template2_path>" > <path_to_patches_file>
    ```
    *   `-r` specifies the path to the metadata.yaml file of the reference configuration.
    *   `-o` specifies the output format. To generate a patch output, you must use the `generate-patches` value.
    *   `--override-reason` describes the reason for the patch.
    *   `--generate-override-for` specifies a path to the template that requires a patch.

        :::note

        You must use a file path for the target template that is relative to the `metadata.yaml` file. For example, if the file path for the `metadata.yaml` file is `./compare/metadata.yaml`, a relative file path for the template might be `optional/my-template.yaml`.
        
        :::

    *   `<path_to_patches_file>` specifies the filename and path for your patch.
1.  Optional: Review the patch file before applying to the reference configuration:

    Example `patch-config` file:
    ```yaml
    - apiVersion: storage.k8s.io/v1
      kind: StorageClass
      name: crc-csi-hostpath-provisioner
      patch: '{"provisioner":"kubevirt.io.hostpath-provisioner"}'
      reason: A valid reason for the override
      templatePath: optional/local-storage-operator/StorageClass.yaml
      type: mergepatch
    ```

    where:

    `patch`
    :   The plugin patches the fields in the template to match the CR.

    `templatePath`
    :   The path to the template.

    `type: mergepatch`
    :   The `mergepath` option merges the JSON into the target template. Unspecified fields remain unchanged.

1.  Apply the patch to the reference configuration by running the following command:
    ```terminal
    $ oc cluster-compare -r <referenceConfigurationDirectory> -p <path_to_patches_file>
    ```
    *   `-r` specifies the path to the metadata.yaml file of the reference configuration.
    *   `-p` specifies the path to the patch file.

        The following is example output:
        ```terminal
        ...

        Cluster CR: storage.k8s.io/v1_StorageClass_crc-csi-hostpath-provisioner
        Reference File: optional/local-storage-operator/StorageClass.yaml
        Description: Component description
        Diff Output: None
        Patched with patch
        Patch Reasons:
        - A valid reason for the override

        ...

        No CRs are unmatched to reference CRs
        Metadata Hash: bb2165004c496b32e0c8509428fb99c653c3cf4fba41196ea6821bd05c3083ab
        Cluster CRs with patches applied: 1
        ```