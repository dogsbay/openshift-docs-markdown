{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling simple content access import {id="insights-operator-disabling-sca_{{ context }}"}

You can disable the importing of simple content access entitlements by using the `insights-config` `ConfigMap` object in the `openshift-insights` namespace. {._abstract}

**Prerequisites**

*   Remote health reporting is enabled, which is the default.
*   You are logged in to the {{ product_title }} web console as `cluster-admin`.
*   The `insights-config` `ConfigMap` object exists in the `openshift-insights` namespace.

**Procedure**

1.  Go to **Workloads** -> **ConfigMaps** and select **Project: openshift-insights**.
1.  Click the **insights-config** `ConfigMap` object to open it.
1.  Click **Actions** and select **Edit ConfigMap**.
1.  Click **YAML view**.
1.  In the file, set the `sca` attribute to `disabled: true`.
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    # ...
    data:
      config.yaml: |
        sca:
          disabled: true
    # ...
    ```
1.  Click **Save**. The **insights-config** config-map details page opens.
1.  Verify that the value of the `config.yaml` `sca` attribute is set to `disabled: true`.