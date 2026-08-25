{%- set _mod_docs_content_type = "PROCEDURE" %}
# Monitoring secrets management Operators by using {{ external_secrets_console_plugin }} {id="external-secrets-console-plugin-monitor-custom-resources_{{ context }}"}

You can inspect custom resources for installed secrets management Operators in the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   You have installed the {{ external_secrets_console_plugin }}.
*   You have installed at least one secrets management Operator.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Navigate to **Plugins** → **Secrets Management**.
1.  Click {{ kebab }} for the custom resource that you want to monitor, and then click **Inspect**.

**Verification**

*   You must be able to view the following sections:
    *   **Metadata**
    *   **Labels**
    *   **Annotations**
    *   **Specifications**
    *   **Status**
    *   **Events**