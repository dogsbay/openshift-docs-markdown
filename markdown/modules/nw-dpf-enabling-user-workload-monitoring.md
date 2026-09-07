{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable user workload monitoring for DTS {id="nw-dpf-enabling-user-workload-monitoring_{{ context }}"}

{{ product_title }} includes Prometheus, but by default it only monitors {{ product_title }} platform components.
You must enable user workload monitoring so that Prometheus can scrape user namespaces where DPF and DTS run, such as `dpf-operator-system`. {._abstract}

**Prerequisites**

*   A DPF cluster is deployed with at least one provisioned DPU.
*   You have access to the management cluster as a user with the `cluster-admin` role.

**Procedure**

1.  Create a `ConfigMap` to enable user workload monitoring in the `openshift-monitoring` namespace:
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

    :::note

    If the `cluster-monitoring-config` `ConfigMap` already exists with other settings, edit it instead of replacing it, and add only the `enableUserWorkload: true` line to the existing `config.yaml` data:

    ```terminal
    $ oc -n openshift-monitoring edit configmap cluster-monitoring-config
    ```
    
    :::

1.  Apply the `ConfigMap`:
    ```terminal
    $ oc apply -f cluster-monitoring-config.yaml
    ```

**Verification**

*   Verify that the user workload monitoring pods are running in the `openshift-user-workload-monitoring` namespace:
    ```terminal
    $ oc -n openshift-user-workload-monitoring get pods
    ```
    ```terminal title="Example output"
    NAME                                   READY   STATUS    RESTARTS   AGE
    prometheus-operator-...                1/1     Running   0          ...
    prometheus-user-workload-0             ...     Running   0          ...
    thanos-ruler-user-workload-0           ...     Running   0          ...
    ```

    Confirm that pods named `prometheus-user-workload`, `thanos-ruler-user-workload`, and `prometheus-operator` are all in a `Running` state.