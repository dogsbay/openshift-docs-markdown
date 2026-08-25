{%- set _mod_docs_content_type = "PROCEDURE" %}
# Customizing dashboard queries {id="nodes-dashboard-using-queries_{{ context }}"}

You can create your own queries by customizing the default queries used to build the node metrics dashboard. {._abstract}

**Procedure**

1.  Choose a metric and click **Inspect** to navigate into the data. This page displays the metric in detail, including an expanded visualization of the results of the query, the Prometheus query used to analyze the data, and the data subset used in the query.
1.  Make any required changes to the query parameters.
1.  Optional: Click **Add query** to run additional queries against the data.
1.  Click **Run query** to rerun the query using your specified parameters.