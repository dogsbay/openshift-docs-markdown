{%- set _mod_docs_content_type = "PROCEDURE" %}
# Mirror from mirror to mirror {id="microshift-oc-mirror-mirror-to-mirror_{{ context }}"}

You can use the oc-mirror plugin to mirror an image set directly to a target mirror registry that is accessible during image set creation. {._abstract}

**Prerequisites**

*   You have access to the internet to get the required container images.
*   You installed the {{ oc_first }}.
*   You installed the `oc-mirror` CLI plugin.
*   You created the image set configuration file.

**Procedure**

*   Mirror the images from the specified image set configuration to a specified registry by running the following command:
    ```terminal
    $ oc-mirror --config imageset-config.yaml --workspace file://_<v2_workspace>_ \//
      docker://_<remote_registry>_ --v2
    ```
    *   You must use the `--workspace` flag for the mirror-to-mirror process. Replace _&lt;v2_workspace>_ with the directory you want to use to store custom resources for the mirroring process.
    *   Replace _&lt;remote_registry>_ with the name of the registry to mirror the image set file to. The registry must start with `docker://`. If you specify a top-level namespace for the mirror registry, you must also use this same namespace on later executions.
        ```terminal title="Example output"
        Rendering catalog image "registry.example.com/redhat/redhat-operator-index:v{ocp-version}" with file-based catalog
        ```

        :::important

        You must use the `ImageDigestMirrorSet` YAML file as reference content for manual configuration of CRI-O in {{ microshift_short }}. You cannot apply the resource directly into a {{ microshift_short }} node.
        
        :::


**Verification**

1.  List the contents of the `cluster-resources` subdirectory by running the following command:
    ```terminal
    $ ls _<v2_workspace>_/working-dir/cluster-resources/
    ```

    Replace _&lt;v2_workspace>_ with the directory you used to store custom resources for the mirroring process.

**Next steps**

*   Convert the `ImageDigestMirrorSet` YAML content for use in manually configuring CRI-O.
*   If required, mirror the images from mirror to disk for disconnected or offline use.

**Troubleshooting**

*   [Unable to retrieve source image](https://access.redhat.com/solutions/7032017).