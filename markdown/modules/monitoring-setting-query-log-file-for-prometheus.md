{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling the query log file for Prometheus {id="setting-query-log-file-for-prometheus_{{ context }}"}

{%- set configmap_name = "cluster-monitoring-config" -%}
{%- set namespace_name = "openshift-monitoring" -%}
{%- set component = "prometheusK8s" -%}
{%- set pod = "prometheus-k8s-0" %}
{%- set configmap_name = "user-workload-monitoring-config" -%}
{%- set namespace_name = "openshift-user-workload-monitoring" -%}
{%- set component = "prometheus" -%}
{%- set pod = "prometheus-user-workload-0" %}

You can configure Prometheus to write all queries that have been run by the engine to a log file.


:::important

Because log rotation is not supported, only enable this feature temporarily when you need to troubleshoot an issue. After you finish troubleshooting, disable query logging by reverting the changes you made to the `ConfigMap` object to enable the feature.

:::


**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   You have created the `cluster-monitoring-config` `ConfigMap` object.
{%- if not (openshift_dedicated or openshift_rosa) %}
*   You have access to the cluster as a user with the `cluster-admin` cluster role or as a user with the `user-workload-monitoring-config-edit` role in the `openshift-user-workload-monitoring` project.
*   A cluster administrator has enabled monitoring for user-defined projects.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
*   The `user-workload-monitoring-config` `ConfigMap` object exists. This object is created by default when the cluster is created.
{%- endif %}
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Edit the `{{ configmap_name }}` config map in the `{{ namespace_name }}` project:
    ```terminal
    $ oc -n {{ namespace_name }} edit configmap {{ configmap_name }}
    ```
1.  Add the `queryLogFile` parameter for Prometheus under `data/config.yaml`:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: {{ configmap_name }}
      namespace: {{ namespace_name }}
    data:
      config.yaml: |
        {{ component }}:
          queryLogFile: <path> # (1)
    ```
    1.  Add the full path to the file in which queries will be logged.
1.  Save the file to apply the changes. The pods affected by the new configuration are automatically redeployed.
1.  Verify that the pods for the component are running. The following sample command lists the status of pods:
    ```terminal
    $ oc -n {{ namespace_name }} get pods
    ```
    ```terminal title="Example output"
    ...
    prometheus-operator-567c9bc75c-96wkj   2/2     Running   0          62m
    prometheus-k8s-0                       6/6     Running   1          57m
    prometheus-k8s-1                       6/6     Running   1          57m
    thanos-querier-56c76d7df4-2xkpc        6/6     Running   0          57m
    thanos-querier-56c76d7df4-j5p29        6/6     Running   0          57m
    ...
    ```
    ```terminal title="Example output"
    ...
    prometheus-operator-776fcbbd56-2nbfm   2/2     Running   0          132m
    prometheus-user-workload-0             5/5     Running   1          132m
    prometheus-user-workload-1             5/5     Running   1          132m
    thanos-ruler-user-workload-0           3/3     Running   0          132m
    thanos-ruler-user-workload-1           3/3     Running   0          132m
    ...
    ```
1.  Read the query log:
    ```terminal
    $ oc -n {{ namespace_name }} exec {{ pod }} -- cat <path>
    ```

    :::important

    Revert the setting in the config map after you have examined the logged query information.
    
    :::


{%- set configmap_name = false -%}
{%- set namespace_name = false -%}
{%- set component = false -%}
{%- set pod = false -%}