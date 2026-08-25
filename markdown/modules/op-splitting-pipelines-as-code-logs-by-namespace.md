{%- set _mod_docs_content_type = "REFERENCE" %}
# Splitting {{ pac }} logs by namespace {id="splitting-pipelines-as-code-logs-by-namespace_{{ context }}"}

The logs contain the namespace information to make it possible to filter logs or split the logs by a particular namespace. For example, to view the logs related to the `mynamespace` namespace, enter the following command:

```terminal
$ oc logs pipelines-as-code-controller-<unique-id> -n openshift-pipelines | grep mynamespace (1)
```
1.  Replace `pipelines-as-code-controller-<unique-id>` with the {{ pac }} controller name.