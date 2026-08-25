{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the hypershift-addon managed cluster add-on to run on an infrastructure node {id="hcp-dc-addon_{{ context }}"}

By default, no node placement preference is specified for the `hypershift-addon` managed cluster add-on. Consider running the add-ons on the infrastructure nodes, because by doing so, you can prevent incurring billing costs against subscription counts and separate maintenance and management tasks. {._abstract}

**Procedure**

1.  Log in to the hub cluster.
1.  Open the `hypershift-addon-deploy-config` add-on deployment configuration specification for editing by entering the following command:
    ```terminal
    $ oc edit addondeploymentconfig hypershift-addon-deploy-config \
      -n multicluster-engine
    ```
1.  Add the `nodePlacement` field to the specification, as shown in the following example:
    ```yaml
    apiVersion: addon.open-cluster-management.io/v1alpha1
    kind: AddOnDeploymentConfig
    metadata:
      name: hypershift-addon-deploy-config
      namespace: multicluster-engine
    spec:
      nodePlacement:
        nodeSelector:
          node-role.kubernetes.io/infra: ""
        tolerations:
        - effect: NoSchedule
          key: node-role.kubernetes.io/infra
          operator: Exists 
    ```
1.  Save the changes. The `hypershift-addon` managed cluster add-on is deployed on an infrastructure node for new and existing managed clusters.