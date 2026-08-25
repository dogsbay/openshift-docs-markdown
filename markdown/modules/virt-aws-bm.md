{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ VirtProductName }} on AWS bare metal {id="virt-aws-bm_{{ context }}"}

You can run {{ VirtProductName }} on an {{ aws_first }} bare metal {{ product_title }} cluster. {._abstract}


:::note

{{ VirtProductName }} is also supported on {{ product_rosa }} (ROSA) Classic clusters, which have the same configuration requirements as {{ aws_short }} bare-metal clusters.

:::

{% endif %}

{% if openshift_rosa or openshift_dedicated or openshift_rosa_hcp %}
{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ VirtProductName }} on {{ product_title }} {id="virt-aws-bm_{{ context }}"}
You can run {{ VirtProductName }} on
{%- if openshift_rosa or openshift_rosa_hcp %}
a
{% endif %}
{% if openshift_dedicated %}
an
{%- endif %}
 {{ product_title }} cluster. {._abstract}


Installing

:   *   You can install the cluster by using installer-provisioned infrastructure, ensuring that you specify bare-metal instance types for the worker nodes.
    For example, you can use the
{%- if not openshift_dedicated %}
    `c5n.metal`
{% endif %}
{% if openshift_dedicated %}
    `c3-standard-192-metal`
{%- endif %}
    type value for a machine based on x86_64 architecture.
{%- if openshift_dedicated %}

    :::note


    {{ VirtProductName }} on {{ gcp_short }} requires {{ product_title }} 4.21.5 and {{ VirtProductName }} Operator 4.21.1 or later.
    
    :::

{% endif %}
{% if not (openshift_dedicated or openshift_rosa_hcp or openshift_rosa) %}

    You specify bare-metal instance types by editing the `install-config.yaml` file.

For more information, see the {{ product_title }} documentation about installing on {{ aws_short }}.

{%- endif %}

Accessing virtual machines (VMs)

:   *   There is no change to how you access VMs by using the `virtctl` CLI tool or the {{ product_title }} web console.
    *   You can expose VMs by using a `NodePort` or `LoadBalancer` service.

    :::note


    The load balancer approach is preferable because {{ product_title }} automatically creates the load balancer in
{%- if not openshift_dedicated %}
    {{ aws_short }}
{% endif %}
{% if openshift_dedicated %}
    {{ gcp_short }}
{%- endif %}
    and manages its lifecycle. A security group is also created for the load balancer, and you can use annotations to attach existing security groups. When you remove the service, {{ product_title }} removes the load balancer and its associated resources.
    
    :::


{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}

Networking

:   *   You cannot use Single Root I/O Virtualization (SR-IOV) or bridge Container Network Interface (CNI) networks, including virtual LAN (VLAN). If your application requires a flat layer 2 network or control over the IP pool, consider using OVN-Kubernetes secondary overlay networks.
*   If your application requires a flat layer 2 network that does not need egress traffic, consider using OVN-Kubernetes secondary overlay networks with a `Layer2` topology.

{% endif %}

Storage
{%- if not openshift_dedicated %}
:   *   You can use any storage solution that is certified by the storage vendor to work with the underlying platform.
{% endif %}
{% if openshift_dedicated %}
    *   In {{ product_title }} on {{ gcp_short }}, you must ensure your StorageClass uses the GCP PD CSI driver or {{ gcp_short }} Filestore CSI driver.
    *   You can use {{ gcp_short }} Hyperdisk storage with {{ VirtProductName }} on {{ product_title }} on {{ gcp_short }}. {{ gcp_short }} Hyperdisk storage provides high performance and flexibility for VM workloads. For more information about using Hyperdisk storage, see "Storage configuration for OpenShift Virtualization 4.21.x on Google Cloud" in the _Additional resources_ section.
    *   You can use {{ gcp_short }} NetApp Volumes (GCNV) with {{ VirtProductName }} on {{ product_title }} on {{ gcp_short }}. GCNV provides NFS-based shared storage that supports `ReadWriteMany` access in `Filesystem` mode, which is required for features such as virtual machine live migration.
        *   Running {{ VirtProductName }} with GCNV storage requires {{ product_title }} 4.21 and {{ VirtProductName }} 4.21.2, and Trident 26.02.0 or later versions.
        *   Only the **Flex File** service level is supported in this release. When creating storage pools, select the **File** storage type. **Flex Unified** is not supported.
        *   Flex File volumes are NFS-only and support `volumeMode: Filesystem` exclusively. `volumeMode: Block` is not available with Flex File.
        *   GCNV Flex pools are limited to 50 volumes per pool. To support larger deployments, create multiple storage pools and list them all in the `TridentBackendConfig` file. For more information, see "GCNV storage pool limits" in the _Additional resources_ section.
        *   Flex File pools can be **Zonal** or **Regional**. Regional pools replicate volumes across zones but only support default performance, not custom. For more information on service levels and performance, see "GCNV service levels" in the _Additional resources_ section.
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp %}

        :::important


        {{ aws_short }} bare metal, {{ product_rosa }}, and {{ product_rosa }} classic architecture clusters might have different supported storage solutions. Ensure that you confirm support with your storage vendor.
        
        :::

{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
    *   Using Amazon Elastic File System (EFS) or Amazon Elastic Block Store (EBS) with {{ VirtProductName }} might cause performance and functionality limitations as shown in the following table:
**EFS and EBS performance and functionality limitations**

    | Feature 3+^ | EBS volume | EFS volume | Shared storage solutions |  | gp2 |
    | --- | --- | --- | --- | --- | --- |
    | gp3 | io2 |  |  | VM live migration | Not available |
    | Not available | Available | Available | Available | Fast VM creation by using cloning 3+^ | Available |
    | Not available | Available | VM backup and restore by using snapshots 3+^ | Available | Not available | Available |

    Consider using CSI storage, which supports ReadWriteMany (RWX), cloning, and snapshots to enable live migration, fast VM creation, and VM snapshots capabilities.

{% endif %}
{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}

Hosted control planes (HCPs)
:   *   You can run {{ VirtProductName }} on HCP clusters that use {{ aws_short }} bare-metal nodes. However, using {{ VirtProductName }} VMs as HCP nodes is not currently supported on {{ aws_short }}.
{% endif %}

{% endif %}