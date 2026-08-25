---
title: Adding compute machines to bare metal
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Adding compute machines to bare metal {id="adding-bare-metal-compute-user-infra"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "adding-bare-metal-compute-user-infra" %}

To scale your {{ product_title }} cluster on bare-metal or platform-agnostic infrastructure, you can add more compute machines. Create {{ op_system }} machines, then approve their certificate signing requests.

{% leveloffset +1 %}{% include "./modules/adding-bare-metal-compute-user-infra-prereqs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/creating-rhcos-machines-bare-metal.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machine-user-infra-machines-iso.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machine-user-infra-machines-pxe.md" %}{% endleveloffset %}

**Additional resources**

*   [How does one set up a serial terminal and/or console in Red Hat Enterprise Linux? (Red&#160;Hat Knowledgebase article)](https://access.redhat.com/articles/7212)
*   [`IMAGE_GZIP` option in iPXE (iPXE documentation)](https://ipxe.org/buildcfg/image_gzip)

{% leveloffset +1 %}{% include "./modules/installation-approve-csrs.md" %}{% endleveloffset %}