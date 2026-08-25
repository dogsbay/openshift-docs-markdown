{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling {{ support_log_gather }} {id="support-log-gather-uninstall-console_{{ context }}"}

You can uninstall the {{ support_log_gather }} by using the web console. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.
*   The {{ support_log_gather }} is installed.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Uninstall the {{ support_log_gather }} Operator.
    1.  Navigate to **Ecosystem** -> **Installed Operators**.
    1.  Click the Options menu {{ kebab }} next to the **{{ support_log_gather }}** entry and click **Uninstall Operator**.
    1.  In the confirmation dialog, click **Uninstall**.