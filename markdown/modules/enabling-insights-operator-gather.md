{%- set _mod_docs_content_type = "PROCEDURE" %}
# Re-enabling the {{ insights_operator }} periodic gather operations {id="enabling-insights-operator-gather_{{ context }}"}

If you disabled the default `InsightsDataGather` data gather operations, you can enable them again so that the {{ insights_operator }} resumes the periodic data collection, and sends the resulting {{ red_hat_lightspeed }} cluster reports to Red&#160;Hat. {._abstract}

{%- set FeatureName = "The `InsightsDataGather` custom resource" %}
{% include "./snippets/technology-preview.md" %}

**Prerequisites**

{% if not (openshift_rosa or openshift_dedicated) %}
*   You are logged in to the {{ product_title }} web console as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   You are logged in to the {{ product_title }} web console as a user with the `dedicated-admin` role.
{% endif %}

**Procedure**

1.  Navigate to **Administration** > **CustomResourceDefinitions**.
1.  On the **CustomResourceDefinitions** page, use the **Search by name** field to find the **InsightsDataGather** custom resource definition (CRD), and click to open.
1.  On the **CustomResourceDefinition details** page, click the **Instances** tab.
1.  Click **cluster**, and then click the **YAML** tab.
1.  Edit the `InsightsDataGather` CRD, and complete one of the following steps:
    *   To enable all disabled gather operations, under the `gatherers` specification, set the `mode` back to `All`:
        ```yaml
        apiVersion: insights.openshift.io/v1
        kind: InsightsDataGather
        metadata:
          name: cluster
        spec:
        # Gatherers configuration
          gatherers:
            mode: All # Options: All, None, Custom
        ```
    *   To enable individual gather operations that were previously disabled, find the name of the gatherer operation under the `gatherers:custom:configs` key section and change the `state` to `Enabled`. Alternatively, under the `config` specification, remove the `name` and `state` configuration lines for the operation you want to enable.
        ```yaml
        apiVersion: insights.openshift.io/v1
        kind: InsightsDataGather
        metadata:
          name: cluster
        spec:
            # Gatherers configuration
          gatherers:
            mode: Custom  # Options: All, None, Custom
            custom:
              configs:
                # Essential cluster configuration gatherers
                - name: clusterconfig/authentication
                  state: Enabled
                - name: clusterconfig/clusteroperators
                  state: Enabled
                - name: workloads
                  state: Enabled
        ```
1.  Click **Save**.

    The {{ insights_operator }} updates the gather configurations and starts the affected gather operations.

    :::note

    Disabling gather operations restricts the ability of the {{ red_hat_lightspeed }} advisor service to offer effective recommendations for your cluster.
    
    :::