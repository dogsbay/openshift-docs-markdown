---
title: Operators overview
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Operators overview {id="operators-overview"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "operators-overview" %}

Operators are the foundational control plane extensions of {{ product_title }}. Operators are the preferred method to package, deploy, and manage services on the control plane, and to support your applications.

Operators integrate with Kubernetes APIs and CLI tools such as `kubectl` and the {{ oc_first }}. They provide the means of monitoring applications, performing health checks, managing over-the-air (OTA) updates, and ensuring that applications remain in your specified state.

Operators are designed specifically for Kubernetes-native applications to implement and automate common Day 1 operations, such as installation and configuration. Operators can also automate Day 2 operations, such as autoscaling up or down and creating backups. All of these activities are directed by a piece of software running on your cluster.

While both follow similar Operator concepts and goals, Operators in {{ product_title }} are managed by two different systems, depending on their purpose:


Cluster Operators
:   Managed by the Cluster Version Operator (CVO) and installed by default to perform cluster functions.

Optional add-on Operators
:   Managed by Operator Lifecycle Manager (OLM) and can be made accessible for users to run in their applications. Also known as _OLM-based Operators_.

{% leveloffset +1 %}{% include "./modules/operators-overview-tasks.md" %}{% endleveloffset %}

**Additional resources**

*   [Manage custom catalogs](/operators/admin/olm-managing-custom-catalogs#olm-managing-custom-catalogs)
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Machine deletion lifecycle hook examples for Operator developers](/machine_management/deleting-machine#machine-lifecycle-hook-deletion-uses_deleting-machine)
*   [Install and subscribe an Operator to your namespace](/operators/user/olm-installing-operators-in-namespace#olm-installing-operators-in-namespace)
*   [Allow non-cluster administrators to install Operators](/operators/admin/olm-creating-policy#olm-creating-policy)
*   [Install an Operator from the software catalog](/operators/user/olm-installing-operators-in-namespace#olm-installing-operators-in-namespace)
*   [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)
*   [Cluster Operators reference](/operators/operator-reference#operator-reference)
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   [Install an Operator from the software catalog](/operators/admin/olm-adding-operators-to-cluster#olm-installing-operators-from-software-catalog_olm-adding-operators-to-a-cluster)
{%- endif %}
*   [Create an application from an installed Operator through the web console](/operators/user/olm-creating-apps-from-installed-operators#olm-creating-apps-from-installed-operators)
*   [View Operator status](/operators/admin/olm-status#olm-status)
*   [Manage Operator conditions](/operators/admin/olm-managing-operatorconditions#olm-managing-operatorconditions)
*   [Upgrade installed Operators](/operators/admin/olm-upgrading-operators#olm-upgrading-operators)
*   [Delete installed Operators](/operators/admin/olm-deleting-operators-from-cluster#olm-deleting-operators-from-a-cluster)
*   [Configure proxy support](/operators/admin/olm-configuring-proxy-support#olm-configuring-proxy-support)
*   [What are Operators?](/operators/understanding/olm-what-operators-are#olm-what-operators-are)