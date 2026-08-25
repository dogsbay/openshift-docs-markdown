{%- set _mod_docs_content_type = "PROCEDURE" %}

# Silencing alerts {id="silencing-alerts_{{ context }}"}

You can silence a specific alert or silence alerts that match a specification that you define.

**Prerequisites**

{% if not (openshift_dedicated or openshift_rosa) %}
*   If you are a cluster administrator, you have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_dedicated or openshift_rosa %}
*   If you are a cluster administrator, you have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   If you are a non-administrator user, you have access to the cluster as a user with the following user roles:
    *   The `cluster-monitoring-view` cluster role, which allows you to access Alertmanager.
    *   The `monitoring-alertmanager-edit` role, which permits you to create and silence alerts.

**Procedure**

To silence a specific alert:

1.  In the {{ product_title }} web console, go to **Observe** → **Alerting** → **Alerts**.
1.  For the alert that you want to silence, click {{ kebab }} and select **Silence alert** to open the **Silence alert** page with a default configuration for the chosen alert.
1.  Optional: Change the default configuration details for the silence.

    :::note

    You must add a comment before saving a silence.
    
    :::

1.  To save the silence, click **Silence**.

To silence a set of alerts:

1.  In the {{ product_title }} web console, go to **Observe** → **Alerting** → **Silences**.
1.  Click **Create silence**.
1.  On the **Create silence** page, set the schedule, duration, and label details for an alert.

    :::note

    You must add a comment before saving a silence.
    
    :::

1.  To create silences for alerts that match the labels that you entered, click **Silence**.