---
title: Installing Operators in your namespace
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing Operators in your namespace {id="olm-installing-operators-in-namespace"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "olm-installing-operators-in-namespace" %}

If a cluster administrator has delegated Operator installation permissions to your account, you can install and subscribe an Operator to your namespace in a self-service manner.

## Prerequisites {id="olm-installing-operators-in-namespace-prereqs"}

*   A cluster administrator must add certain permissions to your {{ product_title }} user account to allow self-service Operator installation to a namespace.

{% if openshift_origin %}
*   Ensure that you have downloaded the {{ cluster_manager_url_pull }} as shown in _Obtaining the installation program_ in the installation documentation for your platform.

    If you have the pull secret, add the `redhat-operators` catalog to the `OperatorHub` custom resource (CR) as shown in _Configuring {{ product_title }} to use Red Hat Operators_.
{% endif %}

{% leveloffset +1 %}{% include "./modules/olm-installing-operators-from-software-catalog.md" %}{% endleveloffset %}

**Additional resources**

*   [Allowing non-cluster administrators to install Operators](/operators/admin/olm-creating-policy#olm-creating-policy)
*   [Understanding the software catalog](/operators/understanding/olm-understanding-software-catalog#olm-understanding-software-catalog)

{% leveloffset +1 %}{% include "./modules/olm-installing-from-software-catalog-using-web-console.md" %}{% endleveloffset %}

{% if openshift_enterprise or openshift_webscale or openshift_origin %}
{% leveloffset +1 %}{% include "./modules/olm-installing-from-software-catalog-using-cli.md" %}{% endleveloffset %}

**Additional resources**

*   [Operator groups](/operators/understanding/olm/olm-understanding-olm#olm-operatorgroups-about_olm-understanding-olm)
*   [Channel names](/operators/understanding/olm/olm-understanding-olm#olm-subscription_olm-understanding-olm)

**Additional resources**

*   [Manually approving a pending Operator update](/operators/admin/olm-upgrading-operators#olm-approving-pending-upgrade_olm-upgrading-operators)
{% endif %}