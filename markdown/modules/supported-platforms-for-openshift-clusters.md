{%- set _mod_docs_content_type = "REFERENCE" %}
# Supported platforms for {{ product_title }} clusters {id="supported-platforms-for-openshift-clusters_{{ context }}"}

Review the platform support matrix to choose the installation method that meets your requirements. {._abstract}

**Supported platforms**

| Platform | Installer-provisioned infrastructure <sup>[1]</sup> | User-provisioned infrastructure <sup>[2]</sup> | Agent-based Installer | Assisted Installer |
| --- | --- | --- | --- | --- |
| {{ aws_first }} | X | X |  |  |
| Bare metal | X | X | X | X |
| External |  |  | X | X |
| {{ gcp_first }} | X | X |  |  |
| {{ ibm_cloud_name }} Classic | X |  |  |  |
| {{ ibm_cloud_name }} Virtual Private Cloud (VPC) | X |  |  |  |
| {{ ibm_power_name }} |  | X | X | X |
| {{ ibm_z_name }} or {{ ibm_linuxone_name }} |  | X | X | X |
| {{ azure_first }} | X | X |  |  |
| {{ azure_full }} Stack Hub | X | X |  |  |
| None |  |  | X | X |
| Nutanix | X |  |  | X |
| {{ oci_first_no_rt }} |  |  | X | X |
| {{ rh_openstack_first }} <sup>[3]</sup> | X | X |  |  |
| {{ vmw_first }} | X | X | X | X |

The following list describes three different deployment pathways and their prerequisites:

*   For installer-provisioned infrastructure: All machines, including the computer that you run the installation process on, must have direct internet access to pull images for platform containers and provide telemetry data to Red&#160;Hat.

    :::important

    After installation, the following changes are not supported:

    *   Mixing cloud provider platforms.
    *   Mixing cloud provider components. For example, using a persistent storage framework from another platform on the platform where you installed the cluster.
    
    :::

*   For user-provisioned infrastructure: Depending on the supported cases for the platform, you can perform installations on user-provisioned infrastructure so that you can run machines with full internet access, place your cluster behind a proxy, or perform a disconnected installation.

    In a disconnected installation, you can download the images that are required to install a cluster, place them in a mirror registry, and use that data to install your cluster. While you require internet access to pull images for platform containers, with a disconnected installation on vSphere or bare-metal infrastructure, your cluster machines do not require direct internet access.
*   For {{ rh_openstack_first }}: The latest {{ product_title }} release supports both the latest {{ rh_openstack }} long-life release and intermediate release. For complete {{ rh_openstack }} release compatibility, see "{{ product_title }} on {{ rh_openstack }} support matrix". See "{{ product_title }} 4.x Tested Integrations" for details about integration testing for different platforms.