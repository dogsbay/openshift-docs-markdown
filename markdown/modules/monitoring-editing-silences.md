{%- set _mod_docs_content_type = "PROCEDURE" %}

# Editing silences  {id="editing-silences_{{ context }}"}

You can edit a silence, which expires the existing silence and creates a new one with the changed configuration.

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

1.  In the {{ product_title }} web console, go to **Observe** -> **Alerting** -> **Silences**.
1.  For the silence you want to modify, click {{ kebab }} and select **Edit silence**.

    Alternatively, you can click **Actions** and select **Edit silence** on the **Silence details** page for a silence.
1.  On the **Edit silence** page, make changes and click **Silence**. Doing so expires the existing silence and creates one with the updated configuration.