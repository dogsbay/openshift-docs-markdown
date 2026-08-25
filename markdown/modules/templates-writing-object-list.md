{%- set _mod_docs_content_type = "REFERENCE" %}
# Writing the template object list {id="templates-writing-object-list_{{ context }}"}

To specify what a template creates when processed, define an `objects` list with the API resources to deploy. Parameter values are substituted into each object definition before creation. {._abstract}

The following is an example of an object list:

```yaml
kind: "Template"
apiVersion: "v1"
metadata:
  name: my-template
objects:
  - kind: "Service"
    apiVersion: "v1"
    metadata:
      name: "cakephp-mysql-example"
      annotations:
        description: "Exposes and load balances the application pods"
    spec:
      ports:
        - name: "web"
          port: 8080
          targetPort: 8080
      selector:
        name: "cakephp-mysql-example"
```

where:


`objects.kind`
:   Specifies the definition of a service, which is created by this template.


:::note

If an object definition metadata includes a fixed `namespace` field value, the field is stripped out of the definition during template instantiation. If the `namespace` field contains a parameter reference, normal parameter substitution is performed, and the object is created in the resulting namespace. This requires that the user has permission to create objects in that namespace.

:::