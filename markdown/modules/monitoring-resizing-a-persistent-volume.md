{%- set _mod_docs_content_type = "PROCEDURE" %}
# Resizing a persistent volume {id="resizing-a-persistent-volume_{{ context }}"}

{%- set configmap_name = "cluster-monitoring-config" -%}
{%- set namespace_name = "openshift-monitoring" -%}
{%- set component = "prometheusK8s" %}
{%- set configmap_name = "user-workload-monitoring-config" -%}
{%- set namespace_name = "openshift-user-workload-monitoring" -%}
{%- set component = "thanosRuler" %}

You can resize a persistent volume (PV) for monitoring components, such as Prometheus or Alertmanager. 
You can resize a persistent volume (PV) for the instances of Prometheus, Thanos Ruler, and Alertmanager.
You need to manually expand a persistent volume claim (PVC), and then update the config map in which the component is configured.


:::important

You can only expand the size of the PVC. Shrinking the storage size is not possible.

:::


**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   You have created the `cluster-monitoring-config` `ConfigMap` object.
*   You have configured at least one PVC for core {{ product_title }} monitoring components.
*   You have access to the cluster as a user with the `cluster-admin` cluster role, or as a user with the `user-workload-monitoring-config-edit` role in the `openshift-user-workload-monitoring` project.
*   A cluster administrator has enabled monitoring for user-defined projects.
*   You have configured at least one PVC for components that monitor user-defined projects.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Manually expand a PVC with the updated storage request. For more information, see "Expanding persistent volume claims (PVCs) with a file system" in _Expanding persistent volumes_.
1.  Edit the `{{ configmap_name }}` config map in the `{{ namespace_name }}` project:
    ```terminal
    $ oc -n {{ namespace_name }} edit configmap {{ configmap_name }}
    ```
1.  Add a new storage size for the PVC configuration for the component under `data/config.yaml`:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: {{ configmap_name }}
      namespace: {{ namespace_name }}
    data:
      config.yaml: |
        <component>: # (1)
          volumeClaimTemplate:
            spec:
              resources:
                requests:
                  storage: <amount_of_storage> # (2)
    ```
    1.  The component for which you want to change the storage size.
    1.  Specify the new size for the storage volume. It must be greater than the previous value.

        The following example sets the new PVC request to 
        100 gigabytes for the Prometheus instance:
        20 gigabytes for Thanos Ruler:
        ```yaml title="Example storage configuration for {{ component }}"
        apiVersion: v1
        kind: ConfigMap
        metadata:
          name: {{ configmap_name }}
          namespace: {{ namespace_name }}
        data:
          config.yaml: |
            {{ component }}:
              volumeClaimTemplate:
                spec:
                  resources:
                    requests:
        # tag::CPM[]
                      storage: 100Gi
        # end::CPM[]
        # tag::UWM[]
                      storage: 20Gi
        # end::UWM[]
        ```

        :::note

        Storage requirements for the `thanosRuler` component depend on the number of rules that are evaluated and how many samples each rule generates.
        
        :::

1.  Save the file to apply the changes. The pods affected by the new configuration are automatically redeployed.

    :::warning

    When you update the config map with a new storage size, the affected `StatefulSet` object is recreated, resulting in a temporary service outage.
    
    :::


{%- set configmap_name = false -%}
{%- set namespace_name = false -%}
{%- set component = false -%}