{%- set _mod_docs_content_type = "CONCEPT" %}
# Use S2I builder images {id="use-s2i-builder-images-con_{{ context }}"}

A Source-to-Image (S2I) builder image transforms your application source into a runnable container image. You can select a builder image, declare an S2I build strategy against it, and reuse artifacts between runs with incremental builds.