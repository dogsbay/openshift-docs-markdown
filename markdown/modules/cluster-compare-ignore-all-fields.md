{%- set _mod_docs_content_type = "PROCEDURE" %}

# Excluding all fields not specified in a template {id="cluster-compare-ignore-all-fields_{{ context }}"}

During the comparison process, the `cluster-compare` plugin renders a template by merging fields from the corresponding custom resource (CR). If you configure the `ignore-unspecified-fields` to `true`, all fields that are present in the CR, but not in the template, are excluded from the merge. Use this approach when you want to focus the comparison on the fields specified in the template only. {._abstract}

**Procedure**

*   Create a `metadata.yaml` file to match your use case. Use the following structure as an example:
    ```yaml
    apiVersion: v2
    parts:
      - name: Part1
        components:
          - name: Namespace
            allOf:
              - path: namespace.yaml
                config:
                  ignore-unspecified-fields: true
    #...
    ```

    where:

    `ignore-unspecified-fields: true`
    :   Specify `true` to exclude from the comparison all fields in a CR that are not explicitly configured in the corresponding `namespace.yaml` template.