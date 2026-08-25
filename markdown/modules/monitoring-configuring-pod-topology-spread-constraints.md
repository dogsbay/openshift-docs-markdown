{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring pod topology spread constraints {id="configuring-pod-topology-spread-constraints_{{ context }}"}

{%- set configmap_name = "cluster-monitoring-config" -%}
{%- set namespace_name = "openshift-monitoring" -%}
{%- set component = "prometheusK8s" -%}
{%- set component_name = "Prometheus" -%}
{%- set label = "prometheus" %}
{%- set configmap_name = "user-workload-monitoring-config" -%}
{%- set namespace_name = "openshift-user-workload-monitoring" -%}
{%- set component = "thanosRuler" -%}
{%- set component_name = "Thanos Ruler" -%}
{%- set label = "thanos-ruler" %}

You can configure pod topology spread constraints for 
all the pods deployed by the {{ cmo_full }}
all the pods for user-defined monitoring
to control how pod replicas are scheduled to nodes across zones.
This ensures that the pods are highly available and run more efficiently, because workloads are spread across nodes in different data centers or hierarchical infrastructure zones.

You can configure pod topology spread constraints for monitoring pods by using the `{{ configmap_name }}` config map.

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
1.  Add the following settings under the `data/config.yaml` field to configure pod topology spread constraints:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: {{ configmap_name }}
      namespace: {{ namespace_name }}
    data:
      config.yaml: |
        <component>: # (1)
          topologySpreadConstraints:
          - maxSkew: <n> # (2)
            topologyKey: <key> # (3)
            whenUnsatisfiable: <value> # (4)
            labelSelector: # (5)
              <match_option>
    ```
    1.  Specify a name of the component for which you want to set up pod topology spread constraints.
    1.  Specify a numeric value for `maxSkew`, which defines the degree to which pods are allowed to be unevenly distributed.
    1.  Specify a key of node labels for `topologyKey`.
    Nodes that have a label with this key and identical values are considered to be in the same topology.
    The scheduler tries to put a balanced number of pods into each domain.
    1.  Specify a value for `whenUnsatisfiable`.
    Available options are `DoNotSchedule` and `ScheduleAnyway`.
    Specify `DoNotSchedule` if you want the `maxSkew` value to define the maximum difference allowed between the number of matching pods in the target topology and the global minimum.
    Specify `ScheduleAnyway` if you want the scheduler to still schedule the pod but to give higher priority to nodes that might reduce the skew.
    1.  Specify `labelSelector` to find matching pods. 
    Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.
        ```yaml title="Example configuration for {{ component_name }}"
        apiVersion: v1
        kind: ConfigMap
        metadata:
          name: {{ configmap_name }}
          namespace: {{ namespace_name }}
        data:
          config.yaml: |
            {{ component }}:
              topologySpreadConstraints:
              - maxSkew: 1
                topologyKey: monitoring
        # tag::CPM[]
                whenUnsatisfiable: DoNotSchedule
        # end::CPM[]
        # tag::UWM[]
                whenUnsatisfiable: ScheduleAnyway
        # end::UWM[]
                labelSelector:
                  matchLabels:
                    app.kubernetes.io/name: {{ label }}
        ```
1.  Save the file to apply the changes. The pods affected by the new configuration are automatically redeployed.

{%- set configmap_name = false -%}
{%- set namespace_name = false -%}
{%- set component = false -%}
{%- set component_name = false -%}
{%- set label = false -%}