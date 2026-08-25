{%- set _mod_docs_content_type = "PROCEDURE" %}
# Reviewing monitoring dashboards as a developer {id="reviewing-monitoring-dashboards-developer_{{ context }}"}

As a developer, you can view dashboards relating to projects you have permissions for.

{% include "./snippets/snip-unified-perspective-web-console.md" %}

**Prerequisites**

*   You have access to the cluster as a developer or as a user.
*   You have view permissions for the project that you are viewing the dashboard for.
*   A cluster administrator has [enabled the **Developer** perspective](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html-single/web_console/index#enabling-developer-perspective_web-console_web-console-overview) in the web console.

**Procedure**

1.  In the **Developer** perspective of the {{ product_title }} web console, click **Observe** and go to the **Dashboards** tab.
1.  Select a project from the **Project:** drop-down list.
1.  Select a dashboard from the **Dashboard** drop-down list to see the filtered metrics.
1.  Optional: Select a time range for the graphs in the **Time range** list.
    *   Select a predefined time period.
    *   Set a custom time range by clicking **Custom time range** in the **Time range** list.
        1.  Input or select the **From** and **To** dates and times.
        1.  Click **Save** to save the custom time range.
1.  Optional: Select a **Refresh interval**.
1.  Hover over each of the graphs within a dashboard to display detailed information about specific items.