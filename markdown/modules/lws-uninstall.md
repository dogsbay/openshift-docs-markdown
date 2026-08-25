{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the {{ lws_operator }} {id="lws-uninstall_{{ context }}"}

You can use the web console to uninstall the {{ lws_operator }} if you no longer need the Operator in your cluster. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.
*   You have installed the {{ lws_operator }}.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Navigate to **Operators** → **Installed Operators**.
1.  Select `openshift-lws-operator` from the **Project** dropdown list.
1.  Delete the `LeaderWorkerSetOperator` instance.
    1.  Click **{{ lws_operator }}** and select the **LeaderWorkerSetOperator** tab.
    1.  Click the Options menu {{ kebab }} next to the **cluster** entry and select **Delete LeaderWorkerSetOperator**.
    1.  In the confirmation dialog, click **Delete**.
1.  Uninstall the {{ lws_operator }}.
    1.  Navigate to **Operators** → **Installed Operators**.
    1.  Click the Options menu {{ kebab }} next to the **{{ lws_operator }}** entry and click **Uninstall Operator**.
    1.  In the confirmation dialog, click **Uninstall**.