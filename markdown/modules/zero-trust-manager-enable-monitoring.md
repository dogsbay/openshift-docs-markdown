{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling user workload monitoring {id="zero-trust-manager-enable-monitoring_{{ context }}"}

Enable user workload monitoring to track metrics for your user-defined projects. Configuring this feature allows you to observe application performance and helps you maintain the health of your services. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.

**Procedure**

1.  Create the `cluster-monitoring-config.yaml` file to define and configure the `ConfigMap`:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: cluster-monitoring-config
      namespace: openshift-monitoring
    data:
      config.yaml: |
        enableUserWorkload: true
    ```
1.  Apply the `ConfigMap` by running the following command:
    ```terminal
    $ oc apply -f cluster-monitoring-config.yaml
    ```

**Verification**

*   Verify that the monitoring components for user workloads are running in the `openshift-user-workload-monitoring` namespace:
    ```terminal
    $ oc -n openshift-user-workload-monitoring get pod
    ```
    ```text title="Example output"
    NAME                                   READY   STATUS    RESTARTS   AGE
    prometheus-operator-6cb6bd9588-dtzxq   2/2     Running   0          50s
    prometheus-user-workload-0             6/6     Running   0          48s
    prometheus-user-workload-1             6/6     Running   0          48s
    thanos-ruler-user-workload-0           4/4     Running   0          42s
    thanos-ruler-user-workload-1           4/4     Running   0          42s
    ```

The status of the pods such as `prometheus-operator`, `prometheus-user-workload`, and `thanos-ruler-user-workload` must be `Running`.