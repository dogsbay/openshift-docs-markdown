{%- set _mod_docs_content_type = "CONCEPT" %}
# Monitoring {{ cert_manager_operator }} {id="cert-manager-monitoring-con_{{ context }}"}

By default, the {{ cert_manager_operator }} exposes metrics for the three core components: controller, cainjector, and webhook. You can configure OpenShift Monitoring to collect these metrics by using the Prometheus Operator format.