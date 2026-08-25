{%- set _mod_docs_content_type = "PROCEDURE" %}
# Mirroring from mirror to disk {id="mirror-to-disk-v2_{{ context }}"}

You can use the oc-mirror plugin v2 to generate an image set and save the content to disk. Afterwards, you can transfer the generated image set to the disconnected environment and mirror it to the target registry. The plugin retrieves the container images from the source specified in the image set configuration file and packs them into a tar archive in a local directory. {._abstract}

Additionally, the plugin automatically generates the `ImageSetConfiguration` and `DeleteImageSetConfiguration` files that are pinned by digest in your working directory and tar archive. Pinning by digest maintains consistency across your disconnected environments ensuring that you always deploy the same image, regardless of any later changes to the upstream tags.

**Procedure**

*   Mirror the images from the specified image set configuration to the disk by running the following command:
    ```terminal
    $ oc mirror -c <image_set_configuration> file://<file_path> --v2
    ```

    where:

    &lt;image_set_configuration>
    :   Specifies the name of the image set configuration file.

    &lt;file_path>
    :   Specifies the directory where the archives containing the image sets will be generated in.

**Verification**

1.  Navigate to the `<file_path>` directory that was generated.
1.  Verify that the archive files have been generated.

**Next steps**

*   Mirroring from disk to mirror