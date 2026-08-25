{%- set _mod_docs_content_type = "PROCEDURE" %}
# Diagnosing a stuck worker node update {id="core-cluster-upgrade-ts-worker-update-stuck_{{ context }}"}

If worker node updates are stuck, the issue is typically related to pod disruption budgets, machine config daemon failures, or node reboot failures. {._abstract}

**Prerequisites**

*   You have a worker node update that is not progressing.
*   You have access to the target cluster with cluster-admin privileges.

**Procedure**

1.  Check the `MachineConfigPool` resource status by running the following command:
    ```terminal
    $ oc get mcp worker -o yaml
    ```

    Look for degraded machine configs in the status.
1.  Check pod disruption budgets by running the following command:
    ```terminal
    $ oc get pdb -A
    ```

    If a pod disruption budget (PDB) shows `ALLOWED DISRUPTIONS` of 0, adjust the PDB configuration.
1.  Check machine-config-daemon logs on the stuck node by running the following command:
    ```terminal
    $ oc logs -n openshift-machine-config-operator <machine_config_daemon_pod>
    ```