{%- set _mod_docs_content_type = "CONCEPT" %}
# Add-on Operators {id="olm-operators_{{ context }}"}

Operator Lifecycle Manager (OLM) and the software catalog are default components in {{ product_title }} that help manage Kubernetes-native applications as Operators.  {._abstract}

Together they provide the system for discovering, installing, and managing the optional add-on Operators available on the cluster.

Using the software catalog in the {{ product_title }} web console,
{%- if not (openshift_dedicated or openshift_rosa) %}
cluster administrators
{% endif %}
{% if openshift_dedicated or openshift_rosa %}
administrators with the `dedicated-admin` role
{%- endif %}
and authorized users can select Operators to install from catalogs of Operators. 
After installing an Operator from the software catalog, you can make the Operator available globally or in specific namespaces to run in user applications.

Default catalog sources are available that include Red Hat Operators, certified Operators, and community Operators.
{%- if not (openshift_dedicated or openshift_rosa) %}
Cluster administrators
{% endif %}
{% if openshift_dedicated or openshift_rosa %}
Administrators with the `dedicated-admin` role
{%- endif %}
can also add their own custom catalog sources, which can contain a custom set of Operators.

{% if openshift_dedicated or openshift_rosa %}

:::note

All Operators listed in the Operator Hub marketplace should be available for installation. Red Hat considers these Operators as customer workloads, and are not monitored by Red Hat Site Reliability Engineering (SRE).

:::

{% endif %}


:::note

OLM does not manage the cluster Operators that comprise the {{ product_title }} architecture.

:::