{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring external Alertmanager instances {id="monitoring-configuring-external-alertmanagers_{{ context }}"}

{%- set configmap_name = "cluster-monitoring-config" -%}
{%- set namespace_name = "openshift-monitoring" -%}
{%- set component = "prometheusK8s" -%}
{%- set component_name = "Prometheus" %}
{%- set configmap_name = "user-workload-monitoring-config" -%}
{%- set namespace_name = "openshift-user-workload-monitoring" -%}
{%- set component = "thanosRuler" -%}
{%- set component_name = "Thanos Ruler" %}

The {{ product_title }} monitoring stack includes a local Alertmanager instance that routes alerts from Prometheus.

You can add external Alertmanager instances to route alerts for core {{ product_title }} projects.
You can add external Alertmanager instances to route alerts for user-defined projects.

If you add the same external Alertmanager configuration for multiple clusters and disable the local instance for each cluster, you can then manage alert routing for multiple clusters by using a single external Alertmanager instance.

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
1.  Add an `additionalAlertmanagerConfigs` section with configuration details under 
`data/config.yaml/prometheusK8s`:
`data/config.yaml/<component>`:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: {{ configmap_name }}
      namespace: {{ namespace_name }}
    data:
      config.yaml: |
    # tag::CPM[]
        prometheusK8s:
    # end::CPM[]
    # tag::UWM[]
        <component>: # (2)
    # end::UWM[]
          additionalAlertmanagerConfigs:
          - <alertmanager_specification> # (1)
    ```
    1.  Substitute `<alertmanager_specification>` with authentication and other configuration details for additional Alertmanager instances.
    Currently supported authentication methods are bearer token (`bearerToken`) and client TLS (`tlsConfig`).
    1.  Substitute `<component>` for one of two supported external Alertmanager components: `prometheus` or `thanosRuler`.

        The following sample config map configures an additional Alertmanager for {{ component_name }} by using a bearer token with client TLS authentication:
        ```yaml
        apiVersion: v1
        kind: ConfigMap
        metadata:
          name: {{ configmap_name }}
          namespace: {{ namespace_name }}
        data:
          config.yaml: |
            {{ component }}:
              additionalAlertmanagerConfigs:
              - scheme: https
                pathPrefix: /
                timeout: "30s"
                apiVersion: v1
                bearerToken:
                  name: alertmanager-bearer-token
                  key: token
                tlsConfig:
                  key:
                    name: alertmanager-tls
                    key: tls.key
                  cert:
                    name: alertmanager-tls
                    key: tls.crt
                  ca:
                    name: alertmanager-tls
                    key: tls.ca
                staticConfigs:
                - external-alertmanager1-remote.com
                - external-alertmanager1-remote2.com
        ```
1.  Save the file to apply the changes. The pods affected by the new configuration are automatically redeployed.

{%- set configmap_name = false -%}
{%- set namespace_name = false -%}
{%- set component = false -%}
{%- set component_name = false -%}