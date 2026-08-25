---
title: Preparing to update to OpenShift Container Platform 4.22
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Preparing to update to {{ product_title }} {{ product_version }} {id="updating-cluster-prepare"}
{%- set context = "updating-cluster-prepare" %}

Before you update your {{ product_title }} cluster, complete the required administrative tasks and review best practices to minimize disruption and avoid update failures. {._abstract}

## Kubernetes API removals {id="kube-api-removals_{{ context }}"}

There are no Kubernetes API removals in this release.

{% leveloffset +1 %}{% include "./modules/update-preparing-azure-vsphere-ack.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Disabling boot image management](/nodes/nodes/nodes-update-boot-images#mco-update-boot-images-disable_nodes-update-boot-images)

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp or openshift_origin) %}
{% leveloffset +1 %}{% include "./modules/about-self-service-tsr.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/update-preparing-conditional.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Evaluation of update availability](/updating/understanding_updates/how-updates-work#update-evaluate-availability_how-updates-work)

{% leveloffset +1 %}{% include "./modules/update-etcd-backup.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Backing up etcd](/backup_and_restore/control_plane_backup_and_restore/backing-up-etcd#backup-etcd)
*   [Restoring to an earlier cluster state](/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-2-restoring-cluster-state#dr-restoring-cluster-state)

{% leveloffset +1 %}{% include "./modules/oc-adm-upgrade-recommend.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oc-adm-upgrade-recommend-custom-alert.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oc-adm-upgrade-recommend-accept.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ingress-gateway-api-manage-succession.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Gateway API implementation for {{ product_title }}](/networking/ingress_load_balancing/configuring_gateway_api/understand-gateway-api#gateway-api-implementation-specifics_understand-gateway-api)

{% leveloffset +1 %}{% include "./modules/update-best-practices.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding cluster Operator condition types](/updating/understanding_updates/intro-to-updates#understanding_clusteroperator_conditiontypes_understanding-openshift-updates)

{% leveloffset +1 %}{% include "./modules/minimizing-worker-node-deployment-time.md" %}{% endleveloffset %}