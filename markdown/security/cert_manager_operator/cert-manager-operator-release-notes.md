---
title: "{{ cert_manager_operator }} release notes"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ cert_manager_operator }} release notes {id="cert-manager-operator-release-notes"}
{%- set context = "cert-manager-operator-release-notes" %}

The {{ cert_manager_operator }} is a cluster-wide service that provides application certificate lifecycle management. {._abstract}

These release notes track the development of {{ cert_manager_operator }}.

For more information, see [About the {{ cert_manager_operator }}](/security/cert_manager_operator/index#cert-manager-operator-about).

{% leveloffset +1 %}{% include "./modules/cert-manager-operator-release-notes-1-20-0.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cert-manager-operator-release-notes-1-19-1.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cert-manager-operator-release-notes-1-19-0.md" %}{% endleveloffset %}