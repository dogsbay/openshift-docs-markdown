{%- set _mod_docs_content_type = "CONCEPT" %}
# User-provisioned infrastructure installation of {{ product_title }} on {{ ibm_z_title }} {id="ibm-z-upi-installation-overview_{{ context }}"}

User-provisioned infrastructure requires you to provision and manage all resources that {{ product_title }} needs, including networking, load balancing, storage, and compute. This approach suits organizations that have specific infrastructure requirements or that operate in air-gapped or restricted networks. {._abstract}


:::important

These steps for performing a user-provisioned infrastructure installation are an example only. Installing a cluster with infrastructure you offer requires knowledge of the {{ ibm_z_name }} platform and the installation process of {{ product_title }}. Use the user-provisioned infrastructure installation instructions as a guide; you are free to create the required resources through other methods.

:::


*   **Installing a cluster with z/VM on {{ ibm_z_name }} and {{ ibm_linuxone_name }}**: You can install {{ product_title }} with z/VM on {{ ibm_z_name }} or {{ ibm_linuxone_name }} infrastructure that you provision.
*   **Installing a cluster with z/VM on {{ ibm_z_title }} and {{ ibm_linuxone_title }} in a disconnected environment**: You can install {{ product_title }} with z/VM on {{ ibm_z_name }} or {{ ibm_linuxone_name }} infrastructure that you provision in a restricted or disconnected network by using an internal mirror of the installation release content. You can use this method to install a cluster that does not require an active internet connection to obtain the software components. You can also use this installation method to ensure that your clusters only use container images that satisfy your organizational controls on external content.
*   **Installing a cluster with {{ op_system_base }} KVM on {{ ibm_z_name }} and {{ ibm_linuxone_name }}**: You can install {{ product_title }} with KVM on {{ ibm_z_name }} or {{ ibm_linuxone_name }} infrastructure that you provision.
*   **Installing a cluster with {{ op_system_base }} KVM on {{ ibm_z_name }} and {{ ibm_linuxone_name }} in a disconnected environment**: You can install {{ product_title }} with {{ op_system_base }} KVM on {{ ibm_z_name }} or {{ ibm_linuxone_name }} infrastructure that you provision in a restricted or disconnected network by using an internal mirror of the installation release content. You can use this method to install a cluster that does not require an active internet connection to obtain the software components. You can also use this installation method to ensure that your clusters only use container images that satisfy your organizational controls on external content.
*   **Installing a cluster in an LPAR on {{ ibm_z_name }} and {{ ibm_linuxone_name }}**: You can install {{ product_title }} in a logical partition (LPAR) on {{ ibm_z_name }} or {{ ibm_linuxone_name }} infrastructure that you provision.
*   **Installing a cluster in an LPAR on {{ ibm_z_name }} and {{ ibm_linuxone_name }} in a disconnected environment**: You can install {{ product_title }} in an LPAR on {{ ibm_z_name }} or {{ ibm_linuxone_name }} infrastructure that you provision in a restricted or disconnected network by using an internal mirror of the installation release content. You can use this method to install a cluster that does not require an active internet connection to obtain the software components. You can also use this installation method to ensure that your clusters only use container images that satisfy your organizational controls on external content.