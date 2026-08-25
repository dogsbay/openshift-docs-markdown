{%- set _mod_docs_content_type = "CONCEPT" %}
# Choosing a method to install {{ product_title }} on {{ ibm_z_title }} or {{ ibm_linuxone_title }} {id="choosing-an-method-to-install-ocp-on-ibm-z_{{ context }}"}

{{ product_title }} supports many installation methods on {{ ibm_z_name }} and {{ ibm_linuxone_name }}. The method you select depends on your network environment, the level of infrastructure control you require, and whether your deployment connects to the internet. {._abstract}

The {{ product_title }} installation program offers the following methods for deploying a cluster on {{ ibm_z_name }}:

*   **Interactive**: You can deploy a cluster with the web-based {{ ai_full }}. This method requires no setup for the installation program, and is ideal for connected environments such as {{ ibm_z_name }}.
*   **Local Agent-based**: You can deploy a cluster locally with the Agent-based Installer. It provides many of the benefits of the {{ ai_full }}, but you must download and configure the Agent-based Installer first. You complete the configuration with a command-line interface (CLI). This approach is ideal for disconnected networks.
*   **Full control**: You can deploy a cluster on infrastructure that you prepare and support, which provides maximum customizability. You can deploy clusters in connected or disconnected environments.

**{{ ibm_z_name }} installation options**

|  | Assisted Installer | Agent-based Installer | User-provisioned installation | Installer-provisioned installation |
| --- | --- | --- | --- | --- |
| {{ ibm_z_name }} with z/VM | &#10003; | &#10003; | &#10003; |  |
| Restricted network {{ ibm_z_name }} with z/VM |  | &#10003; | &#10003; |  |
| {{ ibm_z_name }} with {{ op_system_base }} KVM | &#10003; | &#10003; | &#10003; |  |
| Restricted network {{ ibm_z_name }} with {{ op_system_base }} KVM |  | &#10003; | &#10003; |  |
| {{ ibm_z_name }} in an LPAR | &#10003; | &#10003; | &#10003; |  |
| Restricted network {{ ibm_z_name }} in an LPAR |  | &#10003; | &#10003; |  |

For more information about the installation process, see Installation process in the Additional resources section.