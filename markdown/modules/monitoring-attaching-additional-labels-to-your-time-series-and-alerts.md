{%- set _mod_docs_content_type = "PROCEDURE" %}
# Attaching additional labels to your time series and alerts {id="attaching-additional-labels-to-your-time-series-and-alerts_{{ context }}"}

{%- set configmap_name = "cluster-monitoring-config" -%}
{%- set namespace_name = "openshift-monitoring" -%}
{%- set component = "prometheusK8s" %}
{%- set configmap_name = "user-workload-monitoring-config" -%}
{%- set namespace_name = "openshift-user-workload-monitoring" -%}
{%- set component = "prometheus" %}

You can attach custom labels to all time series and alerts leaving Prometheus by using the external labels feature of Prometheus.

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   You have created the `cluster-monitoring-config` `ConfigMap` object.
{%- if not (openshift_dedicated or openshift_rosa) %}
*   You have access to the cluster as a user with the `cluster-admin` cluster role or as a user with the `user-workload-monitoring-config-edit` role in the `openshift-user-workload-monitoring` project.
*   A cluster administrator has enabled monitoring for user-defined projects.
{%- endif %}
{%- if openshift_dedicated or openshift_rosa %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
*   The `user-workload-monitoring-config` `ConfigMap` object exists. This object is created by default when the cluster is created.
{%- endif %}
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Edit the `{{ configmap_name }}`{minja} config map in the `{{ namespace_name }}`{minja} project:
    ```terminal {minja}
    $ oc -n {{ namespace_name }} edit configmap {{ configmap_name }}
    ```
1.  Define labels you want to add for every metric under `data/config.yaml`:
    ```yaml {minja}
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: {{ configmap_name }}
      namespace: {{ namespace_name }}
    data:
      config.yaml: |
        {{ component }}:
          externalLabels:
            <key>: <value> (1)
    ```
    1.  Substitute `<key>: <value>` with key-value pairs where `<key>` is a unique name for the new label and `<value>` is its value.

    :::warning

    *   Do not use `prometheus` or `prometheus_replica` as key names, because they are reserved and will be overwritten.
    *   Do not use `cluster` as a key name. Using it can cause issues where you are unable to see data in the developer dashboards.
    
    :::


    :::note

    In the `openshift-user-workload-monitoring` project, Prometheus handles metrics and Thanos Ruler handles alerting and recording rules. Setting `externalLabels` for `prometheus` in the `user-workload-monitoring-config` `ConfigMap` object will only configure external labels for metrics and not for any rules.
    
    :::


    For example, to add metadata about the region and environment to all time series and alerts, use the following example:
    ```yaml {minja}
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: {{ configmap_name }}
      namespace: {{ namespace_name }}
    data:
      config.yaml: |
        {{ component }}:
          externalLabels:
            region: eu
            environment: prod
    ```
1.  Save the file to apply the changes. The pods affected by the new configuration are automatically redeployed.

{%- set configmap_name = "" -%}
{%- set namespace_name = "" -%}
{%- set component = "" -%}