{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting a live migration feature gate in the {{ mtv_first }} {id="virt-setting-mtv-lm-feature-gates_{{ context }}"}

You enable the {{ product_title }} live migration feature gate in the {{ mtv_first }} to allow virtual machines to migrate between clusters during cross-cluster live migration. This feature gate must be enabled in both clusters that participate in the migration. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You must have cluster admin privileges.
*   The `virt-synchronization-controller` pods must be running.

**Procedure**

*   To enable the feature gate by modifying the CR, run the following command:
    ```terminal
    $ oc patch ForkliftController forklift-controller -n openshift-mtv --type json -p '[{"op": "add", "path": "/spec/feature_ocp_live_migration", "value": "true"}]'
    ```

**Verification**

*   Verify that the feature gate is enabled by checking the `ForkliftController` custom resource (CR). Run the following command:
    ```terminal
    $ oc get ForkliftController forklift-controller -n openshift-mtv -o yaml
    ```

    Confirm that the `feature_ocp_live_migration` key value is set to `true`, as shown in the following example:
    ```yaml
    apiVersion: forklift.konveyor.io/v1beta1
    kind: ForkliftController
    metadata:
      name: forklift-controller
      namespace: openshift-mtv
    spec:
      feature_ocp_live_migration: "true"
      feature_ui_plugin: "true"
      feature_validation: "true"
      feature_volume_populator: "true"
    ```