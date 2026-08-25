{%- set _mod_docs_content_type = "CONCEPT" %}
# About the {{ ai_full }} and {{ oci_distributed_no_rt }} integration {id="installing-oci-about-assisted-installer_{{ context }}"}

You can run cluster workloads on {{ oci_distributed }} infrastructure that supports dedicated, hybrid, public, and multiple cloud environments. Both Red&#160;Hat and Oracle test, validate, and support running an {{ product_title }} cluster on {{ oci_distributed_no_rt }}. {._abstract}

This section explains how to use the {{ ai_full }} to install an {{ product_title }} cluster on the {{ oci_first_no_rt }} platform. The installation deploys cloud-native components such as {{ oci_ccm_full }} and {{ oci_csi_full }}, and integrates your cluster with {{ oci }} API resources such as instance node, load balancer, and storage.

The installation process uses the {{ product_title }} discovery ISO image provided by Red Hat, together with the  scripts and manifests provided and maintained by Oracle.

## Preinstallation considerations {id="installing-oci-preinstallation-considerations_{{ context }}"}

Before installing {{ product_title }} on {{ oci_distributed_no_rt }}, you must consider the following configuration choices.


Deployment platforms

:   The integration between {{ product_title }} and {{ oci_distributed_no_rt }} is certified on both virtual machines (VMs) and bare-metal (BM) machines. Bare-metal installations using iSCSI boot drives require a secondary vNIC that is automatically created in the Terraform stack provided by Oracle.

    Before you create a virtual machine (VM) or bare-metal (BM) machine, you must identify the relevant {{ oci }} shape. For details, see "Cloud instance types".


VPU sizing recommendations

:   To ensure the best performance conditions for your cluster workloads that operate on {{ oci_distributed_no_rt }}, ensure that volume performance units (VPUs) for your block volume are sized for your workloads. The following list provides guidance for selecting the VPUs needed for specific performance needs:
    *   Test or proof of concept environment: 100 GB, and 20 to 30 VPUs.
    *   Basic environment: 500 GB, and 60 VPUs.
    *   Heavy production environment: More than 500 GB, and 100 or more VPUs.

    Consider reserving additional VPUs to provide sufficient capacity for updates and scaling activities. For more information about VPUs, see "Volume Performance Units".


Instance sizing recommendations

:   Find recommended values for compute instance CPU, memory, VPU, and volume size for {{ product_title }} nodes. For details, see "Instance Sizing Recommendations for {{ product_title }} Nodes".

## Workflow {id="installing-oci-workflow_{{ context }}"}

**Figure 1. High-level workflow for using the Assisted Installer in a connected environment to install a cluster on {{ oci_distributed_no_rt }}**

![High-level workflow for using the Assisted Installer in a connected environment to install a cluster on {{ oci_distributed_no_rt }}](/_assets/images/569_OpenShift_ai_install_oci_0725.png)

The procedure for using the {{ ai_full }} in a connected environment to install a cluster on {{ oci_distributed_no_rt }} is outlined below:

1.  In the {{ oci_first_no_rt }} console, configure an {{ oci }} account to host the cluster:
    1.  Create a new child compartment under an existing compartment.
    1.  Create a new object storage bucket or use one provided by {{ oci_distributed_no_rt }}.
    1.  Download the stack file template stored locally.
1.  In the {{ ai_full }} console, set up a cluster:
    1.  Enter the cluster configurations.
    1.  Generate and download the discovery ISO image.
1.  In the {{ oci }} console, create the infrastructure:
    1.  Upload the discovery ISO image to the {{ oci }} bucket.
    1.  Create a Pre-Authenticated Request (PAR) for the ISO image.
    1.  Upload the stack file template, and use it to create and apply the stack.
    1.  Copy the custom manifest YAML file from the stack.
1.  In the {{ ai_full }} console, complete the cluster installation:
    1.  Set roles for the cluster nodes.
    1.  Upload the manifests provided by Oracle.
    1.  Install the cluster.


    :::important

    The steps for provisioning {{ oci }} resources are provided as an example only. You can also choose to create the required resources through other methods; the scripts are just an example. Installing a cluster with infrastructure that you provide requires knowledge of the cloud provider and the installation process on {{ product_title }}. You can access {{ oci }} configurations to complete these steps, or use the configurations to model your own custom script.
    
    :::