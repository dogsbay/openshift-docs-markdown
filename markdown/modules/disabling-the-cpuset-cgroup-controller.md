{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling the cpuset cgroup controller {id="disabling-the-cpuset-cgroup-controller_{{ context }}"}

You can disable the cpuset cgroup controller. Disabling the controller requires a restart of the libvirtd daemon.  {._abstract}


:::note

This setting applies only to KVM hosts with cgroups version 1. To enable CPU hotplug on the host, disable the cgroup controller.

:::


**Procedure**

1.  Open `/etc/libvirt/qemu.conf` with an editor of your choice.
1.  Go to the `cgroup_controllers` line.
1.  Duplicate the entire line and remove the leading number sign (#) from the copy.
1.  Remove the `cpuset` entry, as follows:
    ```config
    cgroup_controllers = [ "cpu", "devices", "memory", "blkio", "cpuacct" ]
    ```
1.  For the new setting to take effect, you must restart the libvirtd daemon:
    1.  Stop all virtual machines.
    1.  Run the following command:
        ```terminal
        # systemctl restart libvirtd
        ```
    1.  Restart the virtual machines.

        This setting persists across host reboots.