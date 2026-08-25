{%- set _mod_docs_content_type = "CONCEPT" %}
# About admission plugins {id="about-admission-plug-ins_{{ context }}"}

Admission plugins process resource requests to the control plane API to validate requests and enforce security policies, resource limitations, and configuration requirements. {._abstract}

You can use admission plugins to regulate how {{ product_title }} functions. After a resource request is authenticated and authorized, admission plugins intercept the resource request to the master API to validate resource requests and to ensure that scaling policies are adhered to. Admission plugins are used to enforce security policies, resource limitations, configuration requirements, and other settings.