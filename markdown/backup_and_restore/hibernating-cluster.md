---
title: Hibernating an OpenShift Container Platform cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Hibernating an {{ product_title }} cluster {id="hibernating-cluster"}
{%- set context = "hibernating-cluster" %}

Hibernate your {{ product_title }} cluster for up to 90 days to pause cluster operation without deprovisioning it. You can resume the cluster within that window to restore normal operation. {._abstract}

{% leveloffset +1 %}{% include "./modules/hibernating-cluster-about.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Enabling OpenShift 4 Clusters to Stop and Resume Cluster VMs (Red Hat Blog)](https://www.redhat.com/en/blog/enabling-openshift-4-clusters-to-stop-and-resume-cluster-vms)

{% leveloffset +1 %}{% include "./modules/hibernating-cluster-hibernate.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Backing up etcd](/backup_and_restore/control_plane_backup_and_restore/backing-up-etcd#backup-etcd)
*   [Restoring to an earlier cluster state](/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-2-restoring-cluster-state#dr-restoring-cluster-state)

{% leveloffset +1 %}{% include "./modules/hibernating-cluster-resume.md" %}{% endleveloffset %}