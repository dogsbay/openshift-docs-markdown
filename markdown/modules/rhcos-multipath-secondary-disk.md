{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling multipathing on secondary disks {id="rhcos-multipath-secondary-disk_{{ context }}"}

{{ op_system }} also supports multipathing on a secondary disk. Instead of kernel arguments, you use Ignition to enable multipathing for the secondary disk at installation time. {._abstract}

**Prerequisites**

*   You have read the section _Disk partitioning_.
*   You have read _Enabling multipathing with kernel arguments on {{ op_system }}_.
*   You have installed the Butane utility.

**Procedure**

1.  Create a Butane config with information similar to the following:
    ```yaml title="Example multipath-config.bu"
    variant: openshift
    version: {{ product_version }}.0
    systemd:
      units:
        - name: mpath-configure.service
          enabled: true
          contents: |
            [Unit]
            Description=Configure Multipath on Secondary Disk
            ConditionFirstBoot=true
            ConditionPathExists=!/etc/multipath.conf
            Before=multipathd.service
            DefaultDependencies=no

            [Service]
            Type=oneshot
            ExecStart=/usr/sbin/mpathconf --enable

            [Install]
            WantedBy=multi-user.target
        - name: mpath-var-lib-container.service
          enabled: true
          contents: |
            [Unit]
            Description=Set Up Multipath On /var/lib/containers
            ConditionFirstBoot=true
            Requires=dev-mapper-mpatha.device
            After=dev-mapper-mpatha.device
            After=ostree-remount.service
            Before=kubelet.service
            DefaultDependencies=no

            [Service]
            Type=oneshot
            ExecStart=/usr/sbin/mkfs.xfs -L containers -m reflink=1 /dev/mapper/mpatha
            ExecStart=/usr/bin/mkdir -p /var/lib/containers

            [Install]
            WantedBy=multi-user.target
        - name: var-lib-containers.mount
          enabled: true
          contents: |
            [Unit]
            Description=Mount /var/lib/containers
            After=mpath-var-lib-containers.service
            Before=kubelet.service

            [Mount]
            What=/dev/disk/by-label/dm-mpath-containers
            Where=/var/lib/containers
            Type=xfs

            [Install]
            WantedBy=multi-user.target
    ```

    where:

    `Before=multipathd.service`
    :   Specifies that the configuration must be set before launching the multipath daemon.

    `ExecStart=/usr/sbin/mpathconf`
    :   Specifies starting the `mpathconf` utility.

    `ConditionFirstBoot=true`
    :   Set to the value `true`.

    `[Service]`
    :   Specifies the creation of the filesystem and directory `/var/lib/containers`.

    `Before=kubelet.service`
    :   Specifies that the device must be mounted before starting any nodes.

    `[Mount]`
    :   Specifies to mount the device to the `/var/lib/containers` mount point. This location cannot be a symlink.

1.  Create the Ignition configuration by running the following command:
    ```terminal
    $ butane --pretty --strict multipath-config.bu > multipath-config.ign
    ```
1.  Continue with the rest of the first boot {{ op_system }} installation process.

    :::important

    Do not add the `rd.multipath` or `root` kernel arguments on the CLI during installation unless the primary disk is also multipathed.
    
    :::