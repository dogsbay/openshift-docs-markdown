{%- set _mod_docs_content_type = "PROCEDURE" %}
# Moving to the Rollback stage of the image-based upgrade with {{ lcao }} and {{ ztp }} {id="ztp-image-based-upgrade-rollback_{{ context }}"}

If you encounter an issue after upgrade, you can start a manual rollback.

**Prerequisites**

*   Ensure that the control plane certificates on the original stateroot are valid. If the certificates expired, see "Recovering from expired control plane certificates".

**Procedure**

1.  Revert the `du-profile` or the corresponding policy-binding label to the original platform version in the `ClusterInstance` CR:
    ```yaml
    apiVersion: siteconfig.open-cluster-management.io/v1alpha1
    kind: ClusterInstance
    metadata:
      name: "example-sno"
      namespace: "example-sno"
    spec:
      # ...
      extraLabels:
        ManagedCluster:
          du-profile: "4.14.x"
    ```
1.  When you are ready to initiate the rollback, add the `Rollback` policy to your existing group `PolicyGenTemplate` CR:
    ```yaml
    [...]
    - fileName: ibu/ImageBasedUpgrade.yaml
      policyName: "rollback-stage-policy"
      spec:
        stage: Rollback
      status:
        conditions:
          - message: Rollback completed
            reason: Completed
            status: "True"
            type: RollbackCompleted
    ```
1.  Create a `ClusterGroupUpgrade` CR on target hub cluster that references the `Rollback` policy:
    ```yaml
    apiVersion: ran.openshift.io/v1alpha1
    kind: ClusterGroupUpgrade
    metadata:
      name: cgu-ibu-rollback
      namespace: default
    spec:
      actions:
        beforeEnable:
          removeClusterAnnotations:
          - import.open-cluster-management.io/disable-auto-import
      clusters: 
      - spoke1
      enable: true
      managedPolicies: 
      - example-group-ibu-rollback-stage-policy
      remediationStrategy: 
        canaries: 
          - spoke1
        maxConcurrency: 1 
        timeout: 240
    ```
1.  Apply the `Rollback` policy by running the following command:
    ```terminal
    $ oc apply -f cgu-ibu-rollback.yml
    ```
1.  When you are satisfied with the changes and you are ready to finalize the rollback, create a `ClusterGroupUpgrade` CR on target hub cluster that references the policy that finalizes the rollback:
    ```yaml
    apiVersion: ran.openshift.io/v1alpha1
    kind: ClusterGroupUpgrade
    metadata:
      name: cgu-ibu-finalize
      namespace: default
    spec:
      actions:
        beforeEnable:
          removeClusterAnnotations:
          - import.open-cluster-management.io/disable-auto-import
      clusters: 
      - spoke1
      enable: true
      managedPolicies: 
      - example-group-ibu-finalize-stage-policy
      remediationStrategy: 
        canaries:
          - spoke1
        maxConcurrency: 1 
        timeout: 240
    ```
1.  Apply the policy by running the following command:
    ```terminal
    $ oc apply -f cgu-ibu-finalize.yml
    ```