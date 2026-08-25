{%- set _mod_docs_content_type = "PROCEDURE" %}

# Expiring silences {id="expiring-silences_{{ context }}"}

You can expire a single silence or multiple silences. Expiring a silence deactivates it permanently.


:::note

You cannot delete expired, silenced alerts.
Expired silences older than 120 hours are garbage collected.

:::


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

1.  Go to **Observe** → **Alerting** → **Silences**.
1.  For the silence or silences you want to expire, select the checkbox in the corresponding row.
1.  Click **Expire 1 silence** to expire a single selected silence or **Expire _&lt;n>_ silences** to expire multiple selected silences, where _&lt;n>_ is the number of silences you selected.

    Alternatively, to expire a single silence you can click **Actions** and select **Expire silence** on the **Silence details** page for a silence.