{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling a previously disabled simple content access import {id="insights-operator-enabling-sca_{{ context }}"}

If the importing of simple content access entitlements is disabled, the {{ insights_operator }} does not import simple content access entitlements. You can change this behavior. {._abstract}

**Prerequisites**

*   Remote health reporting is enabled, which is the default.
{%- if not (openshift_rosa or openshift_dedicated) %}
*   You have logged in to the {{ product_title }} web console as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   You have logged in to the {{ product_title }} web console as a user with the `dedicated-admin` role.
{%- endif %}
*   The `insights-config` `ConfigMap` object exists in the `openshift-insights` namespace.

**Procedure**

1.  Go to **Workloads** -> **ConfigMaps** and select **Project: openshift-insights**.
1.  Click on the **insights-config** `ConfigMap` object to open it.
1.  Click **Actions** and select **Edit ConfigMap**.
1.  Click the **YAML view** radio button.
1.  In the file, set the `sca` attribute to `disabled: false`.
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    # ...
    data:
      config.yaml: |
        sca:
          disabled: false
    # ...
    ```
1.  Click **Save**. The **insights-config** config-map details page opens.
1.  Verify that the value of the `config.yaml` `sca` attribute is set to `disabled: false`.