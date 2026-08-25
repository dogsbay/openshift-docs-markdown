{%- set _mod_docs_content_type = "SNIPPET" %}

During a File System Backup (FSB) restore operation, a `Deployment` resource referencing an `ImageStream` is not restored properly. The restored pod that runs the FSB, and the `postHook` is terminated prematurely.

This happens because, during the restore operation, OpenShift controller updates the `spec.template.spec.containers[0].image` field in the `Deployment` resource with an updated `ImageStreamTag` hash. The update triggers the rollout of a new pod, terminating the pod on which `velero` runs the FSB and the post restore hook. For more information about image stream trigger, see "Triggering updates on image stream changes".

The workaround for this behavior is a two-step restore process:

1.  First, perform a restore excluding the `Deployment` resources, for example:
    ```terminal
    $ velero restore create <RESTORE_NAME> \
      --from-backup <BACKUP_NAME> \
      --exclude-resources=deployment.apps
    ```
1.  After the first restore is successful, perform a second restore by including these resources, for example:
    ```terminal
    $ velero restore create <RESTORE_NAME> \
      --from-backup <BACKUP_NAME> \
      --include-resources=deployment.apps
    ```