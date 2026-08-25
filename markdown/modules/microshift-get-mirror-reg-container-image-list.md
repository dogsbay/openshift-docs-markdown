{%- set _mod_docs_content_type = "PROCEDURE" %}
# Get the mirror registry container image list {id="microshift-get-mirror-reg-container-image-list_{{ context }}"}

To use a mirror registry, you must know which container image references are used by a specific version of {{ microshift_short }}. These references are provided in the `release-<arch>.json` files that are part of the `microshift-release-info` RPM package. {._abstract}


:::note

To mirror the Operator Lifecycle Manager (OLM) in disconnected environments, add the references provided in the `release-olm-$ARCH.json` that is included in the `microshift-olm` RPM and follow the same procedure. Use the `oc-mirror` CLI plugin for mirroring Operator catalogs and Operators.

:::


**Prerequisites**

*   You have installed jq.

**Procedure**

1.  Access the list of container image references by using one of the following methods:
    *   If the package is installed on the {{ microshift_short }} host, get the location of the files by running the following command:
        ```terminal
        $ rpm -ql microshift-release-info
        ```
        ```text title="Example output"
        /usr/share/microshift/release/release-x86_64.json
        ```
    *   If the package is not installed on a {{ microshift_short }} host, download and unpack the RPM package without installing it by running the following command:
        ```terminal
        $ rpm2cpio microshift-release-info*.noarch.rpm | cpio -idmv
        ```
        ```text title="Example output"
        /usr/share/microshift/release/release-x86_64.json
        ```
1.  Extract the list of container images into the `microshift-container-refs.txt` file by running the following commands:
    ```terminal
    $ RELEASE_FILE=/usr/share/microshift/release/release-$(uname -m).json
    ```
    ```terminal
    $ jq -r '.images | .[]' ${RELEASE_FILE} > microshift-container-refs.txt
    ```

    :::note

    After the `microshift-container-refs.txt` file is created with the {{ microshift_short }} container image list, you can append the file with other user-specific image references before running the mirroring procedure.
    
    :::