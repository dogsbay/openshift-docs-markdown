{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding {{ op_system }} ISO and RootFS images to the disconnected mirror host {id="ztp-acm-adding-images-to-mirror-registry_{{ context }}"}

Before you begin installing clusters in the disconnected environment with {{ rh_rhacm_first }}, you must first host {{ op_system_first }} images for it to use. Use a disconnected mirror to host the {{ op_system }} images. {._abstract}

**Prerequisites**

*   Deploy and configure an HTTP server to host the {{ op_system }} image resources on the network. You must be able to access the HTTP server from your computer, and from the machines that you create.


:::important

The {{ op_system }} images might not change with every release of {{ product_title }}. You must download images with the highest version that is less than or equal to the version that you install. Use the image versions that match your {{ product_title }} version if they are available. You require ISO and RootFS images to install {{ op_system }} on the hosts. {{ op_system }} QCOW2 images are not supported for this installation type.

:::


**Procedure**

1.  Log in to the mirror host.
1.  Obtain the {{ op_system }} ISO and RootFS images from [mirror.openshift.com](https://mirror.openshift.com/pub/openshift-v4/dependencies/rhcos/), for example:
    1.  Export the required image names and {{ product_title }} version as environment variables:
        ```terminal
        $ export ISO_IMAGE_NAME=<iso_image_name>
        ```
        ```terminal
        $ export ROOTFS_IMAGE_NAME=<rootfs_image_name>
        ```
        ```terminal
        $ export OCP_VERSION=<ocp_version>
        ```

        where:

        `<iso_image_name>`
        :   ISO image name, for example, `rhcos-{{ product_version }}.1-x86_64-live.x86_64.iso`

        `<rootfs_image_name>`
        :   RootFS image name, for example, `rhcos-{{ product_version }}.1-x86_64-live-rootfs.x86_64.img`

        `<ocp_version>`
        :   {{ product_title }} version, for example, `{{ product_version }}.1`
    1.  Download the required images:
        ```terminal
        $ sudo wget https://mirror.openshift.com/pub/openshift-v4/dependencies/rhcos/{{ product_version }}/${{ OCP_VERSION }}/${{ ISO_IMAGE_NAME }} -O /var/www/html/${{ ISO_IMAGE_NAME }}
        ```
        ```terminal
        $ sudo wget https://mirror.openshift.com/pub/openshift-v4/dependencies/rhcos/{{ product_version }}/${{ OCP_VERSION }}/${{ ROOTFS_IMAGE_NAME }} -O /var/www/html/${{ ROOTFS_IMAGE_NAME }}
        ```

**Verification**

*   Verify that the images downloaded successfully and are being served on the disconnected mirror host, for example:
    ```terminal
    $ wget http://$(hostname)/${ISO_IMAGE_NAME}
    ```

    Example output:
    ```terminal
    Saving to: rhcos-{{ product_version }}.1-x86_64-live.x86_64.iso
    rhcos-{{ product_version }}.1-x86_64-live.x86_64.iso-  11%[====>    ]  10.01M  4.71MB/s
    ```