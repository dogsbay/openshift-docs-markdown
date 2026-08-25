{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the insights-config ConfigMap object {id="insights-operator-insights-config_{{ context }}"}

You can create the `insights-config` `ConfigMap` object for the {{ insights_operator }} with custom configurations. {._abstract}


:::important

Red&#160;Hat recommends you consult Red&#160;Hat Support before making changes to the default {{ insights_operator }} configuration.

:::


**Prerequisites**

*   Remote health reporting is enabled, which is the default.
*   You are logged in to the {{ product_title }} web console as a user with `cluster-admin` role.

**Procedure**

1.  Go to **Workloads** → **ConfigMaps** and select **Project: openshift-insights**.
1.  Click **Create ConfigMap**.
1.  Select **Configure via: YAML view** and enter your configuration preferences, for example:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: insights-config
      namespace: openshift-insights
    data:
      config.yaml: |
        dataReporting:
          obfuscation:
            - networking
            - workload_names
        sca:
          disabled: false
          interval: 2h
        alerting:
           disabled: false
    binaryData: {}
    immutable: false
    ```
1.  Optional: Select **Form view** and enter the necessary information that way.
1.  In the **ConfigMap Name** field, enter **insights-config**.
1.  In the **Key** field, enter **config.yaml**.
1.  For the **Value** field, either browse for a file to drag and drop into the field or enter your configuration parameters manually.
1.  Click **Create**. The `ConfigMap` object and configuration information are displayed.