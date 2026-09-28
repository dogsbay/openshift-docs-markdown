{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure {{ rh_rhacm_first }} for telco deployments {id="configure-rhacm-for-telco-deployments-con_{{ context }}"}

To use {{ rh_rhacm }} in a disconnected environment, create a mirror registry that mirrors the {{ product_title }} release images and the Operator Lifecycle Manager (OLM) catalog that contains the required Operator images. You can also use the disconnected mirror host to serve the {{ op_system }} ISO and RootFS disk images that provision the bare-metal hosts.