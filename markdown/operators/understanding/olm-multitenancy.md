---
title: Operators in multitenant clusters
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Operators in multitenant clusters {id="olm-multitenancy"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "olm-multitenancy" %}

The default behavior for Operator Lifecycle Manager (OLM) aims to provide simplicity during Operator installation. However, this behavior can lack flexibility, especially in multitenant clusters. In order for multiple tenants on
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
an {{ product_title }}
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
a {{ product_title }}
{%- endif %}
cluster to use an Operator, the default behavior of OLM requires that administrators install the Operator in **All namespaces** mode, which can be considered to violate the principle of least privilege.

Consider the following scenarios to determine which Operator installation workflow works best for your environment and requirements.

**Additional resources**

*   [Common terms: Multitenant](/operators/understanding/olm-common-terms#olm-common-terms-multitenancy_olm-common-terms)
*   [Limitations for multitenant Operator management](/operators/understanding/olm/olm-understanding-operatorgroups#olm-operatorgroups-limitations)

{% leveloffset +1 %}{% include "./modules/olm-default-install-behavior.md" %}{% endleveloffset %}

**Additional resources**

*   [Adding Operators to a cluster](/operators/admin/olm-adding-operators-to-cluster#olm-adding-operators-to-a-cluster)
*   [Install modes types](/operators/understanding/olm/olm-understanding-operatorgroups#olm-operatorgroups-membership_olm-understanding-operatorgroups)

{% leveloffset +1 %}{% include "./modules/olm-multitenancy-solution.md" %}{% endleveloffset %}

**Additional resources**

*   [Preparing for multiple instances of an Operator for multitenant clusters](/operators/admin/olm-adding-operators-to-cluster#olm-preparing-operators-multitenant_olm-adding-operators-to-a-cluster)
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Allowing non-cluster administrators to install Operators](/operators/admin/olm-creating-policy#olm-creating-policy)
*   [Disabling the default OperatorHub catalog sources](/operators/admin/olm-managing-custom-catalogs#olm-restricted-networks-operatorhub_olm-managing-custom-catalogs)
{% endif %}

{% leveloffset +1 %}{% include "./modules/olm-multitenancy-colocation.md" %}{% endleveloffset %}

**Additional resources**

*   [Multitenancy and Operator colocation](/operators/understanding/olm/olm-colocation#olm-colocation)