{%- set _mod_docs_content_type = "REFERENCE" %}
# Setting concurrency limits {id="setting-concurrency-limits-in-repository-crd_{{ context }}"}

You can use the `concurrency_limit` spec in the `Repository` custom resource definition (CRD) to define the maximum number of pipeline runs running simultaneously for a repository. {._abstract}

```yaml
apiVersion: "pipelinesascode.tekton.dev/v1alpha1"
kind: Repository
metadata:
  name: my-repo
  namespace: target-namespace
spec:
# ...
  concurrency_limit: <number>
# ...

```

If there are multiple pipeline runs matching an event, the pipeline runs that match the event start in an alphabetical order.

For example, if you have three pipeline runs in the `.tekton` directory and you create a pull request with a `concurrency_limit` of `1` in the repository configuration, then all the pipeline runs are executed in an alphabetical order. At any given time, only one pipeline run is in the running state while the rest are queued.