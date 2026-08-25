{%- set _mod_docs_content_type = "REFERENCE" %}
# Behaviors not controlled by StorageClass options {id="behaviors-not-controlled-by-storage-class-options_{{ context }}"}

Review these behaviors before you delete an LVMCluster. Although these behaviors relate to `storageClassOptions`, the `storageClassOptions` field does not control them. {._abstract}


Volume expansion behavior
:   Logical Volume Manager Storage (LVMS) always enables volume expansion by setting `allowVolumeExpansion: true` on generated StorageClasses. You cannot control this setting by using the `storageClassOptions` field. All LVMS volumes support online expansion.


VolumeSnapshotClass management
:   The `storageClassOptions` field only affects StorageClasses. When you configure thin provisioning, LVMS generates a `VolumeSnapshotClass` for each device class. This generated class always uses a fixed value `deletionPolicy: Delete`, regardless of the reclaimPolicy that you set in `storageClassOptions`.

    Additionally, LVMS does not apply the `additionalParameters` and `additionalLabels` fields to `VolumeSnapshotClasses`. If you need to retain snapshot data, you must manage it separately from the StorageClass reclaim policy.


Default StorageClass annotation behavior
:   The default field on a device class controls the `storageclass.kubernetes.io/is-default-class` annotation on the generated StorageClass.

    Setting `default: true` does not guarantee that the LVMS StorageClass becomes the cluster default. If another default StorageClass already exists on the cluster, for example, gp3-csi on AWS-based {{ product_title }} clusters, LVMS sets the annotation to `false` to prevent many cluster-wide defaults. Because the Operator actively manages this annotation, it reverts any manual, out-of-band changes during the next reconciliation loop.