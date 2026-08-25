{%- set _mod_docs_content_type = "SNIPPET" %}
```terminal
$ oc import-image <multiarch_image_stream_tag>  --from=<registry>/<project_name>/<image_name> \
--import-mode='PreserveOriginal'
```