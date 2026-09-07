{%- set _mod_docs_content_type = "REFERENCE" %}
# Installer-provisioned infrastructure installation methods {id="installing-gcp-ipi-methods_{{ context }}"}

You can choose from several methods to install a cluster on {{ gcp_short }} by using installer-provisioned infrastructure, depending on your network requirements and environment constraints. {._abstract}

You can install a cluster on {{ gcp_short }} infrastructure that is provisioned by the {{ product_title }} installation program, by using one of the following methods:

*   **[Installing a cluster quickly on {{ gcp_short }}](/installing/installing_gcp/installing-gcp-default#installing-gcp-default)**: You can install {{ product_title }} on {{ gcp_short }} infrastructure that is provisioned by the {{ product_title }} installation program. You can install a cluster quickly by using the default configuration options.
*   **[Installing a customized cluster on {{ gcp_short }}](/installing/installing_gcp/installing-gcp-customizations#installing-gcp-customizations)**: You can install a customized cluster on {{ gcp_short }} infrastructure that the installation program provisions. You can customize your {{ product_title }} network configuration during installation, so that your cluster can coexist with your existing IP address allocations and adhere to your network requirements. The installation program allows for some customization to be applied at the installation stage. Many other customization options are available postinstallation.
*   **[Installing a cluster on {{ gcp_short }} in a restricted network](/installing/installing_gcp/installing-restricted-networks-gcp-installer-provisioned#installing-restricted-networks-gcp-installer-provisioned)**: You can install {{ product_title }} on installer-provisioned infrastructure in {{ gcp_short }} by using an internal mirror of the installation release content. You can use this method to install a cluster that does not require an active internet connection to obtain the software components. While you can install {{ product_title }} by using the mirrored content, your cluster still requires internet access to use the {{ gcp_short }} APIs.
*   **[Installing a cluster into an existing Virtual Private Cloud](/installing/installing_gcp/installing-gcp-vpc#installing-gcp-vpc)**: You can install {{ product_title }} on an existing {{ gcp_short }} Virtual Private Cloud (VPC). You can use this installation method if you have constraints set by the guidelines of your company, such as limits on creating new accounts or infrastructure.
*   **[Installing a private cluster on an existing VPC](/installing/installing_gcp/installing-gcp-private#installing-gcp-private)**: You can install a private cluster on an existing {{ gcp_short }} VPC. You can use this method to deploy {{ product_title }} on an internal network that is not visible to the internet.

**Additional resources**
{._additional-resources}

*   [Postinstallation configuration](/post_installation_configuration/cluster-tasks#post-install-cluster-tasks)