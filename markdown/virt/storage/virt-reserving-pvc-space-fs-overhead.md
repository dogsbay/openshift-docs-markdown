---
title: Reserving PVC space for file system overhead
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Reserving PVC space for file system overhead {id="virt-reserving-pvc-space-fs-overhead"}
{%- set context = "virt-reserving-pvc-space-fs-overhead" %}

When you create a `DataVolume` custom resource (CR) for a virtual machine (VM) by setting the `spec.storage.volumeMode`  attribute to `Filesystem`, {{ VirtProductName }} automatically accounts for file system overhead. {._abstract}

If you specify the storage type by using the `spec.pvc` attribute in the `DataVolume` CR, {{ VirtProductName }} does not add any file system overhead and the requested size is passed directly to Kubernetes.

The default file system overhead value is 6%. For example, if you request a 10 GiB disk and the `spec.storage.volumeMode` attribute is set to `FileSystem`, Kubernetes provisions a PVC of approximately 10.6 GiB so that the VM has the full 10 GiB of space available.

**Example file system overhead for data volumes**

| Requested virtual disk size | Calculated overhead (6%) | Total PVC space provisioned |
| --- | --- | --- |
| 10 GiB | 0.6 GiB | 10.6 GiB |
| 100 GiB | 6 GiB | 106 GiB |


:::note

You can change the default file system overhead value by editing the `HyperConverged` CR.

:::


{% leveloffset +1 %}{% include "./modules/virt-overriding-default-fs-overhead-value.md" %}{% endleveloffset %}