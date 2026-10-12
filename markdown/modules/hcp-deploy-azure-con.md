{%- set _mod_docs_content_type = "CONCEPT" %}
# Deploying {{ hcp }} on {{ azure_short }} {id="hcp-deploy-azure-con_{{ context }}"}

With {{ hcp }} on {{ azure_first }}, you can reduce the cost associated with dedicated control-plane node VMs for each cluster. You can provision compute nodes as {{ azure_short }} Virtual Machine Scale sets for dynamic scaling, and ensure credential isolation with per-cluster {{ azure_short }} service principals. {._abstract}

{%- set FeatureName = "{{ hcp_capital }} on {{ azure_short }}" %}
{% include "./snippets/technology-preview.md" %}