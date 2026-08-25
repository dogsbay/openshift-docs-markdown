{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling the platform Alertmanager instance for user-defined alert routing {id="enabling-the-platform-alertmanager-instance-for-user-defined-alert-routing_{{ context }}"}

You can allow users to create user-defined alert routing configurations that use the main platform instance of Alertmanager.

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   A cluster administrator has enabled monitoring for user-defined projects.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Edit the `cluster-monitoring-config` `ConfigMap` object:
    ```terminal
    $ oc -n openshift-monitoring edit configmap cluster-monitoring-config
    ```
1.  Add `enableUserAlertmanagerConfig: true` in the `alertmanagerMain` section under `data/config.yaml`:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: cluster-monitoring-config
      namespace: openshift-monitoring
    data:
      config.yaml: |
        # ...
        alertmanagerMain:
          enableUserAlertmanagerConfig: true (1)
        # ...
    ```
    1.  Set the `enableUserAlertmanagerConfig` value to `true` to allow users to create user-defined alert routing configurations that use the main platform instance of Alertmanager.
1.  Save the file to apply the changes. The new configuration is applied automatically.