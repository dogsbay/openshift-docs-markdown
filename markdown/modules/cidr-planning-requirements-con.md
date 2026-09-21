{%- set _mod_docs_content_type = "CONCEPT" %}
# CIDR planning requirements {id="cidr-planning-requirements-con_{{ context }}"}

If your cluster uses OVN-Kubernetes, you must specify non-overlapping Classless Inter-Domain Routing (CIDR) subnet ranges. Plan the machine, service, and pod ranges, and the host prefix, before you deploy the cluster.