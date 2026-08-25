{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing the wasp-agent component {id="virt-removing-wasp-agent_{{ context }}"}

If you no longer need memory overcommitment, you can remove the `wasp-agent` component and associated resources from your cluster. {._abstract}

**Prerequisites**

*   You have logged in to the cluster with the `cluster-admin` role.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Revert the memory overcommitment configuration by running the following command:
    ```terminal {minja}
    $ oc patch -n {{ CNVNamespace }} {{ HCOCliKind }} kubevirt-hyperconverged \
      --type='json' \
      -p='[{"op": "remove", "path": "/spec/higherWorkloadDensity"}]'
    ```
1.  Delete the `MachineConfig` that provisions swap memory by running the following command:
    ```terminal
    $ oc delete machineconfig 90-worker-swap
    ```

**Verification**

*   Confirm that swap is no longer enabled on a node, by running the following command and observing the output:
    ```terminal
    $ oc debug node/<selected_node> -- free -m
    ```

    Ensure that the `Swap:` row shows `0` or that no swap space shows as provisioned.