{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing the Elasticsearch and OpenShift Logging dashboards {id="cluster-logging-dashboards-access_{{ context }}"}

You can view the **Logging/Elasticsearch Nodes** and **OpenShift Logging** dashboards in the
{%- if not (openshift_rosa or openshift_dedicated) %}
{{ product_title }} web console.
{%- endif %}
{%- if openshift_rosa or openshift_dedicated %}
{{ cluster_manager_url }}.
{%- endif %}

**Procedure**

To launch the dashboards:

{% if not (openshift_rosa or openshift_dedicated) %}
1.  In the {{ product_title }} web console, click **Observe** → **Dashboards**.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
1.  In the {{ product_title }} {{ hybrid_console }}, click **Observe** → **Dashboards**.
{% endif %}
1.  On the **Dashboards** page, select **Logging/Elasticsearch Nodes** or **OpenShift Logging** from the **Dashboard** menu.

    For the **Logging/Elasticsearch Nodes** dashboard, you can select the Elasticsearch node you want to view and set the data resolution.

    The appropriate dashboard is displayed, showing multiple charts of data.
1.  Optional: Select a different time range to display or refresh rate for the data from the **Time Range** and **Refresh Interval** menus.