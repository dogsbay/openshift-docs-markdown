{%- set _mod_docs_content_type = "CONCEPT" %}

# Structure of the metadata.yaml file {id="cluster-compare-metadata-structure_{{ context }}"}

The `metadata.yaml` file provides a central configuration point to define and configure the templates in a reference configuration.
The file features a hierarchy of `parts` and `components`. `parts` are groups of `components` and `components` are groups of templates.
Under each component, you can configure template dependencies, validation rules, and add descriptive metadata. {._abstract}

```yaml title="Example metadata.yaml file"
apiVersion: v2
parts:
  - name: <part_name>
    components:
      - name: <component_name>
        <component_configuration>
  - name: <part_name>
      - name: <component_name>
        <component_configuration>
```

where:


`<part_name>`
:   Specify a `part` name. Every `part` typically describes a workload or a set of workloads.

`<component_name>`
:   Specify a `component` name.

`<component_configuration>`
:   Specify the configuration for a template. For example, define template relationships or configure what fields to use in a comparison.