{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling the local Alertmanager {id="monitoring-disabling-the-local-alertmanager_{{ context }}"}

A local Alertmanager that routes alerts from Prometheus instances is enabled by default in the `openshift-monitoring` project of the {{ product_title }} monitoring stack.

If you do not need the local Alertmanager, you can disable it by configuring the `cluster-monitoring-config` config map in the `openshift-monitoring` project.

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   You have created the `cluster-monitoring-config` config map.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Edit the `cluster-monitoring-config` config map in the `openshift-monitoring` project:
    ```terminal
    $ oc -n openshift-monitoring edit configmap cluster-monitoring-config
    ```
1.  Add `enabled: false` for the `alertmanagerMain` component under `data/config.yaml`:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: cluster-monitoring-config
      namespace: openshift-monitoring
    data:
      config.yaml: |
        alertmanagerMain:
          enabled: false
    ```
1.  Save the file to apply the changes. The Alertmanager instance is disabled automatically when you apply the change.