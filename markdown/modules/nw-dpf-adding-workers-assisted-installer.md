{%- set _mod_docs_content_type = "PROCEDURE" %}
# Add worker nodes by using the Assisted Installer {id="nw-dpf-adding-workers-assisted-installer_{{ context }}"}

You can add DPU-equipped worker nodes to the management cluster by using the Assisted Installer on the {{ hybrid_console }}. {._abstract}

**Prerequisites**

*   You have access to the management cluster as a user with the `cluster-admin` role.
*   The management cluster is registered on the {{ hybrid_console }}.
*   You have iDRAC or BMC access to the worker node.
*   The worker node meets the hardware and network prerequisites. For details, see "DPF hardware requirements" and "DPF network infrastructure requirements".

**Procedure**

1.  Log in to the [{{ hybrid_console }}](https://console.redhat.com/openshift).
1.  Select your cluster from the cluster list.
1.  Click **Add hosts**.
1.  Click **Download Discovery ISO** and save the discovery ISO to your local system.
1.  Upload the ISO to the worker node by using the iDRAC or BMC interface and boot the server from the ISO.
1.  Wait for the node to boot from the discovery ISO.
1.  After the node is discovered, note the DPU interface name from the Assisted Installer interface.
This value is used for the `DPU_P0` environment variable.
1.  Click **Install ready host** to start the installation and monitor the installation progress.