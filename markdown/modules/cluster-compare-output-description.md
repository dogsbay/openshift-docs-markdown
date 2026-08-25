{%- set _mod_docs_content_type = "PROCEDURE" %}

# Configuring descriptions for the output {id="cluster-compare-output-description_{{ context }}"}

Each part, component, or template can include descriptions to provide additional context, instructions, or documentation links. These descriptions are helpful to convey why a specific template or structure is required. {._abstract}

**Procedure**

*   Create a `metadata.yaml` file to match your use case. Use the following structure as an example:
    ```yaml
    apiVersion: v2
    parts:
      - name: Part1
        description: |-
          General text for every template under this part, unless overridden.
        components:
          - name: Component1
            # With no description set, this inherits the description from the part above.
            OneOf:
              - path: Template1.yaml
                # This inherits the component description, if set.
              - path: Template2.yaml
              - path: Template3.yaml
                description: |-
                  This template has special instructions that don't apply to the others.
          - name: Component2
            description: |-
              This overrides the part text with something more specific.
              Multi-line text is supported, at all levels.
            allOf:
              - path: RequiredTemplate1.yaml
              - path: RequiredTemplate2.yaml
                description: |-
                  Required for important reasons.
              - path: RequiredTemplate3.yaml
    ```