{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting certificates and secrets by using {{ external_secrets_console_plugin }} {id="external-secrets-console-plugin-delete-certificates-secrets_{{ context }}"}

You can delete certificates and secrets from installed secrets management Operators across your clusters by using the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   You have access to the {{ product_title }} cluster as a user with the `cluster-admin` role.
*   You have installed the {{ external_secrets_console_plugin }}.
*   You have installed at least one secrets management Operator.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Navigate to **Plugins** -> **Secrets Management**.
1.  Click {{ kebab }} for the custom resource that you want to delete, and then click **Delete**.
1.  Enter the name of the custom resource.
1.  Click **Delete**.

**Verification**

1.  Navigate to **Ecosystem** -> **Installed Operators**.
1.  Select the secrets management Operator whose custom resource you deleted.
1.  Verify that the deleted custom resource no longer appears in the Operator details view.