---
title: Volume populators
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Volume populators {id="persistent-storage-csi-vol-populators"}
{%- set context = "persistent-storage-csi-vol-populators" %}

Volume populators enable the automatic pre-loading of data into a volume during dynamic provisioning, instead of provisioning an empty volume. {._abstract}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-vol-populator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-vol-populator-procedure-top-level.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-vol-populator-procedure-admin.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-vol-populator-procedure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-vol-populator-uninstall.md" %}{% endleveloffset %}