{% if context == "virt-creating-vms-from-instance-types" %}
{%- set virt_create_vms = true -%}
{%- set title = "Creating a VM" -%}
{% endif %}
{% if context == "static-key" %}
{%- set static_key = true -%}
{%- set title = "Adding a key when creating a VM" -%}
{% endif %}
{% if context == "dynamic-key" %}
{%- set dynamic_key = true -%}
{%- set title = "Enabling dynamic key injection when creating a VM" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a VM from an instance type by using the web console {id="virt-creating-vm-instancetype_{{ context }}"}

{% if virt_create_vms %}
You can create a virtual machine (VM) from an instance type by using the {{ product_title }} web console. You can also use the web console to create a VM by copying an existing snapshot or to clone a VM. {._abstract}

You can create a VM from a list of available bootable volumes. You can add Linux- or Windows-based volumes to the list.
{% endif %}

{% if static_key %}
You can add a statically managed SSH key when you create a virtual machine (VM) from an instance type by using the {{ product_title }} web console. The key is added to the VM as a cloud-init data source at first boot. This method does not affect cloud-init user data.
{% endif %}
{% if dynamic_key %}
You can enable dynamic SSH key injection when you create a virtual machine (VM) from an instance type by using the {{ product_title }} web console. Then, you can add or revoke the key at runtime. {._abstract}


:::note

Only {{ op_system_base_full }} 9 supports dynamic key injection.

:::


The key is added to the VM by the QEMU guest agent, which is installed with {{ op_system_base }} 9.
{% endif %}

**Procedure**

1.  In the web console, navigate to **Virtualization** -> **Catalog**.

    The **InstanceTypes** tab opens by default.
{%- if not openshift_dedicated %}

    :::note

    When configuring a downward-metrics device on an {{ ibm_z_name }} system that uses a VM preference, set the `spec.preference.name` value to `rhel.9.s390x` or another available preference with the format `*.s390x`.
    
    :::

{%- endif %}
1.  Heterogeneous clusters only: To filter the bootable volumes using the options provided, click **Architecture**.
1.  Select either of the following options:
    *   Select a suitable bootable volume from the list. If the list is truncated, click the **Show all** button to display the entire list.

        :::note

        The bootable volume table lists only those volumes in the `openshift-virtualization-os-images` namespace that have the `instancetype.kubevirt.io/default-preference` label.
        
        :::

        *   Optional: Click the star icon to designate a bootable volume as a favorite. Starred bootable volumes appear first in the volume list.
    *   Click **Add volume** to upload a new volume or to use an existing persistent volume claim (PVC), a volume snapshot, or a `containerDisk` volume. Click **Save**.

        Logos of operating systems that are not available in the cluster are shown at the bottom of the list. You can add a volume for the required operating system by clicking the **Add volume** link.

        In addition, there is a link to the **Create a Windows bootable volume** quick start. The same link appears in a popover if you hover the pointer over the question mark icon next to the _Select volume to boot from_ line.

        Immediately after you install the environment or when the environment is disconnected, the list of volumes to boot from is empty. In that case, three operating system logos are displayed: Windows, {{ op_system_base }}, and Linux. You can add a new volume that meets your requirements by clicking the **Add volume** button.

{% if virt_create_vms %}
1.  Click an instance type tile and select the resource size appropriate for your workload. You can select huge pages for Red&#160;Hat-provided instance types of the **M** and **CX** series. Huge page options are identified by names that end with **1gi**.
{% endif %}
{% if dynamic_key %}
1.  Click the **Red Hat Enterprise Linux 9 VM** tile.
{% endif %}
{% if virt_create_vms %}
1.  Optional: Choose the virtual machine details, including the VM’s name, that apply to the volume you are booting from:
    {% endif %}
    {% if virt_create_vms %}
    *   For a Linux-based volume, follow these steps to configure SSH:
        {% endif %}
        1.  If you have not already added a public SSH key to your project, click the edit icon beside **Authorized SSH key** in the **VirtualMachine details** section.
        1.  Select one of the following options:
            *   **Use existing**: Select a secret from the secrets list.
            *   **Add new**: Follow these steps:
                1.  Browse to the public SSH key file or paste the file in the key field.
                1.  Enter the secret name.
                1.  Optional: Select **Automatically apply this key to any new VirtualMachine you create in this project**.
        1.  Click **Save**.

{% if virt_create_vms %}
    *   For a Windows volume, follow either of these set of steps to configure sysprep options:
        *   If you have not already added sysprep options for the Windows volume, follow these steps:
            1.  Click the edit icon beside **Sysprep** in the **VirtualMachine details** section.
            1.  Add the **Autoattend.xml** answer file.
            1.  Add the **Unattend.xml** answer file.
            1.  Click **Save**.
        *   If you want to use existing sysprep options for the Windows volume, follow these steps:
            1.  Click **Attach existing sysprep**.
            1.  Enter the name of the existing sysprep **Unattend.xml** answer file.
            1.  Click **Save**.
{% endif %}
{% if dynamic_key %}
1.  Set **Dynamic SSH key injection** in the **VirtualMachine details** section to on.
{%- endif %}
1.  Optional: If you are creating a Windows VM, you can mount a Windows driver disk:
    1.  Click the **Customize VirtualMachine** button.
    1.  On the **VirtualMachine details** page, click **Storage**.
    1.  Select the **Mount Windows drivers disk** checkbox.
1.  Optional: Click **View YAML & CLI** to view the YAML file. Click **CLI** to view the CLI commands. You can also download or copy either the YAML file contents or the CLI commands.
1.  Click **Create VirtualMachine**.

**Result**

After the VM is created, you can monitor the status on the **VirtualMachine details** page.

{% if context == "virt-creating-vms" %}
{%- set virt_create_vms = false -%}
{% endif %}
{% if context == "static-key" %}
{%- set static_key = false -%}
{% endif %}
{% if context == "dynamic-key" %}
{%- set dynamic_key = false -%}
{% endif %}