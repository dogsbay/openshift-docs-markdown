{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating and booting the agent image {id="installing-ocp-agent-boot_{{ context }}"}

After you have prepared the configuration inputs for your installation, create the ISO image and boot it on your machines. {._abstract}

**Prerequisites**

*   If you plan to boot the agent image from a USB drive, you have installed the `syslinux` package.

**Procedure**

1.  Create the agent image by running the following command:
    ```terminal
    $ openshift-install --dir <install_directory> agent create image
    ```

    :::note

    {{ op_system_first }} supports multipathing on the primary disk, allowing stronger resilience to hardware failure to achieve higher host availability. Multipathing is enabled by default in the agent ISO image, with a default `/etc/multipath.conf` configuration.
    
    :::

1.  If you plan to boot the ISO image from a USB drive, add a master boot record to the image by running the following command:
    ```terminal
    $ isohybrid --uefi <agent_iso_image>
    ```
    ```terminal title="Example command"
    $ isohybrid --uefi agent.x86_64.iso
    ```
1.  Boot the `agent.x86_64.iso`, `agent.aarch64.iso`, or `agent.s390x.iso` image on the bare-metal machines.