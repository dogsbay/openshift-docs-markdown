{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling a raw manifest installed community {{ external_secrets_operator_short }} {id="external-secrets-operator-uninstall-raw-manifests_{{ context }}"}

Remove the community {{ external_secrets_operator_short }} that was installed by raw manifests. This helps you free up resources and maintain a clean environment for your cluster. {._abstract}

**Prerequisites**

*   You must be logged in as a user with the `cluster-admin` role.
*   You must have deleted the `operatorconfig` CR.

**Procedure**

*   To remove the communiity {{ external_secrets_operator_short }} that was installed by raw manifests, run the following command:
    ```terminal
    $ oc delete -f /path/to/your/old/manifests.yaml -n <operator_namespace>
    ```