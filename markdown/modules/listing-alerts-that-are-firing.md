{%- set _mod_docs_content_type = "PROCEDURE" %}
# Listing alerts that are firing {id="listing-alerts-that-are-firing_{{ context }}"}

Alerts provide notifications when a set of defined conditions are true in an {{ product_title }} cluster. The Alerting UI in the {{ product_title }} web console displays alerts that are firing and provides detailed information about each alert. {._abstract}

**Prerequisites**

*   You have access to the {{ product_title }} web console.
*   You have access to the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  In the **Administrator** perspective, navigate to the **Observe** -> **Alerting** -> **Alerts** page.
1.  Review the alerts that are firing, including their **Severity**, **State**, and **Source**. Use this information to identify which alerts require immediate attention.
1.  Select an alert to view more detailed information in the **Alert Details** page.