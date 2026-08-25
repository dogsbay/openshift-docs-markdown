{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ secondary_scheduler_operator }} {id="nodes-secondary-scheduler-install-console_{{ context }}"}

You can install the {{ secondary_scheduler_operator_full }} through the {{ product_title }} web console to configure a secondary scheduler. {._abstract}

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
1.  Create the required namespace for the {{ secondary_scheduler_operator_full }}.
    1.  Navigate to **Administration** -> **Namespaces** and click **Create Namespace**.
    1.  Enter `openshift-secondary-scheduler-operator` in the **Name** field and click **Create**.
1.  Install the {{ secondary_scheduler_operator_full }}.
    1.  Navigate to **Ecosystem** -> **Software Catalog**.
    1.  Enter **{{ secondary_scheduler_operator_full }}** into the filter box.
    1.  Select the **{{ secondary_scheduler_operator_full }}** and click **Install**.
    1.  On the **Install Operator** page:
        1.  The **Update channel** is set to **stable**, which installs the latest stable release of the {{ secondary_scheduler_operator_full }}.
        1.  Select **A specific namespace on the cluster** and select **openshift-secondary-scheduler-operator** from the drop-down menu.
        1.  Select an **Update approval** strategy.
            *   The **Automatic** strategy allows Operator Lifecycle Manager (OLM) to automatically update the Operator when a new version is available.
            *   The **Manual** strategy requires a user with appropriate credentials to approve the Operator update.
        1.  Click **Install**.

**Verification**

1.  Navigate to **Ecosystem** -> **Installed Operators**.
1.  Verify that **{{ secondary_scheduler_operator_full }}** is listed with a **Status** of **Succeeded**.