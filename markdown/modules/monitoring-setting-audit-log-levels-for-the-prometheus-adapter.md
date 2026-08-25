{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting audit log levels for the Prometheus Adapter {id="setting-audit-log-levels-for-the-prometheus-adapter_{{ context }}"}

In default platform monitoring, you can configure the audit log level for the Prometheus Adapter. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   You have created the `cluster-monitoring-config` `ConfigMap` object.

**Procedure**

You can set an audit log level for the Prometheus Adapter in the default `openshift-monitoring` project:

1.  Edit the `cluster-monitoring-config` `ConfigMap` object in the `openshift-monitoring` project:
    ```terminal
    $ oc -n openshift-monitoring edit configmap cluster-monitoring-config
    ```
1.  Add `profile:` in the `k8sPrometheusAdapter/audit` section under `data/config.yaml`:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: cluster-monitoring-config
      namespace: openshift-monitoring
    data:
      config.yaml: |
        k8sPrometheusAdapter:
          audit:
            profile: <audit_log_level> (1)
    ```
    1.  The audit log level to apply to the Prometheus Adapter.
1.  Set the audit log level by using one of the following values for the `profile:` parameter:
    *   `None`: Do not log events.
    *   `Metadata`: Log only the metadata for the request, such as user, timestamp, and so forth. Do not log the request text and the response text. `Metadata` is the default audit log level.
    *   `Request`: Log only the metadata and the request text but not the response text. This option does not apply for non-resource requests.
    *   `RequestResponse`: Log event metadata, request text, and response text. This option does not apply for non-resource requests.
1.  Save the file to apply the changes. The pods affected by the new configuration are automatically redeployed.

**Verification**

1.  In the config map, under `k8sPrometheusAdapter/audit/profile`, set the log level to `Request` and save the file.
1.  Confirm that the pods for the Prometheus Adapter are running. The following example lists the status of pods in the `openshift-monitoring` project:
    ```terminal
    $ oc -n openshift-monitoring get pods
    ```
1.  Confirm that the audit log level and audit log file path are correctly configured:
    ```terminal
    $ oc -n openshift-monitoring get deploy prometheus-adapter -o yaml
    ```
    ```terminal title="Example output"
    ...
      - --audit-policy-file=/etc/audit/request-profile.yaml
      - --audit-log-path=/var/log/adapter/audit.log
    ```
1.  Confirm that the correct log level has been applied in the `prometheus-adapter` deployment in the `openshift-monitoring` project:
    ```terminal
    $ oc -n openshift-monitoring exec deploy/prometheus-adapter -c prometheus-adapter -- cat /etc/audit/request-profile.yaml
    ```
    ```terminal title="Example output"
    "apiVersion": "audit.k8s.io/v1"
    "kind": "Policy"
    "metadata":
      "name": "Request"
    "omitStages":
    - "RequestReceived"
    "rules":
    - "level": "Request"
    ```

    :::note

    If you enter an unrecognized `profile` value for the Prometheus Adapter in the `ConfigMap` object, no changes are made to the Prometheus Adapter, and an error is logged by the {{ cmo_full }}.
    
    :::

1.  Review the audit log for the Prometheus Adapter:
    ```terminal
    $ oc -n openshift-monitoring exec -c <prometheus_adapter_pod_name> -- cat /var/log/adapter/audit.log
    ```