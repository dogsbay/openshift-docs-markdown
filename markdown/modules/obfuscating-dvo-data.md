{%- set _mod_docs_content_type = "PROCEDURE" %}
# Obfuscating Deployment Validation Operator data {id="obfuscating-deployment-validation-operator-data_{{ context }}"}

By default, when you install the Deployment Validation Operator (DVO), the name and unique identifier (UID) of a resource are included in the data that is captured and processed by the {{ insights_operator }} for {{ product_title }}. 
If you are a cluster administrator, you can configure the {{ insights_operator }} to obfuscate data from the Deployment Validation Operator (DVO).
For example, you can obfuscate workload names in the archive file that is then sent to Red&#160;Hat. {._abstract}

To obfuscate the name of resources, you must manually set the `obfuscation` attribute in the `insights-config` `ConfigMap` object to include the `workload_names` value, as outlined in the following procedure.

**Prerequisites**

*   Remote health reporting is enabled, which is the default.
*   You are logged in to the {{ product_title }} web console with the "cluster-admin" role.
*   The `insights-config` `ConfigMap` object exists in the `openshift-insights` namespace.
*   The cluster is self managed and the Deployment Validation Operator is installed.

**Procedure**

1.  Go to **Workloads** -> **ConfigMaps** and select **Project: openshift-insights**.
1.  Click the `insights-config` `ConfigMap` object to open it.
1.  Click **Actions** and select **Edit ConfigMap**.
1.  Click the **YAML view** radio button.
1.  In the file, set the `obfuscation` attribute with the `workload_names` value.
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    # ...
    data:
      config.yaml: |
        dataReporting:
          obfuscation:
            - workload_names
    # ...
    ```
1.  Click **Save**. The `insights-config` ConfigMap details page opens.
1.  Verify that the value of the `config.yaml` `obfuscation` attribute is set to `- workload_names`.