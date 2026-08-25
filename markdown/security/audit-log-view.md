---
title: Viewing audit logs
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Viewing audit logs {id="audit-log-view"}

{%- if openshift_rosa or openshift_dedicated %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- endif %}
{%- set context = "audit-log-view" %}

{{ product_title }} auditing provides a security-relevant chronological set of records documenting the sequence of activities that have affected the system by individual users, administrators, or other components of the system. {._abstract}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-audit-log-basic.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-audit-log-basic-viewing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-audit-log-filtering.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gathering-data-audit-logs.md" %}{% endleveloffset %}

## Additional resources {id="viewing-audit-logs-additional-resources" ._additional-resources}

*   [Must-gather tool](/support/gathering-cluster-data#about-must-gather_gathering-cluster-data)
{%- if not (openshift_rosa or openshift_dedicated) %}
*   [API audit log event structure](https://github.com/kubernetes/apiserver/blob/master/pkg/apis/audit/v1/types.go#L72)
*   [Configuring the audit log policy](/security/audit-log-policy-config#audit-log-policy-config)
{%- endif %}