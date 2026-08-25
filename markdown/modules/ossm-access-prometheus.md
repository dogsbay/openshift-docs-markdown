{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing the Prometheus console {id="ossm-access-prometheus_{{ context }}"}

Prometheus is a monitoring and alerting tool that you can use to collect multi-dimensional data about your microservices. In this example, `istio-system` is the {{ SMProductShortName }} control plane namespace.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Click the **Project** menu and select the project where you installed the {{ SMProductShortName }} control plane, for example **istio-system**.
1.  Click **Routes**.
1.  Click the link in the **Location** column for the **Prometheus** row.
1.  Log in to the Prometheus console with your {{ product_title }} credentials.