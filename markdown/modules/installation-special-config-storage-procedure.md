{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring disk encryption and mirroring {id="installation-special-config-storage-procedure_{{ context }}"}

You can enable and configure encryption and mirroring before an {{ product_title }} installation. {._abstract}

**Prerequisites**

*   You have downloaded the {{ product_title }} installation program on your installation node.
*   You installed Butane on your installation node.

    :::note

    Butane is a command-line utility for writing and validating machine configs with convenient, short-hand syntax. For more information, see "Creating machine configs with Butane".
    
    :::

*   You have access to a {{ op_system_base_full }} 8 machine that can be used to generate a thumbprint of the Tang exchange key.

**Procedure**

1.  If you want to use TPM v2 to encrypt your cluster, check to see if TPM v2 encryption needs to be enabled in the host firmware for each node. This is required on most Dell systems. Check the manual for your specific system.
1.  If you want to use Tang to encrypt your cluster, complete the following tasks:
    1.  Set up a Tang server or access an existing one. See "Network-bound disk encryption" in the _Additional resources_ for instructions.
    1.  Install the `clevis` package on a {{ op_system_base }} 8 machine, if the package is not already installed:
        ```terminal
        $ sudo yum install clevis
        ```
    1.  On the {{ op_system_base }} 8 machine, run the following command to generate a thumbprint of the exchange key.
    Replace `http://tang1.example.com:7500` with the URL of your Tang server:
        ```terminal
        $ clevis-encrypt-tang '{"url":"http://tang1.example.com:7500"}' < /dev/null > /dev/null
        ```

        In this example, `tangd.socket` is listening on port `7500` on the Tang server.

        :::note

        The `clevis-encrypt-tang` command generates a thumbprint of the exchange key. No data passes to the encryption command during this step; `/dev/null` exists here as an input instead of plain text. The encrypted output is also sent to `/dev/null`, because it is not required for this procedure.
        
        :::

        ```terminal title="Example output"
        The advertisement contains the following signing keys:

        PLjNyRdGw03zlRoGjQYMahSZGu9
        ```

        `PLjNyRdGw03zlRoGjQYMahSZGu9`: The thumbprint of the exchange key.

        When the `Do you wish to trust these keys? [ynYN]` prompt displays, type `Y`.
    1.  Optional: For offline Tang provisioning:
        1.  Obtain the advertisement from the server using the `curl` command. Replace `http://tang2.example.com:7500` with the URL of your Tang server:
            ```terminal
            $ curl -f http://tang2.example.com:7500/adv > adv.jws && cat adv.jws
            ```
            ```text title="Expected output"
            {"payload": "eyJrZXlzIjogW3siYWxnIjogIkV", "protected": "eyJhbGciOiJFUzUxMiIsImN0eSI", "signature": "ADLgk7fZdE3Yt4FyYsm0pHiau7Q"}
            ```
        1.  Provide the advertisement file to Clevis for encryption:
            ```terminal
            $ clevis-encrypt-tang '{"url":"http://tang2.example.com:7500","adv":"adv.jws"}' < /dev/null > /dev/null
            ```
    1.  If the nodes are configured with static IP addressing, run `coreos-installer iso customize --dest-karg-append` or use the `coreos-installer` `--append-karg` option when installing {{ op_system }} nodes to set the IP address of the installed system.
    Append the `ip=` and other arguments needed for your network.

        :::important

        Some methods for configuring static IPs do not affect the initramfs after the first boot and will not work with Tang encryption.
        These include the `coreos-installer` `--copy-network` option, the `coreos-installer iso customize` `--network-keyfile` option, and the `coreos-installer pxe customize` `--network-keyfile` option, as well as adding `ip=` arguments to the kernel command line of the live ISO or PXE image during installation. Incorrect static IP configuration causes the second boot of the node to fail.
        
        :::

1.  On your installation node, change to the directory that contains the installation program and generate the Kubernetes manifests for the cluster:
    ```terminal
    $ ./openshift-install create manifests --dir <installation_directory>
    ```

    Replace `<installation_directory>` with the path to the directory that you want to store the installation files in.
1.  Create a Butane config that configures disk encryption, mirroring, or both.
For example, to configure storage for compute nodes, create a `$HOME/clusterconfig/worker-storage.bu` file.
    ```yaml title="Butane config example for a boot device"
    variant: openshift
    version: {{ product_version }}.0
    metadata:
      name: worker-storage
      labels:
        machineconfiguration.openshift.io/role: worker
    boot_device:
      layout: x86_64
      luks:
        tpm2: true
        tang:
          - url: http://tang1.example.com:7500
            thumbprint: PLjNyRdGw03zlRoGjQYMahSZGu9
          - url: http://tang2.example.com:7500
            thumbprint: VCJsvZFjBSIHSldw78rOrq7h2ZF
            advertisement: "{"payload": "eyJrZXlzIjogW3siYWxnIjogIkV", "protected": "eyJhbGciOiJFUzUxMiIsImN0eSI", "signature": "ADLgk7fZdE3Yt4FyYsm0pHiau7Q"}"
        threshold: 1
      mirror:
        devices:
          - /dev/sda
          - /dev/sdb
    openshift:
      fips: true
    ```

    where:

    `metadata.name`
    :   For control plane configurations, replace `worker` with `master` in both of these locations.

    `boot_device.layout`
    :   Specifies the instruction set architecture of the cluster nodes.
        Some examples include, `x86_64`, `aarch64`, or `ppc64le`.

    `boot_device.luks`
    :   Specifies encrypting the root file system. For more details, see "About disk encryption".

    `boot_device.luks.tpm2`
    :   When `true`, specifies that you want to use a Trusted Platform Module (TPM) to encrypt the root file system.

    `boot_device.luks.tang`
    :   Specifies that you want to use the listed Tang servers.

    `boot_device.luks.tang.url`
    :   Specifies the URL of a Tang server. In this example, `tangd.socket` is listening on port `7500` on the Tang server.

    `boot_device.luks.tang.thumbprint`
    :   Specifies the exchange key thumbprint, which was generated in a preceding step.

    `boot_device.luks.tang.advertisement`
    :   Optional parameter. Specifies offline provisioning. Ignition provisions the Tang server binding rather than fetching the advertisement from the server at runtime. This lets the server be unavailable at provisioning time.

    `boot_device.luks.threshold`
    :   Specifies the minimum number of TPM v2 and Tang encryption conditions required for decryption to occur.
    The default value is `1`. For more information about this topic, see "About disk encryption".
    `boot_device.mirror`:: Specify the parameter if you want to mirror the boot disk. For more details, see "About disk mirroring".
    `boot_device.mirror.devices`:: List all disk devices that should be included in the boot disk mirror, including the disk that {{ op_system }} will be installed onto.
    `openshift.fips`:: Specifies enabling FIPS mode on your cluster.

    :::important

    To enable FIPS mode for your cluster, you must run the installation program from a {{ op_system_base_full }} computer configured to operate in FIPS mode. For more information about configuring FIPS mode on RHEL, see "Installing the system in FIPS mode" in the _Additional resources_ section. 

    If you are configuring nodes to use both disk encryption and mirroring, both features must be configured in the same Butane configuration file.

    If you are configuring disk encryption on a node with FIPS mode enabled, you must include the `fips` directive in the same Butane configuration file, even if FIPS mode is also enabled in a separate manifest.
    
    :::


1.  Create a control plane or compute node manifest from the corresponding Butane configuration file and save it to the `<installation_directory>/openshift` directory. For example, to create a manifest for the compute nodes, run the following command:
    ```terminal
    $ butane $HOME/clusterconfig/worker-storage.bu -o <installation_directory>/openshift/99-worker-storage.yaml
    ```

    Repeat this step for each node type that requires disk encryption or mirroring.
1.  If you enable encryption, edit the manifest that was produced by the previous step and replace the cipher `aes-cbc-essiv:sha256` with `aes-xts-plain64`. The following excerpt shows a sample encryption configuration after this change:
    ```yaml
    # ...
            luks:
    # ...
              options:
                - --cipher
                - aes-xts-plain64
    ```
1.  Save the Butane configuration file in case you need to update the manifests in the future.
1.  Continue with the remainder of the {{ product_title }} installation.

    :::tip

    You can monitor the console log on the {{ op_system }} nodes during installation for error messages relating to disk encryption or mirroring.
    
    :::


    :::important

    If you configure additional data partitions, they will not be encrypted unless encryption is explicitly requested.
    
    :::


**Verification**

After installing {{ product_title }}, you can verify if boot disk encryption or mirroring is enabled on the cluster nodes.

1.  From the installation host, access a cluster node by using a debug pod:
    1.  Start a debug pod for the node, for example:
        ```terminal
        $ oc debug node/compute-1
        ```
    1.  Set `/host` as the root directory within the debug shell.
    The debug pod mounts the root file system of the node in `/host` within the pod.
    By changing the root directory to `/host`, you can run binaries contained in the executable paths on the node:
        ```terminal
        # chroot /host
        ```

        :::note

        {{ product_title }} cluster nodes running {{ op_system_first }} are immutable and rely on Operators to apply cluster changes.
        Accessing cluster nodes using SSH is not recommended.

        However, if the {{ product_title }} API is not available, or `kubelet` is not properly functioning on the target node, `oc` operations will be impacted.

        In such situations, it is possible to access nodes using `ssh core@<node>.<cluster_name>.<base_domain>` instead.
        
        :::

1.  If you configured boot disk encryption, verify if it is enabled:
    1.  From the debug shell, review the status of the root mapping on the node:
        ```terminal
        # cryptsetup status root
        ```
        ```terminal title="Example output"
        /dev/mapper/root is active and is in use.
          type:    LUKS2
          cipher:  aes-xts-plain64
          keysize: 512 bits
          key location: keyring
          device:  /dev/sda4
          sector size:  512
          offset:  32768 sectors
          size:    15683456 sectors
          mode:    read/write
        ```

        where:

        `type`
        :   Specifies the encryption format.
            When the TPM v2 or Tang encryption mode is enabled, the {{ op_system }} boot disks are encrypted using the LUKS2 format.

        `cipher`
        :   Specifies the encryption algorithm used to encrypt the LUKS2 volume.

        `device`
        :   Specifies the device that contains the encrypted LUKS2 volume. If mirroring is enabled, the value will represent a software mirror device, for example `/dev/md126`.
    1.  List the Clevis plugins that are bound to the encrypted device:
        ```terminal
        # clevis luks list -d /dev/sda4
        ```

        Replace `/dev/sda4` with the device that is listed in the `device` field in the output of the preceding step.
        ```terminal title="Example output"
        1: sss '{"t":1,"pins":{"tang":[{"url":"http://tang.example.com:7500"}]}}'
        ```

        In the example output, the Tang plugin is used by the Shamir’s Secret Sharing (SSS) Clevis plugin for the `/dev/sda4` device.
1.  If you configured mirroring, verify if it is enabled:
    1.  From the debug shell, list the software RAID devices on the node:
        ```terminal
        # cat /proc/mdstat
        ```
        ```terminal title="Example output"
        Personalities : [raid1]
        md126 : active raid1 sdb3[1] sda3[0]
        	  393152 blocks super 1.0 [2/2] [UU]

        md127 : active raid1 sda4[0] sdb4[1]
        	  51869632 blocks super 1.2 [2/2] [UU]

        unused devices: <none>
        ```

        `md126`: Specifies the `/dev/md126` software RAID mirror device that uses the `/dev/sda3` and `/dev/sdb3` disk devices on the cluster node.
        `md127`: Specifies the `/dev/md127` software RAID mirror device that uses the `/dev/sda4` and `/dev/sdb4` disk devices on the cluster node.
    1.  Review the details of each of the software RAID devices listed in the output of the preceding command. The following example lists the details of the `/dev/md126` device:
        ```terminal
        # mdadm --detail /dev/md126
        ```
        ```terminal title="Example output"
        /dev/md126:
                   Version : 1.0
             Creation Time : Wed Jul  7 11:07:36 2021
                Raid Level : raid1
                Array Size : 393152 (383.94 MiB 402.59 MB)
             Used Dev Size : 393152 (383.94 MiB 402.59 MB)
              Raid Devices : 2
             Total Devices : 2
               Persistence : Superblock is persistent

               Update Time : Wed Jul  7 11:18:24 2021
                     State : clean
            Active Devices : 2
           Working Devices : 2
            Failed Devices : 0
             Spare Devices : 0

        Consistency Policy : resync

                      Name : any:md-boot
                      UUID : ccfa3801:c520e0b5:2bee2755:69043055
                    Events : 19

            Number   Major   Minor   RaidDevice State
               0     252        3        0      active sync   /dev/sda3
               1     252       19        1      active sync   /dev/sdb3
        ```

        where:

        `Raid Level`
        :   Specifies the RAID level of the device.
            `raid1` indicates RAID 1 disk mirroring.

        `State`
        :   Specifies the state of the RAID device.

        `Active Devices/Working Devices`
        :   Specifies the number of underlying disk devices that are active and working.

        `Failed Devices`
        :   Specifies the number of underlying disk devices that are in a failed state.

        `Name`
        :   Specifies the name of the software RAID device.

        `/dev/sda3`
        :   Provides information about the underlying disk devices used by the software RAID device.
    1.  List the file systems mounted on the software RAID devices:
        ```terminal
        # mount | grep /dev/md
        ```
        ```terminal title="Example output"
        /dev/md127 on / type xfs (rw,relatime,seclabel,attr2,inode64,logbufs=8,logbsize=32k,prjquota)
        /dev/md127 on /etc type xfs (rw,relatime,seclabel,attr2,inode64,logbufs=8,logbsize=32k,prjquota)
        /dev/md127 on /usr type xfs (ro,relatime,seclabel,attr2,inode64,logbufs=8,logbsize=32k,prjquota)
        /dev/md127 on /sysroot type xfs (ro,relatime,seclabel,attr2,inode64,logbufs=8,logbsize=32k,prjquota)
        /dev/md127 on /var type xfs (rw,relatime,seclabel,attr2,inode64,logbufs=8,logbsize=32k,prjquota)
        /dev/md127 on /var/lib/containers/storage/overlay type xfs (rw,relatime,seclabel,attr2,inode64,logbufs=8,logbsize=32k,prjquota)
        /dev/md127 on /var/lib/kubelet/pods/e5054ed5-f882-4d14-b599-99c050d4e0c0/volume-subpaths/etc/tuned/1 type xfs (rw,relatime,seclabel,attr2,inode64,logbufs=8,logbsize=32k,prjquota)
        /dev/md127 on /var/lib/kubelet/pods/e5054ed5-f882-4d14-b599-99c050d4e0c0/volume-subpaths/etc/tuned/2 type xfs (rw,relatime,seclabel,attr2,inode64,logbufs=8,logbsize=32k,prjquota)
        /dev/md127 on /var/lib/kubelet/pods/e5054ed5-f882-4d14-b599-99c050d4e0c0/volume-subpaths/etc/tuned/3 type xfs (rw,relatime,seclabel,attr2,inode64,logbufs=8,logbsize=32k,prjquota)
        /dev/md127 on /var/lib/kubelet/pods/e5054ed5-f882-4d14-b599-99c050d4e0c0/volume-subpaths/etc/tuned/4 type xfs (rw,relatime,seclabel,attr2,inode64,logbufs=8,logbsize=32k,prjquota)
        /dev/md127 on /var/lib/kubelet/pods/e5054ed5-f882-4d14-b599-99c050d4e0c0/volume-subpaths/etc/tuned/5 type xfs (rw,relatime,seclabel,attr2,inode64,logbufs=8,logbsize=32k,prjquota)
        /dev/md126 on /boot type ext4 (rw,relatime,seclabel)
        ```

        In the example output, the `/boot` file system is mounted on the `/dev/md126` software RAID device and the root file system is mounted on `/dev/md127`.
1.  Repeat the verification steps for each {{ product_title }} node type.