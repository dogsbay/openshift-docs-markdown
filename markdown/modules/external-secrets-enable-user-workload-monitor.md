{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling user workload monitoring {id="external-secrets-enable-user-workload-monitor_{{ context }}"}

By default, the {{ product_title }} monitoring stack does not scrape metrics from user-installed applications like the External Secrets Operator. Enabling user workload monitoring is necessary to collect critical operational data, such as synchronization status, API error rates, and controller performance. This helps you to configure custom alerts for secret sync failures and create dashboards to monitor the overall health of your secret management system. You can enable monitoring for user-defined projects by configuring user workload monitoring in the cluster. For more information, see "Setting up metrics collection for user-defined projects". {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  Create the `cluster-monitoring-config.yaml` YAML file:
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

*   Verify that the monitoring components for user workloads are running in the `openshift-user-workload-monitoring` namespace by running the following command:
    ```terminal
    $ oc -n openshift-user-workload-monitoring get pod
    ```
    ```terminal title="Example output"
    NAME                                   READY   STATUS    RESTARTS   AGE
    prometheus-operator-5f79cff9c9-67pjb   2/2     Running   0          25h
    prometheus-user-workload-0             6/6     Running   0          25h
    thanos-ruler-user-workload-0           4/4     Running   0          25h
    ```

    The status of the pods such as `prometheus-operator`, `prometheus-user-workload`, and `thanos-ruler-user-workload` must be `Running`.