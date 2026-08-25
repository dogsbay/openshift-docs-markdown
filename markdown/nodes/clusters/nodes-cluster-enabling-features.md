---
title: Enabling features using feature gates
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-cluster-enabling" %}
{% include "./_attributes/common-attributes.md" %}
# Enabling features using feature gates {id="nodes-cluster-enabling-features"}

As an administrator, you can use feature gates to enable features that are not part of the default set of features so that you can use these non-default features in your cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-enabling-features-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-enabling-features-install.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-enabling-features-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-enabling-features-cli.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_nodes-cluster-enabling" ._additional-resources}

*   [Shared Resources CSI Driver and Build CSI Volumes in OpenShift Builds](/cicd/builds/running-entitled-builds#builds-running-entitled-builds-with-sharedsecret-objects_running-entitled-builds)
*   [CSI inline ephemeral volumes](/storage/container_storage_interface/ephemeral-storage-csi-inline#ephemeral-storage-csi-inline)
*   [Managing machines with the Cluster API](/machine_management/cluster_api_machine_management/cluster-api-about#cluster-api-about)
*   [Disabling the {{ insights_operator }} gather operations](/support/remote_health_monitoring/using-insights-operator#disabling-insights-operator-gather_using-insights-operator)
*   [Enabling the {{ insights_operator }} gather operations](/support/remote_health_monitoring/using-insights-operator#enabling-insights-operator-gather_using-insights-operator)
*   [Running an {{ insights_operator }} gather operation](/support/remote_health_monitoring/using-insights-operator#running-insights-operator-gather_using-insights-operator)
*   [Managing the default storage class](/storage/container_storage_interface/persistent-storage-csi-sc-manage#persistent-storage-csi-sc-manage)
*   [Pod security admission enforcement](/authentication/understanding-and-managing-pod-security-admission#understanding-and-managing-pod-security-admission)