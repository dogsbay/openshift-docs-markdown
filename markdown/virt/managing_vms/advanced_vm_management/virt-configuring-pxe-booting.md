---
title: Configuring PXE booting for virtual machines
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring PXE booting for virtual machines {id="configuring-pxe-booting"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "pxe-booting" %}

PXE booting, or network booting, allows a computer to boot and load an operating system or other program without requiring a locally attached storage device. For example, you can use it to choose your desired OS image from a PXE server when deploying a new host.

{% leveloffset +1 %}{% include "./modules/virt-pxe-booting-with-mac-address.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-networking-glossary.md" %}{% endleveloffset %}