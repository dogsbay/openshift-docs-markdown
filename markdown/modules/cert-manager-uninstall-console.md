{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the {{ cert_manager_operator }} {id="cert-manager-uninstall-console_{{ context }}"}

You can uninstall the {{ cert_manager_operator }} by using the web console. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.
*   The {{ cert_manager_operator }} is installed.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Uninstall the {{ cert_manager_operator }} Operator.
    1.  Navigate to **Ecosystem** → **Installed Operators**.
    1.  Click the Options menu {{ kebab }} next to the **{{ cert_manager_operator }}** entry and click **Uninstall Operator**.
    1.  In the confirmation dialog, click **Uninstall**.