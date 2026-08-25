---
title: "Preparing for image-based installation for {{ sno }} clusters"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Preparing for image-based installation for {{ sno }} clusters {id="ibi-preparing-for-image-based-install"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ibi-preparing-image-based-install" %}

To prepare for an image-based installation for {{ sno }} clusters, you must complete the following tasks:

*   Create a seed image by using the {{ lcao }}.
*   Verify that all software components meet the required versions. For further information, see "Software prerequisites for an image-based installation and deployment".

**Additional resources**

*   [Software prerequisites for an image-based installation and deployment](/edge_computing/image_base_install/ibi-understanding-image-based-install#ztp-image-based-upgrade-prereqs_ibi-understanding-image-based-install)

## Installing the {{ lcao }} {id="_installing_the_lcao"}

Use the {{ lcao }} to generate a seed image from a seed cluster. You can install the {{ lcao }} using the {{ oc_first }} or the web console.

{% leveloffset +2 %}{% include "./modules/cnf-image-based-upgrade-installing-lifecycle-agent-using-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-image-based-upgrade-installing-lifecycle-agent-using-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-image-based-upgrade-shared-container-partition.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-image-based-upgrade-seed-image-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-image-based-upgrade-generate-seed-image.md" %}{% endleveloffset %}