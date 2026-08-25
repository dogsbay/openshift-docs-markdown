---
title: Getting started with the Cluster API
---

# Getting started with the Cluster API {#cluster-api-getting-started}

The Machine API and Cluster API are distinct API groups that have similar resources. You can use these API groups to automate the management of infrastructure resources on your OpenShift Container Platform cluster.

When you install a standard OpenShift Container Platform cluster that has three control plane nodes, three compute nodes, and uses the default configuration options, the installation program provisions the following infrastructure resources in the `openshift-machine-api` namespace

- One control plane machine set that manages three control plane machines.
- One or more compute machine sets that manage three compute machines.
- One machine health check that manages spot instances.

When you install a cluster that supports managing infrastructure resources with the Cluster API, the installation program provisions the following resources in the `openshift-cluster-api` namespace:

- One cluster resource.
- One provider-specific infrastructure cluster resource.

On clusters that support migrating Machine API resources to Cluster API resources, a two-way synchronization controller creates these primary resources automatically. For more information, see "Machine API to Cluster API resource migration".

## Creating the Cluster API primary resources {#creating-primary-resources_cluster-api-getting-started}

For clusters that do not support migrating Machine API resources to Cluster API resources, you must manually create the following Cluster API resources in the `openshift-cluster-api` namespace:

- One or more machine templates that correspond to compute machine sets.
- One or more compute machine sets that manage three compute machines.

**Additional resources**

- [Machine API to Cluster API resource migration](/openshift-docs-markdown/machine_management/cluster_api_machine_management/cluster-api-getting-started#mapi-to-capi-migration-overview_cluster-api-getting-started)
- [Sample YAML for a Cluster API machine template resource on {{ aws_full }}](/openshift-docs-markdown/machine_management/cluster_api_machine_management/cluster_api_provider_configurations/cluster-api-config-options-aws#capi-yaml-machine-template-aws_cluster-api-config-options-aws)
- [Sample YAML for a Cluster API machine template resource on {{ gcp_full }}](/openshift-docs-markdown/machine_management/cluster_api_machine_management/cluster_api_provider_configurations/cluster-api-config-options-gcp#capi-yaml-machine-template-gcp_cluster-api-config-options-gcp)
- [Sample YAML for a Cluster API machine template resource on {{ azure_full }}](/openshift-docs-markdown/machine_management/cluster_api_machine_management/cluster_api_provider_configurations/cluster-api-config-options-azure#capi-yaml-machine-template-azure_cluster-api-config-options-azure)
- [Sample YAML for a Cluster API machine template resource on {{ rh_openstack }}](/openshift-docs-markdown/machine_management/cluster_api_machine_management/cluster_api_provider_configurations/cluster-api-config-options-rhosp#capi-yaml-machine-template-rhosp_cluster-api-config-options-rhosp)
- [Sample YAML for a Cluster API machine template resource on {{ vmw_full }}](/openshift-docs-markdown/machine_management/cluster_api_machine_management/cluster_api_provider_configurations/cluster-api-config-options-vsphere#capi-yaml-machine-template-vsphere_cluster-api-config-options-vsphere)
- [Sample YAML for a Cluster API machine template resource on bare metal](/openshift-docs-markdown/machine_management/cluster_api_machine_management/cluster_api_provider_configurations/cluster-api-config-options-bare-metal#capi-yaml-machine-template-bare-metal_cluster-api-config-options-bare-metal)

**Additional resources**

- [Sample YAML for a Cluster API compute machine set resource on {{ aws_full }}](/openshift-docs-markdown/machine_management/cluster_api_machine_management/cluster_api_provider_configurations/cluster-api-config-options-aws#capi-yaml-machine-set-aws_cluster-api-config-options-aws)
- [Sample YAML for a Cluster API compute machine set resource on {{ gcp_full }}](/openshift-docs-markdown/machine_management/cluster_api_machine_management/cluster_api_provider_configurations/cluster-api-config-options-gcp#capi-yaml-machine-set-gcp_cluster-api-config-options-gcp)
- [Sample YAML for a Cluster API compute machine set resource on {{ azure_full }}](/openshift-docs-markdown/machine_management/cluster_api_machine_management/cluster_api_provider_configurations/cluster-api-config-options-azure#capi-yaml-machine-set-azure_cluster-api-config-options-azure)
- [Sample YAML for a Cluster API compute machine set resource on {{ rh_openstack }}](/openshift-docs-markdown/machine_management/cluster_api_machine_management/cluster_api_provider_configurations/cluster-api-config-options-rhosp#capi-yaml-machine-set-rhosp_cluster-api-config-options-rhosp)
- [Sample YAML for a Cluster API compute machine set resource on {{ vmw_full }}](/openshift-docs-markdown/machine_management/cluster_api_machine_management/cluster_api_provider_configurations/cluster-api-config-options-vsphere#capi-yaml-machine-set-vsphere_cluster-api-config-options-vsphere)
- [Sample YAML for a Cluster API compute machine set resource on bare metal](/openshift-docs-markdown/machine_management/cluster_api_machine_management/cluster_api_provider_configurations/cluster-api-config-options-bare-metal#capi-yaml-machine-set-bare-metal_cluster-api-config-options-bare-metal)

**Additional resources**

- [Unexpected behavior when changing resource configurations](/openshift-docs-markdown/machine_management/cluster_api_machine_management/cluster-api-troubleshooting#ts-capi-migrate-unexpected-behavior_cluster-api-troubleshooting)

**Additional resources**

- [Troubleshooting resource migration](/openshift-docs-markdown/machine_management/cluster_api_machine_management/cluster-api-troubleshooting#ts-capi-resource-migration_cluster-api-troubleshooting)
- [Migrating Cluster API resources to Machine API resources](/openshift-docs-markdown/machine_management/cluster_api_machine_management/cluster-api-disabling#capi-to-mapi-migration-overview_cluster-api-disabling)
