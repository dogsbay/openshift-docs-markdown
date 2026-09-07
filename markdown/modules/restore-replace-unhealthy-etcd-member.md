{%- set _mod_docs_content_type = "REFERENCE" %}
# Replacing the unhealthy etcd member {id="restore-replace-unhealthy-etcd-member_{{ context }}"}

You can replace an unhealthy etcd member by following one of several procedures, depending on whether the machine is not running, the node is not ready, the etcd pod is crashlooping, or the member is a stopped bare-metal instance. {._abstract}

Use one of the following procedures, based on the state of your unhealthy etcd member:

*   [Replacing an unhealthy etcd member whose machine is not running or whose node is not ready](/backup_and_restore/control_plane_backup_and_restore/replacing-unhealthy-etcd-member#restore-replace-stopped-etcd-member_replacing-unhealthy-etcd-member)
*   [Replacing a control plane node in an unhealthy cluster](https://docs.redhat.com/en/documentation/assisted_installer_for_openshift_container_platform/2026/html/installing_openshift_container_platform_with_the_assisted_installer/expanding-the-cluster#installing-control-plane-node-unhealthy-cluster_expanding-the-cluster)
*   [Replacing an unhealthy etcd member whose etcd pod is crashlooping](/backup_and_restore/control_plane_backup_and_restore/replacing-unhealthy-etcd-member#restore-replace-crashlooping-etcd-member_replacing-unhealthy-etcd-member)
*   [Replacing an unhealthy stopped baremetal etcd member](/backup_and_restore/control_plane_backup_and_restore/replacing-unhealthy-etcd-member#restore-replace-stopped-baremetal-etcd-member_replacing-unhealthy-etcd-member)