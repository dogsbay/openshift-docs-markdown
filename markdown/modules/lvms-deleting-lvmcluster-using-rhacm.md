{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting an LVMCluster CR by using {{ rh_rhacm }} {id="lvms-deleting-lvmcluster-using-rhacm_{{ context }}"}

You can delete an `LVMCluster` custom resource (CR) when decommissioning {{ lvms }} or reconfiguring storage by using {{ rh_rhacm_first }}. {._abstract}

You can only delete an `LVMCluster` CR by using {{ rh_rhacm }} If you installed {{ lvms }} by using {{ rh_rhacm_first }}.

**Prerequisites**

*   You have access to the {{ rh_rhacm }} cluster as a user with `cluster-admin` permissions.
*   You have deleted the persistent volume claims (PVCs), volume snapshots, and volume clones provisioned by {{ lvms }}. You have also deleted the applications that are using these resources.

**Procedure**

1.  Log in to the {{ rh_rhacm }} CLI using your {{ product_title }} credentials.
1.  Delete the `ConfigurationPolicy` CR YAML file that was created for the `LVMCluster` CR:
    ```terminal
    $ oc delete -f <file_name> -n <cluster_namespace>
    ```

    `<cluster_namespace>` is the namespace of the {{ product_title }} cluster on which {{ lvms }} is installed.
1.  Create a `Policy` CR YAML file to delete the `LVMCluster` CR:
    ```yaml title="Example Policy CR to delete the LVMCluster CR"
    apiVersion: policy.open-cluster-management.io/v1
    kind: Policy
    metadata:
      name: policy-lvmcluster-delete
      annotations:
        policy.open-cluster-management.io/standards: NIST SP 800-53
        policy.open-cluster-management.io/categories: CM Configuration Management
        policy.open-cluster-management.io/controls: CM-2 Baseline Configuration
    spec:
      remediationAction: enforce
      disabled: false
      policy-templates:
        - objectDefinition:
            apiVersion: policy.open-cluster-management.io/v1
            kind: ConfigurationPolicy
            metadata:
              name: policy-lvmcluster-removal
            spec:
              remediationAction: enforce
              severity: low
              object-templates:
                - complianceType: mustnothave
                  objectDefinition:
                    kind: LVMCluster
                    apiVersion: lvm.topolvm.io/v1alpha1
                    metadata:
                      name: my-lvmcluster
                      namespace: openshift-lvm-storage
    ---
    apiVersion: policy.open-cluster-management.io/v1
    kind: PlacementBinding
    metadata:
      name: binding-policy-lvmcluster-delete
    placementRef:
      apiGroup: apps.open-cluster-management.io
      kind: PlacementRule
      name: placement-policy-lvmcluster-delete
    subjects:
      - apiGroup: policy.open-cluster-management.io
        kind: Policy
        name: policy-lvmcluster-delete
    ---
    apiVersion: apps.open-cluster-management.io/v1
    kind: PlacementRule
    metadata:
      name: placement-policy-lvmcluster-delete
    spec:
      clusterConditions:
        - status: "True"
          type: ManagedClusterConditionAvailable
      clusterSelector:
        matchExpressions:
          - key: mykey
            operator: In
            values:
              - myvalue
    ```
    *   `spec.policy-templates.spec.remediationAction`: This field is overridden by the preceding parameter value for `spec.remediationAction`.
    *   `spec.policy-templates.objectDefinition.spec.objectDefinition.metadata.namespace`: This `namespace` field must have the `openshift-lvm-storage` value.
    *   `spec.clusterSelector`: Configures the requirements to select the clusters. {{ lvms }} is uninstalled on the clusters that match the selection criteria. 
1.  Create the `Policy` CR by running the following command:
    ```terminal
    $ oc create -f <file_name> -n <namespace>
    ```
1.  Create a `Policy` CR YAML file to check if the `LVMCluster` CR has been deleted:
    ```yaml title="Example Policy CR to check if the LVMCluster CR has been deleted"
    apiVersion: policy.open-cluster-management.io/v1
    kind: Policy
    metadata:
      name: policy-lvmcluster-inform
      annotations:
        policy.open-cluster-management.io/standards: NIST SP 800-53
        policy.open-cluster-management.io/categories: CM Configuration Management
        policy.open-cluster-management.io/controls: CM-2 Baseline Configuration
    spec:
      remediationAction: inform
      disabled: false
      policy-templates:
        - objectDefinition:
            apiVersion: policy.open-cluster-management.io/v1
            kind: ConfigurationPolicy
            metadata:
              name: policy-lvmcluster-removal-inform
            spec:
              remediationAction: inform
              severity: low
              object-templates:
                - complianceType: mustnothave
                  objectDefinition:
                    kind: LVMCluster
                    apiVersion: lvm.topolvm.io/v1alpha1
                    metadata:
                      name: my-lvmcluster
                      namespace: openshift-lvm-storage
    ---
    apiVersion: policy.open-cluster-management.io/v1
    kind: PlacementBinding
    metadata:
      name: binding-policy-lvmcluster-check
    placementRef:
      apiGroup: apps.open-cluster-management.io
      kind: PlacementRule
      name: placement-policy-lvmcluster-check
    subjects:
      - apiGroup: policy.open-cluster-management.io
        kind: Policy
        name: policy-lvmcluster-inform
    ---
    apiVersion: apps.open-cluster-management.io/v1
    kind: PlacementRule
    metadata:
      name: placement-policy-lvmcluster-check
    spec:
      clusterConditions:
        - status: "True"
          type: ManagedClusterConditionAvailable
      clusterSelector:
        matchExpressions:
          - key: mykey
            operator: In
            values:
              - myvalue
    ```
    *   `spec.policy-templates.objectDefinition.spec.remediationAction`: This field is overridden by the preceding parameter value for `spec.remediationAction`.
    *   `spec.policy-templates.objectDefinition.spec.object-templates.objectDefinition.metadata.namespace`: This `namespace` field must have the `openshift-lvm-storage` value.
1.  Create the `Policy` CR by running the following command:
    ```terminal
    $ oc create -f <file_name> -n <namespace>
    ```

**Verification**

*   Check the status of the `Policy` CRs by running the following command:
    ```terminal
    $ oc get policy -n <namespace>
    ```
    ```terminal title="Example output"
    NAME                       REMEDIATION ACTION   COMPLIANCE STATE   AGE
    policy-lvmcluster-delete   enforce              Compliant          15m
    policy-lvmcluster-inform   inform               Compliant          15m
    ```

    :::important

    The `Policy` CRs must be in `Compliant` state.
    
    :::