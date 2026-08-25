{%- set _mod_docs_content_type = "CONCEPT" %}
# Source-to-image environment variables {id="builds-strategy-s2i-environment-variables_{{ context }}"}

There are two ways to make environment variables available to the source build process and resulting image: environment files and `BuildConfig` environment values. The variables that you provide using either method will be present during the build process and in the output image.