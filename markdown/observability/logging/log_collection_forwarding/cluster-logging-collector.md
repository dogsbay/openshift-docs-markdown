{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "cluster-logging-collector" %}
# Configuring the logging collector {id="cluster-logging-collector"}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}

{{ logging_title_uc }} collects operations and application logs from your cluster and enriches the data with Kubernetes pod and project metadata.
All supported modifications to the log collector can be performed though the `spec.collection` stanza in the `ClusterLogging` custom resource (CR).

{% leveloffset +1 %}{% include "./modules/configuring-logging-collector.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/creating-logfilesmetricexporter.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-collector-limits.md" %}{% endleveloffset %}

## Configuring input receivers {id="cluster-logging-collector-input-receivers"}

The {{ clo }} deploys a service for each configured input receiver so that clients can write to the collector. This service exposes the port specified for the input receiver.
The service name is generated based on the following:

*   For multi log forwarder `ClusterLogForwarder` CR deployments, the service name is in the format `<ClusterLogForwarder_CR_name>-<input_name>`. For example, `example-http-receiver`.
*   For legacy `ClusterLogForwarder` CR deployments, meaning those named `instance` and located in the `openshift-logging` namespace, the service name is in the format `collector-<input_name>`. For example, `collector-http-receiver`.

{% leveloffset +2 %}{% include "./modules/log-collector-http-server.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Overview of API audit filter](/observability/logging/log_collection_forwarding/configuring-log-forwarding#logging-audit-filtering_configuring-log-forwarding)

{% leveloffset +1 %}{% include "./modules/cluster-logging-collector-tuning.md" %}{% endleveloffset %}