{%- set _mod_docs_content_type = "PROCEDURE" %}
# Bootstrap VM cannot boot up the cluster nodes {id="ipi-install-troubleshooting-bootstrap-vm-cannot-boot_{{ context }}"}

During the deployment, it is possible for the bootstrap VM to fail to boot the cluster nodes, which prevents the VM from provisioning the nodes with the {{ op_system }} image. This scenario can arise due to:

*   A problem with the `install-config.yaml` file.
*   Issues with out-of-band network access when using the baremetal network.

To verify the issue, there are three containers related to `ironic`:

*   `ironic`
*   `ironic-inspector`

**Procedure**

1.  Log in to the bootstrap VM:
    ```terminal
    $ ssh core@172.22.0.2
    ```
1.  To check the container logs, execute the following:
    ```terminal
    [core@localhost ~]$ sudo podman logs -f <container_name>
    ```

    Replace `<container_name>` with one of `ironic` or `ironic-inspector`. If you encounter an issue where the control plane nodes are not booting up from PXE, check the `ironic` pod. The `ironic` pod contains information about the attempt to boot the cluster nodes, because it attempts to log in to the node over IPMI.

**Results**

The cluster nodes might be in the `ON` state when deployment started.

**Troubleshooting**

Power off the {{ product_title }} cluster nodes before you begin the
installation over IPMI:
```terminal
$ ipmitool -I lanplus -U root -P <password> -H <out_of_band_ip> power off
```