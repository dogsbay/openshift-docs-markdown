{%- set _mod_docs_content_type = "REFERENCE" %}
# Default monitoring targets {id="default-monitoring-targets_{{ context }}"}

{% if not (openshift_dedicated or openshift_rosa) %}
In addition to the components of the stack itself, the default monitoring stack monitors additional platform components.

The following are examples of monitoring targets:
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
The following are examples of targets monitored by Red&#160;Hat Site Reliability Engineers (SRE) in your {{ product_title }} cluster:
{% endif %}

*   CoreDNS
*   etcd
*   HAProxy
*   Image registry
*   Kubelets
*   Kubernetes API server
*   Kubernetes controller manager
*   Kubernetes scheduler
{%- if not openshift_rosa %}
*   OpenShift API server
*   OpenShift Controller Manager
*   Operator Lifecycle Manager (OLM)
{%- endif %}

{% if openshift_dedicated or openshift_rosa %}

:::note

The exact list of targets can vary depending on your cluster capabilities and installed components.

:::

{% endif %}

{% if not (openshift_dedicated or openshift_rosa) %}

:::note

*   The exact list of targets can vary depending on your cluster capabilities and installed components.
*   Each {{ product_title }} component is responsible for its monitoring configuration. For problems with the monitoring of an {{ product_title }} component, open a
[Jira issue](https://issues.redhat.com/secure/CreateIssueDetails!init.jspa?pid=12332330&summary=Monitoring_issue&issuetype=1&priority=10200&versions=12417854) against that component, not against the general monitoring component.

:::


Other {{ product_title }} framework components might be exposing metrics as well. For details, see their respective documentation.
{% endif %}