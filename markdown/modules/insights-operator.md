{% if context == "cluster-capabilities" %}
{%- set cluster_caps = true -%}
{% endif %}

{% if context == "operator-reference" %}
{%- set operator_ref = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
{% if operator_ref %}
# Insights Operator {id="insights-operator_{{ context }}"}
{% endif %}
{% if cluster_caps %}
# Insights capability {id="_insights_capability"}
{% endif %}

{%- if operator_ref %}
The {{ insights_operator }} is an optional cluster capability that can be disabled by cluster administrators during installation. For more information about optional cluster capabilities, see "Cluster capabilities" in _Installing_.
{% endif %} {._abstract}

{% if cluster_caps %}
The {{ insights_operator }} provides the features for the `Insights` capability.
{% endif %}

The {{ insights_operator }} gathers {{ product_title }} configuration data and sends it to Red&#160;Hat. The data is used to produce proactive insights recommendations about potential issues that a cluster might be exposed to. These insights are communicated to cluster administrators through the {{ red_hat_lightspeed }} advisor service on [console.redhat.com](https://console.redhat.com/).

{% if operator_ref %}

Project
:   `insights-operator`


Configuration
:   No configuration is required.
{% endif %}


Notes
:   {{ insights_operator }} complements {{ product_title }} Telemetry.

{% if context == "operator-reference" %}
{%- set operator_ref = false -%}
{% endif %}

{% if context == "cluster-caps" %}
{%- set cluster_caps = false -%}
{% endif %}