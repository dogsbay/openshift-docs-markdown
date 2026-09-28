{%- set _mod_docs_content_type = "CONCEPT" %}
# Understand Image CR parameters {id="understand-image-cr-parameters-con_{{ context }}"}

The cluster-wide `Image` custom resource holds the image settings that apply to every node, such as trusted registries, mirrors, and allowed sources. Review its parameters and the registry configuration file that it generates before you change image policy.