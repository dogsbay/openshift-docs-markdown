---
title: Persistent storage using logical volume manager storage
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Persistent storage using logical volume manager storage {id="persistent-storage-using-lvms"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "logical-volume-manager-storage" %}

{{ lvms_first }} uses LVM2 through the `TopoLVM CSI` driver to dynamically provision local storage on a cluster with limited resources. With {{ lvms }}, you can create volume groups, persistent volume claims (PVCs), snapshots, and clones.

{% leveloffset +1 %}{% include "./modules/lvms-about-lvm-storage-installation.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/lvms-installing-logical-volume-manager-operator-using-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/lvms-installing-logical-volume-manager-operator-using-openshift-web-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/lvms-installing-logical-volume-manager-operator-disconnected-environment.md" %}{% endleveloffset %}

**Additional resources**

*   [About disconnected installation mirroring](/disconnected/index#installing-mirroring-disconnected-about)
*   [Mirroring the {{ product_title }} image repository](/disconnected/installing-mirroring-installation-images#installation-mirror-repository_installing-mirroring-installation-images)
*   [Creating the image set configuration](/disconnected/about-installing-oc-mirror-v2#oc-mirror-building-image-set-config-v2_about-installing-oc-mirror-v2)
*   [Mirroring an image set to a mirror registry](/disconnected/about-installing-oc-mirror-v2#using-oc-mirror_about-installing-oc-mirror-v2)
*   [Configuring image registry repository mirroring](/openshift_images/image-configuration#images-configuration-registry-mirror_image-configuration)
*   [Why use imagestreams](/openshift_images/image-streams-manage#images-imagestream-use_image-configuration)
*   [About the OpenShift Update Service](/updating/understanding_updates/intro-to-updates#update-service-overview_understanding-openshift-updates)

{% leveloffset +2 %}{% include "./modules/lvms-installing-logical-volume-manager-operator-using-rhacm.md" %}{% endleveloffset %}

**Additional resources**

*   [About the `LVMCluster` custom resource](/storage/persistent_storage_local/persistent-storage-using-lvms#about-lvmcluster_logical-volume-manager-storage)

{% leveloffset +1 %}{% include "./modules/static-device-discovery-in-lvms.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/static-mode-enforcement.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/validation-rules-for-device-discovery-policy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/lvm-cluster-custom-resource-examples.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/lvm-cluster-custom-resource-status-reporting.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/lvms-about-lvmcluster-cr.md" %}{% endleveloffset %}

**Additional resources**

*   [Overview of chunk size](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html-single/configuring_and_managing_logical_volumes/index#overview-of-chunk-size_creating-and-managing-thin-provisioned-volumes)
*   [Limitations to configure the size of the devices used in {{ lvms }}](/storage/persistent_storage_local/persistent-storage-using-lvms#limitations-to-configure-size-of-devices_logical-volume-manager-storage)
*   [Reusing a volume group from the previous {{ lvms }} installation](/storage/persistent_storage_local/persistent-storage-using-lvms#lvms-reusing-vg-from-prev-installation_logical-volume-manager-storage)
*   [About adding devices to a volume group](/storage/persistent_storage_local/persistent-storage-using-lvms#about-adding-devices-to-a-vg_logical-volume-manager-storage)
*   [Adding worker nodes to {{ sno }} clusters](/nodes/nodes/nodes-sno-worker-nodes#nodes-sno-worker-nodes)

{% leveloffset +2 %}{% include "./modules/lvms-limitations-to-configure-size-of-devices.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/lvms-about-adding-devices-to-a-vg.md" %}{% endleveloffset %}

**Additional resources**

*   [{{ op_system_base }} documentation](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/managing_file_systems/assembly_overview-of-persistent-naming-attributes_managing-file-systems)
*   [Creating a software RAID on an installed system](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/managing_storage_devices/managing-raid_managing-storage-devices#creating-a-software-raid-on-an-installed-system_managing-raid)
*   [Replacing a failed disk in RAID](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/managing_storage_devices/managing-raid_managing-storage-devices#replacing-a-failed-disk-in-raid_managing-raid)
*   [Repairing RAID disks](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/managing_storage_devices/managing-raid_managing-storage-devices#repairing-raid-disks_managing-raid)
*   [Configuring a RAID-enabled data volume](/installing/install_config/installing-customizing#installation-special-config-raid_installing-customizing)
*   [About disk encryption](/installing/install_config/installing-customizing#installation-special-config-storage_installing-customizing)
*   [Configuring disk encryption and mirroring](/installing/install_config/installing-customizing#installation-special-config-storage-procedure_installing-customizing)
*   [Devices not supported by {{ lvms }}](/storage/persistent_storage_local/persistent-storage-using-lvms#lvms-unsupported-devices_logical-volume-manager-storage)

{% leveloffset +2 %}{% include "./modules/lvms-about-removing-devices-deviceclasses-from-a-vg.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/lvms-unsupported-devices.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/lvms-about-creating-lvmcluster-cr.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/lvms-reusing-vg-from-prev-installation.md" %}{% endleveloffset %}

**Additional resources**

*   [Grouping LVM objects with tags](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/configuring_and_managing_logical_volumes/grouping-lvm-objects-with-tags_configuring-and-managing-logical-volumes#doc-wrapper)

{% leveloffset +2 %}{% include "./modules/lvms-creating-lvms-cluster-using-cli.md" %}{% endleveloffset %}

**Additional resources**

*   [About the `LVMCluster` custom resource](/storage/persistent_storage_local/persistent-storage-using-lvms#about-lvmcluster_logical-volume-manager-storage)

{% leveloffset +2 %}{% include "./modules/lvms-creating-lvms-cluster-using-web-console.md" %}{% endleveloffset %}

**Additional resources**

*   [About the `LVMCluster` custom resource](/storage/persistent_storage_local/persistent-storage-using-lvms#about-lvmcluster_logical-volume-manager-storage)

{% leveloffset +2 %}{% include "./modules/lvms-creating-lvmcluster-using-rhacm.md" %}{% endleveloffset %}

**Additional resources**

*   [About the `LVMCluster` custom resource](/storage/persistent_storage_local/persistent-storage-using-lvms#about-lvmcluster_logical-volume-manager-storage)

{% leveloffset +1 %}{% include "./modules/lvms-about-deleting-lvmcluster-cr.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/lvms-deleting-lvmcluster-using-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/lvms-deleting-lvmcluster-using-web-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/lvms-deleting-lvmcluster-using-rhacm.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/deleting-an-lvm-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/lvms-provisioning-storage-using-logical-volume-manager-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storageclass-customization-for-lvms-device-classes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/storageclass-options.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/updating-lvm-cluster-labels.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/sample-lvm-cluster-configuration-with-storage-class-option.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/immutable-fields-of-the-storage-class-options.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/behaviors-not-controlled-by-storage-class-options.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/lvms-about-scaling-storage-of-clusters.md" %}{% endleveloffset %}

**Additional resources**

*   [Adding worker nodes to {{ sno }} clusters](/nodes/nodes/nodes-sno-worker-nodes#nodes-sno-worker-nodes)
*   [Devices not supported by {{ lvms }}](/storage/persistent_storage_local/persistent-storage-using-lvms#lvms-unsupported-devices_logical-volume-manager-storage)

{% leveloffset +2 %}{% include "./modules/lvms-scaling-storage-of-clusters-using-cli.md" %}{% endleveloffset %}

**Additional resources**

*   [About the `LVMCluster` custom resource](/storage/persistent_storage_local/persistent-storage-using-lvms#about-lvmcluster_logical-volume-manager-storage)
*   [Devices not supported by {{ lvms }}](/storage/persistent_storage_local/persistent-storage-using-lvms#lvms-unsupported-devices_logical-volume-manager-storage)
*   [About adding devices to a volume group](/storage/persistent_storage_local/persistent-storage-using-lvms#about-adding-devices-to-a-vg_logical-volume-manager-storage)

{% leveloffset +2 %}{% include "./modules/lvms-scaling-storage-of-clusters-using-web-console.md" %}{% endleveloffset %}

**Additional resources**

*   [About the `LVMCluster` custom resource](/storage/persistent_storage_local/persistent-storage-using-lvms#about-lvmcluster_logical-volume-manager-storage)
*   [Devices not supported by {{ lvms }}](/storage/persistent_storage_local/persistent-storage-using-lvms#lvms-unsupported-devices_logical-volume-manager-storage)
*   [About adding devices to a volume group](/storage/persistent_storage_local/persistent-storage-using-lvms#about-adding-devices-to-a-vg_logical-volume-manager-storage)

{% leveloffset +2 %}{% include "./modules/lvms-scaling-storage-of-clusters-using-rhacm.md" %}{% endleveloffset %}

**Additional resources**

*   [About the `LVMCluster` custom resource](/storage/persistent_storage_local/persistent-storage-using-lvms#about-lvmcluster_logical-volume-manager-storage)
*   [Devices not supported by {{ lvms }}](/storage/persistent_storage_local/persistent-storage-using-lvms#lvms-unsupported-devices_logical-volume-manager-storage)
*   [About adding devices to a volume group](/storage/persistent_storage_local/persistent-storage-using-lvms#about-adding-devices-to-a-vg_logical-volume-manager-storage)

{% leveloffset +1 %}{% include "./modules/lvms-scaling-storage-expand-pvc.md" %}{% endleveloffset %}

**Additional resources**

*   [Ways to scale up the storage of clusters](/storage/persistent_storage_local/persistent-storage-using-lvms#lvms-about-scaling-storage-of-cluster_logical-volume-manager-storage)
*   [Enabling volume expansion support](/storage/expanding-persistent-volumes#add-volume-expansion_expanding-persistent-volumes)

{% leveloffset +1 %}{% include "./modules/lvms-deleting-pvc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/lvms-about-volume-snapshots.md" %}{% endleveloffset %}

**Additional resources**

*   [OADP features](/backup_and_restore/application_backup_and_restore/oadp-features-plugins#oadp-features_oadp-features-plugins)

{% leveloffset +2 %}{% include "./modules/lvms-creating-volume-snapshots.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/lvms-restoring-volume-snapshots.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/lvms-deleting-volume-snapshots.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/lvms-about-volume-clones.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/lvms-creating-volume-clones.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/lvms-deleting-volume-clones.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/lvms-updating-lvms.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/lvms-monitoring-logical-volume-manager-operator.md" %}{% endleveloffset %}

**Additional resources**

*   https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/{{ rh_rhacm_version }}/html-single/observability/index[Observability]
*   https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/{{ rh_rhacm_version }}/html-single/observability/index#adding-custom-metrics[Adding custom metrics]

{% leveloffset +1 %}{% include "./modules/lvms-about-volume-metrics-alerts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/lvms-uninstalling-logical-volume-manager-operator-using-openshift-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/lvms-uninstalling-logical-volume-manager-operator-using-openshift-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/lvms-uninstalling-logical-volume-manager-operator-using-rhacm.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/lvms-download-log-files-and-diagnostics.md" %}{% endleveloffset %}

**Additional resources**

*   [About the must-gather tool](/support/gathering-cluster-data#about-must-gather_gathering-cluster-data)

{% leveloffset +1 %}{% include "./modules/lvms-troubleshooting-persistent-storage.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/lvms-troubleshooting-investigating-a-pvc-stuck-in-the-pending-state.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/lvms-troubleshooting-recovering-from-missing-lvms-or-operator-components.md" %}{% endleveloffset %}

**Additional resources**

*   [About the `LVMCluster` custom resource](/storage/persistent_storage_local/persistent-storage-using-lvms#about-lvmcluster_logical-volume-manager-storage)
*   [Ways to create an `LVMCluster` custom resource](/storage/persistent_storage_local/persistent-storage-using-lvms#about-creating-lvmcluster-cr_logical-volume-manager-storage)

{% leveloffset +2 %}{% include "./modules/lvms-troubleshooting-recovering-from-node-failure.md" %}{% endleveloffset %}

**Additional resources**

*   [Performing a forced clean-up](/storage/persistent_storage_local/persistent-storage-using-lvms#performing-a-forced-cleanup_logical-volume-manager-storage)

{% leveloffset +2 %}{% include "./modules/lvms-troubleshooting-recovering-from-disk-failure.md" %}{% endleveloffset %}

**Additional resources**

*   [Performing a forced clean-up](/storage/persistent_storage_local/persistent-storage-using-lvms#performing-a-forced-cleanup_logical-volume-manager-storage)

{% leveloffset +2 %}{% include "./modules/lvms-troubleshooting-performing-a-forced-cleanup.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Red Hat Advanced Cluster Management for Kubernetes: Installing while connected online](https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/{{ rh_rhacm_version }}/html/install/installing#installing-while-connected-online)