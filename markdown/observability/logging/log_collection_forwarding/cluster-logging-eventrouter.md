{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "cluster-logging-eventrouter" %}
{% include "./_attributes/common-attributes.md" %}
# Collecting and storing Kubernetes events {id="cluster-logging-eventrouter"}

The {{ product_title }} Event Router is a pod that watches Kubernetes events and logs them for collection by the {{ logging }}. You must manually deploy the Event Router.

The Event Router collects events from all projects and writes them to `STDOUT`. The collector then forwards those events to the store defined in the `ClusterLogForwarder` custom resource (CR).


:::important

The Event Router adds additional load to Fluentd and can impact the number of other log messages that can be processed.

:::


{% leveloffset +1 %}{% include "./modules/cluster-logging-eventrouter-deploy.md" %}{% endleveloffset %}