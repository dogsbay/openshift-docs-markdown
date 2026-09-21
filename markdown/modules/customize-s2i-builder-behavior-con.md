{%- set _mod_docs_content_type = "CONCEPT" %}
# Customize S2I builder behavior {id="customize-s2i-builder-behavior-con_{{ context }}"}

To modify the default `assemble` and `run` script behavior in {{ product_title }}, you can customize Source-to-Image (S2I) builder images. You can override the scripts embedded in a builder image, pass environment variables and environment files into the build, and exclude source files from it.