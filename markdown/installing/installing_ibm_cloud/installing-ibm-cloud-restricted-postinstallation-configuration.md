---
title: "Postinstallation configuration for a disconnected {{ ibm_cloud_title }} cluster"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Postinstallation configuration for a disconnected {{ ibm_cloud_title }} cluster {id="installing-ibm-cloud-restricted-postinstallation-configuration"}
{%- set context = "installing-ibm-cloud-restricted-postinstallation-configuration" %}

After you install a cluster on {{ ibm_cloud_name }} in a disconnected environment, you must complete the postinstallation configuration steps to prepare the cluster for use. {._abstract}

{% leveloffset +1 %}{% include "./modules/olm-restricted-networks-configuring-operatorhub.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oc-mirror-updating-restricted-cluster-manifests.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_installing-ibm-cloud-restricted-postinstallation" ._additional-resources}

*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)