---
title: Updating a cluster using the CLI
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Updating a cluster using the CLI {id="updating-cluster-cli"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "updating-cluster-cli" %}

You can perform minor version and patch updates on an {{ product_title }} cluster by using the {{ oc_first }}.

{% leveloffset +1 %}{% include "./modules/updating-sno.md" %}{% endleveloffset %}

**Additional resources**

*   [About the Machine Config Operator](/architecture/control-plane#about-machine-config-operator_control-plane)

{% leveloffset +1 %}{% include "./modules/updating-cli-prereqs.md" %}{% endleveloffset %}

**Additional resources**

*   [Support policy for unmanaged Operators](/architecture/architecture-installation#unmanaged-operators_architecture-installation)
*   [Using RBAC to define and apply permissions](/authentication/using-rbac#using-rbac)
*   [Backing up etcd](/backup_and_restore/control_plane_backup_and_restore/backing-up-etcd#backup-etcd)
*   [Backing up persistent volumes with CSI snapshots](/backup_and_restore/application_backup_and_restore/installing/oadp-backup-restore-csi-snapshots#oadp-1-3-backing-csi-snapshots_oadp-backup-restore-csi-snapshots)
*   [Updating installed Operators](/operators/admin/olm-upgrading-operators#olm-upgrading-operators)
*   [Preparing to update a cluster with manually maintained credentials](/updating/preparing_for_updates/preparing-manual-creds-update#preparing-manual-creds-update)

{% leveloffset +1 %}{% include "./modules/machine-health-checks-pausing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/update-upgrading-cli.md" %}{% endleveloffset %}

{% if not openshift_origin %}

**Additional resources**

*   [Performing a Control Plane Only update](/updating/updating_a_cluster/control-plane-only-update#control-plane-only-update)
*   [Understanding update channels and releases](/updating/understanding_updates/understanding-update-channels-release#understanding-update-channels-releases)
{% endif %}

{% leveloffset +1 %}{% include "./modules/update-oc-adm-upgrade-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/update-changing-update-server-cli.md" %}{% endleveloffset %}