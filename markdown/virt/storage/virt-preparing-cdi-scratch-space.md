---
title: Preparing CDI scratch space
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Preparing CDI scratch space {id="virt-preparing-cdi-scratch-space"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-preparing-cdi-scratch-space" %}

To support image import and processing, configure the Containerized Data Importer (CDI) scratch space and the required storage class so that CDI can temporarily store and convert virtual machine (VM) images.

{% leveloffset +1 %}{% include "./modules/virt-about-scratch-space.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-operations-requiring-scratch-space.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-defining-storageclass.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-cdi-supported-operations-matrix.md" %}{% endleveloffset %}

## Additional resources {id="{{ context }}-additional-resources"}

*   [Dynamic provisioning](/storage/dynamic-provisioning#about_dynamic-provisioning)