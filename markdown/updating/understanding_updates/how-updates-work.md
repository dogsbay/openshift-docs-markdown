---
title: How cluster updates work
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# How cluster updates work {id="how-updates-work"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "how-updates-work" %}

The Cluster Version Operator (CVO) is the primary component that orchestrates the {{ product_title }} update process.
During standard cluster operation, the CVO compares manifests of cluster Operators to in-cluster resources and reconciles discrepancies between the actual state of these resources and their desired state.

The following sections describe each major aspect of the {{ product_title }} (OCP) update process in detail. For a general overview of how updates work, see the [Introduction to OpenShift updates](/updating/understanding_updates/intro-to-updates#understanding-openshift-updates).

{% leveloffset +1 %}{% include "./modules/update-cluster-version-object.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/update-evaluate-availability.md" %}{% endleveloffset %}

**Additional resources**

*   [Update recommendation removals and Conditional Updates](/updating/understanding_updates/understanding-update-channels-release#conditional-updates-overview_understanding-update-channels-releases)

{% leveloffset +1 %}{% include "./modules/update-release-images.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/update-process-workflow.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/update-manifest-application.md" %}{% endleveloffset %}

**Additional resources**

*   [Understanding {{ product_title }} update duration](/updating/understanding_updates/understanding-openshift-update-duration#understanding-openshift-update-duration)

{% leveloffset +1 %}{% include "./modules/update-mco-process.md" %}{% endleveloffset %}

**Additional resources**

*   [Machine Config Overview](/machine_configuration/index#machine-config-overview)