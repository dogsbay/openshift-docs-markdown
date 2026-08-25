{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ lvms }} {id="lvms-configuring-lvms-on-sno_{{ context }}"}

You can dynamically provision local storage on {{ sno }} clusters with {{ lvms_first }}. {._abstract}


:::note

The recommended storage solution for {{ sno }} is the Local Storage Operator. Alternatively, you can use {{ lvms }} but it requires additional CPU resources to be allocated.

:::


The following YAML example configures the storage of the node to be available to {{ product_title }} applications.

```yaml title="Recommended LVMCluster configuration (StorageLVMCluster.yaml)" {minja}
{% include "./snippets/ztp_StorageLVMCluster.yaml" %}
```

**`LVMCluster` CR options for {{ sno }} clusters**

| LVMCluster CR field | Description |
| --- | --- |
| `deviceSelector.paths` | Configure the disks used for LVM storage. If no disks are specified, the {{ lvms }} uses all the unused disks in the specified thin pool. |