{%- set _mod_docs_content_type = "REFERENCE" %}
# Adding compute machines to vSphere {id="upi-adding-compute-vsphere"}

You can use compute machine sets to automate the creation of additional compute machines for your {{ product_title }} cluster on vSphere. {._abstract}

See [use compute machine sets](/machine_management/creating_machinesets/creating-machineset-vsphere#creating-machineset-vsphere) for more information.

You can manually add more compute machines to your cluster.

See [Adding compute machines to vSphere manually](/machine_management/user_infra/adding-vsphere-compute-user-infra#adding-vsphere-compute-user-infra) for more information.

You can add bare-metal compute machines to your cluster.

See [Adding bare-metal compute machines to a vSphere cluster](/machine_management/user_infra/adding-bare-metal-compute-vsphere-user-infra#adding-bare-metal-compute-vsphere-user-infra) for more information.

{%- set FeatureName = "Bare-metal nodes on vSphere clusters" %}
{% include "./snippets/technology-preview.md" %}