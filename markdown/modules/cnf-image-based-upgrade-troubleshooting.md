{%- set _mod_docs_content_type = "REFERENCE" %}
# Troubleshooting image-based upgrades with {{ lcao }} {id="cnf-image-based-upgrade-troubleshooting_{{ context }}"}

Perform troubleshooting steps on the managed clusters to resolve any issues. {._abstract}


:::important

If you are using the `ImageBasedGroupUpgrade` CR to upgrade your clusters, ensure that you update the `lcm.openshift.io/ibgu-<stage>-completed` or `lcm.openshift.io/ibgu-<stage>-failed` cluster labels properly after performing troubleshooting or recovery steps on the managed clusters.
This ensures that the {{ cgu_operator }} continues to manage the image-based upgrade for the cluster.

:::


## Collecting logs {id="cnf-image-based-upgrade-troubleshooting-must-gather_{{ context }}"}

You can use the `oc adm must-gather` CLI to collect information for debugging and troubleshooting.

To collect data about the Operators, run the following command:

```terminal
$  oc adm must-gather \
  --dest-dir=must-gather/tmp \
  --image=$(oc -n openshift-lifecycle-agent get deployment.apps/lifecycle-agent-controller-manager -o jsonpath='{.spec.template.spec.containers[?(@.name == "manager")].image}') \
  --image=quay.io/konveyor/oadp-must-gather:latest \//
  --image=quay.io/openshift/origin-must-gather:latest
```

Where:
* `--image=quay.io/konveyor/oadp-must-gather:latest`: Optional: Add this option if you need to gather more information from the {{ oadp_short }} Operator.
* `--image=quay.io/openshift/origin-must-gather:latest`: Optional: Add this option if you need to gather more information from the SR-IOV Operator.

## `AbortFailed` or `FinalizeFailed` error {id="cnf-image-based-upgrade-troubleshooting-manual-cleanup_{{ context }}"}


Issue
:   During the finalization stage or when you stop the process at the `Prep` stage, {{ lcao }} cleans up the following resources:

    *   Stateroot that is no longer required
    *   Precaching resources
    *   {{ oadp_short }} CRs
    *   `ImageBasedUpgrade` CR


    If the {{ lcao }} fails to clean up these resources, it transitions to the `AbortFailed` or `FinalizeFailed` states.
    The condition message and log show the steps that failed, as shown in the following example:


    Example error message:

    ```yaml
    message: failed to delete all the backup CRs. Perform cleanup manually then add 'lca.openshift.io/manual-cleanup-done' annotation to ibu CR to transition back to Idle
          observedGeneration: 5
          reason: AbortFailed
          status: "False"
          type: Idle
    ```


Resolution
:   1.  Inspect the logs to find the reason for failure.
    1.  To prompt {{ lcao }} to retry the cleanup, add the `lca.openshift.io/manual-cleanup-done` annotation to the `ImageBasedUpgrade` CR.


    After observing this annotation, {{ lcao }} retries the cleanup and, if it is successful, the `ImageBasedUpgrade` stage transitions to `Idle`.


    If the cleanup fails again, you can manually clean up the resources.

## Cleaning up stateroot manually {id="cnf-image-based-upgrade-troubleshooting-stateroot_{{ context }}"}


Issue

:   Stopping at the `Prep` stage, {{ lcao }} cleans up the new stateroot. When finalizing after a successful upgrade or a rollback, {{ lcao }} cleans up the old stateroot.
    If this step fails, you must inspect the logs to decide why the failure occurred.


Resolution
:   1.  Check if there are any existing deployments in the stateroot by running the following command:
    ```terminal
    $ ostree admin status
    ```
    1.  If there are any, clean up the existing deployment by running the following command:
    ```terminal
    $ ostree admin undeploy <index_of_deployment>
    ```
    1.  After cleaning up all the deployments of the stateroot, wipe the stateroot directory by running the following commands:


    :::warning


    Ensure that the booted deployment is not in this stateroot.
    
    :::


    ```terminal
    $ stateroot="<stateroot_to_delete>"
    ```

    ```terminal
    $ unshare -m /bin/sh -c "mount -o remount,rw /sysroot && rm -rf /sysroot/ostree/deploy/${stateroot}"
    ```

## Cleaning up {{ oadp_short }} resources manually {id="cnf-image-based-upgrade-troubleshooting-oadp-resources_{{ context }}"}


Issue

:   Automatic cleanup of {{ oadp_short }} resources can fail due to connection issues between {{ lcao }} and the S3 backend. By restoring the connection and adding the `lca.openshift.io/manual-cleanup-done` annotation, the {{ lcao }} can successfully cleanup backup resources.


Resolution
:   1.  Check the backend connectivity by running the following command:
    ```terminal
    $ oc get backupstoragelocations.velero.io -n openshift-adp
    ```

    The following example shows successful backend connectivity:
    ```terminal
    NAME                          PHASE       LAST VALIDATED   AGE   DEFAULT
    dataprotectionapplication-1   Available   33s              8d    true
    ```
    1.  Remove all backup resources and then add the `lca.openshift.io/manual-cleanup-done` annotation to the `ImageBasedUpgrade` CR.

## {{ lvms }} volume contents not restored {id="cnf-image-based-upgrade-troubleshooting-lvms_{{ context }}"}

When you use {{ lvms }} to configure dynamic persistent volume storage, {{ lvms }} might not restore the persistent volume contents if you have configured it incorrectly.

## Missing {{ lvms }}-related fields in Backup CR {id="cnf-image-based-upgrade-troubleshooting-lvms-backup_{{ context }}"}


Issue
:   Your `Backup` CRs might be missing fields that you need to restore your persistent volumes.
    You can check for events in your application pod to decide if you have this issue by running the following:
    ```terminal
    $ oc describe pod <your_app_name>
    ```


    The following example output shows a pod failing due to missing {{ lvms }}-related fields in the `Backup` CR:

    ```terminal
    Events:
      Type     Reason            Age                From               Message
      ----     ------            ----               ----               -------
      Warning  FailedScheduling  58s (x2 over 66s)  default-scheduler  0/1 nodes are available: pod has unbound immediate PersistentVolumeClaims. preemption: 0/1 nodes are available: 1 Preemption is not helpful for scheduling..
      Normal   Scheduled         56s                default-scheduler  Successfully assigned default/db-1234 to sno1.example.lab
      Warning  FailedMount       24s (x7 over 55s)  kubelet            MountVolume.SetUp failed for volume "pvc-1234" : rpc error: code = Unknown desc = VolumeID is not found
    ```


Resolution
:   You must include `logicalvolumes.topolvm.io` in the application `Backup` CR.
    Without this resource, the application restores its persistent volume claims and persistent volume manifests correctly, however, the `logicalvolume` associated with this persistent volume is not restored properly after pivot. The following example shows a correctly configured `Backup` CR:
    ```yaml
    apiVersion: velero.io/v1
    kind: Backup
    metadata:
      labels:
        velero.io/storage-location: default
      name: small-app
      namespace: openshift-adp
    spec:
      includedNamespaces:
      - test
      includedNamespaceScopedResources:
      - secrets
      - persistentvolumeclaims
      - deployments
      - statefulsets
      includedClusterScopedResources:
      - persistentVolumes
      - volumesnapshotcontents
      - logicalvolumes.topolvm.io
    ```

    To restore the persistent volumes for your application, you must configure the `includedClusterScopedResources` section as shown.

## Missing {{ lvms }}-related fields in Restore CR {id="cnf-image-based-upgrade-troubleshooting-lvms-restore_{{ context }}"}


Issue
:   {{ lvms }} restores the expected resources for the applications but it does not preserve the persistent volume contents after upgrading.

1.  List the persistent volumes for you applications by running the following command before pivot:
    ```terminal
    $ oc get pv,pvc,logicalvolumes.topolvm.io -A
    ```

    The following shows the output before pivot:

    ```terminal
    NAME                        CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM            STORAGECLASS   REASON   AGE
    persistentvolume/pvc-1234   1Gi        RWO            Retain           Bound    default/pvc-db   lvms-vg1                4h45m

    NAMESPACE   NAME                           STATUS   VOLUME     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
    default     persistentvolumeclaim/pvc-db   Bound    pvc-1234   1Gi        RWO            lvms-vg1       4h45m

    NAMESPACE   NAME                                AGE
                logicalvolume.topolvm.io/pvc-1234   4h45m
    ```
1.  List the persistent volumes for you applications by running the following command after pivot:
    ```terminal
    $ oc get pv,pvc,logicalvolumes.topolvm.io -A
    ```

    The following shows the output after pivot:

    ```terminal
    NAME                        CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM            STORAGECLASS   REASON   AGE
    persistentvolume/pvc-1234   1Gi        RWO            Delete           Bound    default/pvc-db   lvms-vg1                19s

    NAMESPACE   NAME                           STATUS   VOLUME     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
    default     persistentvolumeclaim/pvc-db   Bound    pvc-1234   1Gi        RWO            lvms-vg1       19s

    NAMESPACE   NAME                                AGE
                logicalvolume.topolvm.io/pvc-1234   18s
    ```

    Resolution
    :   The reason for this issue is that the `logicalvolume` status is not preserved in the `Restore` CR.
        This status is important because Velero requires this status to reference the volumes that you must preserve after pivoting.
        You must include the following fields in the application `Restore` CR, as shown in the following example:
    ```yaml
    apiVersion: velero.io/v1
    kind: Restore
    metadata:
      name: sample-vote-app
      namespace: openshift-adp
      labels:
        velero.io/storage-location: default
      annotations:
        lca.openshift.io/apply-wave: "3"
    spec:
      backupName:
        sample-vote-app
      restorePVs: <restore_pvs>
      restoreStatus:
        includedResources:
          - logicalvolumes
    ```
    where:
    `<restore_pvs>`:: To preserve the persistent volumes for your application, you must set `restorePVs` to `true`.
    `restoreStatus`:: To preserve the persistent volumes for your application, you must configure this field as shown.

## Debugging failed Backup and Restore CRs {id="cnf-image-based-upgrade-troubleshooting-debugging-oadp-crs_{{ context }}"}


Issue
:   The backup or restoration of artifacts failed.


Resolution
:   You can debug `Backup` and `Restore` CRs and retrieve logs with the OADP CLI.
    The OADP CLI offers more detailed information than the OpenShift CLI tool.

1.  Describe the `Backup` CR that has errors by running the following command:
    ```terminal
    $ oc oadp backup describe backup-acm-klusterlet -n openshift-adp --details
    ```
1.  Describe the `Restore` CR that has errors by running the following command:
    ```terminal
    $ oc oadp restore describe restore-acm-klusterlet -n openshift-adp --details
    ```
1.  Download the backed up resources to a local directory by running the following command:
    ```terminal
    $ oc oadp backup download backup-acm-klusterlet -n openshift-adp -o ~/backup-acm-klusterlet.tar.gz
    ```