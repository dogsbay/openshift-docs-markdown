{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uploading a virtual machine image by using the CLI {id="virt-uploading-image-virtctl_{{ context }}"}

You can upload an operating system image by using the `virtctl` command-line tool. You can use an existing data volume or create a new data volume for the image. {._abstract}

**Prerequisites**

*   You must have an `ISO`, `IMG`, or `QCOW2` operating system image file.
*   For best performance, compress the image file by using the [virt-sparsify](https://libguestfs.org/virt-sparsify.1.html) tool or the `xz` or `gzip` utilities.
*   The client machine must be configured to trust the {{ product_title }} router’s
certificate.
*   You have installed the `virtctl` CLI.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Upload the image by running the `virtctl image-upload` command:
    ```terminal
    $ virtctl image-upload dv <datavolume_name> \
      --size=<datavolume_size> \
      --image-path=</path/to/image>
    ```

    `<datavolume_name>`
    :   The name of the data volume.

    `<datavolume_size>`
    :   The size of the data volume. For example: `--size=500Mi`, `--size=1G`

    `</path/to/image>`
    :   The file path of the image.

    :::note

    *   If you do not want to create a new data volume, omit the `--size` parameter and include the `--no-create` flag.
    *   When uploading a disk image to a PVC, the PVC size must be larger than the size of the uncompressed virtual disk.
    *   To allow insecure server connections when using HTTPS, use the `--insecure` parameter. When you use the `--insecure` flag, the authenticity of the upload endpoint is **not** verified.
    
    :::


1.  Optional. To verify that a data volume was created, view all data volumes by running the following command:
    ```terminal
    $ oc get dvs
    ```