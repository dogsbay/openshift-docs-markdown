{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure control plane failure domains {id="configure-control-plane-failure-domains-con_{{ context }}"}

A failure domain tells the control plane machine set where it may place control plane machines, so that the three machines land in separate availability zones or hosts. The machine set balances machines across the domains you define.