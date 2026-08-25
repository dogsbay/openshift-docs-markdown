{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding a secret to the Alertmanager configuration  {id="monitoring-adding-a-secret-to-the-alertmanager-configuration_{{ context }}"}

{%- set configmap_name = "cluster-monitoring-config" -%}
{%- set namespace_name = "openshift-monitoring" -%}
{%- set component = "alertmanagerMain" %}
{%- set configmap_name = "user-workload-monitoring-config" -%}
{%- set namespace_name = "openshift-user-workload-monitoring" -%}
{%- set component = "alertmanager" %}

You can add secrets to the Alertmanager configuration by editing the `{{ configmap_name }}` config map in the `{{ namespace_name }}` project.

After you add a secret to the config map, the secret is mounted as a volume at `/etc/alertmanager/secrets/<secret_name>` within the `alertmanager` container for the Alertmanager pods.

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   You have created the `cluster-monitoring-config` config map.
{%- if not (openshift_dedicated or openshift_rosa) %}
*   You have access to the cluster as a user with the `cluster-admin` cluster role or as a user with the `user-workload-monitoring-config-edit` role in the `openshift-user-workload-monitoring` project.
*   A cluster administrator has enabled monitoring for user-defined projects.
{% endif %}
{% if openshift_dedicated or openshift_rosa %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
*   The `user-workload-monitoring-config` `ConfigMap` object exists. This object is created by default when the cluster is created.
{%- endif %}
*   You have created the secret to be configured in Alertmanager in the `{{ namespace_name }}` project.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Edit the `{{ configmap_name }}` config map in the `{{ namespace_name }}` project:
    ```terminal
    $ oc -n {{ namespace_name }} edit configmap {{ configmap_name }}
    ```
1.  Add a `secrets:` section under `data/config.yaml/{{ component }}` with the following configuration:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: {{ configmap_name }}
      namespace: {{ namespace_name }}
    data:
      config.yaml: |
        {{ component }}:
          secrets: # (1)
          - <secret_name_1> # (2)
          - <secret_name_2>
    ```
    1.  This section contains the secrets to be mounted into Alertmanager. The secrets must be located within the same namespace as the Alertmanager object.
    1.  The name of the `Secret` object that contains authentication credentials for the receiver. If you add multiple secrets, place each one on a new line.

        The following sample config map settings configure Alertmanager to use two `Secret` objects named `test-secret-basic-auth` and `test-secret-api-token`:
        ```yaml
        apiVersion: v1
        kind: ConfigMap
        metadata:
          name: {{ configmap_name }}
          namespace: {{ namespace_name }}
        data:
          config.yaml: |
            {{ component }}:
              secrets:
              - test-secret-basic-auth
              - test-secret-api-token
        ```
1.  Save the file to apply the changes. The new configuration is applied automatically.

{%- set configmap_name = false -%}
{%- set namespace_name = false -%}
{%- set component = false -%}