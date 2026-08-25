{%- set _mod_docs_content_type = "PROCEDURE" %}
# Add a certificate authority bundle to a blueprint {id="microshift-ca-adding-bundle-ostree_{{ context }}"}

You can include additional certificate authorities (CAs) to be trusted by the operating system when pulling images from an image registry. To add the additional CAs to the {{ op_system_ostree_first }} `rpm-ostree` image, configure them in the blueprint that you use to create the image. {._abstract}


:::note

This procedure requires you to configure the CA bundle customizations in the blueprint, and then add steps to your Kickstart file to enable the bundle. In the following steps, `data` is the key, and `<value>` represents the PEM-encoded certificate.

:::


**Prerequisites**

*   You have root user access to your build host.
*   Your build host meets the image builder system requirements.
*   You have installed and set up image builder and the `composer-cli` tool.

**Procedure**

1.  Add the following custom values to your blueprint to add a directory.
    1.  Add instructions to your blueprint on the host where the image is built to create the directory, for example, `/etc/pki/ca-trust/source/anchors/` for your certificate bundles.
        ```terminal
        [[customizations.directories]]
        path = "/etc/pki/ca-trust/source/anchors"
        ```
    1.  After the image has booted, create the certificate bundles, for example, `/etc/pki/ca-trust/source/anchors/cert1.pem`:
        ```terminal
        [[customizations.files]]
        path = "/etc/pki/ca-trust/source/anchors/cert1.pem"
        data = "<value>"
        ```
1.  To enable the certificate bundle in the system-wide truststore configuration, use the `update-ca-trust` command on the host where the image you are using has booted, for example:
    ```terminal
    $ sudo update-ca-trust
    ```

    :::note

    The `update-ca-trust` command might be included in the `%post` section of a Kickstart file used for {{ microshift_short }} host installation so that all the necessary certificate trust is enabled on the first boot. You must configure the CA bundle customizations in the blueprint before adding steps to your Kickstart file to enable the bundle.

    ```terminal
    %post
    # Update certificate trust storage in case new certificates were
    # installed at /etc/pki/ca-trust/source/anchors directory
    update-ca-trust
    %end
    ```
    
    :::