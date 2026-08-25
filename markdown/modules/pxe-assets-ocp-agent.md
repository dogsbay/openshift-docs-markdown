{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the PXE assets {id="pxe-assets-ocp-agent_{{ context }}"}

Create the assets and optional script to implement in your PXE infrastructure. {._abstract}

**Procedure**

1.  Create the PXE assets by running the following command:
    ```terminal
    $ openshift-install agent create pxe-files
    ```

    The generated PXE assets and optional iPXE script can be found in the `boot-artifacts` directory.
    ```terminal title="Example filesystem with PXE assets and optional iPXE script"
    boot-artifacts
        ├─ agent.x86_64-initrd.img
        ├─ agent.x86_64.ipxe
        ├─ agent.x86_64-rootfs.img
        └─ agent.x86_64-vmlinuz
    ```

    :::important

    The contents of the `boot-artifacts` directory vary depending on the specified architecture.
    
    :::


    :::note

    {{ op_system_first }} supports multipathing on the primary disk, allowing stronger resilience to hardware failure to achieve higher host availability. Multipathing is enabled by default in the Agent ISO image, with a default `/etc/multipath.conf` configuration.
    
    :::

1.  Upload the PXE assets and optional script to your infrastructure where they will be accessible during the boot process.

    :::note

    If you generated an iPXE script, the location of the assets must match the `bootArtifactsBaseURL` value you added to the `agent-config.yaml` file.
    
    :::