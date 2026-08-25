---
title: Fault tolerant deployments using multiple Prism Elements
---

# Fault tolerant deployments using multiple Prism Elements {#nutanix-failure-domains}

By default, the installation program installs control plane and compute machines into a single Nutanix Prism Element (cluster). To improve the fault tolerance of your OpenShift Container Platform cluster, you can specify that these machines be distributed across multiple Nutanix clusters by configuring failure domains.

A failure domain represents an additional Prism Element instance that is available to OpenShift Container Platform machine pools during and after installation.

## Installation method and failure domain configuration {#nutanix-failure-domains-install-method_nutanix-failure-domains}

The OpenShift Container Platform installation method determines how and when you configure failure domains:

- If you deploy using installer-provisioned infrastructure, you can configure failure domains in the installation configuration file before deploying the cluster.

  You can also configure failure domains after the cluster is deployed, as described in the following section.
- If you deploy using infrastructure that you manage (user-provisioned infrastructure) no additional configuration is required. After the cluster is deployed, you can manually distribute control plane and compute machines across failure domains.

## Adding failure domains to an existing Nutanix cluster {#nutanix-failure-domains-adding-to-existing-cluster_nutanix-failure-domains}

By default, the installation program installs control plane and compute machines into a single Nutanix Prism Element (cluster). After an OpenShift Container Platform cluster is deployed, you can improve its fault tolerance by adding additional Prism Element instances to the deployment using failure domains.

A failure domain represents a single Prism Element instance where new control plane and compute machines can be deployed and existing control plane and compute machines can be distributed.

**Additional resources**

- [Checking the control plane machine set custom resource state](/openshift-docs-markdown/machine_management/control_plane_machine_management/cpmso-getting-started#cpmso-checking-status_cpmso-getting-started)
- [Replacing a control plane machine](/openshift-docs-markdown/machine_management/control_plane_machine_management/cpmso-managing-machines#cpmso-feat-replace_cpmso-managing-machines)

**Additional resources**

- [Editing existing compute machine sets to implement failure domains](/openshift-docs-markdown/installing/installing_nutanix/nutanix-failure-domains#post-installation-adding-nutanix-failure-domains-compute-machines-edit_nutanix-failure-domains)
- [Replacing existing compute machine sets to implement failure domains](/openshift-docs-markdown/installing/installing_nutanix/nutanix-failure-domains#post-installation-adding-nutanix-failure-domains-compute-machines-replace_nutanix-failure-domains)

**Additional resources**

- [Modifying a compute machine set](/openshift-docs-markdown/machine_management/modifying-machineset#modifying-machineset)

**Additional resources**

- [Creating a compute machine set on Nutanix](/openshift-docs-markdown/machine_management/creating_machinesets/creating-machineset-nutanix#creating-machineset-nutanix)

## Additional resources {#additional-resources_nutanix-failure-domains}

- [Configuring failure domains](/openshift-docs-markdown/installing/installing_nutanix/installing-nutanix-installer-provisioned#installation-configuring-nutanix-failure-domains_installing-nutanix-installer-provisioned)
- [Adding failure domains to an existing Nutanix cluster](/openshift-docs-markdown/installing/installing_nutanix/nutanix-failure-domains#nutanix-failure-domains-adding-to-existing-cluster_nutanix-failure-domains)
