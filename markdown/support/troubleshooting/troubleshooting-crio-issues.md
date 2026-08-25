---
title: Troubleshooting CRI-O container runtime issues
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Troubleshooting CRI-O container runtime issues {id="troubleshooting-crio-issues"}

{%- set context = "troubleshooting-crio-issues" %}

Use the following sections to troubleshoot CRI-O container runtime issues. {._abstract}

{% leveloffset +1 %}{% include "./modules/about-crio.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/verifying-crio-status.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/gathering-crio-logs.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/cleaning-crio-storage.md" %}{% endleveloffset %}