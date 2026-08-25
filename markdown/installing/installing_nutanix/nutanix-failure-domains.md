---
title: Fault tolerant deployments using multiple Prism Elements
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Fault tolerant deployments using multiple Prism Elements {id="nutanix-failure-domains"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "nutanix-failure-domains" %}

By default, the installation program installs control plane and compute machines into a single Nutanix Prism Element (cluster). To improve the fault tolerance of your {{ product_title }} cluster, you can specify that these machines be distributed across multiple Nutanix clusters by configuring failure domains.

A failure domain represents an additional Prism Element instance that is available to {{ product_title }} machine pools during and after installation.

## Installation method and failure domain configuration {id="nutanix-failure-domains-install-method_{{ context }}"}

The {{ product_title }} installation method determines how and when you configure failure domains:

*   If you deploy using installer-provisioned infrastructure, you can configure failure domains in the installation configuration file before deploying the cluster.

    You can also configure failure domains after the cluster is deployed, as described in the following section.
*   If you deploy using infrastructure that you manage (user-provisioned infrastructure) no additional configuration is required. After the cluster is deployed, you can manually distribute control plane and compute machines across failure domains.

## Adding failure domains to an existing Nutanix cluster {id="nutanix-failure-domains-adding-to-existing-cluster_{{ context }}"}

By default, the installation program installs control plane and compute machines into a single Nutanix Prism Element (cluster). After an {{ product_title }} cluster is deployed, you can improve its fault tolerance by adding additional Prism Element instances to the deployment using failure domains.

A failure domain represents a single Prism Element instance where new control plane and compute machines can be deployed and existing control plane and compute machines can be distributed.

{% leveloffset +2 %}{% include "./modules/installation-nutanix-failure-domains-req.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/post-installation-configuring-nutanix-failure-domains.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/post-installation-adding-nutanix-failure-domains-control-planes.md" %}{% endleveloffset %}

**Additional resources**

*   [Checking the control plane machine set custom resource state](/machine_management/control_plane_machine_management/cpmso-getting-started#cpmso-checking-status_cpmso-getting-started)
*   [Replacing a control plane machine](/machine_management/control_plane_machine_management/cpmso-managing-machines#cpmso-feat-replace_cpmso-managing-machines)

{% leveloffset +2 %}{% include "./modules/nutanix-failure-domains-compute-machines-reference.md" %}{% endleveloffset %}

**Additional resources**

*   [Editing existing compute machine sets to implement failure domains](/installing/installing_nutanix/nutanix-failure-domains#post-installation-adding-nutanix-failure-domains-compute-machines-edit_nutanix-failure-domains)
*   [Replacing existing compute machine sets to implement failure domains](/installing/installing_nutanix/nutanix-failure-domains#post-installation-adding-nutanix-failure-domains-compute-machines-replace_nutanix-failure-domains)

{% leveloffset +3 %}{% include "./modules/post-installation-adding-nutanix-failure-domains-compute-machines-edit.md" %}{% endleveloffset %}

**Additional resources**

*   [Modifying a compute machine set](/machine_management/modifying-machineset#modifying-machineset)

{% leveloffset +3 %}{% include "./modules/post-installation-adding-nutanix-failure-domains-compute-machines-replace.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating a compute machine set on Nutanix](/machine_management/creating_machinesets/creating-machineset-nutanix#creating-machineset-nutanix)

{% leveloffset +1 %}{% include "./modules/cpmso-ts-nutanix-multiple-subnet.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Configuring failure domains](/installing/installing_nutanix/installing-nutanix-installer-provisioned#installation-configuring-nutanix-failure-domains_installing-nutanix-installer-provisioned)
*   [Adding failure domains to an existing Nutanix cluster](/installing/installing_nutanix/nutanix-failure-domains#nutanix-failure-domains-adding-to-existing-cluster_nutanix-failure-domains)