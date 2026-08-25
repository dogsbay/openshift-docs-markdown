{%- set _mod_docs_content_type = "CONCEPT" %}
# Ignoring source-to-image source files {id="builds-strategy-s2i-ignore-source-files_{{ context }}"}

Source-to-image (S2I) supports a `.s2iignore` file, which contains a list of file patterns that should be ignored. Files in the build working directory, as provided by the various input sources, that match a pattern found in the `.s2iignore` file will not be made available to the `assemble` script.