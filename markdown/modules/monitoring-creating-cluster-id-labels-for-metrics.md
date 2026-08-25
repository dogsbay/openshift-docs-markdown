{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating cluster ID labels for metrics {id="creating-cluster-id-labels-for-metrics_{{ context }}"}

{%- set configmap_name = "cluster-monitoring-config" -%}
{%- set namespace_name = "openshift-monitoring" -%}
{%- set component = "prometheusK8s" %}
{%- set configmap_name = "user-workload-monitoring-config" -%}
{%- set namespace_name = "openshift-user-workload-monitoring" -%}
{%- set component = "prometheus" %}

You can create cluster ID labels for metrics by adding the `write_relabel` settings for remote write storage in the `{{ configmap_name }}`{minja} config map in the `{{ namespace_name }}`{minja} namespace.

{% if not (openshift_dedicated or openshift_rosa) %}

:::note

When Prometheus scrapes user workload targets that expose a `namespace` label, the system stores this label as `exported_namespace`. 
This behavior ensures that the final namespace label value is equal to the namespace of the target pod.
You cannot override this default configuration by setting the value of the `honorLabels` field to `true` for `PodMonitor` or `ServiceMonitor` objects.

:::

{% endif %}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   You have created the `cluster-monitoring-config` `ConfigMap` object.
{%- if not (openshift_dedicated or openshift_rosa) %}
*   You have access to the cluster as a user with the `cluster-admin` cluster role, or as a user with the `user-workload-monitoring-config-edit` role in the `openshift-user-workload-monitoring` project.
*   A cluster administrator has enabled monitoring for user-defined projects.
{%- endif %}
{%- if openshift_dedicated or openshift_rosa %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
*   The `user-workload-monitoring-config` ConfigMap object exists. This object is created by default when the cluster is created.
{%- endif %}
*   You have installed the {{ oc_first }}.
*   You have configured remote write storage.

**Procedure**

1.  Edit the `{{ configmap_name }}`{minja} config map in the `{{ namespace_name }}`{minja} project:
    ```terminal {minja}
    $ oc -n {{ namespace_name }} edit configmap {{ configmap_name }}
    ```
1.  In the `writeRelabelConfigs:` section under `data/config.yaml/{{ component }}/remoteWrite`{minja}, add cluster ID relabel configuration values:
    ```yaml {minja}
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: {{ configmap_name }}
      namespace: {{ namespace_name }}
    data:
      config.yaml: |
        {{ component }}:
          remoteWrite:
          - url: "https://remote-write-endpoint.example.com"
            <endpoint_authentication_credentials>
            writeRelabelConfigs: (1)
              - <relabel_config> (2)
    ```
    1.  Add a list of write relabel configurations for metrics that you want to send to the remote endpoint.
    1.  Substitute the label configuration for the metrics sent to the remote write endpoint.

        The following sample shows how to forward a metric with the cluster ID label `cluster_id`:
    ```yaml {minja}
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: {{ configmap_name }}
      namespace: {{ namespace_name }}
    data:
      config.yaml: |
        {{ component }}:
          remoteWrite:
          - url: "https://remote-write-endpoint.example.com"
            writeRelabelConfigs:
            - sourceLabels:
              - __tmp_openshift_cluster_id__ (1)
              targetLabel: cluster_id (2)
              action: replace (3)
    ```
    1.  The system initially applies a temporary cluster ID source label named `++__tmp_openshift_cluster_id__++`. This temporary label gets replaced by the cluster ID label name that you specify.
    1.  Specify the name of the cluster ID label for metrics sent to remote write storage. If you use a label name that already exists for a metric, that value is overwritten with the name of this cluster ID label. For the label name, do not use `++__tmp_openshift_cluster_id__++`. The final relabeling step removes labels that use this name.
    1.  The `replace` write relabel action replaces the temporary label with the target label for outgoing metrics. This action is the default and is applied if no action is specified.
1.  Save the file to apply the changes. The new configuration is applied automatically.

{%- set configmap_name = "" -%}
{%- set namespace_name = "" -%}
{%- set component = "" -%}