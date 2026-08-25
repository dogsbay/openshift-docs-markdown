---
title: Configuring the {{ oadp_full }} with {{ ibm_cloud_title }}
---

# Configuring the {{ oadp_full }} with {{ ibm_cloud_title }} {#installing-oadp-ibm-cloud}

You install the {{ oadp_first }} Operator on an {{ ibm_cloud_title }} cluster to back up and restore applications on the cluster. You configure {{ ibm_cloud_object_storage }} to store the backups.

{% include "./modules/configuring-ibm-cos.md" %} {% include "./modules/oadp-creating-default-secret.md" %} {% include "./modules/oadp-secrets-for-different-credentials.md" %} {% include "./modules/oadp-installing-dpa-1-3.md" %} {% include "./modules/oadp-setting-resource-limits-and-requests.md" %} {% include "./modules/oadp-configuring-node-agents.md" %} {% include "./modules/oadp-configuring-client-burst-qps.md" %} {% include "./modules/oadp-configuring-node-agent-load-affinity.md" %} {% include "./modules/oadp-node-agent-load-affinity-guidelines.md" %} {% include "./modules/oadp-configuring-node-agent-load-concurrency.md" %} {% include "./modules/oadp-configuring-repository-maintenance.md" %} {% include "./modules/oadp-configuring-velero-load-affinity.md" %} {% include "./modules/oadp-configuring-imagepullpolicy.md" %}
