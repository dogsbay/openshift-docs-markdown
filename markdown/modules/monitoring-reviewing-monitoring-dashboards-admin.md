{%- set _mod_docs_content_type = "PROCEDURE" %}
# Reviewing monitoring dashboards as a cluster administrator {id="reviewing-monitoring-dashboards-admin_{{ context }}"}

As an administrator, you can view dashboards relating to core {{ product_title }} cluster components.

{% include "./snippets/snip-unified-perspective-web-console.md" %}

**Prerequisites**

{% if not (openshift_dedicated or openshift_rosa) %}
*   You have access to the cluster as a user with the `cluster-admin` cluster role.
{% endif %}
{% if openshift_dedicated or openshift_rosa %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{% endif %}

**Procedure**

1.  In the {{ product_title }} web console, go to **Observe** -> **Dashboards**.
1.  Choose a dashboard in the **Dashboard** list. Some dashboards, such as **etcd** and **Prometheus** dashboards, produce additional sub-menus when selected.
1.  Optional: Select a time range for the graphs in the **Time range** list.
    *   Select a predefined time period.
    *   Set a custom time range by clicking **Custom time range** in the **Time range** list.
        1.  Input or select the **From** and **To** dates and times.
        1.  Click **Save** to save the custom time range.
1.  Optional: Select a **Refresh interval**.
1.  Hover over each of the graphs within a dashboard to display detailed information about specific items.