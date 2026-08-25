{%- set _mod_docs_content_type = "PROCEDURE" %}
# Building and uploading a container disk {id="virt-preparing-container-disk-for-vms_{{ context }}"}

You can build a virtual machine (VM) image into a container disk and upload it to a registry. {._abstract}

The size of a container disk is limited by the maximum layer size of the registry where the container disk is hosted.


:::note

For [{{ quay }}](https://access.redhat.com/documentation/en-us/red_hat_quay/), you can change the maximum layer size by editing the YAML configuration file that is created when {{ quay }} is first deployed.

:::


**Prerequisites**

*   You must have `podman` installed.
*   You must have a QCOW2 or RAW image file.

**Procedure**

1.  Create a Dockerfile to build the VM image into a container image. The VM image must be owned by QEMU, which has a UID of `107`, and placed in the `/disk/` directory inside the container. Permissions for the `/disk/` directory must then be set to `0440`.

    The following example uses the Red Hat Universal Base Image (UBI) to handle these configuration changes in the first stage, and uses the minimal `scratch` image in the second stage to store the result:
    ```terminal
    $ cat > Dockerfile << EOF
    FROM registry.access.redhat.com/ubi8/ubi:latest AS builder
    ADD --chown=107:107 <vm_image>.qcow2 /disk/ //
    RUN chmod 0440 /disk/*

    FROM scratch
    COPY --from=builder /disk/* /disk/
    EOF
    ```

    where:

    `<vm_image>`
    :   Specifies the image in either QCOW2 or RAW format. If you use a remote image, replace `<vm_image>.qcow2` with the complete URL.

1.  Build and tag the container:
    ```terminal
    $ podman build -t <registry>/<container_disk_name>:latest .
    ```
1.  Push the container image to the registry:
    ```terminal
    $ podman push <registry>/<container_disk_name>:latest
    ```