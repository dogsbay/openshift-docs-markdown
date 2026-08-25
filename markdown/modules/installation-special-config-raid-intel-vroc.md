{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring an Intel(R) Virtual RAID on CPU (VROC) data volume {id="installation-special-config-raid-intel-vroc_{{ context }}"}

Intel(R) VROC is a type of hybrid RAID, where some of the maintenance is offloaded to the hardware, but shows as software RAID to the operating system. You can configure an Intel(R) Virtual RAID on CPU (VROC) data volume to deliver direct-to-CPU NVMe throughput for data-intensive workloads. {._abstract}

The following procedure configures an Intel(R) VROC-enabled RAID1.

**Prerequisites**

*   You have a system with Intel(R) Volume Management Device (VMD) enabled.

**Procedure**

1.  Create the Intel(R) Matrix Storage Manager (IMSM) RAID container by running the following command:
    ```terminal
    $ mdadm -CR /dev/md/imsm0 -e \
      imsm -n2 /dev/nvme0n1 /dev/nvme1n1
    ```

    The RAID device names. In this example, there are two devices listed. If you provide more than two device names, you must adjust the `-n` flag. For example, listing three devices would use the flag `-n3`.
1.  Create the RAID1 storage inside the container:
    1.  Create a dummy RAID0 volume in front of the real RAID1 volume by running the following command:
        ```terminal
        $ mdadm -CR /dev/md/dummy -l0 -n2 /dev/md/imsm0 -z10M --assume-clean
        ```
    1.  Create the real RAID1 array by running the following command:
        ```terminal
        $ mdadm -CR /dev/md/coreos -l1 -n2 /dev/md/imsm0
        ```
    1.  Stop both RAID0 and RAID1 member arrays and delete the dummy RAID0 array with the following commands:
        ```terminal
        $ mdadm -S /dev/md/dummy \
          mdadm -S /dev/md/coreos \
          mdadm --kill-subarray=0 /dev/md/imsm0
        ```
    1.  Restart the RAID1 arrays by running the following command:
        ```terminal
        $ mdadm -A /dev/md/coreos /dev/md/imsm0
        ```
1.  Install {{ op_system }} on the RAID1 device:
    1.  Get the UUID of the IMSM container by running the following command:
        ```terminal
        $ mdadm --detail --export /dev/md/imsm0
        ```
    1.  Install {{ op_system }} and include the `rd.md.uuid` kernel argument by running the following command:
        ```terminal
        $ coreos-installer install /dev/md/coreos \
          --append-karg rd.md.uuid=<md_UUID>
          ...
        ```

        Replace `<md_UUID>` with the UUID of the IMSM container.

        Include any additional `coreos-installer` arguments you need to install {{ op_system }}.