{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling a helm installed community {{ external_secrets_operator_short }} {id="external-secrets-operator-uninstall-helm_{{ context }}"}

Remove the community {{ external_secrets_operator_short }} that was installed using Helm. This helps you free up resources and maintain a clean environment for your cluster. {._abstract}

**Prerequisites**

*   You must be logged in as a user with the `cluster-admin` role.
*   You must have deleted the `operatorconfig` custom resource (CR).

**Procedure**

1.  Install the {{ external_secrets_operator }}. The `external-secrets-operator` namespace must be null.
1.  Delete the {{ external_secrets_operator_short }} by running the following command:
    ```terminal
    $ oc helm delete <release_name> -n <operator_namespace>
    ```

    :::note

    Using `helm delete` might delete all Custom Resource Definitions (CRDs) and CRs. It is recommended to install the downstream Operator first if the namespace `external-secrets-operator` is empty.
    
    :::