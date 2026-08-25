---
title: CSI automatic migration
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# CSI automatic migration {id="persistent-storage-csi-migration"}
{%- set context = "persistent-storage-csi-migration" %}

In-tree storage drivers that are traditionally shipped with {{ product_title }} are being deprecated and replaced by their equivalent Container Storage Interface (CSI) drivers. {{ product_title }} provides automatic migration for in-tree volume plugins to their equivalent CSI drivers. {._abstract}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-migration-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-migration-sc.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Changing the default storage class](/storage/container_storage_interface/persistent-storage-csi-sc-manage#change-default-storage-class_persistent-storage-csi-sc-manage)