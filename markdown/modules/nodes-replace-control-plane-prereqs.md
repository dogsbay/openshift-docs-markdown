{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites {id="prerequisites_{{ context }}"}

*   You have identified the unhealthy bare metal etcd member.
*   You have verified that either the machine is not running or the node is not ready.
*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have taken an [etcd backup](/backup_and_restore/control_plane_backup_and_restore/backing-up-etcd#backup-etcd) in case you encounter any issues.
*   You have downloaded and installed the [`coreos-installer` CLI](https://console.redhat.com/openshift/downloads#tool-coreos-installer).
*   Your cluster does not have a control plane `machineset`. You can check for `machinesets` by running the following command:
    ```terminal
    $ oc get machinesets,controlplanemachinesets -n openshift-machine-api
    ```

    :::important

    There should be only one or more `machinesets` for the workers.
    If `controlplanemachinesets` exists for the control plane, do not use this procedure.
    
    :::