{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a bootable and encrypted {{ ibm_title }} Secure Execution VM image on {{ ibm_z_title }} and {{ ibm_linuxone_title }} {id="virt-creating-bootable-encrypted-ibm-secure-execution-vm-image-ibm-z_{{ context }}"}

You can create a bootable and encrypted {{ ibm_title }} Secure Execution VM image for {{ op_system_base_full }} on {{ ibm_z_title }} and {{ ibm_linuxone_title }}. {._abstract}

**Prerequisites**

*   You are using an {{ ibm_name }} Secure Execution enabled VM image.

**Procedure**

1.  On a trusted instance, create the `install.ks` kickstart file in the `/var/lib/libvirt/image/` directory with the following content:
    ```terminal
    [trusted instance ~]
    text
    lang en_US.UTF-8
    keyboard us 
    network --bootproto=dhcp 
    rootpw --plaintext <password>
    timezone <>
    firewall --enabled
    selinux --enforcing
    bootloader --location=mbr
    reboot   

    # Wipe and partition the disk
    clearpart --all --initlabel 
    zerombr  

    # /boot gets encrypted on post reboot
    part /boot --fstype ext4 --size=512 --label=boot  
    # Root (/) is LUKS-encrypted 
    part / --fstype xfs --size=3000 --pbkdf=pbkdf2 --encrypted --passphrase <passphrase>
    # SE (/se) Non Encrypted for encrypted boot image.
    part /se --fstype xfs --size=512 --label=se
    #Packages
    %packages
    @core
    dracut
    s390-tools
    %end 
    ```
1.  Create the VM with the {{ op_system_base }} image by running the following command:
    ```terminal
    [trusted instance ~]$ qemu-img create -f qcow2 <path to qcow2 image> <size>G
    ```
1.  Run the `virt-install` command with the following parameters:
    ```terminal
    [trusted instance ~]virt-install 
        --name <guest_vm_name> \
        --memory 4096 --vcpus 2 \
        --disk path=<path_to_qcow2_image>,format=qcow2,bus=virtio,cache=none \ 
        --location <path_to_os>  \
        --initrd-inject=<path_to_kickstart_file> \ 
        --extra-args="inst.ks=file:/<kickstart_file_name> console=ttyS0 \ 
        --inst.text inst.noninteractive" \
        --os-variant=<os_variant> \ 
        --launchSecurity type=s390-pv \ 
        --graphics none 
    ```
1.  Run the `virsh start` command to access the system console. 
1.  Run the `sudo -s` command to achieve root user privileges.
1.  Generate keyfiles for the root and the boot partition by running the following commands: 
    ```terminal
    [secure guest ~]$ mkdir -p /etc/luks
    ```
    ```terminal
    [secure guest ~]$ chmod 700 /etc/luks
    ```
    ```terminal
    [secure guest ~]$ dd if=/dev/urandom of=/etc/luks/root_keyfile.bin bs=1024 count=4
    ```
    ```terminal
    [secure guest ~]$ dd if=/dev/urandom of=/etc/luks/boot_keyfile.bin bs=1024 count=4
    ```
    ```terminal
    [secure guest ~]$ cryptsetup luksAddkey <root_partition_device> /etc/luks/root_keyfile.bin --pbkdf pbkdf2
    ```
1.  Obtain the LUKS device name and UUID by running the following command:
    ```terminal
    $ lsblk -f
    ```
1.  Rename the existing fstab file to `/etc/fstab_bak`. 
1.  Create new crypttab and fstab files similar to the following examples: 

    Crypttab example output:
    ```screen
    luks device name   UUID                                       KEYFILE 			      OPTIONS
    root 		       UUID=9cb04587-a670-458a-97eb-52fc0f4008ae  /etc/luks/keyfile.bin   luks
    ```

    Fstab example output:
    ```screen
    /dev/mapper/root /          xfs	  defaults 0 1
    ```
1.  Add the SE boot filesystem entry into the `/etc/fstab` file by running the following command:
    ```terminal
    [secure guest ~]$ grep ‘/se’ /etc/fstab_bak >> /etc/fstab
    ```
1.  Add entries to the `initramfs` by running the following commands:
    ```terminal
    [secure guest ~]$ cat > /etc/dracut.conf.d/10-lukskey.conf <<'EOF' 
        install_items+=" /etc/luks/root_keyfile.bin /etc/luks/boot_keyfile.bin "  
        EOF 
    ```
    ```terminal
    [secure guest ~]$ dracut -f --regenerate-all
    ```
1.  Verify that the key files are present in `initramfs` by running the following command:
    ```terminal
    [secure guest ~]$ lsinitrd /boot/initramfs-$(uname-r) | grep -i luks
    ```
1.  LUKS Encrypt the `/boot` volume.
    1.  Change into the boot directory by running the following command:
        ```terminal
        [secure guest ~]$ cd /boot
        ```
    1.  Backup the existing boot volume content by running the following commands:
        ```terminal
        [secure guest /boot ~]$ tar -cf /root/boot_backup.tar
        ```
        ```terminal
        [secure guest /boot ~]$ cd
        ```
        ```terminal
        [secure guest ~]$ umount /boot
        ```
    1.  Encrypt the boot volume by running the following commands:
        ```terminal
        [secure guest ~]$ cryptsetup -q luksFormat <boot_partition> --key-file /etc/luks/boot_keyfile.bin
        ```
        ```terminal
        [secure guest ~]$ cryptsetup luksOpen <boot_partition> boot -–key-file /etc/luks/boot_keyfile.bin
        ```
    1.  Create the file system by running the following command:
        ```terminal
        [secure guest ~]$ mke2fs –t ext4 /dev/mapper/boot
        ```
    1.  Obtain the boot UUID by running the following command:
        ```terminal
        [secure guest ~]$ blkid –s UUID  -o value <boot_partition>
        ```
    1.  Add the boot partition with the key file to `/etc/crypttab` by running the following command:
        ```terminal
        [secure guest ~]$ echo “boot <UUID> /etc/luks/boot_keyfile.bin luks” >>  /etc/crypttab
        ```
    1.  Add the mount entry to the fstab file by running the following command:
        ```terminal
        [secure guest ~]$ echo “/dev/mapper/boot  /boot ext4 defaults 1 2” >> /etc/fstab
        ```
    1.  Mount the boot volume by running the following command:
        ```terminal
        [secure guest ~]$ mount /dev/mapper/boot /boot
        ```
    1.  Change into the boot directory by running the following command:
        ```terminal
        [secure guest ~]$ cd /boot
        ```
    1.  Restore the boot backup file by running the following command:
        ```terminal
        [secure guest /boot~]$ tar -xvf /root/boot_backup.tar
        ```
1.  Set up SSH key login for the local user and disable password login and root login. 
1.  Security hardening the VM.
    1.  To disable login on consoles by disabling serial and virtual TTYs, run the following commands:
        ```terminal
        [secure guest ~]$ mkdir -p /etc/systemd/system/serial-getty@.service.d
        ```
        ```terminal
        [secure guest ~]$ echo -e "[Unit]\nConditionKernelCommandLine=allowlocallogin" | tee /etc/systemd/system/serial-getty@.service.d/disable.conf 
        ```
        ```terminal
        [secure guest ~]$ mkdir -p /etc/systemd/system/autovt@.service.d
        ```
        ```terminal
        [secure guest ~]$ echo -e "[Unit]\nConditionKernelCommandLine=allowlocallogin" | tee /etc/systemd/system/autovt@.service.d/disable.conf
        ```
    1.  Disable debug, emergency, and rescue shells by running the following commands:
        ```terminal
        [secure guest ~]$ systemctl mask emergency.service
        ```
        ```terminal
        [secure guest ~]$ systemctl mask emergency.target 
        ```
        ```terminal
        [secure guest ~]$ systemctl mask rescue.service
        ```
        ```terminal
        [secure guest ~]$ systemctl mask rescue.target 
        ```
    1.  Disable the `virtio-rng` device by running the following command:
        ```terminal
        [secure guest ~]$ echo "blacklist virtio-rng" | tee /etc/modprobe.d/virtio-rng.conf
        ```
1.  Enable {{ ibm_title }} Secure Execution for the guest.
    1.  Copy the current command line to a file by running the following command:
        ```terminal
        [secure guest ~]$ cat /proc/cmdline > parmfile
        ```
    1.  Append the following parameters to the `parmfile`:
        ```terminal
        loglevel=0 systemd.show_status=0 panic=0 crashkernel=196M swiotlb=262144
        ```
    1.  Generate the {{ ibm_title }} SEL image on the `/se` partition by running the following command:
        ```terminal
        [secure guest ~]$ genprotimg -i <image> \
                                     -r <ramdisk> \
                                     -p <parmfile> \
                                     -k </path/to/host-key-doc.crt> \
                                     --cert <ibm_signkey>  \
                                     -o /se/secure-linux.img

        ```

        where:

        `<image>`
        :   Specifies the original guest kernel image.

        `<ramdisk>`
        :   Specifies the original initial RAM file system.

        `<parmfile>`
        :   Specifies the file that contains the kernel parameters.

        `</path/to/host-key-doc.crt>`
        :   Specifies the public host key document.

        `<ibm_signkey>`
        :   Specifies the {{ ibm_z_name }} signing-key certificate and the DigiCert intermediate certificate for the verification of the host key documents.

    1.  Update the boot configuration by running the following command:
        ```terminal
        [secure guest ~]$ zipl -i /se/secure-linux.img -t /se
        ```
    1.  Reboot the VM by running the following command:
        ```terminal
        [secure guest ~]$ reboot
        ```
    1.  Verify that the guest VM is secure by running the following command:
        ```terminal
        [secure guest ~]$ cat /sys/firmware/uv/prot_virt_guest
        ```

        Example output:
        ```terminal
        1
        ```

        The value of this attribute is 1 for Linux instances that detect their environment as consistent with that of a secure host. For other instances, the value is 0.