{%- set _mod_docs_content_type = "PROCEDURE" %}

# Configuring inline validation with the regex function {id="cluster-compare-configure-regex_{{ context }}"}

Use the `regex` inline function to validate fields using regular expressions. {._abstract}

**Procedure**

1.  Create a `metadata.yaml` file to match your use case. Use the following structure as an example:
    ```yaml
    apiVersion: v2
    parts:
    - name: Part1
      components:
      - name: Example
        allOf:
        - path: example.yaml
          config:
            perField:
            - pathToKey: spec.bigTextBlock
              inlineDiffFunc: regex
    ```

    where:

    `pathToKey: spec.bigTextBlock`
    :   Specifies the field for inline validation.

    `inlineDiffFunc: regex`
    :   Enables inline validation using regular expressions.

1.  Use a regular expression to validate the field in the associated template:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      namespace: dashboard
    data:
      username: "(?<username>[a-z0-9]+)"
      bigTextBlock: |-
        This is a big text block with some static content, like this line.
        It also has a place where (?<username>[a-z0-9]+) would put in their own name. (?<username>[a-z0-9]+) would put in their own name.
    ```