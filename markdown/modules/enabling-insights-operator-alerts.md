{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling {{ insights_operator }} alerts {id="enabling-insights-operator-alerts_{{ context }}"}

When alerts are disabled, the {{ insights_operator }} no longer sends alerts to the cluster Prometheus instance. You can re-enable them. {._abstract}


:::note

Previously, a cluster administrator would create or edit the {{ insights_operator }} configuration using a support secret in the `openshift-config` namespace. {{ red_hat_lightspeed }} now supports the creation of a `ConfigMap` object to configure the {{ insights_operator }}. The {{ insights_operator }} gives preference to the config map configuration over the support secret if both exist.

:::


**Prerequisites**

*   Remote health reporting is enabled, which is the default.
{%- if not (openshift_rosa or openshift_dedicated) %}
*   You are logged in to the {{ product_title }} web console as `cluster-admin`.
{%- endif %}
{%- if openshift_rosa or openshift_dedicated %}
*   You are logged in to the {{ product_title }} web console as a user with the `dedicated-admin` role.
{%- endif %}
*   The `insights-config` `ConfigMap` object exists in the `openshift-insights` namespace.

**Procedure**

1.  Go to **Workloads** → **ConfigMaps** and select **Project: openshift-insights**.
1.  Click on the `insights-config` `ConfigMap` object to open it.
1.  Click **Actions** and select **Edit ConfigMap**.
1.  Click the **YAML view** radio button.
1.  In the file, set the `alerting` attribute to `disabled: false`.
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    # ...
    data:
      config.yaml: |
        alerting:
          disabled: false
    # ...
    ```
1.  Click **Save**. The `insights-config` `ConfigMap` details page opens.
1.  Verify that the value of the `config.yaml` `alerting` attribute is set to `disabled: false`.

    After you save the changes, {{ insights_operator }} again sends alerts to the cluster Prometheus instance.