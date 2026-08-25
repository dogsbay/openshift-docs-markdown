{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% leveloffset +1 %}{% include "./_attributes/common-attributes.md" %}{% endleveloffset %}
# Storing logs with LokiStack {id="log6x-loki-6-2"}
{%- set context = "log6x-loki-6.2" %}

You can configure a `LokiStack` custom resource (CR) to store application, audit, and infrastructure-related logs.

{% leveloffset +1 %}{% include "./snippets/log6x-loki-statement-snip.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/log6x-loki-sizing.md" %}{% endleveloffset %}

## Prerequisites {id="prerequisites-6-2_{{ context }}"}

*   You have installed the {{ loki_op }} by using the command-line interface (CLI) or web console.
*   You have created a `serviceAccount` CR in the same namespace as the `ClusterLogForwarder` CR.
*   You have assigned the `collect-audit-logs`, `collect-application-logs`, and `collect-infrastructure-logs` cluster roles to the `serviceAccount` CR.

## Core set up and configuration {id="setup-6-2_{{ context }}"}

Use role-based access controls, basic monitoring, and pod placement to deploy Loki.

{% leveloffset +1 %}{% include "./modules/log6x-loki-rbac-rules-perms.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-enabling-loki-alerts.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-loki-memberlist-ip.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-loki-retention.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-loki-pod-placement.md" %}{% endleveloffset %}

## Enhanced reliability and performance {id="performance-6-2_{{ context }}"}

Use the following configurations to ensure reliability and efficiency of Loki in production.

{% leveloffset +1 %}{% include "./modules/log6x-identity-federation.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-loki-reliability-hardening.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-loki-restart-hardening.md" %}{% endleveloffset %}

## Advanced deployment and scalability {id="advanced-6-2_{{ context }}"}

To configure high availability, scalability, and error handling, use the following information.

{% leveloffset +1 %}{% include "./modules/log6x-loki-zone-aware-rep.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-loki-zone-fail-recovery.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-loki-rate-limit-errors.md" %}{% endleveloffset %}