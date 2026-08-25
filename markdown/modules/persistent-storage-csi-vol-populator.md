{%- set _mod_docs_content_type = "CONCEPT" %}
# Volume populators overview {id="persistent-storage-csi-vol-populator_{{ context }}"}

With volume populators, using the `dataSourceRef` field, you can prepopulate volumes from a Custom Resource Definition (CRD) instead of only persistent volume claims (PVCs) and snapshots. {._abstract}

In {{ product_title }} versions 4.12 through 4.19, the `dataSource` field in a PVC spec provides volume populator capability. However, it is limited to using only PVCs and snapshots as the data source for populating volumes. 

Starting with {{ product_title }} version 4.20, the `dataSourceRef` field is used instead. With the `dataSourceRef` field, you can use any appropriate custom resource (CR) as the data source to prepopulate a new volume.


:::note

Volume populator functionality using the `dataSource` field is likely to be deprecated in future versions. If you have created any volume populators using this field, consider re-creating your volume populators to use the `dataSourceRef` field to avoid future issues.

:::


Volume population is enabled by default and {{ product_title }} includes the installed `volume-data-source-validator` controller. However, {{ product_title }} does not ship with any volume populators.