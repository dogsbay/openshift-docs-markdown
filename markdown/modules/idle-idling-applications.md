{%- set _mod_docs_content_type = "CONCEPT" %}
# Application idling {id="idle-idling-applications_{{ context }}"}

Identify the scalable resources for one or more services, such as deployment configurations and replication controllers, and scale them down to zero replicas to optimize cluster capacity. {._abstract}

You can use the `oc idle` command to idle a single service, or use the `--resource-names-file` option to idle multiple services.