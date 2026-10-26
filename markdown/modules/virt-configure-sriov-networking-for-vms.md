{%- set _mod_docs_content_type = "CONCEPT" %}
# Connect a VM to the physical network by using an SR-IOV device {id="virt-configure-sriov-networking-for-vms_{{ context }}"}

You can connect a virtual machine (VM) to the physical network by using a Single Root I/O Virtualization (SR-IOV) device. Configure SR-IOV for virtual machines that require high-performance, low-latency network access.  {._abstract}

To configure the SR-IOV network and attach the VM to that network, perform the following steps:

1.  Configure an SR-IOV physical network device.
1.  Define the secondary SR-IOV network.
1.  Attach the VM to the SR-IOV network.