{%- set _mod_docs_content_type = "CONCEPT" %}
# Disabling cluster tasks and pipeline templates {id="op-disabling-cluster-tasks-and-pipeline-templates_{{ context }}"}

By default, the `TektonAddon` custom resource (CR) installs `clusterTasks` and `pipelineTemplates` resources along with {{ pipelines_shortname }} on the cluster.

You can disable installation of the `clusterTasks` and `pipelineTemplates` resources by setting the parameter value to `false` in the `.spec.addon` specification. In addition, you can disable the `communityClusterTasks` parameter.

```yaml title="Example"
apiVersion: operator.tekton.dev/v1alpha1
kind: TektonConfig
metadata:
  name: config
spec:
  addon:
    params:
      - name: clusterTasks
        value: 'false'
      - name: pipelineTemplates
        value: 'false'
      - name: communityClusterTasks
        value: 'true'
```