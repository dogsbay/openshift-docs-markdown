{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring remote write storage {id="configuring-remote-write-storage_{{ context }}"}

{%- set configmap_name = "cluster-monitoring-config" -%}
{%- set namespace_name = "openshift-monitoring" -%}
{%- set component = "prometheusK8s" %}
{%- set configmap_name = "user-workload-monitoring-config" -%}
{%- set namespace_name = "openshift-user-workload-monitoring" -%}
{%- set component = "prometheus" %}

You can configure remote write storage to enable Prometheus to send ingested metrics to remote systems for long-term storage. Doing so has no impact on how or for how long Prometheus stores metrics.

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
*   You have set up a remote write compatible endpoint (such as Thanos) and know the endpoint URL. See the [Prometheus remote endpoints and storage documentation](https://prometheus.io/docs/operating/integrations/#remote-endpoints-and-storage) for information about endpoints that are compatible with the remote write feature.

    :::important

    Red&#160;Hat only provides information for configuring remote write senders and does not offer guidance on configuring receiver endpoints. Customers are responsible for setting up their own endpoints that are remote-write compatible. Issues with endpoint receiver configurations are not included in Red&#160;Hat production support.
    
    :::

*   You have set up authentication credentials in a `Secret` object for the remote write endpoint. You must create the secret in the `{{ namespace_name }}` namespace.

    :::warning

    To reduce security risks, use HTTPS and authentication to send metrics to an endpoint.
    
    :::


**Procedure**

1.  Edit the `{{ configmap_name }}` config map in the `{{ namespace_name }}` project:
    ```terminal
    $ oc -n {{ namespace_name }} edit configmap {{ configmap_name }}
    ```
1.  Add a `remoteWrite:` section under `data/config.yaml/{{ component }}`, as shown in the following example:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: {{ configmap_name }}
      namespace: {{ namespace_name }}
    data:
      config.yaml: |
        {{ component }}:
          remoteWrite:
          - url: "https://remote-write-endpoint.example.com" # (1)
            <endpoint_authentication_credentials> # (2)
    ```
    1.  The URL of the remote write endpoint.
    1.  The authentication method and credentials for the endpoint.
    Currently supported authentication methods are AWS Signature Version 4, authentication using HTTP in an `Authorization` request header, Basic authentication, OAuth 2.0, and TLS client.
    See _Supported remote write authentication settings_ for sample configurations of supported authentication methods.
1.  Add write relabel configuration values after the authentication credentials:
    ```yaml
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
            writeRelabelConfigs:
            - <your_write_relabel_configs> #<1>
    ```
    1.  Add configuration for metrics that you want to send to the remote endpoint.
        ```yaml title="Example of forwarding a single metric called my_metric"
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
                - sourceLabels: [__name__]
                  regex: 'my_metric'
                  action: keep
        ```
        ```yaml title="Example of forwarding metrics called my_metric_1 and my_metric_2 in my_namespace namespace"
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
                - sourceLabels: [__name__,namespace]
                  regex: '(my_metric_1|my_metric_2);my_namespace'
                  action: keep 
        ```
1.  Save the file to apply the changes. The new configuration is applied automatically.

{%- set configmap_name = false -%}
{%- set namespace_name = false -%}
{%- set component = false -%}