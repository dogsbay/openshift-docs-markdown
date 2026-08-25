{%- if context == "operator-reference" %}
{%- set operator_ref = true -%}
{% endif %}

{% if context == "cluster-capabilities" %}
{%- set cluster_caps = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
{% if operator_ref %}
# Console Operator {id="console-operator_{{ context }}"}
{% endif %}
{% if cluster_caps %}
# Console capability {id="_console_capability"}
{% endif %}

{%- if operator_ref %}
The Console Operator is an optional cluster capability that can be disabled by cluster administrators during installation. If you disable the Console Operator at installation, your cluster is still supported and upgradable.  {._abstract}

For more information about optional cluster capabilities, see "Cluster capabilities".
{% endif %}

{% if cluster_caps %}
The Console Operator provides the features for the `Console` capability.
{% endif %}

The Console Operator installs and maintains the {{ product_title }} web console on a cluster. The Console Operator is installed by default and automatically maintains a console.

{% if operator_ref %}


Project
:   See "console-operator".

{% endif %}

{% if context == "operator-reference" %}
{%- set operator_ref = false -%}
{% endif %}
{% if context == "cluster-capabilities" %}
{%- set cluster_caps = false -%}
{% endif %}