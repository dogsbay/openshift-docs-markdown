{%- set _mod_docs_content_type = "PROCEDURE" %}
# Choosing a metrics collection profile {id="choosing-a-metrics-collection-profile_{{ context }}"}

To choose a metrics collection profile for core {{ product_title }} monitoring components, edit the `cluster-monitoring-config` `ConfigMap` object.

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have created the `cluster-monitoring-config` `ConfigMap` object.
*   You have access to the cluster as a user with the `cluster-admin` cluster role.

**Procedure**

1.  Edit the `cluster-monitoring-config` `ConfigMap` object in the `openshift-monitoring` project:
    ```terminal
    $ oc -n openshift-monitoring edit configmap cluster-monitoring-config
    ```
1.  Add the metrics collection profile setting under `data/config.yaml/prometheusK8s`:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: cluster-monitoring-config
      namespace: openshift-monitoring
    data:
      config.yaml: |
        prometheusK8s:
          collectionProfile: <metrics_collection_profile_name> (1)
    ```
    1.  The name of the metrics collection profile.
    The available values are `full` or `minimal`.
    If you do not specify a value or if the `collectionProfile` key name does not exist in the config map, the default setting of `full` is used.

        The following example sets the metrics collection profile to `minimal` for the core platform instance of Prometheus:
        ```yaml
        apiVersion: v1
        kind: ConfigMap
        metadata:
          name: cluster-monitoring-config
          namespace: openshift-monitoring
        data:
          config.yaml: |
            prometheusK8s:
              collectionProfile: *minimal*
        ```
1.  Save the file to apply the changes. The new configuration is applied automatically.