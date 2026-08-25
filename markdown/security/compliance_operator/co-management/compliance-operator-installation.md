---
title: Installing the Compliance Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing the Compliance Operator {id="compliance-operator-installation"}
{%- set context = "compliance-operator-installation" %}

Before you can use the Compliance Operator, you must ensure it is deployed in the cluster. {._abstract}


:::important

All cluster nodes must have the same release version in order for this Operator to function properly.
As an example, for nodes running {{ op_system }}, all nodes must have the same {{ op_system }} version.

:::



:::important

The Compliance Operator might report incorrect results on managed platforms, such as OpenShift Dedicated, Red&#160;Hat OpenShift Service on AWS Classic, and Microsoft Azure Red&#160;Hat OpenShift. For more information, see the Knowledgebase article on Compliance Operator reports on Managed Services.

:::



:::important

Before deploying the Compliance Operator, you are required to define persistent storage in your cluster to store the raw results output. For more information, see "Persistent storage overview" and "Managing the default storage class".

:::



:::important

If the `restricted` Security Context Constraints (SCC) have been modified to contain the `system:authenticated` group or has added `requiredDropCapabilities`, the Compliance Operator might not function properly due to permissions issues. You can create a custom SCC for the Compliance Operator scanner pod service account. For more information, see Additional resources.

:::


{% leveloffset +1 %}{% include "./modules/compliance-operator-console-installation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-operator-cli-installation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-operator-rosa-installation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-operator-hcp-install.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Compliance Operator reports incorrect results on Managed Services](https://access.redhat.com/solutions/6983418)
*   [Persistent storage overview](/storage/understanding-persistent-storage#persistent-storage-overview_understanding-persistent-storage)
*   [Managing the default storage class](/storage/container_storage_interface/persistent-storage-csi-sc-manage#persistent-storage-csi-sc-manage)
*   [Creating a custom SCC for the Compliance Operator](/security/compliance_operator/co-scans/compliance-operator-advanced#compliance-custom-scc_compliance-advanced)
*   [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)