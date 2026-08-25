---
title: About multi-queue functionality
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About multi-queue functionality {id="virt-about-multi-queue"}
{%- set context = "virt-about-multi-queue" %}

Use multi-queue functionality to scale network throughput and performance on virtual machines (VMs) with multiple vCPUs. {._abstract}

By default, the `queueCount` value, which is derived from the domain XML, is determined by the number of vCPUs allocated to a VM. Network performance does not scale as the number of vCPUs increases. Additionally, because `virtio-net` has only one transmit and receive queue, guests cannot send or receive packs in parallel.


:::note

Enabling `virtio-net` multi-queue does not offer significant improvements when the number of vNICs in a guest instance is proportional to the number of vCPUs.

:::


## Known limitations {id="known-limitations_{{ context }}"}

*   Message signaled interrupt (MSI) vectors are still consumed if `virtio-net` multi-queue is enabled in the host but not enabled in the guest operating system by the administrator.
*   Each `virtio-net` queue consumes 64 KiB of kernel memory for the `vhost` driver.

{% leveloffset +1 %}{% include "./modules/virt-enabling-multi-queue.md" %}{% endleveloffset %}