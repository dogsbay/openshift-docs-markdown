{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding annotations to a function {id="serverless-functions-adding-annotations_{{ context }}"}

You can add annotations to a function. Similar to a label, an annotation is defined as a key-value map. Annotations are useful, for example, for providing metadata about a function, such as the function’s author.

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Serving are installed on the cluster.
*   You have installed the Knative (`kn`) CLI.
*   You have created a function.

**Procedure**

1.  Open the `func.yaml` file for your function.
1.  For every annotation that you want to add, add the following YAML to the `annotations` section:
    ```yaml
    name: test
    namespace: ""
    runtime: go
    ...
    annotations:
      <annotation_name>: "<annotation_value>" (1)
    ```
    1.  Substitute `<annotation_name>: "<annotation_value>"` with your annotation.

        For example, to indicate that a function was authored by Alice, you might include the following annotation:
        ```yaml
        name: test
        namespace: ""
        runtime: go
        ...
        annotations:
          author: "alice@example.com"
        ```
1.  Save the configuration.

The next time you deploy your function to the cluster, the annotations are added to the corresponding Knative service.