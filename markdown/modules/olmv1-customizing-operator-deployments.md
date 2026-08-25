{%- set _mod_docs_content_type = "PROCEDURE" %}
# Customize operator deployments {id="olmv1-customizing-operator-deployments_{{ context }}"}

Customize Operator pod deployments to meet production requirements by configuring resource allocation, node placement, and pod tolerations through the `ClusterExtension` resource. {._abstract}

{%- set FeatureName = "{{ olmv1 }} `deploymentConfig` API" %}
{% include "./snippets/technology-preview.md" %}

**Prerequisites**

*   You have access to an {{ product_title }} cluster using an account with `cluster-admin` permissions.
*   You have enabled the `TechPreviewNoUpgrade` feature set on the cluster.
*   You have created a service account and assigned enough role-based access controls (RBAC) to install, update, and manage the extension. For more information, see "Cluster extension permissions".
*   You have installed the {{ oc_first }}.
*   You have identified the operator you want to install and customize.

**Procedure**

1.  Create a `ClusterExtension` resource with `deploymentConfig` customizations:
    ```yaml
    apiVersion: olm.operatorframework.io/v1
    kind: ClusterExtension
    metadata:
      name: my-operator
    spec:
      namespace: my-operator-ns
      serviceAccount:
        name: my-operator-installer
      config:
        configType: Inline
        inline:
          deploymentConfig:
            resources:
              requests:
                cpu: 100m
                memory: 128Mi
              limits:
                cpu: 500m
                memory: 512Mi
            nodeSelector:
              node-role.kubernetes.io/infra: ""
            tolerations:
            - key: node-role.kubernetes.io/infra
              operator: Exists
              effect: NoSchedule
      source:
        sourceType: Catalog
        catalog:
          packageName: my-operator
          version: 1.0.0
    ```

    where:

    `resources:`
    :   Specifies CPU and memory resource requests and limits for the Operator pod.

    `nodeSelector:`
    :   Specifies pod scheduling restrictions to infrastructure nodes.

    `tolerations:`
    :   Specifies pod tolerations that allow scheduling on nodes with the specified taint.
1.  Apply the `ClusterExtension` resource:
    ```terminal
    $ oc apply -f my-operator.yaml
    ```
1.  Verify the installation:
    ```terminal
    $ oc get clusterextension my-operator -o yaml
    ```

**Verification**

*   Verify that the `deploymentConfig` settings were applied:
    ```terminal
    $ oc get deployment -n my-operator-ns -l olm.operatorframework.io/owner-name=my-operator -o yaml
    ```

    Check the deployment specification for your configured settings such as resource limits, node selectors, tolerations, and volumes.