{%- set _mod_docs_content_type = "CONCEPT" %}
# Spread the control plane across failure domains {id="spread-the-control-plane-across-failure-domains-con_{{ context }}"}

A failure domain tells the control plane machine set where it may place control plane machines, so that the three machines land in separate availability zones or hosts. The machine set balances machines across the domains you define.