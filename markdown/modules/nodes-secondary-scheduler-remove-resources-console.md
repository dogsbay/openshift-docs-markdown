{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing {{ secondary_scheduler_operator }} resources {id="nodes-secondary-scheduler-remove-resources-console_{{ context }}"}

Optionally, remove the custom resource definition (CRD) and associated namespace after the {{ secondary_scheduler_operator_full }} is uninstalled. This cleans up all remaining secondary scheduler artifacts. {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_dedicated) %}
*   You are logged in to {{ product_title }} as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   You are logged in to {{ product_title }} as a user with the `dedicated-admin` role.
{%- endif %}
*   You have access to the {{ product_title }} web console.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Remove the CRD that was installed by the {{ secondary_scheduler_operator }}:
    1.  Navigate to **Administration** → **CustomResourceDefinitions**.
    1.  Enter `SecondaryScheduler` in the **Name** field to filter the CRDs.
    1.  Click the Options menu {{ kebab }} next to the **SecondaryScheduler** CRD and select **Delete Custom Resource Definition**:
1.  Remove the `openshift-secondary-scheduler-operator` namespace.
    1.  Navigate to **Administration** → **Namespaces**.
    1.  Click the Options menu {{ kebab }} next to the **openshift-secondary-scheduler-operator** and select **Delete Namespace**.
    1.  In the confirmation dialog, enter `openshift-secondary-scheduler-operator` in the field and click **Delete**.