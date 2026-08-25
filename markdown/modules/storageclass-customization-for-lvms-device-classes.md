{%- set _mod_docs_content_type = "CONCEPT" %}
# StorageClass customization for LVMS device classes {id="storageclass-customization-for-lvms-device-classes_{{ context }}"}

You can customize the StorageClass for each device class by specifying reclaim policy, volume binding mode, parameters, and labels in the LVMCluster custom resource (CR). {._abstract}

Before, Logical Volume Manager Storage (LVMS) automatically created a StorageClass for each device class without allowing modification. If you attempted to manually edit a generated StorageClass, the Operator overwrote your changes during the next reconciliation loop.

The `storageClassOptions` field lets you control four properties of the generated StorageClass: 

*   `reclaimPolicy`
*   `volumeBindingMode`
*   `additionalParameters`
*   `additionalLabels`

If you omit `storageClassOptions`, LVMS creates the StorageClass with the same defaults as in previous versions. Existing `LVMCluster` configurations are fully compatible with earlier versions.


:::note

No user action is required after upgrading. The `storageClassOptions` field is optional, and default values match the behavior before this feature was introduced.

:::