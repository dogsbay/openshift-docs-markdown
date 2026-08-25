{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ op_system }} using {{ ibm_title }} Secure Execution {id="installing-rhcos-using-ibm-secure-execution_{{ context }}"}

You can install {{ op_system }} using {{ ibm_name }} Secure Execution to run nodes as protected guests, isolating workloads from the host system. Before you begin, you must prepare the underlying infrastructure and verify hardware and software prerequisites. {._abstract}

**Prerequisites**

*   {{ ibm_name }} z15 or later, or {{ ibm_linuxone_name }} III or later.
*   {{ op_system_base_full }} 8 or later.
*   You have a bootstrap Ignition file. The file is not protected, enabling others to view and edit it.
*   You have verified that the boot image has not been altered after installation.
*   You must run all your nodes as {{ ibm_name }} Secure Execution guests.

**Procedure**

1.  Prepare your {{ op_system_base }} KVM host to support {{ ibm_name }} Secure Execution.
    *   By default, KVM hosts do not support guests in {{ ibm_name }} Secure Execution mode. To support guests in {{ ibm_name }} Secure Execution mode, KVM hosts must boot in LPAR mode with the kernel parameter specification `prot_virt=1`. To enable `prot_virt=1` on {{ op_system_base }} 8, follow these steps:
        1.  Navigate to `/boot/loader/entries/` to modify your boot loader configuration file `*.conf`.
        1.  Add the kernel command line parameter `prot_virt=1`.
        1.  Run the `zipl` command and reboot your system.

            KVM hosts that successfully start with support for {{ ibm_name }} Secure Execution for Linux issue the following kernel message:
            ```terminal
            prot_virt: Reserving <amount>MB as ultravisor base storage.
            ```
        1.  To verify that the KVM host now supports {{ ibm_name }} Secure Execution, run the following command:
            ```terminal
            # cat /sys/firmware/uv/prot_virt_host
            ```

            For example:
            ```terminal
            1
            ```

            The value of this attribute is 1 for Linux instances that detect their environment as consistent with that of a secure host. For other instances, the value is 0.
1.  Add your host keys to the KVM guest via Ignition.

    During the first boot, {{ op_system }} looks for your host keys to re-encrypt itself with them. {{ op_system }} searches for files starting with `ibm-z-hostkey-` in the `/etc/se-hostkeys` directory. All host keys, for each machine the cluster is running on, must be loaded into the directory by the administrator. After first boot, you cannot run the VM on any other machines.

    :::note

    You need to prepare your Ignition file on a safe system. For example, another {{ ibm_name }} Secure Execution guest.
    
    :::


    For example:
    ```terminal
    {
      "ignition": { "version": "3.0.0" },
      "storage": {
        "files": [
          {
            "path": "/etc/se-hostkeys/ibm-z-hostkey-<your-hostkey>.crt",
            "contents": {
              "source": "<base64_data_uri>"
            },
            "mode": 420
          },
          {
            "path": "/etc/se-hostkeys/ibm-z-hostkey-<your-hostkey>.crt",
            "contents": {
              "source": "<base64_data_uri>"
            },
            "mode": 420
          }
        ]
      }
    }
    ```
    ```

    Replace `<base64_data_uri>` with an Ignition data URI containing the Base64 encoded host key document.

    :::note

    You can add as many host keys as needed if you want your node to be able to run on multiple {{ ibm_z_name }} machines.
    
    :::

1.  To generate the Base64 encoded string, run the following command:
    ```terminal
    base64 <your-hostkey>.crt
    ```

    Compared to guests not running {{ ibm_name }} Secure Execution, the first boot of the machine is longer because the entire image is encrypted with a randomly generated LUKS passphrase before the Ignition phase.
1.  Add Ignition protection

    To protect the secrets that are stored in the Ignition config file from being read or even modified, you must encrypt the Ignition config file.

    :::note

    To achieve the desired security, Ignition logging and local login are disabled by default when running {{ ibm_name }} Secure Execution.
    
    :::

    1.  Fetch the public GPG key for the `secex-qemu.qcow2` image and encrypt the Ignition config with the key by running the following command:
        ```terminal
        gpg --recipient-file /path/to/ignition.gpg.pub --yes --output /path/to/config.ign.gpg --verbose --armor --encrypt /path/to/config.ign
        ```
1.  Follow the fast-track installation of {{ op_system }} to install nodes by using the {{ ibm_name }} Secure Execution QCOW image.

    :::note

    Before you start the VM, replace `serial=ignition` with `serial=ignition_crypted`, and add the `launchSecurity` parameter.
    
    :::


**Verification**

When you have completed the fast-track installation of {{ op_system }} and Ignition runs at the first boot, verify if decryption is successful.

*   If the decryption is successful, you can expect an output similar to the following example:
    ```terminal
    [    2.801433] systemd[1]: Starting coreos-ignition-setup-user.service - CoreOS Ignition User Config Setup...

    [    2.803959] coreos-secex-ignition-decrypt[731]: gpg: key <key_name>: public key "Secure Execution (secex) 38.20230323.dev.0" imported
    [    2.808874] coreos-secex-ignition-decrypt[740]: gpg: encrypted with rsa4096 key, ID <key_name>, created <yyyy-mm-dd>
    [  OK  ] Finished coreos-secex-igni…S Secex Ignition Config Decryptor.
    ```
*   If the decryption fails, you can expect an output similar to the following example:
    ```terminal
    Starting coreos-ignition-s…reOS Ignition User Config Setup...
    [    2.863675] coreos-secex-ignition-decrypt[729]: gpg: key <key_name>: public key "Secure Execution (secex) 38.20230323.dev.0" imported
    [    2.869178] coreos-secex-ignition-decrypt[738]: gpg: encrypted with RSA key, ID <key_name>
    [    2.870347] coreos-secex-ignition-decrypt[738]: gpg: public key decryption failed: No secret key
    [    2.870371] coreos-secex-ignition-decrypt[738]: gpg: decryption failed: No secret key
    ```