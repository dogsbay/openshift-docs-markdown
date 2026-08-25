{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the {{ external_secrets_console_plugin }} {id="external-secrets-console-plugin-uninstall-web-console_{{ context }}"}

You can uninstall the {{ external_secrets_console_plugin }} from your cluster using the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   You have access to the {{ product_title }} web console.
*   The {{ external_secrets_console_plugin }} is installed.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Navigate to **Ecosystem** → **Installed Operators**.
1.  Click the Options menu {{ kebab }} next to the **External Secrets Management Console** entry, and then click **Uninstall Operator**.
1.  In the confirmation dialog, select the **Delete all operand instances for this operator** checkbox and then click **Uninstall**.

**Verification**

*   Verify that **Secrets Management** no longer appears under **Plugins**.