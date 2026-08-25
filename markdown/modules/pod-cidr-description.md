{%- set _mod_docs_content_type = "CONCEPT" %}
# Pod classless inter-domain routing (CIDR) {id="pod-cidr-description_{{ context }}"}

In the pod CIDR field, you must specify the IP address range for pods. {._abstract}

{% if openshift_enterprise %}
The pod CIDR is the same as the `clusterNetwork` CIDR and the cluster CIDR.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
Red&#160;Hat recommends, but this task is not mandatory, that the address block is the same between clusters. This does not create IP address conflicts.
{%- endif %}
The range must be large enough to accommodate your workload. The address block must not overlap with any external service accessed from within the cluster. The default is `10.128.0.0/14`.
{%- if openshift_enterprise %}
You can expand the range after cluster installation.
{%- endif %}