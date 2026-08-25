{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding vCenter root CA certificates to your system trust {id="installation-adding-vcenter-root-certificates_{{ context }}"}

Because the installation program requires access to your vCenter’s API, you must add your vCenter’s trusted root CA certificates to your system trust before you install an {{ product_title }} cluster. {._abstract}

**Procedure**

1.  From the vCenter home page, download the vCenter’s root CA certificates. Click **Download trusted root CA certificates** in the vSphere Web Services SDK section. The `<vCenter>/certs/download.zip` file downloads.
1.  Extract the compressed file that contains the vCenter root CA certificates. The contents of the compressed file resemble the following file structure:
    ```
    certs
    ├── lin
    │   ├── 108f4d17.0
    │   ├── 108f4d17.r1
    │   ├── 7e757f6a.0
    │   ├── 8e4f8471.0
    │   └── 8e4f8471.r0
    ├── mac
    │   ├── 108f4d17.0
    │   ├── 108f4d17.r1
    │   ├── 7e757f6a.0
    │   ├── 8e4f8471.0
    │   └── 8e4f8471.r0
    └── win
        ├── 108f4d17.0.crt
        ├── 108f4d17.r1.crl
        ├── 7e757f6a.0.crt
        ├── 8e4f8471.0.crt
        └── 8e4f8471.r0.crl

    3 directories, 15 files
    ```
1.  Add the files for your operating system to the system trust. For example, on a Fedora operating system, run the following command:
    ```terminal
    # cp certs/lin/* /etc/pki/ca-trust/source/anchors
    ```
1.  Update your system trust. For example, on a Fedora operating system, run the following command:
    ```terminal
    # update-ca-trust extract
    ```