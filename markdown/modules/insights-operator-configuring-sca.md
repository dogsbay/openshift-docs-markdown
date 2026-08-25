{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring simple content access import interval {id="insights-operator-configuring-sca_{{ context }}"}

You can configure how often the {{ insights_operator }} imports the simple content access (sca) entitlements by using the `insights-config` `ConfigMap` object in the `openshift-insights` namespace. The entitlement import normally occurs every eight hours, but you can shorten this sca interval if you update your simple content access configuration in the `insights-config` `ConfigMap` object. {._abstract}

This procedure describes how to update the import interval to two hours (2h). You can specify hours (h) or hours and minutes, for example: 2h30m.

**Prerequisites**

*   Remote health reporting is enabled, which is the default.
{%- if not (openshift_rosa or openshift_dedicated) %}
*   You are logged in to the {{ product_title }} web console as a user with the `cluster-admin` role.
{%- endif %}
{%- if openshift_rosa or openshift_dedicated %}
*   You are logged in to the {{ product_title }} web console as a user with the `dedicated-admin` role.
{%- endif %}
*   The **insights-config** `ConfigMap` object exists in the `openshift-insights` namespace.

**Procedure**

1.  Go to **Workloads** → **ConfigMaps** and select **Project: openshift-insights**.
1.  Click on the **insights-config** `ConfigMap` object to open it.
1.  Click **Actions** and select **Edit ConfigMap**.
1.  Click the **YAML view** radio button.
1.  Set the `sca` attribute in the file to `interval: 2h` to import content every two hours.
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    # ...
    data:
      config.yaml: |
        sca:
          interval: 2h
    # ...
    ```
1.  Click **Save**. The **insights-config** config-map details page opens.
1.  Verify that the value of the `config.yaml` `sca` attribute is set to `interval: 2h`.