{%- set _mod_docs_content_type = "REFERENCE" %}
# Project-level limits {id="nodes-cluster-project-overcommit_{{ context }}"}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
To help control overcommit, you can set per-project resource limit ranges, specifying memory and CPU limits and defaults for a project that overcommit cannot exceed.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
In {{ product_title }}, because overcommitment of project-level resources is enabled by default, if required by your use case, you can disable overcommitment on projects that are not managed by Red Hat. {._abstract}
{% endif %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
For information on project-level resource limits, see the _Additional resources_ section.

Alternatively, you can disable overcommitment for specific projects.
{% endif %}

{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
For the list of projects that are managed by Red Hat and cannot be modified, see "Red Hat Managed resources" in _Support_.
{% endif %}