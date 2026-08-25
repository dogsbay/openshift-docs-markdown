---
title: Understanding virtual machine storage with the CSI paradigm
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Understanding virtual machine storage with the CSI paradigm {id="virt-storage-with-csi-paradigm"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-storage-with-csi-paradigm" %}

Virtual machines (VMs) in {{ VirtProductName }} use PersistentVolume (PV) and PersistentVolumeClaim (PVC) paradigms to manage storage. This ensures seamless integration with the Container Storage Interface (CSI).

{% leveloffset +1 %}{% include "./modules/virt-storage-pv-csi-overview.md" %}{% endleveloffset %}