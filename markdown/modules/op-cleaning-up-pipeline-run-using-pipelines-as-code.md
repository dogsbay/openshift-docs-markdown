{%- set _mod_docs_content_type = "REFERENCE" %}
# Cleaning up pipeline run using {{ pac }} {id="cleaning-up-pipeline-run-using-pipelines-as-code_{{ context }}"}

There can be many pipeline runs in a user namespace. By setting the `max-keep-runs` annotation, you can configure {{ pac }} to retain a limited number of pipeline runs that matches an event. For example: {._abstract}

```yaml
...
  pipelinesascode.tekton.dev/max-keep-runs: "<max_number>" (1)
...
```
1.  {{ pac }} starts cleaning up right after it finishes a successful execution, retaining only the maximum number of pipeline runs configured using the annotation.

    :::note

    *   {{ pac }} skips cleaning the running pipelines but cleans up the pipeline runs with an unknown status.
    *   {{ pac }} skips cleaning a failed pull request.
    
    :::