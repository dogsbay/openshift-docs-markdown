{%- set _mod_docs_content_type = "PROCEDURE" %}
# Moving to the Upgrade stage of the image-based upgrade with {{ lcao }} and {{ ztp }} {id="ztp-image-based-upgrade-upgrade_{{ context }}"}

After you completed the `Prep` stage, you can upgrade the target cluster. During the upgrade process, the {{ oadp_short }} Operator creates a backup of the artifacts specified in the {{ oadp_short }} CRs, then the {{ lcao }} upgrades the cluster.

If the upgrade fails or stops, an automatic rollback is initiated.
If you have an issue after the upgrade, you can initiate a manual rollback.
For more information about manual rollback, see "(Optional) Initiating a rollback with Lifecycle Agent and {{ ztp }}".

**Prerequisites**

*   Complete the `Prep` stage.

**Procedure**

1.  When you are ready to move to the `Upgrade` stage, create the `ClusterGroupUpgrade` CR on the target hub cluster that references the `Upgrade` policy:
    ```yaml
    apiVersion: ran.openshift.io/v1alpha1
    kind: ClusterGroupUpgrade
    metadata:
      name: cgu-ibu-upgrade
      namespace: default
    spec:
      actions:
        beforeEnable:
          addClusterAnnotations:
            import.open-cluster-management.io/disable-auto-import: "true" (1)
        afterCompletion:
          removeClusterAnnotations:
          - import.open-cluster-management.io/disable-auto-import (2)
      clusters: 
      - spoke1
      enable: true
      managedPolicies: 
      - example-group-ibu-upgrade-stage-policy
      remediationStrategy: 
        canaries: 
          - spoke1
        maxConcurrency: 1 
        timeout: 240
    ```
    1.  Applies the `disable-auto-import` annotation to the managed cluster before starting the upgrade. This annotation ensures the automatic importing of managed cluster is disabled during the upgrade stage until the cluster is ready.
    1.  Removes the `disable-auto-import` annotation after the upgrade is complete.
1.  Apply the `Upgrade` policy by running the following command:
    ```terminal
    $ oc apply -f cgu-ibu-upgrade.yml
    ```
1.  Monitor the status by running the following command and wait for the `cgu-ibu-upgrade` `ClusterGroupUpgrade` to report `Completed`:
    ```terminal
    $ oc get cgu -n default
    ```

    ```terminal title="Example output"
    NAME                              AGE   STATE       DETAILS
    cgu-ibu-prep                      31h   Completed   All clusters are compliant with all the managed policies
    cgu-ibu-upgrade                   31h   Completed   All clusters are compliant with all the managed policies
    ```
1.  When you are satisfied with the changes and ready to finalize the upgrade, create a `ClusterGroupUpgrade` CR on target hub cluster that references the policy that finalizes the upgrade:
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


    :::important

    Ensure that no other `ClusterGroupUpgrade` CRs are in progress because this causes {{ cgu_operator }} to continuously reconcile them. Delete all `"In-Progress"` `ClusterGroupUpgrade` CRs before applying the `cgu-ibu-finalize.yaml`. 
    
    :::

1.  Apply the policy by running the following command:
    ```terminal
    $ oc apply -f cgu-ibu-finalize.yaml
    ```
1.  Monitor the status and wait for the `cgu-ibu-finalize` `ClusterGroupUpgrade` to report `Completed` by running the following command: 
    ```terminal
    $ oc get cgu -n default
    ```

    ```terminal title="Example output"
    NAME                    AGE   STATE       DETAILS
    cgu-ibu-finalize        30h   Completed   All clusters are compliant with all the managed policies
    cgu-ibu-prep            31h   Completed   All clusters are compliant with all the managed policies
    cgu-ibu-upgrade         31h   Completed   All clusters are compliant with all the managed policies
    ```
1.  You can remove the {{ oadp_short }} Operator and its configuration files after a successful upgrade.
    1.  Change the `complianceType` to `mustnothave` for the {{ oadp_short }} Operator namespace, Operator group, and subscription in the `common-ranGen.yaml` file.
        ```yaml
        [...]
        - fileName: OadpSubscriptionNS.yaml
          policyName: "subscriptions-policy"
          complianceType: mustnothave
        - fileName: OadpSubscriptionOperGroup.yaml
          policyName: "subscriptions-policy"
          complianceType: mustnothave
        - fileName: OadpSubscription.yaml
          policyName: "subscriptions-policy"
          complianceType: mustnothave
        - fileName: OadpOperatorStatus.yaml
          policyName: "subscriptions-policy"
          complianceType: mustnothave
        [...]
        ```
    1.  Change the `complianceType` to `mustnothave` for the {{ oadp_short }} Operator namespace, Operator group, and subscription in the site `PolicyGenTemplate` file.
        ```yaml
        - fileName: OadpSecret.yaml
          policyName: "config-policy"
          complianceType: mustnothave
        - fileName: OadpBackupStorageLocationStatus.yaml
          policyName: "config-policy"
          complianceType: mustnothave
        - fileName: DataProtectionApplication.yaml
          policyName: "config-policy"
          complianceType: mustnothave
        ```
    1.  Merge the changes with your custom site repository and wait for the ArgoCD application to synchronize the change to the hub cluster. The status of the `common-subscriptions-policy` and the `example-cnf-config-policy` policies change to `Non-Compliant`.
    1.  Apply the change to your target clusters by using the {{ cgu_operator_full }}. For more information about rolling out configuration changes, see "Update policies on managed clusters".
    1.  Monitor the process. When the status of the `common-subscriptions-policy` and the `example-cnf-config-policy` policies for a target cluster are `Compliant`, the {{ oadp_short }} Operator has been removed from the cluster. Get the status of the policies by running the following commands:
        ```terminal
        $ oc get policy -n ztp-common common-subscriptions-policy
        ```

        ```terminal
        $ oc get policy -n ztp-site example-cnf-config-policy
        ```
    1.  Delete the {{ oadp_short }} Operator namespace, Operator group and subscription, and configuration CRs from `spec.sourceFiles` in the `common-ranGen.yaml` and the site `PolicyGenTemplate` files.
    1.  Merge the changes with your custom site repository and wait for the ArgoCD application to synchronize the change to the hub cluster. The policy remains compliant.