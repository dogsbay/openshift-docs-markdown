{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ sno }} with the Assisted Installer {id="install-sno-installing-with-the-assisted-installer_{{ context }}"}

Use the Assisted Installer to install the single-node cluster. {._abstract}

**Prerequisites**

*   Ensure that the boot drive order in the server BIOS settings defaults to booting the server from the target installation disk.

**Procedure**

1.  Attach the discovery ISO image to the target host.
1.  Boot the server from the discovery ISO image. The discovery ISO image writes the system configuration to the target installation disk and automatically triggers a server restart.
1.  On the administration host, return to the browser. Wait for the host to appear in the list of discovered hosts. If necessary, reload the [**Assisted Clusters**](https://console.redhat.com/openshift/assisted-installer/clusters) page and select the cluster name.
1.  Complete the install wizard steps. Add networking details, including a subnet from the available subnets. Add the SSH public key if necessary.
1.  Monitor the installation’s progress. Watch the cluster events. After the installation process finishes writing the operating system image to the server’s hard disk, the server restarts.
1.  Optional: Remove the discovery ISO image.

    The server restarts several times automatically, deploying the control plane.