{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Configuring log forwarding {id="configuring-log-forwarding"}
{%- set context = "configuring-log-forwarding" %}

{% include "./snippets/audit-logs-default.md" %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-collector-log-forwarding-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-create-clf.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-delivery-tuning.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-multiline-except.md" %}{% endleveloffset %}

{% if not openshift_rosa %}
{% leveloffset +1 %}{% include "./modules/cluster-logging-collector-log-forward-gcp.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/logging-forward-splunk.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-http-forward.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-forwarding-azure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-collector-log-forward-project.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-collector-log-forward-logs-from-application-pods.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-audit-log-filtering.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{% if openshift_enterprise or openshift_origin %}
*   [Logging network policy events](/networking/network_security/logging-network-security#logging-network-security)[Logging for egress firewall and network policy rules]
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   [Logging for egress firewall and network policy rules](https://docs.openshift.com/container-platform/latest/networking/ovn_kubernetes_network_provider/logging-network-security.html#logging-network-security)
{% endif %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-collector-log-forward-loki.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring Loki server](https://grafana.com/docs/loki/latest/configuration/)

{% leveloffset +1 %}{% include "./modules/cluster-logging-collector-log-forward-es.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-collector-log-forward-fluentd.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-collector-log-forward-syslog.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-collector-log-forward-kafka.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-collector-log-forward-cloudwatch.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/cluster-logging-collector-log-forward-secret-cloudwatch.md" %}{% endleveloffset %}

{% if openshift_rosa %}
{% leveloffset +1 %}{% include "./modules/rosa-cluster-logging-collector-log-forward-sts-cloudwatch.md" %}{% endleveloffset %}
{% endif %}

{% if openshift_enterprise or openshift_origin or openshift_dedicated %}
{% leveloffset +1 %}{% include "./modules/cluster-logging-collector-log-forward-sts-cloudwatch.md" %}{% endleveloffset %}
{% endif %}

**Additional resources**
{._additional-resources}

*   [AWS STS API Reference](https://docs.aws.amazon.com/STS/latest/APIReference/welcome.html)
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Cloud Credential Operator (CCO)](/authentication/managing_cloud_provider_credentials/about-cloud-credential-operator#about-cloud-credential-operator)
{% endif %}