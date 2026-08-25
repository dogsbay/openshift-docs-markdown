{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring multiple I/O threads for fast storage access {id="virt-configure-multiple-iothreads_{{ context }}"}

You can improve storage performance by configuring multiple I/O threads for a virtual machine (VM) that uses fast storage, such as solid-state drive (SSD) or non-volatile memory express (NVMe). This configuration option is only available by editing YAML of the VM. {._abstract}


:::note

Multiple I/O threads are supported only when `blockMultiQueue` is enabled and the disk bus is set to `virtio`. You must set this configuration for the configuration to work correctly.

:::


**Procedure**

1.  Click **Virtualization** → **VirtualMachines** from the side menu.
1.  Select a virtual machine to open the **VirtualMachine details** page.
1.  Click the **YAML** tab to open the VM manifest.
1.  In the YAML editor, locate the `spec.template.spec.domain` section and add or modify the following fields:
    ```yaml
    domain:
      ioThreadsPolicy: supplementalPool
      ioThreads:
        supplementalPoolThreadCount: 4
      devices:
        blockMultiQueue: true
        disks:
        - name: datavolume
          disk:
            bus: virtio
    # ...
    ```
1.  Click **Save**.

    :::important

    The `spec.template.spec.domain` setting cannot be changed while the VM is running. You must stop the VM before applying the changes, and then restart the VM for the new settings to take effect.
    
    :::