{%- set _mod_docs_content_type = "REFERENCE" %}
# Integration reference {id="security-integration-reference_{{ context }}"}

In most cases, external tools such as vulnerability scanners develop a script or plugin that watches for image updates, performs scanning, and annotates the associated image object with the results. Typically this automation calls the {{ product_title }} {{ product_version }} REST APIs to write the annotation. See {{ product_title }} REST APIs for general information about the REST APIs.