{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the {{ run_once_operator }} {id="rodoo-uninstall-operator_{{ context }}"}

Uninstall the {{ run_once_operator }} from the web console to stop applying `activeDeadlineSeconds` overrides to future run-once pods without affecting existing pod configurations. {._abstract}

You can use the web console to uninstall the {{ run_once_operator }}. Uninstalling the {{ run_once_operator }} does not unset the `activeDeadlineSeconds` field for run-once pods, but it will no longer apply the override value to future run-once pods.

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.
*   You have installed the {{ run_once_operator }}.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Navigate to **Ecosystem** → **Installed Operators**.
1.  Select `openshift-run-once-duration-override-operator` from the **Project** dropdown list.
1.  Delete the `RunOnceDurationOverride` instance.
    1.  Click **{{ run_once_operator }}** and select the **Run Once Duration Override** tab.
    1.  Click the Options menu {{ kebab }} next to the **cluster** entry and select **Delete RunOnceDurationOverride**.
    1.  In the confirmation dialog, click **Delete**.
1.  Uninstall the {{ run_once_operator }}.
    1.  Navigate to **Ecosystem** → **Installed Operators**.
    1.  Click the Options menu {{ kebab }} next to the **{{ run_once_operator }}** entry and click **Uninstall Operator**.
    1.  In the confirmation dialog, click **Uninstall**.