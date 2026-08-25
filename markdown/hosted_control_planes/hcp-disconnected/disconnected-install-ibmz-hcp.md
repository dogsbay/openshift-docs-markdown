---
title: "Deploying {{ hcp }} on {{ ibm_z_title }} in a disconnected environment"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Deploying {{ hcp }} on {{ ibm_z_title }} in a disconnected environment {id="disconnected-install-ibmz-hcp"}
{%- set context = "disconnected-install-ibmz-hcp" %}

{{ hcp_capital }} deployments in disconnected environments function differently than in a standalone {{ product_title }}.

{{ hcp_capital }} involves two distinct environments:

*   Control plane: Located in the management cluster, where the {{ hcp }} pods are run and managed by the Control Plane Operator.
*   Data plane: Located in the workers of the hosted cluster, where the workload and a few other pods run, managed by the Hosted Cluster Config Operator.

The `ImageContentSourcePolicy` (ICSP) custom resource for the data plane is managed through the `ImageContentSources` API in the hosted cluster manifest.

For the control plane, ICSP objects are managed in the management cluster. These objects are parsed by the HyperShift Operator and are shared as `registry-overrides` entries with the Control Plane Operator. These entries are injected into any one of the available  deployments in the {{ hcp }} namespace as an argument.

To work with disconnected registries in the {{ hcp }}, you must first create the appropriate ICSP in the management cluster. Then, to deploy disconnected workloads in the data plane, you need to add the entries that you want into the `ImageContentSources` field in the hosted cluster manifest.

{% leveloffset +1 %}{% include "./modules/hcp-ibm-z-dc-prereqs.md" %}{% endleveloffset %}

**Additional resources**

*   [Mirror registry for Red&#160;Hat OpenShift introduction](/disconnected/installing-mirroring-creating-registry#mirror-registry-introduction_installing-mirroring-creating-registry)
*   [Mirroring images for a disconnected installation by using the oc-mirror plugin v2](/disconnected/about-installing-oc-mirror-v2#about-installing-oc-mirror-v2)

{% leveloffset +1 %}{% include "./modules/hcp-ibm-z-adding-credentials-registry.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-ibm-z-update-reg-ca.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-ibm-z-adding-reg-ca-hostedcluster.md" %}{% endleveloffset %}