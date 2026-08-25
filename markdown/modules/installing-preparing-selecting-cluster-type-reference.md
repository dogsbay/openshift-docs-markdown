{%- set _mod_docs_content_type = "REFERENCE" %}
# Selecting a cluster installation type {id="installing-preparing-selecting-cluster-type_{{ context }}"}

Decide what kind of installation process to follow based on your infrastructure, experience, and security requirements. {._abstract}

Before you install an {{ product_title }} cluster, you need to select the best installation instructions to follow. Think about your answers to the following questions to select the best option.

## Do you want to install and manage an {{ product_title }} cluster yourself? {id="installing-preparing-install-manage_{{ context }}"}

If you want to install and manage {{ product_title }} yourself, you can install it on the following platforms:

*   Amazon Web Services (AWS) on 64-bit x86 instances
{%- if not openshift_origin %}
*   Amazon Web Services (AWS) on 64-bit ARM instances
{%- endif %}
*   Microsoft Azure on 64-bit x86 instances
*   Microsoft Azure on 64-bit ARM instances
*   Microsoft Azure Stack Hub
*   {{ gcp_first }} on 64-bit x86 instances
*   {{ gcp_first }} on 64-bit ARM instances
*   {{ rh_openstack_first }}
*   {{ ibm_cloud_name }}
*   {{ ibm_z_name }} or {{ ibm_linuxone_name }} with z/VM
*   {{ ibm_z_name }} or {{ ibm_linuxone_name }} with {{ op_system_base_full }} KVM
*   {{ ibm_z_name }} or {{ ibm_linuxone_name }} in an LPAR
*   {{ ibm_power_name }}
*   {{ ibm_power_server_name }}
*   Nutanix
*   VMware vSphere
*   Bare metal or other platform agnostic infrastructure

You can deploy an {{ product_title }} 4 cluster to both on-premise hardware and to cloud hosting services, but all of the machines in a cluster must be in the same data center or cloud hosting service.

If you want to use {{ product_title }} but you do not want to manage the cluster yourself, you can choose from several managed service options. If you want a cluster that is fully managed by Red Hat, you can use [OpenShift Dedicated](https://www.openshift.com/products/dedicated/). You can also use OpenShift as a managed service on {{ azure_short }}, {{ aws_short }}, {{ ibm_cloud_name }}, or {{ gcp_full }}. For more information about managed services, see the [OpenShift Products](https://www.openshift.com/products) page. If you install an {{ product_title }} cluster with a cloud virtual machine as a virtual bare metal, the corresponding cloud-based storage is not supported.

## Have you used {{ product_title }} 3 and want to use {{ product_title }} 4? {id="installing-preparing-migrate_{{ context }}"}

If you used {{ product_title }} 3 and want to try {{ product_title }} 4, you need to understand how different {{ product_title }} 4 is. {{ product_title }} 4 weaves the Operators that package, deploy, and manage Kubernetes applications and the operating system that the platform runs on, {{ op_system_first }}, together seamlessly. Instead of deploying machines and configuring their operating systems so that you can install {{ product_title }} on them, the {{ op_system }} operating system is an integral part of the {{ product_title }} cluster. Deploying the operating system for the cluster machines is part of the installation process for {{ product_title }}. See [Differences between {{ product_title }} 3 and 4](/migrating_from_ocp_3_to_4/planning-migration-3-4#migration-comparing-ocp-3-4).

Because you need to provision machines as part of the {{ product_title }} cluster installation process, you cannot upgrade an {{ product_title }} 3 cluster to {{ product_title }} 4. Instead, you must create a new {{ product_title }} 4 cluster and migrate your {{ product_title }} 3 workloads to them. For more information about migrating, see [Migrating from {{ product_title }} 3 to 4 overview](/migrating_from_ocp_3_to_4/index#migration-from-version-3-to-4-overview). Because you must migrate to {{ product_title }} 4, you can use any type of production cluster installation process to create your new cluster.

## Do you want to use existing components in your cluster? {id="installing-preparing-existing-components_{{ context }}"}

Because the operating system is integral to {{ product_title }}, it is easier to let the installation program for {{ product_title }} stand up all of the infrastructure. These are called _installer provisioned infrastructure_ installations. In this type of installation, you can provide some existing infrastructure to the cluster, but the installation program deploys all of the machines that your cluster initially needs.

You can deploy an installer-provisioned infrastructure cluster without specifying any customizations to the cluster or its underlying machines to [AWS](/installing/installing_aws/ipi/installing-aws-default#installing-aws-default), [Azure](/installing/installing_azure/ipi/installing-azure-default#installing-azure-default), [Azure Stack Hub](/installing/installing_azure_stack_hub/ipi/installing-azure-stack-hub-default#installing-azure-stack-hub-default), [{{ gcp_short }}](/installing/installing_gcp/installing-gcp-default#installing-gcp-default), [Nutanix](/installing/installing_nutanix/installing-nutanix-installer-provisioned#installing-nutanix-installer-provisioned).

If you need to perform basic configuration for your installer-provisioned infrastructure cluster, such as the instance type for the cluster machines, you can customize an installation for [AWS](/installing/installing_aws/ipi/installing-aws-customizations#installing-aws-customizations), [Azure](/installing/installing_azure/ipi/installing-azure-customizations#installing-azure-customizations), [{{ gcp_short }}](/installing/installing_gcp/installing-gcp-customizations#installing-gcp-customizations), [Nutanix](/installing/installing_nutanix/installing-nutanix-installer-provisioned#installing-nutanix-installer-provisioned).

For installer-provisioned infrastructure installations, you can use an existing [VPC in AWS](/installing/installing_aws/ipi/installing-aws-vpc#installing-aws-vpc), [vNet in Azure](/installing/installing_azure/ipi/installing-azure-vnet#installing-azure-vnet), or [VPC in {{ gcp_short }}](/installing/installing_gcp/installing-gcp-vpc#installing-gcp-vpc). You can also reuse part of your networking infrastructure so that your cluster in [AWS](/installing/installing_aws/ipi/installing-aws-customizations#installing-aws-customizations), [Azure](/installing/installing_azure/ipi/installing-azure-customizations#installing-azure-customizations), [{{ gcp_short }}](/installing/installing_gcp/installing-gcp-customizations#installing-gcp-customizations) can coexist with existing IP address allocations in your environment and integrate with existing MTU and VXLAN configurations. If you have existing accounts and credentials on these clouds, you can re-use them, but you might need to modify the accounts to have the required permissions to install {{ product_title }} clusters on them.

You can use the installer-provisioned infrastructure method to create appropriate machine instances on your hardware for [vSphere](/installing/installing_vsphere/ipi/installing-vsphere-installer-provisioned#installing-vsphere-installer-provisioned), and [bare metal](/installing/installing_bare_metal/ipi/ipi-install-overview#ipi-install-overview). Additionally, for [vSphere](/installing/installing_vsphere/ipi/installing-vsphere-installer-provisioned-customizations#installing-vsphere-installer-provisioned-customizations), you can also customize additional network parameters during installation.

For some installer-provisioned infrastructure installations, for example on the {{ vmw_first }} and bare metal platforms, the external traffic that reaches the ingress virtual IP (VIP) is not balanced between the default `IngressController` replicas. For {{ vmw_short }}  and bare-metal installer-provisioned infrastructure installations where exceeding the baseline `IngressController` router performance is expected, you must configure an external load balancer. Configuring an external load balancer achieves the performance of multiple `IngressController` replicas. For more information about the baseline `IngressController` performance, see [Baseline Ingress Controller (router) performance](/scalability_and_performance/optimization/routing-optimization#baseline-router-performance_routing-optimization). For more information about configuring an external load balancer, see [Configuring a user-managed load balancer](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#nw-osp-configuring-external-load-balancer_ipi-install-installation-workflow).

If you want to reuse extensive cloud infrastructure, you can complete a _user-provisioned infrastructure_ installation. With these installations, you manually deploy the machines that your cluster requires during the installation process. If you perform a user-provisioned infrastructure installation on [AWS](/installing/installing_aws/upi/installing-aws-user-infra#installing-aws-user-infra), [Azure](/installing/installing_azure/upi/installing-azure-user-infra#installing-azure-user-infra), [Azure Stack Hub](/installing/installing_azure_stack_hub/upi/installing-azure-stack-hub-user-infra#installing-azure-stack-hub-user-infra), you can use the provided templates to help you stand up all of the required components. You can also reuse a shared [VPC on {{ gcp_short }}](/installing/installing_gcp/installing-gcp-user-infra-vpc#installing-gcp-user-infra-vpc). Otherwise, you can use the [provider-agnostic](/installing/installing_platform_agnostic/installing-platform-agnostic#installing-platform-agnostic) installation method to deploy a cluster into other clouds.

You can also complete a user-provisioned infrastructure installation on your existing hardware. If you use [{{ rh_openstack }}](/installing/installing_openstack/installing-openstack-user#installing-openstack-user), [{{ ibm_z_name }} or {{ ibm_linuxone_name }}](/installing/installing_ibm_z/upi/installing-ibm-z#installing-ibm-z), [{{ ibm_z_name }} and {{ ibm_linuxone_name }} with {{ op_system_base }} KVM](/installing/installing_ibm_z/upi/installing-ibm-z-kvm#installing-ibm-z-kvm), [{{ ibm_z_name }} and {{ ibm_linuxone_name }} in an LPAR](/installing/installing_ibm_z/upi/installing-ibm-z-lpar#installing-ibm-z-lpar), [{{ ibm_power_title }}](/installing/installing_ibm_power/installing-ibm-power#installing-ibm-power), or [vSphere](/installing/installing_vsphere/upi/installing-vsphere#installing-vsphere), use the specific installation instructions to deploy your cluster. If you use other supported hardware, follow the [bare metal installation](/installing/installing_bare_metal/upi/installing-bare-metal#installing-bare-metal) procedure. For some of these platforms, such as [vSphere](/installing/installing_vsphere/upi/installing-vsphere#installing-vsphere) and [bare metal](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installing-bare-metal-network-customizations), you can also customize additional network parameters during installation.

## Do you need extra security for your cluster? {id="installing-preparing-security_{{ context }}"}

If you use a user-provisioned installation method, you can configure a proxy for your cluster. The instructions are included in each installation procedure.

If you want to prevent your cluster on a public cloud from exposing endpoints externally, you can deploy a private cluster with installer-provisioned infrastructure on [AWS](/installing/installing_aws/ipi/installing-aws-private#installing-aws-private), [Azure](/installing/installing_azure/ipi/installing-azure-private#installing-azure-private), or [{{ gcp_short }}](/installing/installing_gcp/installing-gcp-private#installing-gcp-private).

If you need to install your cluster that has limited access to the internet, such as a disconnected or restricted network cluster, you can [mirror the installation packages](/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images) and install the cluster from them. Follow detailed instructions for user-provisioned infrastructure installations into restricted networks for [AWS](/installing/installing_aws/upi/installing-restricted-networks-aws#installing-restricted-networks-aws), [{{ gcp_short }}](/installing/installing_gcp/installing-restricted-networks-gcp#installing-restricted-networks-gcp), [{{ ibm_z_name }} or {{ ibm_linuxone_name }}](/installing/installing_ibm_z/upi/installing-restricted-networks-ibm-z#installing-restricted-networks-ibm-z), [{{ ibm_z_name }} or {{ ibm_linuxone_name }} with {{ op_system_base }} KVM](/installing/installing_ibm_z/upi/installing-restricted-networks-ibm-z-kvm#installing-restricted-networks-ibm-z-kvm), [{{ ibm_z_name }} or {{ ibm_linuxone_name }} in an LPAR](/installing/installing_ibm_z/upi/installing-restricted-networks-ibm-z-lpar#installing-restricted-networks-ibm-z-lpar), [{{ ibm_power_name }}](/installing/installing_ibm_power/installing-restricted-networks-ibm-power#installing-restricted-networks-ibm-power), [vSphere](/installing/installing_vsphere/upi/installing-restricted-networks-vsphere#installing-restricted-networks-vsphere), or [bare metal](/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installing-restricted-networks-bare-metal). You can also install a cluster into a restricted network by using installer-provisioned infrastructure by following detailed instructions for [AWS](/installing/installing_aws/ipi/installing-restricted-networks-aws-installer-provisioned#installing-restricted-networks-aws-installer-provisioned), [{{ gcp_short }}](/installing/installing_gcp/installing-restricted-networks-gcp-installer-provisioned#installing-restricted-networks-gcp-installer-provisioned), [{{ ibm_cloud_name }}](/installing/installing_ibm_cloud/installing-ibm-cloud-restricted#installing-ibm-cloud-restricted), [Nutanix](/installing/installing_nutanix/installing-restricted-networks-nutanix-installer-provisioned#installing-restricted-networks-nutanix-installer-provisioned), [{{ rh_openstack }}](/installing/installing_openstack/installing-openstack-installer-restricted#installing-openstack-installer-restricted), and [vSphere](/installing/installing_vsphere/ipi/installing-restricted-networks-installer-provisioned-vsphere#installing-restricted-networks-installer-provisioned-vsphere).

If you need to deploy your cluster to an [AWS GovCloud region](/installing/installing_aws/ipi/installing-aws-specialized-region#installing-aws-specialized-region), [AWS China region](/installing/installing_aws/ipi/installing-aws-specialized-region#installing-aws-specialized-region), or [Azure government region](/installing/installing_azure/ipi/installing-azure-government-region#installing-azure-government-region), you can configure those custom regions during an installer-provisioned infrastructure installation.

{% if not openshift_origin %}
You can also configure the cluster machines to use the {{ op_system_base }} cryptographic libraries that have been submitted to NIST for [FIPS 140-2/140-3 Validation](/installing/overview/installing-fips#installing-fips) during installation.


:::important

When running {{ op_system_base_full }} or {{ op_system_first }} booted in FIPS mode, {{ product_title }} core components use the {{ op_system_base }} cryptographic libraries that have been submitted to NIST for FIPS 140-2/140-3 Validation on only the x86_64, ppc64le, and s390x architectures.

:::


{% endif %}