{% if context == "operator-reference" %}
{%- set operators = true -%}
{% endif %}
{% if context == "cluster-capabilities" %}
{%- set cluster_caps = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
{% if not operators %}
{% if not cluster_caps %}
# What is {{ olmv0_first }}? {id="olm-overview_{{ context }}"}

{% endif %}
{% endif %}
{% if cluster_caps %}
# {{ olmv0_first }} capability {id="_olmv0_first_capability"}

{% endif %}

{% if cluster_caps %}
{{ olmv0 }} provides the features for the `OperatorLifecycleManager` capability. {._abstract}
{% endif %}

{{ olmv0_first }} helps users install, update, and manage the lifecycle of Kubernetes native applications (Operators) and their associated services running across their {{ product_title }} clusters. {{ olmv0_first }} forms part of the Operator Framework, an open source toolkit designed to manage Operators in an effective, automated, and scalable way.

{% if not cluster_caps %}

**Figure 1. {{ olmv0 }} workflow**

![olm-workflow](/images/olm-workflow.png)

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
OLM runs by default in {{ product_title }} {{ product_version }}, which aids cluster administrators
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
OLM runs by default in {{ product_title }}, which aids administrators with the `dedicated-admin` role
{%- endif %}
in installing, upgrading, and granting access to Operators running on their cluster. The {{ product_title }} web console provides management screens for
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
cluster administrators
{%- endif %}
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
`dedicated-admin` administrators
{%- endif %}
to install Operators, as well as grant specific projects access to use the catalog of Operators available on the cluster.

For developers, a self-service experience allows provisioning and configuring instances of databases, monitoring, and big data services without having to be subject matter experts, because the Operator has that knowledge baked into it.
{% endif %}

{% if cluster_caps %}
If an Operator requires any of the following APIs, then you must enable the `OperatorLifecycleManager` capability:

*   `ClusterServiceVersion`
*   `CatalogSource`
*   `Subscription`
*   `InstallPlan`
*   `OperatorGroup`


:::important

The `marketplace` capability depends on the `OperatorLifecycleManager` capability. You cannot disable the `OperatorLifecycleManager` capability and enable the `marketplace` capability.

:::

{% endif %}

{% if context == "operator-reference" %}
{%- set operators = "" -%}
{% endif %}

{% if context == "cluster-caps" %}
{%- set cluster_caps = "" -%}
{% endif %}