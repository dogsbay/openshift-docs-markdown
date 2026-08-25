{%- set _mod_docs_content_type = "PROCEDURE" %}
# Running the Terraform script via the C3 region {id="c3-ai-running-script-via-region_{{ context }}"}

Run the `terraform.tfvars` Terraform script to create all infrastructure resources on {{ oci_edge }}. These resources include the {{ product_title }} VCN, public and private subnets, load balancers, internet GW, NAT GW, and DNS server. {._abstract}

This procedure deploys a cluster consisting of three control plane (master) and three compute (worker) nodes. After deployment, you must rename and reboot the nodes. This process temporarily duplicates nodes, requiring manual cleanup in the next procedure.

**Procedure**

1.  Connect to the bastion server via SSH.
1.  Set the C3 Certificate location and export the certificate.
1.  Run the `terraform.tfvars` script to create three control plane nodes and three compute nodes.
1.  Update the labels for the control plane and compute nodes.
1.  Stop and restart the instances one by one on the {{ oci_edge }} portal.

    For the full procedure, see the "Terraform Script Execution - Part 2" section in the [Oracle documentation](https://www.oracle.com/a/otn/docs/compute_cloud_at_customer_assisted_installer.pdf?source=:em:nl:mt::::PCATP).