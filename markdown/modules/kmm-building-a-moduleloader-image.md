{%- set _mod_docs_content_type = "PROCEDURE" %}
# Building a ModuleLoader image {id="kmm-building-a-moduleloader-image_{{ context }}"}

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