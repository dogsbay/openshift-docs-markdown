{%- set _mod_docs_content_type = "REFERENCE" %}
# Using remote pipeline annotations with {{ pac }} {id="using-remote-pipeline-annotations-with-pipelines-as-code_{{ context }}"}

You can share a pipeline definition across multiple repositories by using the remote pipeline annotation. {._abstract}

```yaml
...
    pipelinesascode.tekton.dev/pipeline: "<https://git.provider/raw/pipeline.yaml>" (1)
...
```
1.  URL to the remote pipeline definition. You can also provide locations for files inside the same repository.


:::note

You can reference only one pipeline definition using the annotation.

:::