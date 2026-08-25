{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a persistent volume claim {id="configuring-a-persistent-volume-claim_{{ context }}"}

{%- set configmap_name = "cluster-monitoring-config" -%}
{%- set namespace_name = "openshift-monitoring" -%}
{%- set component = "prometheusK8s" %}
{%- set configmap_name = "user-workload-monitoring-config" -%}
{%- set namespace_name = "openshift-user-workload-monitoring" -%}
{%- set component = "thanosRuler" %}

To use a persistent volume (PV) for monitoring components, you must configure a persistent volume claim (PVC).

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   You have created the `cluster-monitoring-config` `ConfigMap` object.
{%- if not (openshift_dedicated or openshift_rosa) %}
*   You have access to the cluster as a user with the `cluster-admin` cluster role, or as a user with the `user-workload-monitoring-config-edit` role in the `openshift-user-workload-monitoring` project.
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
1.  Add your PVC configuration for the component under `data/config.yaml`:
    ```yaml {minja}
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: {{ configmap_name }}
      namespace: {{ namespace_name }}
    data:
      config.yaml: |
        <component>: (1)
          volumeClaimTemplate:
            spec:
              storageClassName: <storage_class> (2)
              resources:
                requests:
                  storage: <amount_of_storage> (3)
    ```
    1.  Specify the monitoring component for which you want to configure the PVC.
    1.  Specify an existing storage class. If a storage class is not specified, the default storage class is used.
    1.  Specify the amount of required storage.

        The following example configures a PVC that claims persistent storage for 
        Prometheus:
        Thanos Ruler:
    ```yaml title="Example PVC configuration" {minja}
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
              storageClassName: my-storage-class
              resources:
                requests:
    # tag::CPM[]
                  storage: 40Gi
    # end::CPM[]
    # tag::UWM[]
                  storage: 10Gi
    # end::UWM[]
    ```

    :::note

    Storage requirements for the `thanosRuler` component depend on the number of rules that are evaluated and how many samples each rule generates.
    
    :::

1.  Save the file to apply the changes. The pods affected by the new configuration are automatically redeployed and the new storage configuration is applied.

    :::warning

    When you update the config map with a PVC configuration, the affected `StatefulSet` object is recreated, resulting in a temporary service outage.
    
    :::


{%- set configmap_name = "" -%}
{%- set namespace_name = "" -%}
{%- set component = "" -%}