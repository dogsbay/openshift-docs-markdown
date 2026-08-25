{%- set _mod_docs_content_type = "CONCEPT" %}
# About reusing a VNet for your {{ product_title }} cluster {id="installation-about-custom-azure-vnet_{{ context }}"}

In {{ product_title }} {{ product_version }}, you can deploy a cluster into an existing Microsoft Azure Virtual Network (VNet). Deployments in an existing VNet require existing subnets and routing rules. {._abstract}

By deploying {{ product_title }} into an existing Azure VNet, you might be able to avoid service limit constraints in new accounts or more easily abide by the operational constraints that your company’s guidelines set. This is a good option to use if you cannot obtain the infrastructure creation permissions that are required to create the VNet.