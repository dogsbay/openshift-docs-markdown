{%- set _mod_docs_content_type = "REFERENCE" %}
# DPU provisioning does not start {id="nw-dpf-ts-dpu-provisioning_{{ context }}"}

If DPU provisioning does not start immediately after you add worker nodes to the management cluster, verify that certificate signing requests (CSRs), controller pods, Node Feature Discovery (NFD) labels, and DPF resource objects are in the correct state. {._abstract}


Verify that all worker CSRs are approved
:   Run the following command to list the CSR status on the management cluster:
    ```terminal
    $ oc get csr
    ```

    Ensure that all CSRs for the worker nodes show an `Approved` status.


Verify that all DPF controller pods are running
:   Run the following command to check the status of the DPF Operator pods:
    ```terminal
    $ oc get pod -n dpf-operator-system
    ```

    Ensure that all pods are in a `Running` state.


Verify that worker nodes are labeled for DPU provisioning by NFD
:   Run the following command to confirm that the `dpu-enabled` label is present on the worker nodes:
    ```terminal
    $ oc get nodes -l feature.node.kubernetes.io/dpu-enabled=""
    ```

    The output lists the worker nodes that NFD has labeled for DPU provisioning.
    For example:
    ```terminal title="Example output"
    NAME           STATUS     ROLES    AGE   VERSION
    host-worker1   NotReady   worker   62s   v1.35.6
    host-worker2   NotReady   worker   66s   v1.35.6
    ```


Check BFB object status
:   Run the following command to verify that the BlueField Bootstream File (BFB) image is downloaded and ready:
    ```terminal
    $ oc describe bfb -n dpf-operator-system bf-bundle
    ```


Check `DPUDeployment` object status
:   Inspect the `DPUDeployment` object for information about the following resources:
    *   BFB object state
    *   `DPUServiceTemplate` objects state
    *   `DPUServiceConfiguration` objects state

    Run the following command to view the full `DPUDeployment` status:
    ```terminal
    $ oc get dpudeployments -n dpf-operator-system dpudeployment -o yaml
    ```

    Alternatively, run the following `dpfctl` command for a summarized view:
    ```terminal
    $ oc -n dpf-operator-system exec deploy/dpf-operator-controller-manager -- /dpfctl describe dpudeployments
    ```