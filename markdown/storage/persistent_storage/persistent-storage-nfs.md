---
title: Persistent storage using NFS
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Persistent storage using NFS {id="persistent-storage-using-nfs"}
{%- set context = "persistent-storage-nfs" %}

You can provision {{ product_title }} clusters with persistent storage using NFS. {._abstract}

Persistent volumes (PVs) and persistent volume claims (PVCs) provide a convenient method for sharing a volume across a project. While the NFS-specific information contained in a PV definition could also be defined directly in a pod definition, doing so does not create the volume as a distinct cluster resource, making the volume more susceptible to conflicts.


:::note

The in-tree NFS provisioner does not support user namespaces.

:::


**Additional resources**
{._additional-resources}

*   [Mounting NFS shares](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/managing_file_systems/mounting-nfs-shares_managing-file-systems)

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-nfs-provisioning.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-nfs-enforcing-disk-quota.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-nfs-volume-security.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/storage-persistent-storage-nfs-group-ids.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/storage-persistent-storage-nfs-user-ids.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/storage-persistent-storage-nfs-selinux.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/storage-persistent-storage-nfs-export-settings.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-nfs-reclaiming-resources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-nfs-additional-configuration.md" %}{% endleveloffset %}