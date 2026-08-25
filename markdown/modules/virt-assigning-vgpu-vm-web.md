{%- set _mod_docs_content_type = "PROCEDURE" %}
# Assigning a vGPU to a VM by using the web console {id="virt-assigning-vgpu-vm-web_{{ context }}"}

You can assign virtual GPUs to virtual machines by using the {{ product_title }} web console. {._abstract}


:::note

You can add hardware devices to virtual machines created from customized templates or a YAML file. You cannot add devices to pre-supplied boot source templates for specific operating systems.

:::


**Prerequisites**

*   The vGPU is configured as a mediated device in your cluster.
    *   To view the devices that are connected to your cluster, click **Compute** -> **Hardware Devices** from the side menu.
*   The VM is stopped.

**Procedure**

1.  In the {{ product_title }} web console, click **Virtualization** -> **VirtualMachines** from the side menu.
1.  Select the VM that you want to assign the device to.
1.  On the **Details** tab, click **GPU devices**.
1.  Click **Add GPU device**.
1.  Enter an identifying value in the **Name** field.
1.  From the **Device name** list, select the device that you want to add to the VM.
1.  Click **Save**.

**Verification**

*   To confirm that the devices were added to the VM, click the **YAML** tab and review the `VirtualMachine` configuration. Mediated devices are added to the `spec.domain.devices` stanza.