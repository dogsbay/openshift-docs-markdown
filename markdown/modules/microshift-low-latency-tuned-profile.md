{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure the {{ microshift_short }} TuneD profile {id="microshift-low-latency-tuned-profile_{{ context }}"}

To use low latency with {{ microshift_short }} workloads, configure a TuneD profile for your host by using the `microshift-baseline-variables.conf` file provided in the `/etc/tuned/` directory. {._abstract}

**Prerequisites**

*   You have root access to the node.
*   You installed the `microshift-low-latency` RPM package.
*   Your {{ op_system_base }} host has TuneD installed. See [Getting started with TuneD](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/monitoring_and_managing_system_status_and_performance/getting-started-with-tuned_monitoring-and-managing-system-status-and-performance#the-location-of-tuned-profiles_getting-started-with-tuned) (RHEL documentation).

**Procedure**

1.  You can use the default `microshift-baseline-variables.conf` TuneD profile in the `/etc/tuned/` directory profile, or create your own to add more tunings.
    ```text title="Example microshift-baseline-variables.conf TuneD profile"
    # Isolate cores 2-7 for running application workloads
    isolated_cores=2-7 

    # Size of the hugepages
    hugepages_size=2M 

    # Number of hugepages
    hugepages=0

    # Additional kernel arguments
    additional_args= 

    # CPU set to be offlined
    offline_cpu_set= 
    ```

    `isolated_cores`
    :   Controls which cores should be isolated. By default, 1 core per socket is reserved in {{ microshift_short }} for housekeeping. The other cores are isolated. Valid values are a core list or range. You can isolate any range, for example: `isolated_cores=2,4-7` or `isolated_cores=2-23`.

        :::important


        You must keep only one `isolated_cores=` variable.
        
        :::


        :::note


        The Kubernetes CPU manager can use any CPU to run the workload except the reserved CPUs defined in the kubelet configuration. For this reason it is best that:

        *   The sum of the kubelet’s reserved CPUs and isolated cores include all online CPUs.
        *   Isolated cores are complementary to the reserved CPUs defined in the kubelet configuration.
        
        :::



    `hugepages_size`
    :   Size of the hugepages. Valid values are 2M or 1G.


    `additional_args`
    :   Additional kernel arguments, for example, `additional_args=console=tty0 console=ttyS0,115200`.


    `offline_cpu_set`
    :   The CPU set to be offlined.

        :::important


        Must not overlap with `isolated_cores`.
        
        :::

1.  Enable the profile or make changes active, by running the following command:
    ```terminal
    $ sudo tuned-adm profile microshift-baseline
    ```
1.  Reboot the host to make kernel arguments active.

**Verification**

*   Optional: You can read the `/proc/cmdline` file that contains the arguments given to the currently running kernel on start.
    ```terminal
    $ cat /proc/cmdline
    ```
    ```text title="Example output"
    BOOT_IMAGE=(hd0,msdos2)/ostree/rhel-7f82ccd9595c3c70af16525470e32c6a81c9138c4eae6c79ab86d5a2d108d7fc/vmlinuz-5.14.0-427.31.1.el9_4.x86_64+rt crashkernel=1G-4G:192M,4G-64G:256M,64G-:512M rd.lvm.lv=rhel/root fips=0 console=ttyS0,115200n8 root=/dev/mapper/rhel-root rw ostree=/ostree/boot.1/rhel/7f82ccd9595c3c70af16525470e32c6a81c9138c4eae6c79ab86d5a2d108d7fc/0 skew_tick=1 tsc=reliable rcupdate.rcu_normal_after_boot=1 nohz=on nohz_full=2,4-5 rcu_nocbs=2,4-5 tuned.non_isolcpus=0000000b intel_pstate=disable nosoftlockup hugepagesz=2M hugepages=10
    ```

**Next steps**

1.  Prepare your {{ microshift_short }} workloads for low latency.
1.  Optional: Configure automatic enablement of your TuneD profile.
1.  Optional: If you are using the x86_64 architecture, you can install {{ op_system_rt_kernel }}.