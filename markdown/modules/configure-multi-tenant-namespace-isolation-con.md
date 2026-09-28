{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure multi-tenant namespace isolation {id="configure-multi-tenant-namespace-isolation-con_{{ context }}"}

Multi-tenancy in network observability restricts each user to the flow data for the namespaces they can access. The `FlowCollectorSlice` resource extends this further by delegating flow collection settings to project administrators while cluster governance stays central.