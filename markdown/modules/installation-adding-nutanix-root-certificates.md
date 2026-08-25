{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding Nutanix root CA certificates to your system trust {id="installation-adding-nutanix-root-certificates_{{ context }}"}

Because the installation program requires access to the Prism Central API, you must add your Nutanix trusted root CA certificates to your system trust before you install an {{ product_title }} cluster. {._abstract}

**Procedure**

1.  From the Prism Central web console, download the Nutanix root CA certificates.
1.  Extract the compressed file that contains the Nutanix root CA certificates.
1.  Add the files for your operating system to the system trust. For example, on a Fedora operating system, run the following command:
    ```terminal
    # cp certs/lin/* /etc/pki/ca-trust/source/anchors
    ```
1.  Update your system trust. For example, on a Fedora operating system, run the following command:
    ```terminal
    # update-ca-trust extract
    ```