{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting annotations mapping to be optional {id="sbo-setting-annotations-mapping-optional_{{ context }}"}

You can have optional fields in the annotations. For example, a path to the credentials might not be present if the service endpoint does not require authentication. In such cases, a field might not exist in the target path of the annotations. As a result, {{ servicebinding_title }} generates an error, by default.

As a service provider, to indicate whether you require annotations mapping, you can set a value for the `optional` flag in your annotations when enabling services. {{ servicebinding_title }} provides annotations mapping only if the target path is available. When the target path is not available, the {{ servicebinding_title }} skips the optional mapping and continues with the projection of the existing mappings without throwing any errors.

**Procedure**

*   To make a field in the annotations optional, set the `optional` flag value to `true`:
    ```yaml title="Example"
    apiVersion: apps.example.org/v1beta1
    kind: Database
    metadata:
      name: my-db
      namespace: my-petclinic
      annotations:
        service.binding/username: path={.spec.name},optional=true
    # ...
    ```


    :::note

    *   If you set the `optional` flag value to `false` and the {{ servicebinding_title }} is unable to find the target path, the Operator fails the annotations mapping.
    *   If the `optional` flag has no value set, the {{ servicebinding_title }} considers the value as `false` by default and fails the annotations mapping.
    
    :::