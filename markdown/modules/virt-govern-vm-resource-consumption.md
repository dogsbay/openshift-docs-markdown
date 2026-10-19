{%- set _mod_docs_content_type = "CONCEPT" %}
# Govern VM resource consumption {id="virt-govern-vm-resource-consumption_{{ context }}"}

Govern how much CPU and memory each project can consume by using the Application Aware Quota (AAQ) Operator, which measures the resources allocated to virtual machines rather than the total consumption of the pod, so that tenants stay within budget and VMs can still live migrate.