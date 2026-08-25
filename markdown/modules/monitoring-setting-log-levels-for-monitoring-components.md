{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting log levels for monitoring components {id="setting-log-levels-for-monitoring-components_{{ context }}"}

{%- set configmap_name = "cluster-monitoring-config" -%}
{%- set namespace_name = "openshift-monitoring" -%}
{%- set prometheus = "prometheusK8s" -%}
{%- set alertmanager = "alertmanagerMain" -%}
{%- set thanos = "thanosQuerier" -%}
{%- set component_name = "Thanos Querier" %}
{%- set configmap_name = "user-workload-monitoring-config" -%}
{%- set namespace_name = "openshift-user-workload-monitoring" -%}
{%- set prometheus = "prometheus" -%}
{%- set alertmanager = "alertmanager" -%}
{%- set thanos = "thanosRuler" -%}
{%- set component_name = "Thanos Ruler" %}

You can configure the log level for Alertmanager, Prometheus Operator, Prometheus, and {{ component_name }} and log verbosity for Metrics Server.
You can configure the log level for Alertmanager, Prometheus Operator, Prometheus, and {{ component_name }}.
You can use these settings for troubleshooting and to gain better insight into how the components are functioning.

The following log levels can be applied to the relevant component in the `{{ configmap_name }}` `ConfigMap` object:

*   `debug`. Log debug, informational, warning, and error messages.
*   `info` (default). Log informational, warning, and error messages.
*   `warn`. Log warning and error messages only.
*   `error`. Log error messages only.

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
1.  Add log configuration for a component under `data/config.yaml`:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: {{ configmap_name }}
      namespace: {{ namespace_name }}
    data:
      config.yaml: |
        <component>: # (1)
          logLevel: <log_level> # (2)
    # tag::CPM[]
        metricsServer:
          verbosity: <value> # (3)
    # end::CPM[]
        # ...
    ```
    1.  Specify the monitoring stack component for which you are setting a log level.
    Available component values are `{{ prometheus }}`, `{{ alertmanager }}`, `prometheusOperator`, and `{{ thanos }}`.
    1.  Specify the log level for the component.
    The available values are `error`, `warn`, `info`, and `debug`.
    The default value is `info`.
    1.  Specify the verbosity for Metrics Server.
    Valid values are positive integers.
    Increasing the number increases the amount of logged events, values over `10` are usually unnecessary.
    The default value is `0`.
1.  Save the file to apply the changes. The pods affected by the new configuration are automatically redeployed.
1.  Verify that the log configuration is applied by reviewing the deployment or pod configuration in the related project. 
    *   The following example checks the log level for the `prometheus-operator` deployment:
        ```terminal
        $ oc -n {{ namespace_name }} get deploy prometheus-operator -o yaml | grep "log-level"
        ```
        ```terminal title="Example output"
                - --log-level=debug
        ```

*   The following example checks the log verbosity for the `metrics-server` deployment:
    ```terminal
    $ oc -n openshift-monitoring get deploy metrics-server -o yaml | grep -- '--v='
    ```
    ```terminal title="Example output"
            - --v=3
    ```
    1.  Verify that the pods for the component are running:
        ```terminal
        $ oc -n {{ namespace_name }} get pods
        ```

        :::note

        If an unrecognized `logLevel` value is included in the `ConfigMap` object, the pods for the component might not restart successfully.
        
        :::


{%- set configmap_name = false -%}
{%- set namespace_name = false -%}
{%- set prometheus = false -%}
{%- set alertmanager = false -%}
{%- set thanos = false -%}
{%- set component_name = false -%}