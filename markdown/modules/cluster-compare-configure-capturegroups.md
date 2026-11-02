{%- set _mod_docs_content_type = "PROCEDURE" %}

# Configuring inline validation with the capturegroups function {id="cluster-compare-configure-capturegroups_{{ context }}"}

Use the `capturegroups` inline function for more precise validation of fields featuring multi-line strings. This function also ensures that identically named capture groups have the same values across multiple fields. {._abstract}

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
            - pathToKey: data.username
              inlineDiffFunc: regex
            - pathToKey: spec.bigTextBlock
              inlineDiffFunc: capturegroups
    ```

    where:

    `pathToKey: data.username`
    :   Specifies the field for inline validation.

    `inlineDiffFunc: regex`
    :   Enables inline validation using capture groups.

    `pathToKey: spec.bigTextBlock`
    :   Specifies the multi-line field for capture-group validation.

    `inlineDiffFunc: capturegroups`
    :   Enables inline validation using capture groups.

1.  Use a regular expression to validate the field in the associated template:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      namespace: dashboard
    data:
      username: "(?<username>[a-z0-9]+)"
      bigTextBlock: |-
        This static content outside of a capture group should match exactly.
        Here is a username capture group: (?<username>[a-z0-9]+).
        It should match this capture group: (?<username>[a-z0-9]+).
    ```

    If the username value captured in the `data.username` field does not match the value captured in `bigTextBlock`, the `cluster-compare` plugin warns you about the inconsistent matching.

    The following is example output with a warning about the inconsistent matching:
    ```terminal
    WARNING: Capturegroup (?<username>…) matched multiple values: « mismatchuser | exampleuser »
    ```