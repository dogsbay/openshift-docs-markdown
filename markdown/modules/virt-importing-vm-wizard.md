# Importing a virtual machine with the VM Import wizard {id="virt-importing-vm-wizard_{{ context }}"}

You can import a single virtual machine with the VM Import wizard.

{% if virt_importing_vmware_vm %}
You can also import a VM template. If you import a VM template, {{ VirtProductName }} creates a virtual machine based on the template.

**Prerequisites**

*   You must have admin user privileges.
*   The VMware Virtual Disk Development Kit (VDDK) image must be in an image registry that is accessible to your {{ VirtProductName }} environment.
*   The VDDK image must be added to the `spec.vddkInitImage` field of the `HyperConverged` custom resource (CR).
*   The VM must be powered off.
*   Virtual disks must be connected to IDE or SCSI controllers. If virtual disks are connected to a SATA controller, you can change them to IDE controllers and then migrate the VM.
*   The {{ VirtProductName }} local and shared persistent storage classes must support VM import.
*   The {{ VirtProductName }} storage must be large enough to accommodate the virtual disk.

    :::warning

    If you are using Ceph RBD block-mode volumes, the storage must be large enough to accommodate the virtual disk. If the disk is too large for the available storage, the import process fails and the PV that is used to copy the virtual disk is not released. You will not be able to import another virtual machine or to clean up the storage because there are insufficient resources to support object deletion. To resolve this situation, you must add more object storage devices to the storage back end.
    
    :::

*   The {{ VirtProductName }} egress network policy must allow the following traffic:
    |     |     |     |
    | --- | --- | --- |
    | Destination | Protocol | Port |
    | VMware ESXi hosts | TCP | 443 |
    | VMware ESXi hosts | TCP | 902 |
    | VMware vCenter | TCP | 5840 |

{% endif %}

**Procedure**

1.  In the web console, click **Workloads** → **Virtual Machines**.
1.  Click **Create Virtual Machine** and select **Import with Wizard**.
{%- if virt_importing_vmware_vm %}
1.  Select **VMware** from the **Provider** list.
1.  Select **Connect to New Instance** or a saved vCenter instance.
    *   If you select **Connect to New Instance**, enter the **vCenter hostname**, **Username**, and **Password**.
    *   If you select a saved vCenter instance, the wizard connects to the vCenter instance using the saved credentials.
1.  Click **Check and Save** and wait for the connection to complete.

    :::note

    The connection details are stored in a secret. If you add a provider with an incorrect hostname, user name, or password, click **Workloads** → **Secrets** and delete the provider secret.
    
    :::

1.  Select a virtual machine or a template.
{%- endif %}
{%- if virt_importing_rhv_vm %}
1.  Select **Red Hat Virtualization (RHV)** from the **Provider** list.
1.  Select **Connect to New Instance** or a saved RHV instance.
    *   If you select **Connect to New Instance**, fill in the following fields:
        *   **API URL**: For example, `https://<RHV_Manager_FQDN>/ovirt-engine/api`
        *   **CA certificate**: Click **Browse** to upload the RHV Manager CA certificate or paste the CA certificate into the field.

            View the CA certificate by running the following command:
            ```terminal
            $ openssl s_client -connect <RHV_Manager_FQDN>:443 -showcerts < /dev/null
            ```

            The CA certificate is the second certificate in the output.
        *   **Username**: RHV Manager user name, for example, `ocpadmin@internal`
        *   **Password**: RHV Manager password
    *   If you select a saved RHV instance, the wizard connects to the RHV instance using the saved credentials.
1.  Click **Check and Save** and wait for the connection to complete.

    :::note

    The connection details are stored in a secret. If you add a provider with an incorrect URL, user name, or password, click **Workloads** → **Secrets** and delete the provider secret.
    
    :::

1.  Select a cluster and a virtual machine.
{%- endif %}
1.  Click **Next**.
1.  In the **Review** screen, review your settings.
{%- if virt_importing_rhv_vm %}
1.  Optional: You can select **Start virtual machine on creation**.
{%- endif %}
1.  Click **Edit** to update the following settings:

{% if virt_importing_rhv_vm %}
    *   **General** → **Name**: The VM name is limited to 63 characters.
    *   **General** → **Description**: Optional description of the VM.
        *   **Storage Class**: Select **NFS** or **ocs-storagecluster-ceph-rbd**.

            If you select **ocs-storagecluster-ceph-rbd**, you must set the **Volume Mode** of the disk to **Block**.
        *   **Advanced** → **Volume Mode**: Select **Block**.
    *   **Advanced** → **Volume Mode**: Select **Block**.
    *   **Networking** → **Network**: You can select a network from a list of available network attachment definition objects.
{% endif %}
{% if virt_importing_vmware_vm %}
    *   **General**:
        *   **Description**
        *   **Operating System**
        *   **Flavor**
        *   **Memory**
        *   **CPUs**
        *   **Workload Profile**
    *   **Networking**:
        *   **Name**
        *   **Model**
        *   **Network**
        *   **Type**
        *   **MAC Address**
    *   **Storage**: Click the Options menu {{ kebab }} of the VM disk and select **Edit** to update the following fields:
        *   **Name**
        *   **Source**: For example, **Import Disk**.
        *   **Size**
        *   **Interface**
        *   **Storage Class**: Select **NFS** or **ocs-storagecluster-ceph-rbd (ceph-rbd)**.

            If you select **ocs-storagecluster-ceph-rbd**, you must set the **Volume Mode** of the disk to **Block**.

            Other storage classes might work, but they are not officially supported.
        *   **Advanced** → **Volume Mode**: Select **Block**.
        *   **Advanced** → **Access Mode**
    *   **Advanced** → **Cloud-init**:
        *   **Form**: Enter the **Hostname** and **Authenticated SSH Keys**.
        *   **Custom script**: Enter the `cloud-init` script in the text field.
    *   **Advanced** → **Virtual Hardware**: You can attach a virtual CD-ROM to the imported virtual machine.
{%- endif %}
1.  Click **Import** or **Review and Import**, if you have edited the import settings.

    A **Successfully created virtual machine** message and a list of resources created for the virtual machine are displayed. The virtual machine appears in **Workloads** → **Virtual Machines**.