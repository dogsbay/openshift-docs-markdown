---
title: Installation and update
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installation and update {id="architecture-installation"}
{%- set context = "architecture-installation" %}

You can choose one of the four installation program methods to install and deploy an {{ product_title }} cluster. 
Each method has unique characteristics so that you can choose a method that meets your needs. {._abstract}

The scope of the {{ product_title }} installation program is intentionally narrow. 
The installation program is designed for simplicity. 
You can complete many more configuration tasks after installation completes.

After you read the information in the Installation and update section, you can select a cluster installation method and preparing the cluster for users.

{% leveloffset +1 %}{% include "./modules/installation-overview.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ ai_full }}](https://access.redhat.com/documentation/en-us/assisted_installer_for_openshift_container_platform)
*   [Agent-based Installer](https://console.redhat.com/openshift/install/metal/agent-based)
*   [Installing a cluster without an external registry](/installing/installing_with_agent_based_installer/installing-ove#installing-ove)

{% leveloffset +2 %}{% include "./modules/about-the-installation-program.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/about-rhcosm.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/supported-platforms-for-openshift-clusters.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ product_title }} on {{ rh_openstack }} support matrix](https://access.redhat.com/articles/4679401)
*   [{{ product_title }} 4.x Tested Integrations](https://access.redhat.com/articles/4128421)

{% leveloffset +2 %}{% include "./modules/installation-process.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Recommended etcd practices](/etcd/etcd-practices#recommended-etcd-practices)
*   [Control plane node sizing](/scalability_and_performance/recommended-performance-scale-practices/recommended-control-plane-practices#master-node-sizing_recommended-control-plane-practices)
*   [Available cluster customizations](/post_installation_configuration/cluster-tasks#available_cluster_customizations)

{% leveloffset +2 %}{% include "./modules/installation-process-details.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{%- if not openshift_origin %}
*   [Cluster Type](https://console.redhat.com/openshift/create)
{%- endif %}
{%- if openshift_origin %}
*   [`okd` (GitHub)](https://github.com/openshift/okd/releases)
{%- endif %}
*   [{{ ai_full }}](https://access.redhat.com/documentation/en-us/assisted_installer_for_openshift_container_platform)
*   [Agent-based Installer](https://console.redhat.com/openshift/install/metal/agent-based)

{% leveloffset +1 %}{% include "./modules/update-service-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/unmanaged-operators.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)