{%- set _mod_docs_content_type = "ASSEMBLY" %}
# {{ VirtProductName }} release notes {id="virt-4-9-release-notes"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-4-9-release-notes" %}

## About Red Hat {{ VirtProductName }} {id="_about_red_hat_virtproductname"}

Red Hat {{ VirtProductName }} enables you to bring traditional virtual machines (VMs) into {{ product_title }} where they run alongside containers, and are managed as native Kubernetes objects.

{{ VirtProductName }} is represented by the <img src="/_assets/images/Operator_Icon-OpenShift_Virtualization-5.png" alt="{{ VirtProductName }}" width="40" height="40"> logo.

You can use {{ VirtProductName }} with either the [OVN-Kubernetes](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#about-ovn-kubernetes) or the [OpenShiftSDN](/networking/openshift_sdn/about-openshift-sdn#about-openshift-sdn) default Container Network Interface (CNI) network provider.

Learn more about [what you can do with {{ VirtProductName }}](/virt/about-virt#about-virt).

{% leveloffset +2 %}{% include "./modules/virt-supported-cluster-version.md" %}{% endleveloffset %}

### Supported guest operating systems {id="virt-guest-os"}
{{ VirtProductName }} guests can use the following operating systems:

*   Red Hat Enterprise Linux 6, 7, and 8.
*   Red Hat Enterprise Linux 9 Alpha (Technology Preview).
*   Microsoft Windows Server 2012 R2, 2016, and 2019.
*   Microsoft Windows 10.

Other operating system templates shipped with {{ VirtProductName }} are not supported.

## New and changed features {id="virt-4-9-new"}

*   {{ VirtProductName }} is certified in Microsoft’s Windows Server Virtualization Validation Program (SVVP) to run Windows Server workloads.

    The SVVP Certification applies to:
    *   Red Hat Enterprise Linux CoreOS workers. In the Microsoft SVVP Catalog, they are named __Red Hat OpenShift Container Platform 4 on RHEL CoreOS__.
    *   Intel and AMD CPUs.

*   High-performance virtual machine templates are now available for [supported Windows operating systems](#supported-guest-operating-systems).

*   If your {{ VirtProductName }} Operator subscription used any update channel other than **stable**, it is now automatically subscribed to the **stable** channel. This single update channel delivers z-stream and minor version updates and ensures that your {{ VirtProductName }} and {{ product_title }} versions are compatible.

*   You can now use the `virtctl guestfs` command [to maintain, repair, and debug virtual machine disks](/virt/virt-using-the-cli-tools.html#virt-creating-pvc-with-virtctl-guestfs_virt-using-the-cli-tools).

*   You can now [boot virtual machines with EFI mode](/virt/virtual_machines/advanced_vm_management/virt-efi-mode-for-vms.html#virt-booting-vms-efi-mode_virt-efi-mode-for-vms) without mandatory Secure Boot.

### Quick starts {id="virt-4-9-quick-starts"}

*   Quick start tours are available for several {{ VirtProductName }} features. To view the tours, click the **Help** icon **?** in the menu bar on the header of the {{ VirtProductName }} console and then select **Quick Starts**. You can filter the available tours by entering the `virtualization` keyword in the **Filter** field.

### Installation {id="virt-4-9-installation-new"}

*   You can now deploy {{ VirtProductName }} on [FIPS-enabled clusters](/installing/installing-fips#installing-fips).
*   You can now download the [`virtctl` client](/virt/install/virt-enabling-virtctl#virt-enabling-virtctl) even if the cluster is offline by using the `ConsoleCLIDownload` custom resource (CR).

### Networking {id="virt-4-9-networking-new"}
*   You can now [enable or disable MAC spoof filtering](/virt/virtual_machines/vm_networking/virt-attaching-vm-multiple-networks#virt-creating-bridge-nad-cli_virt-attaching-multiple-networks) on secondary networks by configuring a Linux bridge network attachment definition in the CLI.

### Storage {id="virt-4-9-storage-new"}

*   You can use storage profiles to set a default cloning method for a storage class, creating a [cloning strategy](/virt/virtual_machines/virtual_disks/virt-creating-data-volumes#virt-customizing-storage-profile-default-cloning-strategy_virt-creating-data-volumes). Setting cloning strategies can be helpful, for example, if your storage vendor only supports certain cloning methods. It also allows you to select a method that limits resource usage or maximizes performance. In addition to previously available cloning methods such as snapshots and host-assisted cloning, you can now specify `csi-clone` as the default cloning behavior, which uses the CSI clone API to efficiently clone an existing volume without using an interim volume snapshot.

*   You can now take a [snapshot of an online virtual machine](/virt/virtual_machines/virtual_disks/virt-managing-vm-snapshots#virt-about-vm-snapshots_virt-managing-vm-snapshots). If the QEMU guest agent is installed, the file system is quiesced when taking the snapshot, maximizing data integrity.

### Web console {id="virt-4-9-web-new"}

*   You can now [automate your Windows virtual machine setup](/virt/virtual_machines/virt-create-vms#virt-creating-vm-wizard-web_virt-create-vms) by uploading answer files in XML format in the **Advanced** -> **SysPrep** section of the **Create virtual machine from template** wizard.

*   You can use the [{{ VirtProductName }} dashboard](/virt/logging_events_monitoring/virt-reviewing-vm-dashboard#virt-reviewing-vm-dashboard) in the web console to get data on resource consumption for virtual machines and associated pods. The dashboard provides visual representations of cluster metrics so you can quickly understand the state of your cluster.

## Removed features {id="virt-4-9-removed"}

Removed features are not supported in the current release.

*   Importing a single virtual machine from Red Hat Virtualization (RHV) or VMware is removed from {{ VirtProductName }} 4.9. This feature is replaced by the [Migration Toolkit for Virtualization](https://access.redhat.com/documentation/en-us/migration_toolkit_for_virtualization).

## Technology Preview features {id="virt-4-9-technology-preview"}

Some features in this release are currently in Technology Preview. These experimental features are not intended for production use. Note the following scope of support on the Red Hat Customer Portal for these features:

[Technology Preview Features Support Scope](https://access.redhat.com/support/offerings/techpreview)

*   You can now enable automatic updates for {{ VirtProductName }} workloads, such as `virt-launcher` pods. [Configure workload update strategies](/virt/upgrading-virt#configuring-workload-updates_upgrading-virt) by editing the `HyperConverged` custom resource.
*   You can now [hot-plug and hot-unplug virtual disks](/virt/virtual_machines/virtual_disks/virt-hot-plugging-virtual-disks#virt-hot-plugging-virtual-disks) when you want to add or remove them from your virtual machine without stopping the virtual machine instance.
*   You can now use the Red Hat Enterprise Linux 9 Alpha template to create virtual machines.

## Known issues {id="virt-4-9-known-issues"}

*   If you hot-plug a virtual disk and then force delete the `virt-launcher` pod, you might lose data. This is due to a race condition that can cause the VM disk’s contents to be wiped from the persistent volume. ([**BZ#2007397**](https://bugzilla.redhat.com/show_bug.cgi?id=2007397))

*   If a cloning operation is initiated before the source is available to be cloned, the operation stalls indefinitely. This is because the clone authorization expires before the cloning operation starts. ([**BZ#1855182**](https://bugzilla.redhat.com/show_bug.cgi?id=1855182))
    *   As a workaround, delete the `DataVolume` object that is requesting the clone. When the source is available, recreate the `DataVolume` object that you deleted so that the cloning operation can complete successfully.
*   If your {{ product_title }} cluster uses OVN-Kubernetes as the default Container Network Interface (CNI) provider, you cannot attach a Linux bridge or bonding to the default interface of a host because of a change in the host network topology of OVN-Kubernetes. ([**BZ#1885605**](https://bugzilla.redhat.com/show_bug.cgi?id=1885605))
    *   As a workaround, you can use a secondary network interface connected to your host, or switch to the OpenShift SDN default CNI provider.
*   Running virtual machines that cannot be live migrated might block an {{ product_title }} cluster upgrade. This includes virtual machines that use hostpath-provisioner storage or SR-IOV network interfaces. ([**BZ#1858777**](https://bugzilla.redhat.com/show_bug.cgi?id=1858777))
    *   As a workaround, you can reconfigure the virtual machines so that they can be powered off during a cluster upgrade. In the `spec` section of the virtual machine configuration file:
        1.  Remove the `evictionStrategy: LiveMigrate` field. See [Configuring virtual machine eviction strategy](/virt/live_migration/virt-configuring-vmi-eviction-strategy#virt-configuring-vmi-eviction-strategy) for more information on how to configure eviction strategy.
        1.  Set the `runStrategy` field to `Always`.
*   Live migration fails when nodes have different CPU models. Even in cases where nodes have the same physical CPU model, differences introduced by microcode updates have the same effect. This is because the default settings trigger host CPU passthrough behavior, which is incompatible with live migration. ([**BZ#1760028**](https://bugzilla.redhat.com/show_bug.cgi?id=1760028))
    *   As a workaround, set the default CPU model by running the following command:

        :::note

        You must make this change before starting the virtual machines that support live migration.
        
        :::

        ```terminal
        $ oc annotate --overwrite -n openshift-cnv hyperconverged kubevirt-hyperconverged kubevirt.kubevirt.io/jsonpatch='[
          {
              "op": "add",
              "path": "/spec/configuration/cpuModel",
              "value": "<cpu_model>" (1)
          }
        ]'
        ```
        1.  Replace `<cpu_model>` with the actual CPU model value. You can determine this value by running `oc describe node <node>` for all nodes and looking at the `cpu-model-<name>` labels. Select the CPU model that is present on all of your nodes.
*   If you enter the wrong credentials for the RHV Manager while importing a RHV VM, the Manager might lock the admin user account because the `vm-import-operator` tries repeatedly to connect to the RHV API. ([**BZ#1887140**](https://bugzilla.redhat.com/show_bug.cgi?id=1887140))
    *   To unlock the account, log in to the Manager and enter the following command:
        ```terminal
        $ ovirt-aaa-jdbc-tool user unlock admin
        ```

*   RHV VM import fails if the VM affinity policy is `Migratable` even when live migration is enabled in {{ VirtProductName }}. VM import succeeds if the affinity policy is `Pinned`. ([**BZ#1977277**](https://bugzilla.redhat.com/show_bug.cgi?id=1977277))

*   Selecting **Create** -> **With Import wizard** on the **Virtualization** page of the {{ VirtProductName }} console displays the following warning message:
    ```
    Could not load VirtualMachines
    No model registered for VirtualMachines
    ```

    You can ignore this message. It does not affect VM import. ([**BZ#1974812**](https://bugzilla.redhat.com/show_bug.cgi?id=1974812))