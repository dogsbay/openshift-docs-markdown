{%- set _mod_docs_content_type = "PROCEDURE" %}
# Modifying retention time and size for Prometheus metrics data {id="modifying-retention-time-and-size-for-prometheus-metrics-data_{{ context }}"}

{%- set configmap_name = "cluster-monitoring-config" -%}
{%- set namespace_name = "openshift-monitoring" -%}
{%- set component = "prometheusK8s" %}
{%- set configmap_name = "user-workload-monitoring-config" -%}
{%- set namespace_name = "openshift-user-workload-monitoring" -%}
{%- set component = "prometheus" %}

By default, Prometheus retains metrics data for 
15 days for core platform monitoring.
24 hours for monitoring for user-defined projects.
You can modify the retention time for the Prometheus instance to change when the data is deleted. You can also set the maximum amount of disk space the retained metrics data uses.


:::note

Data compaction occurs every two hours. Therefore, a persistent volume (PV) might fill up before compaction, potentially exceeding the `retentionSize` limit. In such cases, the `KubePersistentVolumeFillingUp` alert fires until the space on a PV is lower than the `retentionSize` limit.

:::


**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   You have created the `cluster-monitoring-config` `ConfigMap` object.
{%- if not (openshift_dedicated or openshift_rosa) %}
*   You have access to the cluster as a user with the `cluster-admin` cluster role, or as a user with the `user-workload-monitoring-config-edit` role in the `openshift-user-workload-monitoring` project.
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
1.  Add the retention time and size configuration under `data/config.yaml`:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: {{ configmap_name }}
      namespace: {{ namespace_name }}
    data:
      config.yaml: |
        {{ component }}:
          retention: <time_specification> # (1)
          retentionSize: <size_specification> # (2)
    ```
    1.  The retention time: a number directly followed by `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours), `d` (days), `w` (weeks), or `y` (years). You can also combine time values for specific times, such as `1h30m15s`.
    1.  The retention size: a number directly followed by `B` (bytes), `KB` (kilobytes), `MB` (megabytes), `GB` (gigabytes), `TB` (terabytes), `PB` (petabytes), and `EB` (exabytes).

        The following example sets the retention time to 24 hours and the retention size to 10 gigabytes for the Prometheus instance:
        ```yaml title="Example of setting retention time for Prometheus"
        apiVersion: v1
        kind: ConfigMap
        metadata:
          name: {{ configmap_name }}
          namespace: {{ namespace_name }}
        data:
          config.yaml: |
            {{ component }}:
              retention: 24h
              retentionSize: 10GB
        ```
1.  Save the file to apply the changes. The pods affected by the new configuration are automatically redeployed.

{%- set configmap_name = false -%}
{%- set namespace_name = false -%}
{%- set component = false -%}