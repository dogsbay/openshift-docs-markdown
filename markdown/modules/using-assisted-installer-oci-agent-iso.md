{%- set _mod_docs_content_type = "PROCEDURE" %}
# Generating the Discovery ISO image {id="using-assisted-installer-oci-generating-iso_{{ context }}"}

After setting cluster details, generate and download the Discovery ISO image. {._abstract}

**Procedure**

1.  On the **Host Discovery** page, click **Add hosts** and complete the following steps:
    1.  For the **Provisioning type** field, select **Minimal image file**.
    1.  For the **SSH public key** field, add the SSH public key from your local system, by copying the output of the following command:
        ```terminal
        $ cat ~/.ssh/id_rsa.put
        ```

        The SSH public key will be installed on all {{ product_title }} control plane and compute nodes.
    1.  Click **Generate Discovery ISO** to generate the discovery ISO image file.
    1.  Click **Download Discovery ISO** to save the file to your local system.