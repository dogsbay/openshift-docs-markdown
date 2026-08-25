{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "cluster-logging-collector-6-1" %}
# Configuring the logging collector {id="cluster-logging-collector-6-1"}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}

{{ logging_title_uc }} collects operations and application logs from your cluster and enriches the data with Kubernetes pod and project metadata.
All supported modifications to the log collector are performed though the `spec.collection` stanza in the `ClusterLogForwarder` custom resource (CR).

{% leveloffset +1 %}{% include "./modules/log6x-creating-logfilesmetricexporter.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/log6x-cluster-logging-collector-limits.md" %}{% endleveloffset %}

## Configuring input receivers {id="cluster-logging-collector-input-receivers_{{ context }}"}

The {{ clo }} deploys a service for each configured input receiver so that clients can write to the collector. This service exposes the port specified for the input receiver. For log forwarder `ClusterLogForwarder` CR deployments, the service name is in the `<clusterlogforwarder_resource_name>-<input_name>` format.

{% leveloffset +2 %}{% include "./modules/log6x-log-collector-http-server.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/log6x-log-collector-syslog-server.md" %}{% endleveloffset %}