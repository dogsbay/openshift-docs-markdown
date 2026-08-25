{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing the Grafana console {id="ossm-access-grafana_{{ context }}"}

Grafana is an analytics tool you can use to view, query, and analyze your service mesh metrics. In this example, `istio-system` is the {{ SMProductShortName }} control plane namespace. To access Grafana, do the following:

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Click the **Project** menu and select the project where you installed the {{ SMProductShortName }} control plane, for example **istio-system**.
1.  Click **Routes**.
1.  Click the link in the **Location** column for the **Grafana** row.
1.  Log in to the Grafana console with your {{ product_title }} credentials.