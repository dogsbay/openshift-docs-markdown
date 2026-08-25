{%- set _mod_docs_content_type = "CONCEPT" %}
# Overview {id="c3-ai-overview_{{ context }}"}

You can install {{ product_title }} on {{ oci_edge_no_rt }} by using the {{ ai_full }}. {._abstract}

For an alternative installation method, see "Installing a cluster on {{ oci_edge }} by using the Agent-based Installer".


Preinstallation considerations

:   *   Ensure that your installation meets the prerequisites specified for Oracle. For details, see the "Access and Considerations" section in the Oracle documentation.
    *   Ensure that your infrastructure is certified and uses a compatible cloud instance type. For details, see "Oracle Cloud Infrastructure".
    *   Ensure that you are performing the installation on a virtual machine.

Installation process

:   The installation process builds a bastion host within the designated compartment of the {{ product_title }} cluster. The bastion host is used to run two Terraform scripts:
    *   The first script builds IAM Resources in the {{ oci }} Home region of the {{ oci_edge }} system (two Dynamic Groups and one Policy).
    *   The second script builds the infrastructure resources on the {{ oci_edge }} system to support the {{ product_title }} cluster, including the {{ product_title }} VCN, public and private subnets, load balancers, Internet GW, NAT GW, and DNS server. The script includes all the resources needed to activate the control plane nodes and compute nodes that form a cluster.

    The bastion host is installed in the designated {{ product_title }} Compartment and configured to communicate through a designated {{ oci_edge }} DRG Subnet or Internet GW Subnet within the {{ oci_edge }} parent tenancy.

    The installation process subsequently provisions three control plane (master) nodes and three compute (worker) nodes, together with the external and internal Load Balancers that form the cluster. This is the standard implementation for {{ oci_edge_no_rt }}.


Main steps

:   The main steps of the procedure are as follows:

1.  Preparing the {{ oci_edge }} bastion server.
1.  Running the Terraform script via the Home region.
1.  Preparing the {{ product_title }} image for {{ oci_edge_no_rt }}.
1.  Running the Terraform script via the {{ oci_edge }} region.
1.  Installing the cluster by using the {{ ai_full }} web console.