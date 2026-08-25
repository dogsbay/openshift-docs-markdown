{%- set _mod_docs_content_type = "PROCEDURE" %}
# OOT kernel module loading flow {id="kmm-day1-oot-kernel-module-loading-flow_{{ context }}"}

To load an out-of-tree kernel module during {{ product_title }} node boot, you can apply a `MachineConfig` through the Machine Config Operator (MCO). MCO reboots nodes and deploys `systemd` services that pull the kernel module image and swap in-tree modules for OOT modules. {._abstract}

**Procedure**

1.  Apply a `MachineConfig` resource to the existing running cluster. In order to identify the necessary nodes that need to be updated,
you must create an appropriate `MachineConfigPool` resource.
1.  MCO applies the reboots node by node. On any rebooted node, two new `systemd` services are deployed: `pull` service and `load` service.
1.  The `load` service is configured to run prior to the `NetworkConfiguration` service. The service tries to pull a predefined kernel module image and then, using that image, to unload an in-tree module and load an OOT kernel module.
1.  The `pull` service is configured to run after NetworkManager service. The service checks if the preconfigured kernel module image is located on the node’s filesystem. If it is, the service exists normally, and the server continues with the boot process. If not, it pulls the image onto the node and reboots the node afterwards.