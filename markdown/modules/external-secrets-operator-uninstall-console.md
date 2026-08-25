{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the {{ external_secrets_operator }} using the web console {id="external-secrets-operator-uninstall-console_{{ context }}"}

You can uninstall the {{ external_secrets_operator }} from your cluster using the {{ product_title }} web console. Uninstalling the Operator does not automatically delete the `ExternalSecrets` custom resources or the running `external-secrets` application workload. These resources remain in the cluster to prevent accidental data loss and must be removed manually if they are no longer needed. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.
*   The {{ external_secrets_operator_short }} is installed.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Uninstall the {{ external_secrets_operator }} using the following steps:
    1.  Navigate to **Ecosystem** → **Installed Operators**.
    1.  Click the Options menu {{ kebab }} next to the **{{ external_secrets_operator }}** entry and click **Uninstall Operator**.
    1.  In the confirmation dialog, click **Uninstall**.