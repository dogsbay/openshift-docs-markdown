{%- set _mod_docs_content_type = "CONCEPT" %}
# Installing a cluster on installer-provisioned infrastructure {id="choosing-an-method-to-install-ocp-on-aws-installer-provisioned_{{ context }}"}
{%- set context = "installing-aws-ipi" %}

You can install a cluster on {{ aws_short }} infrastructure that is provisioned by the {{ product_title }} installation program, by using one of the following methods: {._abstract}

You can install {{ product_title }} on {{ aws_short }} infrastructure that is provisioned by the {{ product_title }} installation program. You can install a cluster quickly by using the default configuration options.

You can install a customized cluster on {{ aws_short }} infrastructure that the installation program provisions. You can also customize your {{ product_title }} network configuration during installation, so that your cluster can coexist with your existing IP address allocations and adhere to your network requirements. The installation program allows for some customization to be applied at the installation stage. Many other customization options are available post-installation.

You can install {{ product_title }} on {{ aws_short }} on installer-provisioned infrastructure by using an internal mirror of the installation release content. You can use this method to install a cluster that does not require an active internet connection to obtain the software components.

You can install {{ product_title }} on an existing {{ aws_short }} Virtual Private Cloud (VPC). You can use this installation method if you have constraints set by the guidelines of your company, such as limits when creating new accounts or infrastructure.

You can install a private cluster on an existing {{ aws_short }} VPC. You can use this method to deploy {{ product_title }} on an internal network that is not visible to the internet.

{{ product_title }} can be deployed into {{ aws_short }} regions that are specifically designed for US government agencies at the federal, state, and local level, as well as contractors, educational institutions, and other US customers that must run sensitive workloads in the cloud.