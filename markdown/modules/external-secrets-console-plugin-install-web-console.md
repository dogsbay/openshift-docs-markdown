{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ external_secrets_console_plugin }} {id="external-secrets-console-plugin-install-web-console_{{ context }}"}

You can use the web console to install the {{ external_secrets_console_plugin }}. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Navigate to **Ecosystem** → **Software Catalog**.
1.  Enter **External Secrets Management Console** into the filter box.
1.  Select **External Secrets Management Console**.
1.  Select the {{ external_secrets_console_plugin }} version from the **Version** drop-down list, and click **Install**.
1.  On the **Install Operator** page:
    1.  Update the **Update channel**, if necessary. The channel defaults to **tech-preview-v1**.
    1.  Select an **Update approval** strategy.
        *   The **Automatic** strategy allows the Operator Lifecycle Manager (OLM) to automatically update the Operator when a new version is available.
        *   The **Manual** strategy requires a user with appropriate credentials to approve the Operator update.
    1.  Click **Install**.

**Verification**

1.  Verify that **{{ external_secrets_console_plugin }}** is available under **Plugins**.
1.  Verify that all the installed secrets management Operators are listed when you click **{{ external_secrets_console_plugin }}**.