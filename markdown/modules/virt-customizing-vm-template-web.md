{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing a deprecated designation from a customized VM template by using the web console {id="virt-customizing-vm-template-web_{{ context }}"}

You can customize an existing virtual machine (VM) template before you start the VM, by modifying the VM or template parameters, such as data sources, cloud-init, or SSH keys. {._abstract}


:::note

If you customize a template by copying it and including all of its labels and annotations, the customized template is marked as deprecated when a new version of the Scheduling, Scale, and Performance (SSP) Operator is deployed. You can remove the deprecated designation from the customized template.

:::


**Procedure**

1.  Navigate to **Virtualization** → **Templates** in the web console.
1.  From the list of VM templates, click the template marked as deprecated.
1.  Click **Edit** next to the pencil icon beside **Labels**.
1.  Remove the following two labels:
    *   `template.kubevirt.io/type: "base"`
    *   `template.kubevirt.io/version: "version"`
1.  Click **Save**.
1.  Click the pencil icon beside the number of existing **Annotations**.
1.  Remove the following annotation:
    *   `template.kubevirt.io/deprecated`
1.  Click **Save**.