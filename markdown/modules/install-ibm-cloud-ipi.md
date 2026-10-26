{%- set _mod_docs_content_type = "CONCEPT" %}
# IBM Cloud installations on installer-provisioned infrastructure {id="install-ibm-cloud-ipi_{{ context }}"}

You can install a cluster on {{ ibm_cloud_name }} infrastructure that is provisioned by the {{ product_title }} installation program by using one of several methods. {._abstract}

See the following methods for installation:

*   Installing a customized cluster on {{ ibm_cloud_name }}: You can install a customized cluster on {{ ibm_cloud_name }} infrastructure that the installation program provisions. The installation program allows for some customization to be applied at the installation stage. Many other customization options are available post-installation.
*   Installing a cluster on {{ ibm_cloud_name }} with network customizations: You can customize your {{ product_title }} network configuration during installation, so that your cluster can coexist with your existing IP address allocations and adhere to your network requirements.
*   Installing a cluster on {{ ibm_cloud_name }} into an existing VPC: You can install {{ product_title }} on an existing {{ ibm_cloud_name }} Virtual Private Cloud (VPC). You can use this installation method if you have constraints set by the guidelines of your company, such as limits when creating new accounts or infrastructure.
*   Installing a private cluster on an existing VPC: You can install a private cluster on an existing VPC. You can use this method to deploy {{ product_title }} on an internal network that is not visible to the internet.
*   Installing a cluster on {{ ibm_cloud_title }} in a restricted network: You can install {{ product_title }} on {{ ibm_cloud_title }} on installer-provisioned infrastructure by using an internal mirror of the installation release content. You can use this method to install a cluster that does not require an active internet connection to obtain the software components.