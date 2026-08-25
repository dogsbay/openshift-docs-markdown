{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling monitoring for user-defined projects {id="enabling-monitoring-for-user-defined-projects_{{ context }}"}

Cluster administrators can enable monitoring for user-defined projects by setting the `enableUserWorkload: true` field in the cluster monitoring `ConfigMap` object.


:::important

You must remove any custom Prometheus instances before enabling monitoring for user-defined projects.

:::



:::note

You must have access to the cluster as a user with the `cluster-admin` cluster role to enable monitoring for user-defined projects in {{ product_title }}. Cluster administrators can then optionally grant users permission to configure the components that are responsible for monitoring user-defined projects.

:::


**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   You have installed the {{ oc_first }}.
*   You have created the `cluster-monitoring-config` `ConfigMap` object.
*   You have optionally created and configured the `user-workload-monitoring-config` `ConfigMap` object in the `openshift-user-workload-monitoring` project. You can add configuration options to this `ConfigMap` object for the components that monitor user-defined projects.

    :::note

    Every time you save configuration changes to the `user-workload-monitoring-config` `ConfigMap` object, the pods in the `openshift-user-workload-monitoring` project are redeployed. It might sometimes take a while for these components to redeploy.
    
    :::


**Procedure**

1.  Edit the `cluster-monitoring-config` `ConfigMap` object:
    ```terminal
    $ oc -n openshift-monitoring edit configmap cluster-monitoring-config
    ```
1.  Add `enableUserWorkload: true` under `data/config.yaml`:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: cluster-monitoring-config
      namespace: openshift-monitoring
    data:
      config.yaml: |
        enableUserWorkload: true (1)
    ```
    1.  When set to `true`, the `enableUserWorkload` parameter enables monitoring for user-defined projects in a cluster.
1.  Save the file to apply the changes. Monitoring for user-defined projects is then enabled automatically.

    :::note

    If you enable monitoring for user-defined projects, the `user-workload-monitoring-config` `ConfigMap` object is created by default.
    
    :::

1.  Verify that the `prometheus-operator`, `prometheus-user-workload`, and `thanos-ruler-user-workload` pods are running in the `openshift-user-workload-monitoring` project. It might take a short while for the pods to start:
    ```terminal
    $ oc -n openshift-user-workload-monitoring get pod
    ```
    ```terminal title="Example output"
    NAME                                   READY   STATUS        RESTARTS   AGE
    prometheus-operator-6f7b748d5b-t7nbg   2/2     Running       0          3h
    prometheus-user-workload-0             4/4     Running       1          3h
    prometheus-user-workload-1             4/4     Running       1          3h
    thanos-ruler-user-workload-0           3/3     Running       0          3h
    thanos-ruler-user-workload-1           3/3     Running       0          3h
    ```