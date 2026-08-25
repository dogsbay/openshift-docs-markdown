{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% leveloffset +1 %}{% include "./_attributes/common-attributes.md" %}{% endleveloffset %}
# Storing logs with LokiStack {id="log6x-loki"}
{%- set context = "logging-6x" %}

You can configure a `LokiStack` CR to store application, audit, and infrastructure-related logs.

## Prerequisites {id="prerequisites_{{ context }}"}

*   You have installed the {{ loki_op }} by using the CLI or web console.
*   You have a `serviceAccount` in the same namespace in which you create the `ClusterLogForwarder`.
*   The `serviceAccount` is assigned `collect-audit-logs`, `collect-application-logs`, and `collect-infrastructure-logs` cluster roles.

### Core Setup and Configuration {id="_core_setup_and_configuration"}
**Role-based access controls, basic monitoring, and pod placement to deploy Loki.**

{% leveloffset +1 %}{% include "./modules/log6x-loki-sizing.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-loki-rbac-rules-perms.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-enabling-loki-alerts.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-loki-memberlist-ip.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-loki-retention.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-loki-pod-placement.md" %}{% endleveloffset %}

### Enhanced Reliability and Performance {id="_enhanced_reliability_and_performance"}
**Configurations to ensure Loki’s reliability and efficiency in production.**

{% leveloffset +1 %}{% include "./modules/log6x-identity-federation.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-loki-reliability-hardening.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-loki-restart-hardening.md" %}{% endleveloffset %}

### Advanced Deployment and Scalability {id="_advanced_deployment_and_scalability"}
**Specialized configurations for high availability, scalability, and error handling.**

{% leveloffset +1 %}{% include "./modules/log6x-loki-zone-aware-rep.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-loki-zone-fail-recovery.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/log6x-loki-rate-limit-errors.md" %}{% endleveloffset %}