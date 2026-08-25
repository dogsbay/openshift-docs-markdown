{%- set _mod_docs_content_type = "PROCEDURE" %}
# Specifying limits and requests {id="specifying-limits-and-resource-requests-for-monitoring-components_{{ context }}"}

{%- set configmap_name = "cluster-monitoring-config" -%}
{%- set namespace_name = "openshift-monitoring" -%}
{%- set alertmanager = "alertmanagerMain" -%}
{%- set prometheus = "prometheusK8s" -%}
{%- set thanos = "thanosQuerier" %}
{%- set configmap_name = "user-workload-monitoring-config" -%}
{%- set namespace_name = "openshift-user-workload-monitoring" -%}
{%- set alertmanager = "alertmanager" -%}
{%- set prometheus = "prometheus" -%}
{%- set thanos = "thanosRuler" %}

To configure CPU and memory resources, specify values for resource limits and requests in the `{{ configmap_name }}` `ConfigMap` object in the `{{ namespace_name }}` namespace.

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   You have created the `ConfigMap` object named `cluster-monitoring-config`.

*   You have access to the cluster as a user with the `cluster-admin` cluster role, or as a user with the `user-workload-monitoring-config-edit` role in the `openshift-user-workload-monitoring` project.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Edit the `{{ configmap_name }}` config map in the `{{ namespace_name }}` project:
    ```terminal
    $ oc -n {{ namespace_name }} edit configmap {{ configmap_name }}
    ```
1.  Add values to define resource limits and requests for each component you want to configure.

    :::important

    Ensure that the value set for a limit is always higher than the value set for a request.
    Otherwise, an error will occur, and the container will not run.
    
    :::

    ```yaml title="Example of setting resource limits and requests"
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: {{ configmap_name }}
      namespace: {{ namespace_name }}
    data:
      config.yaml: |
        {{ alertmanager }}:
          resources:
            limits:
              cpu: 500m
              memory: 1Gi
            requests:
              cpu: 200m
              memory: 500Mi
        {{ prometheus }}:
          resources:
            limits:
              cpu: 500m
              memory: 3Gi
            requests:
              cpu: 200m
              memory: 500Mi
        {{ thanos }}:
          resources:
            limits:
              cpu: 500m
              memory: 1Gi
            requests:
              cpu: 200m
              memory: 500Mi
    # tag::CPM[]
        prometheusOperator:
          resources:
            limits:
              cpu: 500m
              memory: 1Gi
            requests:
              cpu: 200m
              memory: 500Mi
        metricsServer:
          resources:
            requests:
              cpu: 10m
              memory: 50Mi
            limits:
              cpu: 50m
              memory: 500Mi
        kubeStateMetrics:
          resources:
            limits:
              cpu: 500m
              memory: 1Gi
            requests:
              cpu: 200m
              memory: 500Mi
        telemeterClient:
          resources:
            limits:
              cpu: 500m
              memory: 1Gi
            requests:
              cpu: 200m
              memory: 500Mi
        openshiftStateMetrics:
          resources:
            limits:
              cpu: 500m
              memory: 1Gi
            requests:
              cpu: 200m
              memory: 500Mi
        nodeExporter:
          resources:
            limits:
              cpu: 50m
              memory: 150Mi
            requests:
              cpu: 20m
              memory: 50Mi
        monitoringPlugin:
          resources:
            limits:
              cpu: 500m
              memory: 1Gi
            requests:
              cpu: 200m
              memory: 500Mi
        prometheusOperatorAdmissionWebhook:
          resources:
            limits:
              cpu: 50m
              memory: 100Mi
            requests:
              cpu: 20m
              memory: 50Mi
    # end::CPM[]
    ```
1.  Save the file to apply the changes. The pods affected by the new configuration are automatically redeployed.

{%- set configmap_name = false -%}
{%- set namespace_name = false -%}
{%- set alertmanager = false -%}
{%- set prometheus = false -%}
{%- set thanos = false -%}