{%- set _mod_docs_content_type = "REFERENCE" %}
# Integrate external scanning {id="security-container-content-external-scanning_{{ context }}"}

{{ product_title }} makes use of object annotations to extend functionality. You can use external tools, such as vulnerability scanners, to annotate image objects with metadata to summarize results and control pod execution. {._abstract}

This section describes the recognized format of this annotation so it can be reliably used in consoles to display useful data to users.