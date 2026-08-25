---
title: Managing machines with the Cluster API
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Managing machines with the Cluster API {id="cluster-api-managing-machines"}
{%- set context = "cluster-api-managing-machines" %}

You can manage machines with the Cluster API by modifying a Cluster API machine template or a compute machine set by using the CLI. {._abstract}

{%- set FeatureName = "Managing machines with the Cluster API" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/capi-modifying-machine-template.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Sample YAML for a Cluster API machine template resource on {{ aws_full }}](/machine_management/cluster_api_machine_management/cluster_api_provider_configurations/cluster-api-config-options-aws#capi-yaml-machine-template-aws_cluster-api-config-options-aws)
*   [Sample YAML for a Cluster API machine template resource on {{ gcp_full }}](/machine_management/cluster_api_machine_management/cluster_api_provider_configurations/cluster-api-config-options-gcp#capi-yaml-machine-template-gcp_cluster-api-config-options-gcp)
*   [Sample YAML for a Cluster API machine template resource on {{ azure_full }}](/machine_management/cluster_api_machine_management/cluster_api_provider_configurations/cluster-api-config-options-azure#capi-yaml-machine-template-azure_cluster-api-config-options-azure)
*   [Sample YAML for a Cluster API machine template resource on {{ rh_openstack }}](/machine_management/cluster_api_machine_management/cluster_api_provider_configurations/cluster-api-config-options-rhosp#capi-yaml-machine-template-rhosp_cluster-api-config-options-rhosp)
*   [Sample YAML for a Cluster API machine template resource on {{ vmw_full }}](/machine_management/cluster_api_machine_management/cluster_api_provider_configurations/cluster-api-config-options-vsphere#capi-yaml-machine-template-vsphere_cluster-api-config-options-vsphere)
*   [Modifying a compute machine set by using the CLI](/machine_management/cluster_api_machine_management/cluster-api-managing-machines#machineset-modifying_cluster-api-managing-machines)

{% leveloffset +1 %}{% include "./modules/machineset-modifying.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Sample YAML for a Cluster API compute machine set resource on {{ aws_full }}](/machine_management/cluster_api_machine_management/cluster_api_provider_configurations/cluster-api-config-options-aws#capi-yaml-machine-set-aws_cluster-api-config-options-aws)
*   [Sample YAML for a Cluster API compute machine set resource on {{ gcp_full }}](/machine_management/cluster_api_machine_management/cluster_api_provider_configurations/cluster-api-config-options-gcp#capi-yaml-machine-set-gcp_cluster-api-config-options-gcp)
*   [Sample YAML for a Cluster API compute machine set resource on {{ azure_full }}](/machine_management/cluster_api_machine_management/cluster_api_provider_configurations/cluster-api-config-options-azure#capi-yaml-machine-set-azure_cluster-api-config-options-azure)
*   [Sample YAML for a Cluster API compute machine set resource on {{ rh_openstack }}](/machine_management/cluster_api_machine_management/cluster_api_provider_configurations/cluster-api-config-options-rhosp#capi-yaml-machine-set-rhosp_cluster-api-config-options-rhosp)
*   [Sample YAML for a Cluster API compute machine set resource on {{ vmw_full }}](/machine_management/cluster_api_machine_management/cluster_api_provider_configurations/cluster-api-config-options-vsphere#capi-yaml-machine-set-vsphere_cluster-api-config-options-vsphere)