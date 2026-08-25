---
title: Installing the opm CLI
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing the opm CLI {id="cli-opm-install"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cli-opm-install" %}

{% leveloffset +1 %}{% include "./modules/olm-about-opm.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}

**Additional resources**

*   See [Operator Framework packaging format](/operators/understanding/olm-packaging-format#olm-bundle-format_olm-packaging-format) for more information about the bundle format.

{% endif %}

{% leveloffset +1 %}{% include "./modules/olm-installing-opm.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
## Additional resources {id="opm-addtl-resources"}

*   See [Managing custom catalogs](/operators/admin/olm-managing-custom-catalogs#olm-managing-custom-catalogs) for `opm` procedures including creating, updating, and pruning catalogs.
{% endif %}