---
title: Persistent storage using Fibre Channel
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Persistent storage using Fibre Channel {id="persistent-storage-using-fibre"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "persistent-storage-fibre" %}

You can provision your {{ product_title }} cluster with persistent storage by using Fibre Channel volumes for workloads that require high-speed, reliable block-level storage.


:::important

Persistent storage using Fibre Channel is not supported on ARM architecture based infrastructures.

:::


The Kubernetes persistent volume framework allows administrators to provision a
cluster with persistent storage and gives users a way to request those
resources without having any knowledge of the underlying infrastructure.
Persistent volumes are not bound to a single project or namespace; they can be
shared across the {{ product_title }} cluster.
Persistent volume claims are specific to a project or namespace and can be
requested by users.


:::important

High availability of storage in the infrastructure is left to the underlying
storage provider.

:::


**Additional resources**

*   [Using Fibre Channel devices](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/managing_storage_devices/using-fibre-channel-devices_managing-storage-devices)

{% leveloffset +1 %}{% include "./modules/persistent-storage-fibre-provisioning.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-fibre-disk-quotas.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-fibre-volume-security.md" %}{% endleveloffset %}