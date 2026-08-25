{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preventing workload updates during a Control Plane Only update {id="virt-preventing-workload-updates-during-control-plane-only-update_{{ context }}"}

When updating between Extended Update Support (EUS) versions, temporarily disable automatic workload updates. This prevents {{ VirtProductName }} from migrating or evicting virtual machines during the upgrade. {._abstract}


:::important

In {{ product_title }} 4.16, the underlying {{ op_system_first }} upgraded to version 9.4 of {{ op_system_base_full }}. All `virt-launcher` pods in the cluster must use the same {{ op_system_base }} version.

After upgrading to {{ product_title }} 4.16, re-enable workload updates in {{ VirtProductName }}. This allows `virt-launcher` pods to update. Before upgrading to the next {{ product_title }} version, verify that all VMIs use up-to-date workloads:

```terminal
$ oc get kv kubevirt-kubevirt-hyperconverged -o json -n openshift-cnv | jq .status.outdatedVirtualMachineInstanceWorkloads
```

If the command returns a value greater than `0`, list VMIs with outdated `virt-launcher` pods and start live migration:

```terminal
$ oc get vmi -l kubevirt.io/outdatedLauncherImage --all-namespaces
```

For supported {{ product_title }} releases and their {{ op_system_base }} versions, see [{{ op_system_base }} Versions Utilized by {{ op_system }} and {{ product_title }}](https://access.redhat.com/articles/6907891).

:::


**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You are running an EUS version of {{ product_title }} and plan to update to the next EUS version.
*   You have not yet updated to the intermediate odd-numbered minor version.
*   You paused the worker nodes' machine config pools as described in the {{ product_title }} documentation.
*   Use the default **Automatic** approval strategy. If you use the **Manual** approval strategy, you must approve all pending updates in the web console. For more details, see "Manually approving a pending Operator update".

**Procedure**

1.  Run the following command and record the `workloadUpdateMethods` value:
    ```terminal {minja}
    $ oc get kv kubevirt-kubevirt-hyperconverged \
      -n {{ CNVNamespace }} -o jsonpath='{.spec.workloadUpdateStrategy.workloadUpdateMethods}'
    ```
1.  Disable workload update methods by running the following command:
    ```terminal {minja}
    $ oc patch {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }} \
      --type json -p '[{"op":"replace","path":"/spec/workloadUpdateStrategy/workloadUpdateMethods", "value":[]}]'
    ```
1.  Ensure that the `HyperConverged` Operator is `Upgradeable`:
    ```terminal {minja}
    $ oc get {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }} -o json | jq ".status.conditions"
    ```
1.  Update your cluster from the source EUS version to the next minor version of {{ product_title }}:
    ```terminal
    $ oc adm upgrade
    ```
1.  Verify the current cluster version:
    ```terminal
    $ oc get clusterversion
    ```

    :::note

    Updating {{ product_title }} to the next version is a prerequisite for updating {{ VirtProductName }}. For more details, see the "Updating clusters" section of the {{ product_title }} documentation.
    
    :::

1.  Update {{ VirtProductName }}.
    *   With the default **Automatic** approval strategy, {{ VirtProductName }} automatically updates after the {{ product_title }} update completes.
    *   If you use the **Manual** approval strategy, approve the pending update in the web console.
1.  Monitor the {{ VirtProductName }} update:
    ```terminal {minja}
    $ oc get csv -n {{ CNVNamespace }}
    ```
1.  Confirm that {{ VirtProductName }} updated to the latest z-stream release of the intermediate version:
    ```terminal {minja}
    $ oc get {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }} -o json | jq ".status.versions"
    ```
1.  Wait until the `HyperConverged` Operator again reports the `Upgradeable` condition.
1.  Update {{ product_title }} to the target EUS version.
1.  Verify the cluster version:
    ```terminal
    $ oc get clusterversion
    ```
1.  Update {{ VirtProductName }} to the target EUS version.
    *   With the default **Automatic** approval strategy, {{ VirtProductName }} updates automatically.
    *   If you use the **Manual** approval strategy, approve the pending update in the web console.
1.  Monitor the update:
    ```terminal {minja}
    $ oc get csv -n {{ CNVNamespace }}
    ```

    The update completes when the `VERSION` field matches the target EUS version and the `PHASE` field reads `Succeeded`.
1.  Restore the `workloadUpdateMethods` configuration recorded in step 1:
    ```terminal {minja}
    $ oc patch {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }} --type json -p \
    "[{\"op\":\"add\",\"path\":\"/spec/workloadUpdateStrategy/workloadUpdateMethods\", \"value\":{{ WorkloadUpdateMethodConfig }}}]"
    ```

**Verification**

*   Check the status of VM migrations:
    ```terminal
    $ oc get vmim -A
    ```

**Next steps**

*   Unpause the machine config pools for each compute node.