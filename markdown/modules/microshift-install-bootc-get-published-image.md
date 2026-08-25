{%- set _mod_docs_content_type = "PROCEDURE" %}
# Get the published bootc image for {{ microshift_short }} {id="microshift-install-bootc-get-published-image_{{ context }}"}

You can use the {{ microshift_short }} container images to install {{ op_system_image }}. {._abstract}

**Prerequisites**

*   You have an x86_64 or AArch64 platform.
*   You have access to the `registry.redhat.io` registry.

**Procedure**

1.  Navigate to the [Red&#160;Hat Ecosystem Catalog](https://catalog.redhat.com/).
1.  Search for the {{ microshift_short }} container image by using the `microshift-bootc` keyword.
1.  Open the container image page of the {{ microshift_short }} container image.
1.  Select the `Get this image` tab to view instructions for downloading the image.
1.  Get access to the latest image on x86_64 and AArch64 platforms by logging into the registry using the following command:
    ```terminal
    $ sudo podman login registry.redhat.io
    ```
1.  Download the bootc image by running the following command:
    ```terminal
    $ podman pull registry.redhat.io/openshift4/microshift-bootc-rhel{{ op_system_version_major }}:v{{ product_version }}
    ```