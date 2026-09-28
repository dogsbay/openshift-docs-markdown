{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding a static SSH key when creating a VM by using the web console {id="virt-adding-static-key-creating-vm-web_{{ context }}"}

You can add a statically managed public SSH key when you create a virtual machine (VM) by using the web console creation wizard. The key is added to the VM as a cloud-init data source at first boot. This method does not affect cloud-init user data. {._abstract}

You can also save the key to the project as a secret so that it is added automatically to the VMs that you create in the project.

**Prerequisites**

*   You generated an SSH key pair by using the `ssh-keygen` command.

**Procedure**

1.  In the {{ product_title }} web console, start creating a VM by using the creation wizard until you reach the **Customization** page.
1.  Click the **SSH** tab.
1.  Beside **Public SSH key**, click **Edit**.
1.  Select one of the following options:
    *   **Use existing**: Select a secret from the secrets list.
    *   **Add new**: Add a key by performing the following steps:
        1.  Browse to the public SSH key file or paste the file in the key field.
        1.  Enter the secret name.
        1.  Optional: Select **Automatically apply this key to any new VirtualMachine you create in this project**.
1.  Click **Save**.
1.  Complete the remaining wizard steps to create the VM.