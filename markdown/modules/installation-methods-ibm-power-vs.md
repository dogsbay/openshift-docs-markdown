{%- set _mod_docs_content_type = "REFERENCE" %}
# Installing a cluster on installer-provisioned infrastructure {id="installation-methods-ibm-power-vs_{{ context }}"}

Review the available installer-provisioned methods for installing a {{ product_title }} cluster on {{ ibm_power_server_name }}, including customized, VPC-based, private, and disconnected network options. {._abstract}

*   **Installing a customized cluster on {{ ibm_power_server_name }}**: You can install a customized cluster on {{ ibm_power_server_name }} infrastructure that the installation program provisions. The installation program supports some customization at the installation stage. Many other customization options are available postinstallation.
*   **Installing a cluster on {{ ibm_power_server_name }} into an existing VPC**: You can install {{ product_title }} on {{ ibm_power_server_name }} into an existing Virtual Private Cloud (VPC). You can use this installation method if you have constraints set by the guidelines of your company, such as limits when creating new accounts or infrastructure.
*   **Installing a private cluster on {{ ibm_power_server_name }}**: You can install a private cluster on {{ ibm_power_server_name }}. You can use this method to deploy {{ product_title }} on an internal network that is not visible to the internet.
*   **Installing a cluster on {{ ibm_power_server_name }} in a restricted network**: You can install {{ product_title }} on installer-provisioned {{ ibm_power_server_name }} infrastructure by using an internal mirror of the installation release content. You can use this method to install a cluster that does not require an active internet connection to obtain the software components.


:::note

Installing {{ product_title }} on {{ ibm_power_server_name }} using user-provisioned infrastructure is the same as for {{ ibm_power_name }}. 

:::