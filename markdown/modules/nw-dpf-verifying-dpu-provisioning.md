{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verify DPU provisioning {id="nw-dpf-verifying-dpu-provisioning_{{ context }}"}

After worker nodes are labeled for the DPU `MachineConfigPool`, the `DPUSet` controller automatically detects nodes with the `dpu-enabled` label, creates a `DPU` object for each node, and starts the provisioning process.
You can monitor the provisioning stages to verify progress. {._abstract}

**Prerequisites**

*   You have access to the management cluster as a user with the `cluster-admin` role.
*   You have installed the `oc` CLI.
*   Worker nodes are labeled with `node-role.kubernetes.io/worker-dpu=""`.

**Procedure**

1.  Watch for `DPU` object creation:
    ```terminal
    $ oc get dpu -n dpf-operator-system -w
    ```

    The `DPU` objects progress through the following provisioning stages:

    `Initializing`
    :   The `DPU` object is created.

    `OS Installing`
    :   The BFB installation is in progress.

    `Rebooting`
    :   The host and DPU are resetting.

    `DPU Cluster Config`
    :   The DPU Kubernetes node join procedure is in progress. Manual CSR approval is required during this stage.

    `Host Network Configuration`
    :   Networking configuration adjustments are applied on the host.

    `Ready`
    :   The DPU is successfully provisioned and ready to use.

    `Error`
    :   Provisioning failed. Check events and conditions for details.

    :::important

    When the provisioning stage reaches `DPU Cluster Config`, proceed to "Configure authorization for the hosted cluster" and "Approve DPU node CSRs" to complete the DPU node join process.
    
    :::

1.  Monitor detailed provisioning progress:
    ```terminal
    $ oc -n dpf-operator-system exec deploy/dpf-operator-controller-manager -- /dpfctl describe dpudeployments
    ```
1.  Optional: View detailed status for a specific `DPU` object:
    ```terminal
    $ oc describe dpu -n dpf-operator-system <dpu_name>
    ```

    Replace `<dpu_name>` with the name of the `DPU` resource
1.  Optional: Follow the provisioning logs for a specific DPU:
    ```terminal
    $ oc logs -n dpf-operator-system -l dpf.nvidia.com/dpu=<dpu_name> -f
    ```