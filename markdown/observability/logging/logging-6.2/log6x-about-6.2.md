{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Logging 6.2 {id="log6x-about-6-2"}

{%- set context = "logging-6x-6.2" %}

The `ClusterLogForwarder` custom resource (CR) is the central configuration point for log collection and forwarding.

## Inputs and outputs {id="inputs-and-outputs_6-2_{{ context }}"}

Inputs specify the sources of logs to be forwarded. Logging provides the following built-in input types that select logs from different parts of your cluster:
 
* `application`
* `receiver`
* `infrastructure`
* `audit`

You can also define custom inputs based on namespaces or pod labels to fine-tune log selection.

Outputs define the destinations where logs are sent. Each output type has its own set of configuration options, allowing you to customize the behavior and authentication settings.

## Receiver input type {id="receiver-input-type_6-2_{{ context }}"}
The receiver input type enables the Logging system to accept logs from external sources. It supports two formats for receiving logs: `http` and `syslog`.

The `ReceiverSpec` field defines the configuration for a receiver input.

## Pipelines and filters {id="pipelines-and-filters_6-2_{{ context }}"}

Pipelines determine the flow of logs from inputs to outputs. A pipeline consists of one or more input refs, output refs, and optional filter refs. You can use filters to transform or drop log messages within a pipeline. The order of filters matters, as they are applied sequentially, and earlier filters can prevent log messages from reaching later stages.

## Operator behavior {id="operator-behavior_6-2_{{ context }}"}

The Cluster Logging Operator manages the deployment and configuration of the collector based on the `managementState` field of the `ClusterLogForwarder` resource:

*   When set to `Managed` (default), the Operator actively manages the logging resources to match the configuration defined in the spec.
*   When set to `Unmanaged`, the Operator does not take any action, allowing you to manually manage the logging components.

## Validation {id="validation_6-2_{{ context }}"}
Logging includes extensive validation rules and default values to ensure a smooth and error-free configuration experience. The `ClusterLogForwarder` resource enforces validation checks on required fields, dependencies between fields, and the format of input values. Default values are provided for certain fields, reducing the need for explicit configuration in common scenarios.

## Quick start {id="quick-start_6-2_{{ context }}"}

OpenShift Logging supports two data models:

*   ViaQ (General Availability)
*   OpenTelemetry (Technology Preview)

You can select either of these data models based on your requirement by configuring the `lokiStack.dataModel` field in the `ClusterLogForwarder`. ViaQ is the default data model when forwarding logs to LokiStack.


:::note

In future releases of OpenShift Logging, the default data model will change from ViaQ to OpenTelemetry.

:::


{% leveloffset +2 %}{% include "./modules/log6x-quickstart-viaq.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/log6x-quickstart-opentelemetry.md" %}{% endleveloffset %}