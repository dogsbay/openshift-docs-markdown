{%- set _mod_docs_content_type = "PROCEDURE" %}
# Obtaining a FIPS-capable installation program using `oc adm extract` {id="installation-obtaining-fips-installer-oc_{{ context }}"}

You must get a FIPS-capable installation binary to install a {{ product_title }} cluster in FIPS mode. Extract the binary from the release image by using the {{ oc_first }}. After you get the binary, you must proceed with the cluster installation, replacing all instances of the `openshift-install` command with `openshift-install-fips`. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }} with version 4.16 or newer.

**Procedure**

1.  Extract the FIPS-capable binary from the installation program by running the following command:
    ```terminal
    $ oc adm release extract --registry-config "${pullsecret_file}" --command=openshift-install-fips --to "${extract_dir}" ${RELEASE_IMAGE}
    ```

    where:

    `<pullsecret_file>`
    :   Specifies the name of a file that contains your pull secret.

    `<extract_dir>`
    :   Specifies the directory where you want to extract the binary.

    `<RELEASE_IMAGE>`
    :   Specifies the Quay.io URL of the {{ product_title }} release you are using. For more information on finding the release image, see _Extracting the {{ product_title }} installation program_.
1.  Proceed with cluster installation, replacing all instances of the `openshift-install` command with `openshift-install-fips`.