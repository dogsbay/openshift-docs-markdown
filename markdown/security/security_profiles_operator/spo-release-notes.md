---
title: Release notes for the Security Profiles Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Release notes for the Security Profiles Operator {id="spo-release-notes"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "spo-release-notes" %}

The Security Profiles Operator provides a way to define secure computing (seccomp) and SELinux profiles as custom resources, synchronizing profiles to every node in a given namespace.

These release notes track the development of the Security Profiles Operator in {{ product_title }}.

{% leveloffset +1 %}{% include "./modules/spo-rn-0-10-0.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/spo-rn-0-9-0.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/spo-rn-0-8-6.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/spo-rn-0-8-5.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/spo-rn-0-8-4.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/spo-rn-0-8-2.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/spo-rn-0-8-0.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/spo-rn-0-7-1.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/spo-rn-0-5-2.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/spo-rn-0-5-0.md" %}{% endleveloffset %}

## Additional resources {id="spo-release-notes_additional-resources"}

*   [Security Profiles Operator Overview (Kubernetes documentation)](/security/security_profiles_operator/spo-overview#spo-overview)
*   [Kubernetes seccomp tutorial](https://kubernetes.io/docs/tutorials/security/seccomp/)