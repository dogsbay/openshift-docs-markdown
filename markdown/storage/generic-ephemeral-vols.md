---
title: Generic ephemeral volumes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}

{% include "./_attributes/common-attributes.md" %}
{%- set context = "generic-ephemeral-volumes" %}
# Generic ephemeral volumes {id="generic-ephemeral-volumes"}

Generic ephemeral volumes provide per-pod temporary storage backed by any storage driver that supports dynamic provisioning, unlike `emptyDir` volumes which are limited to local node storage. This flexibility lets you use network storage backends, control storage classes and volume characteristics, and leverage delayed volume binding for optimal pod scheduling. {._abstract}

{% leveloffset +1 %}{% include "./modules/storage-ephemeral-vols-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-ephemeral-vols-lifecycle.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Creating generic ephemeral volumes](/storage/generic-ephemeral-vols#generic-ephemeral-vols-procedure_generic-ephemeral-volumes)

{% leveloffset +1 %}{% include "./modules/storage-ephemeral-vols-security.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-ephemeral-vols-pvc-naming.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-ephemeral-vols-procedure.md" %}{% endleveloffset %}