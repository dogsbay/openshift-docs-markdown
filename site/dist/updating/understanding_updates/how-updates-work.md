---
title: How cluster updates work
---

# How cluster updates work {#how-updates-work}

The Cluster Version Operator (CVO) is the primary component that orchestrates the OpenShift Container Platform update process. During standard cluster operation, the CVO compares manifests of cluster Operators to in-cluster resources and reconciles discrepancies between the actual state of these resources and their desired state.

The following sections describe each major aspect of the OpenShift Container Platform (OCP) update process in detail. For a general overview of how updates work, see the [Introduction to OpenShift updates](/openshift-docs-markdown/updating/understanding_updates/intro-to-updates#understanding-openshift-updates).

**Additional resources**

- [Update recommendation removals and Conditional Updates](/openshift-docs-markdown/updating/understanding_updates/understanding-update-channels-release#conditional-updates-overview_understanding-update-channels-releases)

**Additional resources**

- [Understanding OpenShift Container Platform update duration](/openshift-docs-markdown/updating/understanding_updates/understanding-openshift-update-duration#understanding-openshift-update-duration)

**Additional resources**

- [Machine Config Overview](/openshift-docs-markdown/machine_configuration/index#machine-config-overview)
