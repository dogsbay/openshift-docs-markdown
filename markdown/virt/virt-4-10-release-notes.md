{%- set _mod_docs_content_type = "ASSEMBLY" %}
# {{ VirtProductName }} release notes {id="virt-4-10-release-notes"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-4-10-release-notes" %}

## About Red Hat {{ VirtProductName }} {id="_about_red_hat_virtproductname"}

Red Hat {{ VirtProductName }} enables you to bring traditional virtual machines (VMs) into {{ product_title }} where they run alongside containers, and are managed as native Kubernetes objects.

{{ VirtProductName }} is represented by the <img src="/_assets/images/Operator_Icon-OpenShift_Virtualization-5.png" alt="{{ VirtProductName }}" width="40" height="40"> logo.

You can use {{ VirtProductName }} with either the [OVN-Kubernetes](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#about-ovn-kubernetes) or the [OpenShiftSDN](/networking/openshift_sdn/about-openshift-sdn#about-openshift-sdn) default Container Network Interface (CNI) network provider.

Learn more about [what you can do with {{ VirtProductName }}](/virt/about-virt#about-virt).

{% leveloffset +2 %}{% include "./modules/virt-supported-cluster-version.md" %}{% endleveloffset %}

### Supported guest operating systems {id="virt-guest-os"}
To view the supported guest operating systems for {{ VirtProductName }}, refer to [Certified Guest Operating Systems in Red Hat OpenStack Platform, Red Hat Virtualization and OpenShift Virtualization](https://access.redhat.com/articles/973163#ocpvirt).

## New and changed features {id="virt-4-10-new"}

*   OpenShift Virtualization is certified in Microsoft’s Windows Server Virtualization Validation Program (SVVP) to run Windows Server workloads.

    The SVVP Certification applies to:
    *   Red Hat Enterprise Linux CoreOS workers. In the Microsoft SVVP Catalog, they are named __Red Hat OpenShift Container Platform 4 on RHEL CoreOS__.
    *   Intel and AMD CPUs.

*   {{ VirtProductName }} is now integrated with OpenShift Service Mesh. You can [connect virtual machines to a service mesh](/virt/virtual_machines/vm_networking/virt-connecting-vm-to-service-mesh#virt-connecting-vm-to-service-mesh) to monitor, visualize, and control traffic between pods that run virtual machine workloads on the default pod network with IPv4.

### Quick starts {id="virt-4-10-quick-starts"}

*   Quick start tours are available for several {{ VirtProductName }} features. To view the tours, click the **Help** icon **?** in the menu bar on the header of the {{ VirtProductName }} console and then select **Quick Starts**. You can filter the available tours by entering the `virtualization` keyword in the **Filter** field.

### Installation {id="virt-4-10-installation-new"}

*   {{ VirtProductName }} workloads, such as `virt-launcher` pods, now automatically update if they support live migration. You can [configure workload update strategies](/virt/upgrading-virt#configuring-workload-updates_upgrading-virt) or opt out of future automatic updates by editing the `HyperConverged` custom resource.

*   You can now use {{ VirtProductName }} with [single node clusters](/virt/install/preparing-cluster-for-virt#virt-single-node-cluster_preparing-cluster-for-virt), also known as Single Node OpenShift (SNO).

    :::note

    Single node clusters are not configured for high-availability operation, which results in significant changes to {{ VirtProductName }} behavior.
    
    :::


*   Resource requests and priority classes are now defined for all {{ VirtProductName }} control plane components.

### Networking {id="virt-4-10-networking-new"}

*   You can now [configure multiple nmstate-enabled nodes concurrently](/virt/node_network/virt-updating-node-network-config#virt-creating-interface-on-nodes_virt-updating-node-network-config) by using a single `NodeNetworkConfigurationPolicy` manifest.

*   [Live migration](/virt/live_migration/virt-live-migration#virt-live-migration) is now supported by default for virtual machines that are attached to an SR-IOV network interface.

### Storage {id="virt-4-10-storage-new"}

*   [Online snapshots](/virt/virtual_machines/virtual_disks/virt-managing-vm-snapshots#virt-managing-vm-snapshots) are supported for virtual machines that have hot-plugged virtual disks. However, hot-plugged disks that are not in the virtual machine specification are not included in the snapshot.

*   You can use the [Kubernetes Container Storage Interface (CSI) driver](/virt/virtual_machines/virtual_disks/virt-configuring-local-storage-for-vms#virt-configuring-local-storage-for-vms) with the hostpath provisioner (HPP)  to configure local storage for your virtual machines. Using the CSI driver minimizes disruption to your existing {{ product_title }} nodes and clusters when configuring local storage.

### Web console {id="virt-4-10-web-new"}

## Deprecated and removed features {id="virt-4-10-deprecated-removed"}

### Deprecated features {id="virt-4-10-deprecated"}

Deprecated features are included in the current release and supported. However, they will be removed in a future release and are not recommended for new deployments.

*   In a future release, support for the legacy HPP custom resource, and the associated storage class, will be deprecated. Beginning in {{ VirtProductName }} {{ VirtVersion }}, the HPP Operator uses the Kubernetes Container Storage Interface (CSI) driver to configure local storage. The Operator continues to support the existing (legacy) format of the HPP custom resource and the associated storage class. If you use the HPP Operator, plan to [create a storage class for the CSI driver](/virt/virtual_machines/virtual_disks/virt-configuring-local-storage-for-vms#virt-configuring-local-storage-for-vms) as part of your migration strategy.

### Removed features {id="virt-4-10-removed"}

Removed features are not supported in the current release.

*   The VM Import Operator has been removed from {{ VirtProductName }} with this release. It is replaced by the [Migration Toolkit for Virtualization](https://access.redhat.com/documentation/en-us/migration_toolkit_for_virtualization/2.2).

*   The {{ VirtProductName }} dashboard provides resource consumption data for virtual machines and associated pods. The visualization metrics displayed in the {{ VirtProductName }} dashboard are based on [Prometheus Query Language (PromQL) queries](/virt/logging_events_monitoring/virt-prometheus-queries#virt-prometheus-queries).

## Technology Preview features {id="virt-4-10-technology-preview"}

Some features in this release are currently in Technology Preview. These experimental features are not intended for production use. Note the following scope of support on the Red Hat Customer Portal for these features:

[Technology Preview Features Support Scope](https://access.redhat.com/support/offerings/techpreview)

*   You can now use the Red Hat Enterprise Linux 9 Alpha template to create virtual machines.
*   You can now [deploy {{ VirtProductName }} on AWS bare metal nodes](https://access.redhat.com/articles/6409731).
*   {{ VirtProductName }} has [critical alerts](/virt/logging_events_monitoring/virt-virtualization-alerts#virt-virtualization-alerts) that inform you when a problem occurs that requires immediate attention. Now, each alert has a corresponding description of the problem, a reason for why the alert is occurring, a troubleshooting process to diagnose the source of the problem, and steps for resolving the alert.
*   A cluster administrator can now back up namespaces that contain VMs by using the [OpenShift API for Data Protection](/virt/backup_restore/virt-backup-restore-overview#virt-backup-restore-overview) with the `kubevirt` plug-in.
*   Administrators can now declaratively [create and expose mediated devices](/virt/virtual_machines/advanced_vm_management/virt-configuring-mediated-devices#virt-configuring-mediated-devices) such as virtual graphics processing units (vGPUs) by editing the `HyperConverged` CR. Virtual machine owners can then assign these devices to VMs.

*   You can [transfer the static IP configuration of the NIC attached to the bridge](/virt/node_network/virt-updating-node-network-config#capturing-nic-static-ip_virt-updating-node-network-config) by applying a single `NodeNetworkConfigurationPolicy` manifest to the cluster.

*   You can now install {{ VirtProductName }} on IBM Cloud bare-metal servers. Bare-metal servers offered by other cloud providers are not supported.

## Bug fixes {id="virt-4-10-bug-fixes"}

## Known issues {id="virt-4-10-known-issues"}

*   The web console does not display virtual machine templates that are deployed to a custom namespace. Only templates deployed to the default namespace will display in the web console. ([**BZ#2056623**](https://bugzilla.redhat.com/show_bug.cgi?id=2054650))
    *   As a workaround, avoid deploying templates to a custom namespace.

*   If you hot-plug a virtual disk and then force delete the `virt-launcher` pod, you might lose data. This is due to a race condition that can cause the VM disk’s contents to be wiped from the persistent volume. ([**BZ#2007397**](https://bugzilla.redhat.com/show_bug.cgi?id=2007397))

*   Editing a virtual machine fails if the VM references a deleted template that was provided by {{ VirtProductName }} before version 4.8. In {{ VirtProductName }} 4.8 and later, deleted {{ VirtProductName }}-provided templates are automatically recreated by the {{ VirtProductName }} Operator.
*   If a cloning operation is initiated before the source is available to be cloned, the operation stalls indefinitely. This is because the clone authorization expires before the cloning operation starts. ([**BZ#1855182**](https://bugzilla.redhat.com/show_bug.cgi?id=1855182))
    *   As a workaround, delete the `DataVolume` object that is requesting the clone. When the source is available, recreate the `DataVolume` object that you deleted so that the cloning operation can complete successfully.
*   If your {{ product_title }} cluster uses OVN-Kubernetes as the default Container Network Interface (CNI) provider, you cannot attach a Linux bridge or bonding to the default interface of a host because of a change in the host network topology of OVN-Kubernetes. ([**BZ#1885605**](https://bugzilla.redhat.com/show_bug.cgi?id=1885605))
    *   As a workaround, you can use a secondary network interface connected to your host, or switch to the OpenShift SDN default CNI provider.

*   Running virtual machines that cannot be live migrated might block an {{ product_title }} cluster upgrade. This includes virtual machines that use hostpath provisioner storage or SR-IOV network interfaces.
    *   As a workaround, you can reconfigure the virtual machines so that they can be powered off during a cluster upgrade. In the `spec` section of the virtual machine configuration file:
        1.  Remove the `evictionStrategy: LiveMigrate` field. See [Configuring virtual machine eviction strategy](/virt/live_migration/virt-configuring-vmi-eviction-strategy#virt-configuring-vmi-eviction-strategy) for more information on how to configure eviction strategy.
        1.  Set the `runStrategy` field to `Always`.
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
*   If you run {{ VirtProductName }} 2.6.5 with {{ product_title }} 4.8 or later, various issues occur. You can avoid these issues by upgrading {{ VirtProductName }} to version 4.8 or later.
    *   In the web console, if you navigate to the **Virtualization** page and select **Create** -> **With YAML** the following error message is displayed:
        ```text
        The server doesn't have a resource type "kind: VirtualMachine, apiVersion: kubevirt.io/v1"
        ```
        *   As a workaround, edit the `VirtualMachine` manifest so the `apiVersion` is `kubevirt.io/v1alpha3`. For example:
            ```yaml
            apiVersion: kubevirt.io/v1alpha3
            kind: VirtualMachine
            metadata:
              annotations:
            ...
            ```

            ([**BZ#1979114**](https://bugzilla.redhat.com/show_bug.cgi?id=1979114))
    *   When connecting to the VNC console by using the {{ VirtProductName }} web console, the VNC console always fails to respond.
        *   As a workaround, create the virtual machine from the CLI or upgrade to {{ VirtProductName }} 4.8.

            ([**BZ#1977037**](https://bugzilla.redhat.com/show_bug.cgi?id=1977037))

*   If a single node contains more than 50 images, pod scheduling might be imbalanced across nodes. This is because the list of images on a node is shortened to 50 by default.
    *   As a workaround, you can disable the image limit by [editing the `KubeletConfig` object](/nodes/nodes/nodes-nodes-managing#nodes-nodes-managing) and setting the value of `nodeStatusMaxImages` to `-1`. ([**BZ#1984442**](https://bugzilla.redhat.com/show_bug.cgi?id=1984442))