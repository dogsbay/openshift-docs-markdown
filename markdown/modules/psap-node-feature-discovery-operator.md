{% if context == "operator-reference" %}
{%- set operators = true -%}
{% endif %}
{% if context == "psap-node-feature-discovery-operator" %}
{%- set perf = true -%}
{% endif %}
{%- set _mod_docs_content_type = "CONCEPT" %}
{% if operators %}
# Node Feature Discovery Operator {id="about-node-feature-discovery-operator_{{ context }}"}

{% endif %}
{% if perf %}
# About the Node Feature Discovery Operator {id="_about_the_node_feature_discovery_operator"}

{% endif %}
You can use the Node Feature Discovery Operator (NFD) to detect hardware features and system configuration on cluster nodes, labeling them with attributes such as PCI cards, kernel version, and CPU capabilities. These labels enable workload scheduling based on hardware requirements. {._abstract}

The NFD Operator can be found on the OperatorHub by searching for “Node Feature Discovery”.
{%- if operators %}

**Additional resources**
{._additional-resources}

*   [cluster-nfd-operator](https://github.com/openshift/cluster-nfd-operator)
{%- endif %}