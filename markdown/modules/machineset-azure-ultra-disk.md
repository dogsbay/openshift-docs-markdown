{% if context == "creating-machineset-azure" %}
{%- set mapi = true -%}
{% endif %}
{% if context == "cpmso-supported-features-azure" %}
{%- set cpmso = true -%}
{% endif %}
{% if context == "persistent-storage-azure" %}
{%- set pvc = true -%}
{% endif %}
{% if context == "persistent-storage-csi-azure" %}
{%- set pvc = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
{% if mapi or cpmso %}
# Machine sets that deploy machines with ultra disks as data disks {id="machineset-azure-ultra-disk_{{ context }}"}
{% endif %}
{% if pvc %}
# Machine sets that deploy machines with ultra disks using PVCs {id="_machine_sets_that_deploy_machines_with_ultra_disks_using_pvcs"}
{% endif %}

You can create a machine set running on {{ azure_first }} that deploys machines with ultra disks. Ultra disks are high-performance storage that are intended for use with the most demanding data workloads. {._abstract}

{% if mapi %}
You can also create a persistent volume claim (PVC) that dynamically binds to a storage class backed by {{ azure_short }} ultra disks and mounts them to pods.


:::note

Data disks do not support the ability to specify disk throughput or disk IOPS. You can configure these properties by using PVCs.

:::

{% endif %}

{% if pvc %}
Both the in-tree plugin and CSI driver support using PVCs to enable ultra disks. You can also deploy machines with ultra disks as data disks without creating a PVC.
{% endif %}

{% if context == "creating-machineset-azure" %}
{%- set mapi = "" -%}
{% endif %}
{% if context == "cpmso-supported-features-azure" %}
{%- set cpmso = "" -%}
{% endif %}
{% if context == "persistent-storage-azure" %}
{%- set pvc = "" -%}
{% endif %}
{% if context == "persistent-storage-csi-azure" %}
{%- set pvc = "" -%}
{% endif %}