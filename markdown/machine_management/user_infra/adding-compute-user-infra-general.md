---
title: Adding compute machines to clusters with user-provisioned infrastructure manually
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Adding compute machines to clusters with user-provisioned infrastructure manually {id="adding-compute-user-infra-general"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "adding-compute-user-infra-general" %}

To scale a {{ product_title }} cluster that uses user-provisioned infrastructure, you can manually add compute machines during or after installation. The postinstallation process requires some of the same configuration files and parameters that you used for installation.

{% leveloffset +1 %}{% include "./modules/upi-adding-compute-aws.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/upi-adding-compute-azure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/upi-adding-compute-ash.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/upi-adding-compute-gcp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/upi-adding-compute-vsphere.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/upi-adding-compute-baremetal.md" %}{% endleveloffset %}