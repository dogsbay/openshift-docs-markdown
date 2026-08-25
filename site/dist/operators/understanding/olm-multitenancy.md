---
title: Operators in multitenant clusters
---

# Operators in multitenant clusters {#olm-multitenancy}

The default behavior for Operator Lifecycle Manager (OLM) aims to provide simplicity during Operator installation. However, this behavior can lack flexibility, especially in multitenant clusters. In order for multiple tenants on an OpenShift Container Platform

cluster to use an Operator, the default behavior of OLM requires that administrators install the Operator in **All namespaces** mode, which can be considered to violate the principle of least privilege.

Consider the following scenarios to determine which Operator installation workflow works best for your environment and requirements.

**Additional resources**

- [Common terms: Multitenant](/openshift-docs-markdown/operators/understanding/olm-common-terms#olm-common-terms-multitenancy_olm-common-terms)
- [Limitations for multitenant Operator management](/openshift-docs-markdown/operators/understanding/olm/olm-understanding-operatorgroups#olm-operatorgroups-limitations)

**Additional resources**

- [Adding Operators to a cluster](/openshift-docs-markdown/operators/admin/olm-adding-operators-to-cluster#olm-adding-operators-to-a-cluster)
- [Install modes types](/openshift-docs-markdown/operators/understanding/olm/olm-understanding-operatorgroups#olm-operatorgroups-membership_olm-understanding-operatorgroups)

**Additional resources**

- [Preparing for multiple instances of an Operator for multitenant clusters](/openshift-docs-markdown/operators/admin/olm-adding-operators-to-cluster#olm-preparing-operators-multitenant_olm-adding-operators-to-a-cluster)
- [Allowing non-cluster administrators to install Operators](/openshift-docs-markdown/operators/admin/olm-creating-policy#olm-creating-policy)
- [Disabling the default OperatorHub catalog sources](/openshift-docs-markdown/operators/admin/olm-managing-custom-catalogs#olm-restricted-networks-operatorhub_olm-managing-custom-catalogs)

**Additional resources**

- [Multitenancy and Operator colocation](/openshift-docs-markdown/operators/understanding/olm/olm-colocation#olm-colocation)
