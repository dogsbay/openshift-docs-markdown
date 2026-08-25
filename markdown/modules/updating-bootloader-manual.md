{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating the boot loader manually {id="updating-bootloader-manual_{{ context }}"}

You can manually inspect the status of the system and update the boot loader by using the `bootupctl` command-line tool. {._abstract}

**Procedure**

1.  Inspect the system status by running the following command:
    ```terminal
    # bootupctl status
    ```
    ```terminal title="Example output for x86_64"
    Component EFI
      Installed: grub2-efi-x64-1:2.04-31.el8_4.1.x86_64,shim-x64-15-8.el8_1.x86_64
      Update: At latest version
    ```
{% if not openshift_origin %}
    ```terminal title="Example output for aarch64"
    Component EFI
      Installed: grub2-efi-aa64-1:2.02-99.el8_4.1.aarch64,shim-aa64-15.4-2.el8_1.aarch64
      Update: At latest version
    ```
{% endif %}

1.  {{ product_title }} clusters initially installed on version 4.4 and older require an explicit adoption phase.

    If the system status is `Adoptable`, perform the adoption by running the following command:
    ```terminal
    # bootupctl adopt-and-update
    ```
    ```terminal title="Example output"
    Updated: grub2-efi-x64-1:2.04-31.el8_4.1.x86_64,shim-x64-15-8.el8_1.x86_64
    ```
1.  If an update is available, apply the update so that the changes take effect on the next reboot by running the following command:
    ```terminal
    # bootupctl update
    ```
    ```terminal title="Example output"
    Updated: grub2-efi-x64-1:2.04-31.el8_4.1.x86_64,shim-x64-15-8.el8_1.x86_64
    ```