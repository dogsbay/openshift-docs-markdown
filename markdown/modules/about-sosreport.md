{%- set _mod_docs_content_type = "CONCEPT" %}
# About sosreport {id="about-sosreport_{{ context }}"}

`sosreport` is a tool that collects configuration details, system information, and diagnostic data from {{ op_system_base_full }} and {{ op_system_first }} systems. `sosreport` provides a standardized way to collect diagnostic information relating to a node, which can then be provided to Red Hat Support for issue diagnosis. {._abstract}

In some support interactions, Red Hat Support may ask you to collect a `sosreport` archive for a specific {{ product_title }} node. For example, it might sometimes be necessary to review system logs or other node-specific data that is not included within the output of `oc adm must-gather`.