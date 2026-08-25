{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling {{ insights_operator }} alerts {id="disabling-insights-operator-alerts_{{ context }}"}

To prevent the {{ insights_operator }} from sending alerts to the cluster Prometheus instance, you create or edit the `insights-config` `ConfigMap` object.  {._abstract}

{% if not (openshift_rosa or openshift_dedicated) %}

:::note

Previously, a cluster administrator would create or edit the {{ insights_operator }} configuration using a support secret in the `openshift-config` namespace. {{ red_hat_lightspeed }} now supports the creation of a `ConfigMap` object to configure the Operator. The Operator gives preference to the config map configuration over the support secret if both exist.

:::


If the `insights-config` `ConfigMap` object does not exist, you must create it when you first add custom configurations. Note that configurations within the `ConfigMap` object take precedence over the default settings defined in the `config/pod.yaml` file.
{% endif %}

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
1.  Click the **insights-config** `ConfigMap` object to open it.
1.  Click **Actions** and select **Edit ConfigMap**.
1.  Click the **YAML view** radio button.
1.  In the file, set the `alerting` attribute to `disabled: true`.
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    # ...
    data:
      config.yaml: |
        alerting:
          disabled: true
    # ...
    ```
1.  Click **Save**. The `insights-config` ConfigMap details page opens.
1.  Verify that the value of the `config.yaml` `alerting` attribute is set to `disabled: true`.

    After you save the changes, {{ insights_operator }} no longer sends alerts to the cluster Prometheus instance.