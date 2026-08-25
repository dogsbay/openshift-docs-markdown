{%- set _mod_docs_content_type = "CONCEPT" %}
# Service classless inter-domain routing (CIDR) {id="service-cidr-description_{{ context }}"}

In the Service CIDR field, you must specify the IP address range for services. {._abstract}

{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
Red&#160;Hat recommends, but this task is not mandatory, that the address block is the same between clusters. This does not create IP address conflicts.
{% endif %}

The range must be large enough to accommodate your workload. The address block must not overlap with any external service accessed from within the cluster. The default is `172.30.0.0/16`.