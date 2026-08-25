{%- set _mod_docs_content_type = "CONCEPT" %}
# Automatic pruning of task runs and pipeline runs {id="op-automatic-pruning-taskrun-pipelinerun_{{ context }}"}

Stale `TaskRun` and `PipelineRun` objects and their executed instances occupy physical resources that can be used for active runs. For optimal utilization of these resources, {{ pipelines_title }} provides a pruner component that automatically removes unused objects and their instances in various namespaces.


:::note

You can configure the pruner for your entire installation by using the `TektonConfig` custom resource and modify configuration for a namespace by using namespace annotations. However, you cannot selectively auto-prune an individual task run or pipeline run in a namespace.

:::