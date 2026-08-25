{%- set _mod_docs_content_type = "PROCEDURE" %}
# Assigning tolerations to monitoring components {id="assigning-tolerations-to-monitoring-components_{{ context }}"}

{%- set configmap_name = "cluster-monitoring-config" -%}
{%- set namespace_name = "openshift-monitoring" -%}
{%- set component = "alertmanagerMain" %}
{%- set configmap_name = "user-workload-monitoring-config" -%}
{%- set namespace_name = "openshift-user-workload-monitoring" -%}
{%- set component = "thanosRuler" %}

You can assign tolerations to any of the monitoring stack components to enable moving them to tainted nodes.

You can assign tolerations to the components that monitor user-defined projects, to enable moving them to tainted worker nodes. Scheduling is not permitted on control plane or infrastructure nodes.

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   You have created the `cluster-monitoring-config` `ConfigMap` object.

{%- if not (openshift_dedicated or openshift_rosa) %}
*   You have access to the cluster as a user with the `cluster-admin` cluster role, or as a user with the `user-workload-monitoring-config-edit` role in the `openshift-user-workload-monitoring` project.
*   A cluster administrator has enabled monitoring for user-defined projects.
{% endif %}
{% if openshift_dedicated or openshift_rosa %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
*   The `user-workload-monitoring-config` `ConfigMap` object exists in the `openshift-user-workload-monitoring` namespace. This object is created by default when the cluster is created.
{%- endif %}
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Edit the `{{ configmap_name }}` config map in the `{{ namespace_name }}` project:
    ```terminal
    $ oc -n {{ namespace_name }} edit configmap {{ configmap_name }}
    ```
1.  Specify `tolerations` for the component:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: {{ configmap_name }}
      namespace: {{ namespace_name }}
    data:
      config.yaml: |
        <component>:
          tolerations:
            <toleration_specification>
    ```

    Substitute `<component>` and `<toleration_specification>` accordingly.

    For example, `oc adm taint nodes node1 key1=value1:NoSchedule` adds a taint to `node1` with the key `key1` and the value `value1`. This prevents monitoring components from deploying pods on `node1` unless a toleration is configured for that taint. The following example configures the `{{ component }}` component to tolerate the example taint:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: {{ configmap_name }}
      namespace: {{ namespace_name }}
    data:
      config.yaml: |
        {{ component }}:
          tolerations:
          - key: "key1"
            operator: "Equal"
            value: "value1"
            effect: "NoSchedule"
    ```
1.  Save the file to apply the changes. The pods affected by the new configuration are automatically redeployed.

{%- set configmap_name = false -%}
{%- set namespace_name = false -%}
{%- set component = false -%}