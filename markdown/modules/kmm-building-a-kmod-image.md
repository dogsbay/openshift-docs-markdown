{%- set _mod_docs_content_type = "PROCEDURE" %}
# Building a kmod image {id="kmm-building-a-kmod-image_{{ context }}"}

To build a kmod image with firmware support in {{ product_title }}, you can include the binary firmware in the builder image alongside the kernel module. {._abstract}

**Procedure**

*   In addition to building the kernel module itself, include the binary firmware in the builder image:
    ```dockerfile
    FROM registry.redhat.io/ubi9/ubi-minimal as builder

    # Build the kmod

    RUN ["mkdir", "/firmware"]
    RUN ["curl", "-o", "/firmware/firmware.bin", "https://artifacts.example.com/firmware.bin"]

    FROM registry.redhat.io/ubi9/ubi-minimal

    # Copy the kmod, install modprobe, run depmod

    COPY --from=builder /firmware /firmware
    ```