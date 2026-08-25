{%- set _mod_docs_content_type = "REFERENCE" %}
# User-provisioned infrastructure installation {id="preparing-to-install-on-vsphere-user-provisioned-reference_{{ context }}"}

You can install {{ product_title }} on vSphere by using user-provisioned infrastructure.
User-provisioned infrastructure requires the user to provision all resources required by {{ product_title }}.
If you do not use infrastructure that the installation program provisions, you must manage and maintain the cluster resources yourself. {._abstract}

*   **Installing a cluster on vSphere with user-provisioned infrastructure**: You can install {{ product_title }} on VMware vSphere infrastructure that you provision or you can install {{ product_title }} on VMware vSphere infrastructure that you provision with customized network configuration options.
*   **Installing a cluster on vSphere in a restricted network with user-provisioned infrastructure**: {{ product_title }} can be installed on VMware vSphere infrastructure that you provision in a restricted network.


:::important

The steps for performing a user-provisioned infrastructure installation are provided as an example only. Installing a cluster with infrastructure you provide requires knowledge of the vSphere platform and the installation process of {{ product_title }}. Use the user-provisioned infrastructure installation instructions as a guide; you are free to create the required resources through other methods.

:::