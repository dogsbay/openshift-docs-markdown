{%- set _mod_docs_content_type = "CONCEPT" %}
# Upgrade machine pools {id="rosa-hcp-upgrade-machine-pools_{{ context }}"}

In {{ product_title }}, machine pool upgrades are decoupled from hosted control plane upgrades. This strategy gives you fine-grained control over cluster availability and allows you to schedule maintenance for one or several machine pools independently on your preferred schedule.