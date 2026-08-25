{%- set _mod_docs_content_type = "CONCEPT" %}
# Installation process workflow {id="abi-oci-c3-process-checklist_{{ context }}"}

To better understand the process, see a high-level outline of installing an {{ product_title }} cluster on {{ oci_edge_no_rt }} using the Agent-based Installer. {._abstract}

The following workflow describes the general installation process:

1.  Create {{ oci_first_no_rt }} resources and services (Oracle).
1.  Prepare configuration files for the Agent-based Installer (Red&#160;Hat).
1.  Generate the agent ISO image (Red&#160;Hat).
1.  Convert the ISO image to an {{ oci }} image, upload it to an {{ oci }} Home Region Bucket, and then import the uploaded image to the {{ oci_edge_no_rt }} system (Oracle).
1.  Disconnected environments: Prepare a web server that is accessible by {{ oci_edge_no_rt }} instances (Red&#160;Hat).
1.  Disconnected environments: Upload the rootfs image to the web server (Red&#160;Hat).
1.  Configure your firewall for {{ product_title }} (Red&#160;Hat).
1.  Create control plane nodes and configure load balancers (Oracle).
1.  Create compute nodes and configure load balancers (Oracle).
1.  Verify that your cluster runs on {{ oci_edge_no_rt }} (Oracle).