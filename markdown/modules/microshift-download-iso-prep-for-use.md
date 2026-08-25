{%- set _mod_docs_content_type = "PROCEDURE" %}
# Download the ISO and prepare it for use {id="microshift-download-iso-prep-for-use_{{ context }}"}

After creating the ISO, you must download it and prepare it for use. {._abstract}

**Procedure**

1.  Download the ISO using the ID by running the following command:
    ```terminal
    $ sudo composer-cli compose image ${BUILDID}
    ```
1.  Change the ownership of the downloaded container image to the current user by running the following command:
    ```terminal
    $ sudo chown $(whoami). ${BUILDID}-installer.iso
    ```
1.  Add read permissions for the current user to the image by running the following command:
    ```terminal
    $ sudo chmod a+r ${BUILDID}-installer.iso
    ```

**Next steps**

*   Provision a virtual machine with a Kickstart file.