{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling the metric service monitoring {id="hcp-disable-metrics_{{ context }}"}

After you enable the `hypershift-addon` managed cluster add-on, metric service monitoring is configured by default so that {{ product_title }} monitoring can gather metrics from `hypershift-addon`. If needed, you can disable metric service monitoring. {._abstract}

**Procedure**

1.  Log in to your hub cluster by running the following command:
    ```terminal
    $ oc login
    ```
1.  Edit the `hypershift-addon-deploy-config` add-on deployment configuration specification by running the following command:
    ```terminal
    $ oc edit addondeploymentconfig hypershift-addon-deploy-config \
      -n multicluster-engine
    ```
1.  Add the `disableMetrics=true` customized variable to the specification, as shown in the following example:
    ```yaml
    apiVersion: addon.open-cluster-management.io/v1alpha1
    kind: AddOnDeploymentConfig
    metadata:
      name: hypershift-addon-deploy-config
      namespace: multicluster-engine
    spec:
      customizedVariables:
      - name: hcMaxNumber
        value: "80"
      - name: hcThresholdNumber
        value: "60"
      - name: disableMetrics
        value: "true"
    ```

    The `disableMetrics=true` customized variable disables metric service monitoring for both new and existing `hypershift-addon` managed cluster add-ons.
1.  Apply the changes to the configuration specification by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```