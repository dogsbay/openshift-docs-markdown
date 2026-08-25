{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the {{ secondary_scheduler_operator }} {id="nodes-secondary-scheduler-uninstall-console_{{ context }}"}

You can use the web console to uninstall the {{ secondary_scheduler_operator_full }} if you no longer need the Operator in your cluster. {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_dedicated) %}
*   You are logged in to {{ product_title }} as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   You are logged in to {{ product_title }} as a user with the `dedicated-admin` role.
{%- endif %}
*   You have access to the {{ product_title }} web console.
*   The {{ secondary_scheduler_operator_full }} is installed.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Uninstall the {{ secondary_scheduler_operator_full }} Operator.
    1.  Navigate to **Ecosystem** → **Installed Operators**.
    1.  Click the Options menu {{ kebab }} next to the **{{ secondary_scheduler_operator }}** entry and click **Uninstall Operator**.
    1.  In the confirmation dialog, click **Uninstall**.