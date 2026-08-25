{% if context == "virt-creating-vms-from-web-images" %}
{%- set url = true -%}
{%- set title_frag = "from an image on a web page" -%}
{%- set a_object = "an image" -%}
{%- set object = "image" -%}
{%- set data_source = "web page" -%}
{%- set menu_item = "URL (creates PVC)" -%}
{% endif %}
{% if context == "virt-creating-vms-from-container-disks" %}
{%- set container_disks = true -%}
{%- set title_frag = "from a container disk" -%}
{%- set a_object = "a container disk" -%}
{%- set object = "container disk" -%}
{%- set data_source = "container registry" -%}
{%- set menu_item = "Registry (creates PVC)" -%}
{% endif %}
{% if context == "virt-creating-vms-by-cloning-pvcs" %}
{%- set clone = true -%}
{%- set title_frag = "from a PVC" -%}
{%- set menu_item = "PVC (clone PVC)" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a VM {{ title_frag }} by using the web console {id="virt-creating-vm-custom-image-web_{{ context }}"}

{% if url or container_disks %}
You can create a virtual machine (VM) by importing {{ a_object }} from a {{ data_source }} by using the {{ product_title }} web console.
{% endif %}
{% if clone %}
You can create a virtual machine (VM) by cloning a persistent volume claim (PVC) by using the {{ product_title }} web console.
{% endif %} {._abstract}

**Prerequisites**

{% if url or container_disk %}
*   You must have access to the {{ data_source }} that contains the {{ object }}.
{% endif %}
{% if clone %}
*   You must have access to the namespace that contains the source PVC.
{% endif %}

**Procedure**

1.  Navigate to **Virtualization** -> **Catalog** in the web console.
1.  Click a template tile without an available boot source.
1.  Click **Customize VirtualMachine**.
1.  On the **Customize template parameters** page, expand **Storage** and select **{{ menu_item }}** from the **Disk source** list.
{%- if url %}
1.  Enter the image URL. Example: `https://access.redhat.com/downloads/content/69/ver=/rhel---7/7.9/x86_64/product-software`
{% endif %}
{% if container_disks %}
1.  Enter the container image URL. Example: `https://mirror.arizona.edu/fedora/linux/releases/38/Cloud/x86_64/images/Fedora-Cloud-Base-38-1.6.x86_64.qcow2`
{% endif %}
{% if clone %}
1.  Select the PVC project and the PVC name.
{%- endif %}
1.  Set the disk size.
1.  Click **Next**.
1.  Click **Create VirtualMachine**.

{% if context == "virt-creating-vms-from-web-images" %}
{%- set url = false -%}
{% endif %}
{% if context == "virt-creating-vms-from-container-disks" %}
{%- set container_disks = false -%}
{% endif %}
{% if context == "virt-creating-vms-by-cloning-pvcs" %}
{%- set clone = false -%}
{% endif %}