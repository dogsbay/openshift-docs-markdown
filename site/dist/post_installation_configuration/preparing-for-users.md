---
title: Preparing for users
---

# Preparing for users {#post-install-preparing-for-users}

You can prepare your cluster for users by configuring authentication and permissions, managing initial administrative access, and making Operators available through the software catalog.

After installing OpenShift Container Platform, you can further expand and customize your cluster to your requirements, including taking steps to prepare for users.

## Understanding identity provider configuration {#post-install-understanding-identity-provider}

The OpenShift Container Platform control plane includes a built-in OAuth server. Developers and administrators obtain OAuth access tokens to authenticate themselves to the API.

As an administrator, you can configure OAuth to specify an identity provider after you install your cluster.

**Additional resources**

- [RBAC rules allow execution privileges](https://access.redhat.com/solutions/6989997)
- [Aggregated ClusterRoles (Kubernetes documentation)](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#aggregated-clusterroles)

**Additional resources**

- [Kubernetes documentation on namespaces](https://kubernetes.io/docs/tasks/administer-cluster/namespaces/)

**Additional resources**

- [Guaranteed Scheduling For Critical Add-On Pods (Kubernetes documentation)](https://kubernetes.io/docs/tasks/administer-cluster/guaranteed-scheduling-critical-addon-pods/#rescheduler-guaranteed-scheduling-of-critical-add-ons)

**Additional resources**

- [Mirroring Operator catalogs for use with disconnected clusters](/openshift-docs-markdown/disconnected/installing-mirroring-installation-images#olm-mirror-catalog_installing-mirroring-installation-images)

**Additional resources**

- [Accessing images for Operators from private registries](/openshift-docs-markdown/operators/admin/olm-managing-custom-catalogs#olm-accessing-images-private-registries_olm-managing-custom-catalogs)
- [Image template for custom catalog sources](/openshift-docs-markdown/operators/understanding/olm/olm-understanding-olm#olm-catalogsource-image-template_olm-understanding-olm)
- [Image pull policy](/openshift-docs-markdown/openshift_images/managing_images/image-pull-policy#image-pull-policy)

**Additional resources**

- [About OperatorGroups](/openshift-docs-markdown/operators/understanding/olm/olm-understanding-operatorgroups#olm-operatorgroups-about_olm-understanding-operatorgroups)
