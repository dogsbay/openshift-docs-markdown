{%- set _mod_docs_content_type = "CONCEPT" %}
# Installing {{ op_system }} and starting the {{ product_title }} bootstrap process {id="creating-machines-bare-metal_{{ context }}"}

To install {{ product_title }} on bare-metal infrastructure that you provision, install {{ op_system_first }} by using the generated Ignition config files. Providing these files ensures the bootstrap process begins automatically after the machines reboot. {._abstract}

If you have configured suitable networking, DNS, and load balancing infrastructure, the {{ product_title }} bootstrap process begins automatically after the {{ op_system }} machines have rebooted.

To install {{ op_system }} on the machines, follow either the steps to use an ISO image or network PXE booting.


:::note

The compute node deployment steps included in this installation document are {{ op_system }}-specific. If you choose instead to deploy {{ op_system_base }}-based compute nodes, you take responsibility for all operating system life cycle management and maintenance, including performing system updates, applying patches, and completing all other required tasks. Only {{ op_system_base }} 8 compute machines are supported.

:::


You can configure {{ op_system }} during ISO and PXE installations by using the following methods:

*   Kernel arguments: You can use kernel arguments to provide installation-specific information. For example, you can specify the locations of the {{ op_system }} installation files that you uploaded to your HTTP server and the location of the Ignition config file for the type of node you are installing. For a PXE installation, you can use the `APPEND` parameter to pass the arguments to the kernel of the live installer. For an ISO installation, you can interrupt the live installation boot process to add the kernel arguments. In both installation cases, you can use special `coreos.inst.*` arguments to direct the live installer, as well as standard installation boot arguments for turning standard kernel services on or off.
*   Ignition configs: {{ product_title }} Ignition config files (`*.ign`) are specific to the type of node you are installing. You pass the location of a bootstrap, control plane, or compute node Ignition config file during the {{ op_system }} installation so that it takes effect on first boot. In special cases, you can create a separate, limited Ignition config to pass to the live system. That Ignition config could do a certain set of tasks, such as reporting success to a provisioning system after completing installation. This special Ignition config is consumed by the `coreos-installer` to be applied on first boot of the installed system. Do not provide the standard control plane and compute node Ignition configs to the live ISO directly.
*   `coreos-installer`: You can boot the live ISO installer to a shell prompt, which allows you to prepare the permanent system in a variety of ways before first boot. In particular, you can run the `coreos-installer` command to identify various artifacts to include, work with disk partitions, and set up networking. In some cases, you can configure features on the live system and copy them to the installed system.

    :::note

    As of version `0.17.0-3`, `coreos-installer` requires {{ op_system_base }} 9 or later to run the program. You can still use older versions of `coreos-installer` to customize {{ op_system }} artifacts of newer {{ product_title }} releases and install metal images to disk. See "coreos-installer image mirror" to download older versions of the `coreos-installer` binary.
    
    :::


Whether to use an ISO or PXE install depends on your situation. A PXE install requires an available DHCP service and more preparation, but can make the installation process more automated. An ISO install is a more manual process and can be inconvenient if you are setting up more than a few machines.