{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshoot DPU provisioning failures {id="nw-dpf-troubleshooting-dpu-provisioning_{{ context }}"}

You can diagnose and resolve DPU provisioning failures, including BFB download failures, hardware detection problems, and provisioning timeouts. {._abstract}

**Prerequisites**

*   You have access to the management cluster as a user with the `cluster-admin` role.
*   You have added DPU-equipped worker nodes to the cluster.

**Procedure**

1.  Verify that the BFB image is accessible by running the following command:
    ```terminal
    $ oc get bfb -n dpf-operator-system bf-bundle -o yaml
    ```

    Check the `status.conditions` field for download progress and any error messages.
1.  If the BFB download fails, verify that the image URL is reachable by running the following command, replacing `$BFB_URL` with the image URL:
    ```terminal
    $ curl -I $BFB_URL
    ```

    Ensure the response returns a `200 OK` status code.
1.  Check that Node Feature Discovery (NFD) has detected DPUs on the worker nodes:
    ```terminal
    $ oc get nodes -o json | jq -r '.items[] | select(.metadata.labels."feature.node.kubernetes.io/dpu-enabled") | .metadata.name'
    ```

    If no nodes are returned, verify that NFD is running and that the `NodeFeatureRule` objects are applied:
    ```terminal
    $ oc get pods -n openshift-nfd
    ```
    ```terminal
    $ oc get nodefeaturerule -n openshift-nfd
    ```
1.  Monitor DPU provisioning progress by running the following command:
    ```terminal
    $ oc get dpu -n dpf-operator-system -w
    ```

    Wait for each DPU to progress from `Pending` to `Provisioning` to `Ready`.
1.  If provisioning fails, check the DPF Operator logs for error details:
    ```terminal
    $ oc logs -n dpf-operator-system -l app.kubernetes.io/name=dpf-operator -c manager --tail=50
    ```

    Look for the following types of errors in the log output:
    *   BFB extraction failures
    *   Network connectivity issues
    *   Hardware compatibility errors
    *   Provisioning timeout errors
1.  Verify that the DPU hardware is detected on the worker node by opening a debug shell:
    ```terminal
    $ oc debug node/<worker-node-name>
    ```

    Inside the debug shell, run the following commands:
    ```terminal
    sh-5.1# chroot /host
    ```
    ```terminal
    sh-5.1# lspci | grep -i mellanox
    ```

    Confirm that a BlueField device is listed in the output.
1.  Check the DPU firmware version to ensure compatibility with the DOCA Platform Framework:
    ```terminal
    sh-5.1# mlxfwmanager --query
    ```

    Verify that the firmware version meets the minimum requirements for your DPF release.

**Troubleshooting**

**BFB download issues**: Verify network connectivity from the cluster to the image registry, check for firewall or proxy restrictions, and ensure that sufficient disk space is available on the node.

**Hardware detection failures**: Verify that the DPU is properly seated in the PCIe slot, check the server BIOS for PCIe configuration settings, and ensure that the DPU is not disabled in the BIOS.

**Provisioning timeouts**: Increase timeout values in the DPF configuration, verify that the DPU has sufficient power and cooling, and check the server hardware event logs for errors.

**Network configuration issues**: Verify VLAN and network segmentation settings, ensure that the required ports are open between the DPU and the management cluster, and check MTU settings for consistency across the environment.