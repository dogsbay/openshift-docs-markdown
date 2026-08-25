---
title: Import a virtual machine image using the DataVolume API
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Import a virtual machine image using the `DataVolume` API {id="virt-import-dv-vms"}
{%- set context = "virt-import-dv-vms" %}

You can import a virtual machine (VM) image into your {{ VirtProductName }} cluster by using the `DataVolume` API. A `DataVolume` automates PVC creation and image data transfer from an external source by using the Containerized Data Importer (CDI). {._abstract}

{% leveloffset +1 %}{% include "./modules/con-datavolume-supported-import-sources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/proc-importing-vm-image-from-container-registry.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/con-about-specifying-cpu-architecture-datavolume-imports.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/proc-importing-vm-image-from-http-source.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/proc-importing-vm-image-from-s3-object-storage.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ref-datavolume-source-fields.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ref-troubleshooting-datavolume-imports.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Preparing CDI scratch space](/virt/storage/virt-preparing-cdi-scratch-space#virt-preparing-cdi-scratch-space)