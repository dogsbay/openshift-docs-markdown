{%- set _mod_docs_content_type = "CONCEPT" %}
# Build S2I builder images {id="build-s2i-builder-images-con_{{ context }}"}

To let developers build applications from source with minimal effort, you can author your own Source-to-Image (S2I) builder images. Building a builder image means writing the `assemble`, `run`, `save-artifacts`, and `usage` scripts that turn application source into a runnable container image, and then testing the result.