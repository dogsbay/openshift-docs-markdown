---
title: CSI volume cloning
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# CSI volume cloning {id="persistent-storage-csi-cloning"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "persistent-storage-csi-cloning" %}

Container Storage Interface (CSI) volume cloning duplicates existing persistent volumes to create independent copies for data protection, testing, or deployment. You can use cloning to create new volumes from existing data without manual copying or backup restoration.

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-cloning-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-cloning-provisioning.md" %}{% endleveloffset %}

**Additional resources**

*   [Understanding persistent volumes](/storage/understanding-persistent-storage#persistent-volumes_understanding-persistent-storage)