{%- set _mod_docs_content_type = "PROCEDURE" %}

# Excluding specific fields by setting default exclusion fields {id="cluster-compare-ignore-default-fields_{{ context }}"}

You can exclude fields by defining a default value for `fieldsToOmitRefs` in the `defaultOmitRef` field. This default exclusion applies to all templates, unless overridden by the `config.fieldsToOmitRefs` field for a specific template. {._abstract}

**Procedure**

*   Create a `metadata.yaml` file to match your use case. Use the following structure as an example:

    Example `metadata.yaml` file:
    ```yaml
    apiVersion: v2
    parts:

    #...

    fieldsToOmit:
       defaultOmitRef: default
       items:
          default:
             - pathToKey: a.custom.default."k8s.io"
    ```

    where:

    `defaultOmitRef: default`
    :   Sets the default exclusion for all templates, unless overridden by the `config.fieldsToOmitRefs` field for a specific template.

    `pathToKey: a.custom.default."k8s.io"`
    :   The value is excluded for all templates.