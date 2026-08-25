{%- set _mod_docs_content_type = "CONCEPT" %}
# Installation process workflow {id="abi-oci-process-checklist_{{ context }}"}

To better understand the process, see a high-level outline of installing an {{ product_title }} cluster on {{ oci_distributed_no_rt }} using the Agent-based Installer. {._abstract}

The following workflow describes the general installation process:

1.  Create {{ oci_first_no_rt }} resources and services (Oracle).
1.  Disconnected environments: Prepare a web server that is accessible by {{ oci }} instances (Red&#160;Hat).
1.  Prepare configuration files for the Agent-based Installer (Red&#160;Hat).
1.  Generate the agent ISO image (Red&#160;Hat).
1.  Disconnected environments: Upload the rootfs image to the web server (Red&#160;Hat).
1.  Configure your firewall for {{ product_title }} (Red&#160;Hat).
1.  Upload the agent ISO image to a storage bucket (Oracle).
1.  Create a custom image from the uploaded agent ISO image (Oracle).
1.  Create compute instances on {{ oci_distributed_no_rt }} (Oracle).
1.  Verify that your cluster runs on {{ oci_distributed_no_rt }} (Oracle).