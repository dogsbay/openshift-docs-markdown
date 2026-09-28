{%- set _mod_docs_content_type = "CONCEPT" %}
# Update the global cluster pull secret {id="update-global-cluster-pull-secret-con_{{ context }}"}

The global pull secret gives every node in the cluster credentials for the registries it pulls from. Updating it adds or replaces registry credentials cluster-wide, which the Machine Config Operator then rolls out to the nodes.