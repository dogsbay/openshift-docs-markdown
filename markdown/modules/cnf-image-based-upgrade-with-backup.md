{%- set _mod_docs_content_type = "PROCEDURE" %}
# Moving to the Upgrade stage of the image-based upgrade with {{ lcao }} {id="cnf-image-based-upgrade-with-backup_{{ context }}"}

After you generate the seed image and complete the `Prep` stage, you can upgrade the target cluster.
During the upgrade process, the {{ oadp_short }} Operator creates a backup of the artifacts specified in the {{ oadp_short }} custom resources (CRs), then the {{ lcao }} upgrades the cluster. {._abstract}

If the upgrade fails or stops, the {{ lcao }} initiates an automatic rollback.
If you have an issue after the upgrade, you can perform a manual rollback.
For more information about manual rollback, see "Moving to the Rollback stage of the image-based upgrade with {{ lcao }}".

**Prerequisites**

*   You have completed the `Prep` stage.

**Procedure**

1.  To move to the `Upgrade` stage, change the value of the `stage` field to `Upgrade` in the `ImageBasedUpgrade` CR by running the following command:
    ```terminal
    $ oc patch imagebasedupgrades.lca.openshift.io upgrade -p='{"spec": {"stage": "Upgrade"}}' --type=merge
    ```
1.  Check the status of the `ImageBasedUpgrade` CR by running the following command:
    ```terminal
    $ oc get ibu -o yaml
    ```

    The following example shows an upgrade in progress:

    ```yaml
    status:
      conditions:
      - lastTransitionTime: "2024-01-01T09:00:00Z"
        message: In progress
        observedGeneration: 5
        reason: InProgress
        status: "False"
        type: Idle
      - lastTransitionTime: "2024-01-01T09:00:00Z"
        message: Prep completed
        observedGeneration: 5
        reason: Completed
        status: "False"
        type: PrepInProgress
      - lastTransitionTime: "2024-01-01T09:00:00Z"
        message: Prep completed successfully
        observedGeneration: 5
        reason: Completed
        status: "True"
        type: PrepCompleted
      - lastTransitionTime: "2024-01-01T09:00:00Z"
        message: |-
          Waiting for system to stabilize: one or more health checks failed
            - one or more ClusterOperators not yet ready: authentication
            - one or more MachineConfigPools not yet ready: master
            - one or more ClusterServiceVersions not yet ready: sriov-fec.v2.8.0
        observedGeneration: 1
        reason: InProgress
        status: "True"
        type: UpgradeInProgress
      observedGeneration: 1
      rollbackAvailabilityExpiration: "2024-05-19T14:01:52Z"
      validNextStages:
      - Rollback
    ```

    The {{ oadp_short }} Operator creates a backup of the data specified in the {{ oadp_short }} `Backup` and `Restore` CRs and the target cluster reboots.
1.  Monitor the status of the CR by running the following command:
    ```terminal
    $ oc get ibu -o yaml
    ```
1.  After the upgrade, complete the changes by patching the value of the `stage` field to `Idle` in the `ImageBasedUpgrade` CR by running the following command:
    ```terminal
    $ oc patch imagebasedupgrades.lca.openshift.io upgrade -p='{"spec": {"stage": "Idle"}}' --type=merge
    ```


    :::important

    You cannot roll back the changes once you move to the `Idle` stage after an upgrade.
    
    :::


    The {{ lcao }} deletes all resources created during the upgrade process.
1.  You can remove the {{ oadp_short }} Operator and its configuration files after a successful upgrade. For more information, see "Deleting Operators from a cluster".

**Verification**

1.  Check the status of the `ImageBasedUpgrade` CR by running the following command:
    ```terminal
    $ oc get ibu -o yaml
    ```

    The following example shows a completed upgrade:

    ```yaml
    status:
      conditions:
      - lastTransitionTime: "2024-01-01T09:00:00Z"
        message: In progress
        observedGeneration: 5
        reason: InProgress
        status: "False"
        type: Idle
      - lastTransitionTime: "2024-01-01T09:00:00Z"
        message: Prep completed
        observedGeneration: 5
        reason: Completed
        status: "False"
        type: PrepInProgress
      - lastTransitionTime: "2024-01-01T09:00:00Z"
        message: Prep completed successfully
        observedGeneration: 5
        reason: Completed
        status: "True"
        type: PrepCompleted
      - lastTransitionTime: "2024-01-01T09:00:00Z"
        message: Upgrade completed
        observedGeneration: 1
        reason: Completed
        status: "False"
        type: UpgradeInProgress
      - lastTransitionTime: "2024-01-01T09:00:00Z"
        message: Upgrade completed
        observedGeneration: 1
        reason: Completed
        status: "True"
        type: UpgradeCompleted
      observedGeneration: 1
      rollbackAvailabilityExpiration: "2024-01-01T09:00:00Z"
      validNextStages:
      - Idle
      - Rollback
    ```
1.  Check the status of the cluster restoration by running the following command:
    ```terminal
    $ oc get restores -n openshift-adp -o custom-columns=NAME:.metadata.name,Status:.status.phase,Reason:.status.failureReason
    ```

    The following example shows completed restores:

    ```terminal
    NAME             Status      Reason
    acm-klusterlet   Completed   <none>
    apache-app       Completed   <none>
    localvolume      Completed   <none>
    ```


    :::note

    The `acm-klusterlet` is specific to {{ rh_rhacm }} environments only.
    
    :::