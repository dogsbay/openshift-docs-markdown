---
title: Boot image skew enforcement
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "mco-update-boot-skew-mgmt" %}
{% include "./_attributes/common-attributes.md" %}
# Boot image skew enforcement {id="mco-update-boot-skew-mgmt"}

You can use boot image skew enforcement to help ensure that the boot images in a cluster are up-to-date with the {{ product_title }} and {{ op_system }} version being used in the cluster. Using an older boot image could cause issues when scaling new nodes. If the images are older than a predetermined version, the MCO disables cluster upgrades until it deems the boot images to be compliant.


:::note

Boot image skew enforcement is not supported for {{ sno }} clusters.

:::


{% leveloffset +1 %}{% include "./modules/mco-update-boot-skew-mgmt-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/mco-update-boot-skew-mgmt-modes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/mco-update-boot-skew-mgmt-configuring.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/mco-update-boot-skew-mgmt-updating.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Boot image management](/machine_configuration/mco-update-boot-images#mco-update-boot-images)
*   [Manually updating the boot image](/machine_configuration/mco-update-boot-images-manual#mco-update-boot-images-manual)