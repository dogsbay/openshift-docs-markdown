{%- set _mod_docs_content_type = "CONCEPT" %}
# Check the status of a cluster extension {id="check-status-of-a-cluster-extension-con_{{ context }}"}

When an extension does not install or update as expected, you can inspect its state to decide what to do next. {{ olmv1_first }} reports progress through the rollout of the extension and surfaces the most common failure classes, such as unresolved catalog content, insufficient RBAC permissions, and invalid deployment configuration.