{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ op_system_rt_kernel }} {id="microshift-low-latency-install-kernelrt_{{ context }}"}

Although the real-time kernel is not necessary for low latency workloads, using the {{ op_system_rtk }} can optimize low latency performance. You can install it on a host by using RPM packages, and include it in a {{ op_system_ostree_first }} image deployment. {._abstract}

**Prerequisites**

*   You have a Red Hat subscription that includes {{ op_system_rt_kernel }}. For example, your host machine is registered and Red Hat Enterprise Linux (RHEL) is attached to a RHEL for Real Time subscription.
*   You are using x86_64 architecture.

**Procedure**

1.  Enable the {{ op_system_rtk }} repository by running the following command:
    ```terminal
    $ sudo subscription-manager repos --enable rhel-9-for-x86_64-rt-rpms
    ```
1.  Install the real-time kernel by running the following command:
    ```terminal
    $ sudo dnf install -y kernel-rt
    ```
1.  Query the real-time kernel version by running the following command:
    ```terminal
    $ RTVER=$(rpm -q --queryformat '%{version}-%{release}.%{arch}' kernel-rt | sort | tail -1)
    ```
1.  Make a persistent change in GRUB that designates the real-time kernel as the default kernel by running the following command:
    ```terminal
    $ sudo grubby --set-default="/boot/vmlinuz-${RTVER}+rt"
    ```
1.  Restart the host to activate the real-time kernel.

**Next steps**

1.  Prepare your {{ microshift_short }} workloads for low latency.
1.  Optional: Use a blueprint to install the real-time kernel in a {{ op_system_ostree }} image.