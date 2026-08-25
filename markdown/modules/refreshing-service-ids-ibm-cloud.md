{%- set _mod_docs_content_type = "PROCEDURE" %}
# Rotating {{ ibm_cloud_title }} credentials {id="refreshing-service-ids-ibm-cloud_{{ context }}"}

You can rotate API keys for existing {{ ibm_cloud_title }} service IDs and update the corresponding cluster secrets to maintain valid cloud provider credentials. {._abstract}

You can rotate API keys for your existing service IDs and update the corresponding secrets.

**Prerequisites**

*   You have configured the `ccoctl` utility.
*   You have existing service IDs in a live {{ product_title }} cluster installed.

**Procedure**

*   Use the `ccoctl` utility to rotate your API keys for the service IDs and update the secrets by running the following command:
    ```terminal
    $ ccoctl <provider_name> refresh-keys \
        --kubeconfig <openshift_kubeconfig_file> \
        --credentials-requests-dir <path_to_credential_requests_directory> \
        --name <name>
    ```

    where:

    `<provider_name>`
    :   The name of the provider. For example: `ibmcloud` or `powervs`.

    `<openshift_kubeconfig_file>`
    :   The `kubeconfig` file associated with the cluster. For example, `<installation_directory>/auth/kubeconfig`.

    `<path_to_credential_requests_directory>`
    :   The directory where the credential requests are stored.

    `<name>`
    :   The name of the {{ product_title }} cluster.

    :::note

    If your cluster uses Technology Preview features that are enabled by the `TechPreviewNoUpgrade` feature set, you must include the `--enable-tech-preview` parameter.
    
    :::