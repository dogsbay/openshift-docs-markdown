{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using build fields as environment variables {id="builds-using-build-fields-as-environment-variables_{{ context }}"}

You can inject information about the build object by setting the `fieldPath` environment variable source to the `JsonPath` of the field from which you are interested in obtaining the value.


:::note

Jenkins Pipeline strategy does not support `valueFrom` syntax for environment variables.

:::


**Procedure**

*   Set the `fieldPath` environment variable source to the `JsonPath` of the field from which you are interested in obtaining the value:
    ```yaml
    env:
      - name: FIELDREF_ENV
        valueFrom:
          fieldRef:
            fieldPath: metadata.name
    ```