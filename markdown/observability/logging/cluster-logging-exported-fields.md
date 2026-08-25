{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Log Record Fields {id="cluster-logging-exported-fields"}
{%- set context = "cluster-logging-exported-fields" %}

The following fields can be present in log records exported by the {{ logging }}. Although log records are typically formatted as JSON objects, the same data model can be applied to other encodings.

To search these fields from Elasticsearch and Kibana, use the full dotted field name when searching. For example, with an Elasticsearch **/_search URL**, to look for a Kubernetes pod name, use `/_search/q=kubernetes.pod_name:name-of-my-pod`.

{% leveloffset 0 %}{% include "./modules/cluster-logging-exported-fields-top-level-fields.md" %}{% endleveloffset %}

{% leveloffset 0 %}{% include "./modules/cluster-logging-exported-fields-kubernetes.md" %}{% endleveloffset %}