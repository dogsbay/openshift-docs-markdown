---
title: Securing attached storage
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Securing attached storage {id="security-storage"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "security-storage" %}

You should understand how {{ product_title }} secures attached storage to protect persistent data in containerized workloads. {{ product_title }} uses Security-Enhanced Linux (SELinux) capabilities, group ID (GID) annotations, and Container Storage Interface (CSI)-compliant storage providers to isolate storage access and prevent unauthorized data exposure.

{% leveloffset +1 %}{% include "./modules/security-storage-persistent.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-storage-shared.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-storage-block.md" %}{% endleveloffset %}

**Additional resources**

*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [Configuring CSI volumes](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)
*   [Dynamic provisioning](/storage/dynamic-provisioning#dynamic-provisioning)
*   [Persistent storage using NFS](/storage/persistent_storage/persistent-storage-nfs#persistent-storage-using-nfs)
*   [Persistent storage using AWS Elastic Block Store](/storage/persistent_storage/persistent-storage-aws#persistent-storage-aws)
*   [Persistent storage using GCE Persistent Disk](/storage/persistent_storage/persistent-storage-gce#persistent-storage-using-gce)