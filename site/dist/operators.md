---
title: Operators overview
---

# Operators overview {#operators-overview}

Operators are the foundational control plane extensions of OpenShift Container Platform. Operators are the preferred method to package, deploy, and manage services on the control plane, and to support your applications.

Operators integrate with Kubernetes APIs and CLI tools such as `kubectl` and the {{ oc_first }}. They provide the means of monitoring applications, performing health checks, managing over-the-air (OTA) updates, and ensuring that applications remain in your specified state.

Operators are designed specifically for Kubernetes-native applications to implement and automate common Day 1 operations, such as installation and configuration. Operators can also automate Day 2 operations, such as autoscaling up or down and creating backups. All of these activities are directed by a piece of software running on your cluster.

While both follow similar Operator concepts and goals, Operators in OpenShift Container Platform are managed by two different systems, depending on their purpose:

Cluster Operators
:   Managed by the Cluster Version Operator (CVO) and installed by default to perform cluster functions.

Optional add-on Operators
:   Managed by Operator Lifecycle Manager (OLM) and can be made accessible for users to run in their applications. Also known as *OLM-based Operators*.

**Additional resources**

- [Manage custom catalogs](/openshift-docs-markdown/operators/admin/olm-managing-custom-catalogs#olm-managing-custom-catalogs)
- [Machine deletion lifecycle hook examples for Operator developers](/openshift-docs-markdown/machine_management/deleting-machine#machine-lifecycle-hook-deletion-uses_deleting-machine)
- [Install and subscribe an Operator to your namespace](/openshift-docs-markdown/operators/user/olm-installing-operators-in-namespace#olm-installing-operators-in-namespace)
- [Allow non-cluster administrators to install Operators](/openshift-docs-markdown/operators/admin/olm-creating-policy#olm-creating-policy)
- [Install an Operator from the software catalog](/openshift-docs-markdown/operators/user/olm-installing-operators-in-namespace#olm-installing-operators-in-namespace)
- [Using Operator Lifecycle Manager in disconnected environments](/openshift-docs-markdown/disconnected/using-olm#olm-restricted-networks)
- [Cluster Operators reference](/openshift-docs-markdown/operators/operator-reference#operator-reference)
- [Create an application from an installed Operator through the web console](/openshift-docs-markdown/operators/user/olm-creating-apps-from-installed-operators#olm-creating-apps-from-installed-operators)
- [View Operator status](/openshift-docs-markdown/operators/admin/olm-status#olm-status)
- [Manage Operator conditions](/openshift-docs-markdown/operators/admin/olm-managing-operatorconditions#olm-managing-operatorconditions)
- [Upgrade installed Operators](/openshift-docs-markdown/operators/admin/olm-upgrading-operators#olm-upgrading-operators)
- [Delete installed Operators](/openshift-docs-markdown/operators/admin/olm-deleting-operators-from-cluster#olm-deleting-operators-from-a-cluster)
- [Configure proxy support](/openshift-docs-markdown/operators/admin/olm-configuring-proxy-support#olm-configuring-proxy-support)
- [What are Operators?](/openshift-docs-markdown/operators/understanding/olm-what-operators-are#olm-what-operators-are)
