{%- set _mod_docs_content_type = "CONCEPT" %}
# Set namespace exclusions for the default ingress when creating a cluster {id="osd-create-cluster-exclude-namespace-selector-settings_{{ context }}"}

When you create an {{ product_title }} cluster, you can specify a namespace label selector so that namespaces matching those labels are excluded from the default `application ingress`. This allows you to exclude namespaces that host workloads through the default ingress, such as namespaces with sensitive data or internal services. {._abstract}


:::note

Do not exclude namespaces that host required platform routes (for example, `openshift-console` or `openshift-authentication`). Excluding them can break the web console, downloads, or OAuth flows.

:::