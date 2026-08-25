{%- set _mod_docs_content_type = "REFERENCE" %}
# Creating and managing container sources by using the Knative CLI {id="serverless-kn-containersource_{{ context }}"}

You can use the `kn source container` commands to create  and manage container sources by using the Knative (`kn`) CLI. Using the Knative CLI to create event sources provides a more streamlined and intuitive user interface than modifying YAML files directly.

```terminal title="Create a container source"
$ kn source container create <container_source_name> --image <image_uri> --sink <sink>
```

```terminal title="Delete a container source"
$ kn source container delete <container_source_name>
```

```terminal title="Describe a container source"
$ kn source container describe <container_source_name>
```

```terminal title="List existing container sources"
$ kn source container list
```

```terminal title="List existing container sources in YAML format"
$ kn source container list -o yaml
```

**Update a container source**

This command updates the image URI for an existing container source:

```terminal
$ kn source container update <container_source_name> --image <image_uri>
```