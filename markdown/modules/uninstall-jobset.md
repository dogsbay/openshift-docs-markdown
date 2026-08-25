{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the {{ js_operator }} {id="js-uninstall_{{ context }}"}

Uninstall the {{ js_operator }} by using the {{ product_title }} web console to remove the Operator instance. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.
*   You have installed the {{ js_operator }}.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Navigate to **Operators** → **Installed Operators**.
1.  Select `openshift-js-operator` from the **Project** dropdown list.
1.  Delete the `JobSetOperator` instance.
    1.  Click **{{ js_operator }}** and select the **JobSetOperator** tab.
    1.  Click the Options menu {{ kebab }} next to the **cluster** entry and select **Delete JobSetOperator**.
    1.  In the confirmation dialog, click **Delete**.
1.  Uninstall the {{ js_operator }}.
    1.  Navigate to **Operators** → **Installed Operators**.
    1.  Click the Options menu {{ kebab }} next to the **{{ js_operator }}** entry and click **Uninstall Operator**.
    1.  In the confirmation dialog, click **Uninstall**.