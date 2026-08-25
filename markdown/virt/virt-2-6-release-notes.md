{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ VirtProductName }} release notes {id="virt-2-6-release-notes"}
{%- set context = "virt-2-6-release-notes" %}

## About Red Hat {{ VirtProductName }} {id="_about_red_hat_virtproductname"}

Red Hat {{ VirtProductName }} enables you to bring traditional virtual machines (VMs) into {{ product_title }} where they run alongside containers, and are managed as native Kubernetes objects.

{{ VirtProductName }} is represented by the <img src="/_assets/images/Operator_Icon-OpenShift_Virtualization-5.png" alt="{{ VirtProductName }}" width="40" height="40"> logo.

You can use {{ VirtProductName }} with either the [OVN-Kubernetes](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#about-ovn-kubernetes) or the [OpenShiftSDN](/networking/openshift_sdn/about-openshift-sdn#about-openshift-sdn) default Container Network Interface (CNI) network provider.

Learn more about [what you can do with {{ VirtProductName }}](/virt/about-virt#about-virt).

{% leveloffset +2 %}{% include "./modules/virt-supported-cluster-version.md" %}{% endleveloffset %}

### Supported guest operating systems {id="virt-guest-os"}
{{ VirtProductName }} guests can use the following operating systems:

*   Red Hat Enterprise Linux 6, 7, and 8.
*   Microsoft Windows Server 2012 R2, 2016, and 2019.
*   Microsoft Windows 10.

Other operating system templates shipped with {{ VirtProductName }} are not supported.

## New and changed features {id="virt-2-6-new"}

*   OpenShift Virtualization is certified in Microsoft’s Windows Server Virtualization Validation Program (SVVP) to run Windows Server workloads.

    The SVVP Certification applies to:
    *   Red Hat Enterprise Linux CoreOS workers. In the Microsoft SVVP Catalog, they are named __Red Hat OpenShift Container Platform 4 on RHEL CoreOS__.
    *   Intel and AMD CPUs.
*   Virtual machines that have the `LiveMigratable` condition set to `True` and the `spec.evictionStrategy` field set to `LiveMigrate` are now migrated when a node is drained in preparation for maintenance. You can [set a node to maintenance mode in the CLI](/virt/node_maintenance/virt-setting-node-maintenance#virt-setting-node-maintenance) by running the `oc adm drain` command.
*   You can now [boot a virtual machine (VM) in Extensible Firmware Interface (EFI) mode](/virt/virtual_machines/advanced_vm_management/virt-efi-mode-for-vms#virt-efi-mode-for-vms).

    :::note

    {{ VirtProductName }} only supports a VM with Secure Boot when using EFI mode. If Secure Boot is not enabled, the VM crashes repeatedly. However, the VM might not support Secure Boot. Before you boot a VM, verify that it supports Secure Boot by checking the VM settings.
    
    :::


### Installation {id="virt-2-6-installation-new"}

*   Cluster administrators can now [configure node placement rules](/virt/install/virt-specifying-nodes-for-virtualization-components#virt-specifying-nodes-for-virtualization-components) for {{ VirtProductName }} components, including the [hostpath provisioner](/virt/install/virt-specifying-nodes-for-virtualization-components#node-placement-hpp_virt-specifying-nodes-for-virtualization-components).

### Storage {id="virt-2-6-storage-new"}

*   When you add a virtual machine disk to a persistent volume claim (PVC) that uses the `Filesystem` volume mode, the Containerized Data Importer (CDI) now reserves 5.5% of the PVC space for file system overhead. If the default value is not ideal for your use case, you can [change the percentage](/virt/virtual_machines/virtual_disks/virt-reserving-pvc-space-fs-overhead#virt-reserving-pvc-space-fs-overhead) that CDI reserves for this purpose.
*   When preparing local storage for a virtual machine disk image, a volume might be allocated from a different node than is required by the virtual machine. To prevent scheduling problems, the Containerized Data Importer now integrates with the Kubernetes `WaitForFirstConsumer` binding mode to ensure that volumes are allocated from the correct node.
*   The Containerized Data Importer can now [preallocate disk space](/virt/virtual_machines/virtual_disks/virt-using-preallocation-for-datavolumes#virt-using-preallocation-for-datavolumes) to import and upload data and create blank data volumes at a faster speed.
*   You can now control which network the Containerized Data Importer (CDI) uses when importing virtual machine disk images by adding the following annotation to the `metadata.annotations` field of a `DataVolume` object:

`k8s.v1.cni.cncf.io/networks: <network_name>`
:   If you use this annotation, the transfer pod will use both the default network from the cluster and the secondary Multus network.

### Web console {id="virt-2-6-web-new"}

*   The virtual machine wizard has been redesigned to simplify the process of [creating virtual machines](/virt/virtual_machines/virt-create-vms#virt-create-vms) by using preconfigured [virtual machine templates](/virt/vm_templates/virt-creating-vm-template#virt-creating-vm-template).
*   When you [create a virtual machine template with the interactive wizard](/virt/vm_templates/virt-creating-vm-template#virt-creating-template-wizard-web_virt-creating-vm-template), selecting the **Operating System** will automatically select the default **Flavor** and **Workload Type** for that operating system. Virtual machines created from a virtual machine template now have these details automatically selected.

## Notable technical changes {id="virt-2-6-changes"}

*   The procedure for [installing {{ VirtProductName }} in the web console](/virt/install/installing-virt-web#installing-virt-web) has been streamlined. You can now create the `HyperConverged` custom resource immediately after installing the {{ VirtProductName }} Operator by clicking **Create HyperConverged**.
*   Previously, there was a `spec.BareMetalPlatform` field in the `HyperConverged` object. This field has been removed.
*   The Containerized Data Importer (CDI) configuration parameters have moved from the `CDIConfig` object to the `CDI` object. All changes to the CDI configuration must now be made in the `spec.config` field of the `CDI` object.
*   Istio sidecar injection to transfer pods is now disabled by default. You can override the default option by using the following annotation in the `metadata.annotations` field of a `DataVolume` object:

`sidecar.istio.io/inject: “true”`
:    Set this option to enable sidecar injection to the transfer pods.

## Known issues {id="virt-2-6-known-issues"}

*   Some Containerized Data Importer (CDI) operations are currently not [preallocated](/virt/virtual_machines/virtual_disks/virt-using-preallocation-for-datavolumes#virt-using-preallocation-for-datavolumes) when requested. These include:
    *   Creating blank block disks
    *   Importing VMWare disk images
*   If a cloning operation is initiated before the source is available to be cloned, the operation stalls indefinitely. This is because the clone authorization expires before the cloning operation starts. ([**BZ#1855182**](https://bugzilla.redhat.com/show_bug.cgi?id=1855182))
    *   As a workaround, delete the `DataVolume` object that is requesting the clone. When the source is available, recreate the `DataVolume` object that you deleted so that the cloning operation can complete successfully.
*   The Containerized Data Importer and KubeVirt depend on QEMU which does not support NFS version 3. Therefore, only NFS version 4 is supported. ([**BZ#1892445**](https://bugzilla.redhat.com/show_bug.cgi?id=1892445))
*   The name of the Fedora PVC in the `openshift-virtualization-os-images` namespace is `fedora`, instead of `fedora32`. If you populated the `fedora32` PVC in {{ VirtProductname }} 2.5 or earlier, the virtual machine does not appear in the web console and you cannot use it to clone another virtual machine. ([**BZ#1913352**](https://bugzilla.redhat.com/show_bug.cgi?id=1913352))
    *   As a workaround, upload a Fedora image by naming the PVC `fedora` instead of `fedora32`.
*   When creating a HPP boot source, the data volume is `pending` with a `WaitForFirstConsumer` status if a user creates the boot source using any method except the **Upload local file (creates PVC)** option. ([**BZ#1929177**](https://bugzilla.redhat.com/show_bug.cgi?id=1929177))
    *   As a workaround, in the **Storage** → **Persistent Volume Claims** web console screen, edit the YAML of the underlying PVC of the data volume to add the `cdi.kubevirt.io/storage.bind.immediate.requested: "true"` annotation:
        ```yaml
        metadata:
          annotations: cdi.kubevirt.io/storage.bind.immediate.requested: "true"
        ```
*   If you use a Fedora image as a boot source, it is no longer attached to a template if the PVC that you used to attach the boot source was previously provisioned. ([**BZ#1907187**](https://bugzilla.redhat.com/show_bug.cgi?id=1907187)) ([**BZ#1913352**](https://bugzilla.redhat.com/show_bug.cgi?id=1913352))
    *   As a workaround, attach a new PVC with the name `fedora` to a template before using it to create virtual machines from boot sources.
*   If your {{ product_title }} cluster uses OVN-Kubernetes as the default Container Network Interface (CNI) provider, you cannot attach a Linux bridge or bonding to the default interface of a host because of a change in the host network topology of OVN-Kubernetes. ([**BZ#1885605**](https://bugzilla.redhat.com/show_bug.cgi?id=1885605))
    *   As a workaround, you can use a secondary network interface connected to your host, or switch to the OpenShift SDN default CNI provider.
*   Running virtual machines that cannot be live migrated might block an {{ product_title }} cluster upgrade. This includes virtual machines that use hostpath-provisioner storage or SR-IOV network interfaces. ([**BZ#1858777**](https://bugzilla.redhat.com/show_bug.cgi?id=1858777))
    *   As a workaround, you can reconfigure the virtual machines so that they can be powered off during a cluster upgrade. In the `spec` section of the virtual machine configuration file:
        1.  Remove the `evictionStrategy: LiveMigrate` field. See [Configuring virtual machine eviction strategy](/virt/live_migration/virt-configuring-vmi-eviction-strategy#virt-configuring-vmi-eviction-strategy) for more information on how to configure eviction strategy.
        1.  Set the `runStrategy` field to `Always`.
*   Live migration fails when nodes have different CPU models. Even in cases where nodes have the same physical CPU model, differences introduced by microcode updates have the same effect. This is because the default settings trigger host CPU passthrough behavior, which is incompatible with live migration. ([**BZ#1760028**](https://bugzilla.redhat.com/show_bug.cgi?id=1760028))
    *   As a workaround, set the default CPU model in the `kubevirt-config` config map, as shown in the following example:

        :::note

        You must make this change before starting the virtual machines that support live migration.
        
        :::

        1.  Open the `kubevirt-config` config map for editing by running the following command:
            ```terminal
            $ oc edit configmap kubevirt-config -n openshift-cnv
            ```
        1.  Edit the config map:
            ```yaml
            kind: ConfigMap
            metadata:
              name: kubevirt-config
            data:
              default-cpu-model: "<cpu-model>" (1)
            ```
            1.  Replace `<cpu-model>` with the actual CPU model value. You can determine this value by running `oc describe node <node>` for all nodes and looking at the `cpu-model-<name>` labels. Select the CPU model that is present on all of your nodes.
*   If you enter the wrong credentials for the RHV Manager while importing a RHV VM, the Manager might lock the admin user account because the `vm-import-operator` tries repeatedly to connect to the RHV API. ([**BZ#1887140**](https://bugzilla.redhat.com/show_bug.cgi?id=1887140))
    *   To unlock the account, log in to the Manager and enter the following command:
        ```terminal
        $ ovirt-aaa-jdbc-tool user unlock admin
        ```