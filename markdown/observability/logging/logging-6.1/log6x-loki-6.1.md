{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% leveloffset +1 %}{% include "./_attributes/common-attributes.md" %}{% endleveloffset %}
# Storing logs with LokiStack {id="log6x-loki-6-1"}
{%- set context = "log6x-loki-6.1" %}

You can configure a `LokiStack` CR to store application, audit, and infrastructure-related logs.

{% leveloffset +1 %}{% include "./snippets/log6x-loki-statement-snip.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/log6x-loki-sizing.md" %}{% endleveloffset %}

## Prerequisites {id="prerequisites-6-1_{{ context }}"}

*   You have installed the {{ loki_op }} by using the CLI or web console.
*   You have a `serviceAccount` in the same namespace in which you create the `ClusterLogForwarder`.
*   The `serviceAccount` is assigned `collect-audit-logs`, `collect-application-logs`, and `collect-infrastructure-logs` cluster roles.

## Core Setup and Configuration {id="setup-6-1_{{ context }}"}
**Role-based access controls, basic monitoring, and pod placement to deploy Loki.**

{% leveloffset +1 %}{% include "./modules/log6x-loki-rbac-rules-perms.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-enabling-loki-alerts.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-loki-memberlist-ip.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-loki-retention.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-loki-pod-placement.md" %}{% endleveloffset %}

## Enhanced Reliability and Performance {id="performance-6-1_{{ context }}"}
**Configurations to ensure Loki’s reliability and efficiency in production.**

{% leveloffset +1 %}{% include "./modules/log6x-identity-federation.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-loki-reliability-hardening.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-loki-restart-hardening.md" %}{% endleveloffset %}

## Advanced Deployment and Scalability {id="advanced-6-1_{{ context }}"}
**Specialized configurations for high availability, scalability, and error handling.**

{% leveloffset +1 %}{% include "./modules/log6x-loki-zone-aware-rep.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-loki-zone-fail-recovery.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-loki-rate-limit-errors.md" %}{% endleveloffset %}