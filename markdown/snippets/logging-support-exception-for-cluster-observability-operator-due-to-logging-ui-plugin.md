{%- set _mod_docs_content_type = "SNIPPET" %}


:::important

Until the approaching General Availability (GA) release of the Cluster Observability Operator (COO), which is currently in [Technology Preview](https://access.redhat.com/support/offerings/techpreview/) (TP), Red&#160;Hat provides support to customers who are using Logging 6.0 or later with the COO for its&#160;
{%- if not (openshift_rosa or openshift_rosa_hcp) %}
[Logging UI Plugin](https://docs.redhat.com/en/documentation/red_hat_openshift_cluster_observability_operator/1-latest/html/ui_plugins_for_red_hat_openshift_cluster_observability_operator/logging-ui-plugin#coo-logging-ui-plugin-install_logging-ui-plugin)&#160;
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp %}
Logging UI Plugin&#160;
{%- endif %}
on {{ product_title }} 4.14 or later. This support exception is temporary as the COO includes several independent features, some of which are still TP features, but the Logging UI Plugin is ready for GA.

:::