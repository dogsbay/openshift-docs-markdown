{%- set _mod_docs_content_type = "CONCEPT" %}
# Build environments {id="builds-build-environment_{{ context }}"}

As with pod environment variables, build environment variables can be defined in terms of references to other resources or variables using the Downward API. There are some exceptions, which are noted.

You can also manage environment variables defined in the `BuildConfig` with the `oc set env` command.


:::note

Referencing container resources using `valueFrom` in build environment variables is not supported as the references are resolved before the container is created.

:::