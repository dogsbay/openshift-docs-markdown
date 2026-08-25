{% if context == "static-key" %}
{%- set static_key = true -%}
{%- set title = "Adding a key" -%}
{% endif %}
{% if context == "dynamic-key" %}
{%- set dynamic_key = true -%}
{%- set title = "Enabling dynamic key injection" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# {{ title }} when creating a VM from a template {id="virt-adding-key-creating-vm-template_{{ context }}"}

{% if static_key %}
You can add a statically managed public SSH key when you create a virtual machine (VM) by using the {{ product_title }} web console. The key is added to the VM as a cloud-init data source at first boot. This method does not affect cloud-init user data. {._abstract}

Optional: You can add a key to a project. Afterwards, this key is added automatically to VMs that you create in the project.
{% endif %}
{% if dynamic_key %}
You can enable dynamic public SSH key injection when you create a virtual machine (VM) from a template by using the {{ product_title }} web console. Then, you can update the key at runtime. {._abstract}


:::note

Only {{ op_system_base_full }} 9 supports dynamic key injection.

:::


The key is added to the VM by the QEMU guest agent, which is installed with {{ op_system_base }} 9.
{% endif %}

**Prerequisites**

*   You generated an SSH key pair by running the `ssh-keygen` command.

**Procedure**

1.  Navigate to **Virtualization** -> **Catalog** in the web console.
{%- if dynamic_key %}
1.  Click the **Red Hat Enterprise Linux 9 VM** tile.
{% endif %}
{% if static_key %}
1.  Click a template tile.

    The guest operating system must support configuration from a cloud-init data source.
{%- endif %}
1.  Click **Customize VirtualMachine**.
1.  Click **Next**.
1.  Click the **Scripts** tab.
1.  If you have not already added a public SSH key to your project, click the edit icon beside **Authorized SSH key** and select one of the following options:
    *   **Use existing**: Select a secret from the secrets list.
    *   **Add new**:
        1.  Browse to the SSH key file or paste the file in the key field.
        1.  Enter the secret name.
        1.  Optional: Select **Automatically apply this key to any new VirtualMachine you create in this project**.
{%- if dynamic_key %}
1.  Set **Dynamic SSH key injection** to on.
{%- endif %}
1.  Click **Save**.
1.  Click **Create VirtualMachine**.

    The **VirtualMachine details** page displays the progress of the VM creation.

**Verification**

*   Click the **Scripts** tab on the **Configuration** tab.

    The secret name is displayed in the **Authorized SSH key** section.

{% if context == "static-key" %}
{%- set static_key = false -%}
{% endif %}
{% if context == "dynamic-key" %}
{%- set dynamic_key = false -%}
{% endif %}