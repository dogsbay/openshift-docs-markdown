---
title: "{{ oadp_short }} Self-Service cluster admin use cases"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ oadp_short }} Self-Service cluster admin use cases {id="oadp-self-service-cluster-admin-use-cases"}
{%- set context = "oadp-self-service-cluster-admin-use-cases" %}

Configure and manage {{ oadp_short }} Self-Service by enabling the feature, reviewing backup storage location requests, and enforcing policy templates. This helps you provide Self-Service backup capabilities while maintaining administrative control. {._abstract}

{% leveloffset +1 %}{% include "./modules/oadp-self-service-admin-enable-disable.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-self-service-enabling-nabsl-approval.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-self-service-approving-nabsl.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-self-service-rejecting-nabsl.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-self-service-admin-spec-enforcement.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-self-service-admin-spec-enforce-nabsl.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-self-service-admin-spec-enforce-nab.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-self-service-admin-spec-enforce-nar.md" %}{% endleveloffset %}