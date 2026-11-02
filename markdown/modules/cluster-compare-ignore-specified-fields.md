{%- set _mod_docs_content_type = "PROCEDURE" %}

# Excluding specific fields {id="cluster-compare-ignore-specified-fields_{{ context }}"}

You can specify fields to exclude by defining the path to the field, and then referencing the definition in the `config` section for a template.  {._abstract}

**Procedure**

*   Create a `metadata.yaml` file to match your use case. Use the following structure as an example:

    Example `metadata.yaml` file:
    ```yaml
    apiVersion: v2
    parts:
      - name: Part1
        components:
          - name: Component1
            - path: deployment.yaml
              config:
                fieldsToOmitRefs:
                  - deployments

    #...

    fieldsToOmit:
       items:
          deployments:
             - pathToKey: spec.selector.matchLabels.k8s-app
    ```

    where:

    `deployments`
    :   References the `fieldsToOmit.items.deployments` item for the `deployment.yaml` template.

    `pathToKey: spec.selector.matchLabels.k8s-app`
    :   Excludes the `spec.selector.matchLabels.k8s-app` field from the comparison.

    :::note

    Setting `fieldsToOmitRefs` replaces the default value.
    
    :::