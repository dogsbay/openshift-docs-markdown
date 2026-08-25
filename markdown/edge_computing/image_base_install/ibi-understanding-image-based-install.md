---
title: "Understanding image-based installation and deployment for {{ sno }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Understanding image-based installation and deployment for {{ sno }} {id="ibi-understanding-image-based-install"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ibi-understanding-image-based-install" %}

Image-based installations significantly reduce the deployment time of {{ sno }} clusters by streamlining the installation process.

This approach enables the preinstallation of configured and validated instances of {{ sno }} on target hosts. These preinstalled hosts can be rapidly reconfigured and deployed at the far edge of the network, including in disconnected environments, with minimal intervention.


:::note

To deploy a managed cluster using an imaged-based approach in combination with {{ ztp_first }}, you can use the SiteConfig operator.

:::


## Overview of image-based installation and deployment for {{ sno }} clusters {id="ibi-installation-deployment-overview_{{ context }}"}

Deploying infrastructure at the far edge of the network presents challenges for service providers with low bandwidth, high latency, and disconnected environments. 
It is also costly and time-consuming to install and deploy {{ sno }} clusters.

An image-based approach to installing and deploying {{ sno }} clusters at the far edge of the network overcomes these challenges by separating the installation and deployment stages.

**Figure 1. Overview of an image-based installation and deployment for managed {{ sno }} clusters**

![Overview of an image-based installation and deployment](/_assets/images/../images/711_OpenShift_IBI_Installation_high-level_0624.png)


Imaged-based installation
:   Preinstall multiple hosts with {{ sno }} at a central site, such as a service depot or a factory.
    Then, validate the base configuration for these hosts and leverage the image-based approach to perform reproducible factory installs at scale by using a single live installation ISO.


Image-based deployment
:   Ship the preinstalled and validated hosts to a remote site and rapidly reconfigure and deploy the clusters in a matter of minutes by using a configuration ISO.

You can choose from two methods to preinstall and configure your SNO clusters.


Using the `openshift-install` program
:   For a {{ sno }} cluster, use the `openshift-install` program only to manually create the live installation ISO that is common to all hosts. Then, use the program again to create the configuration ISO which ensures that the host is unique. For more information, see “Deploying managed {{ sno }} using the openshift-install program”.


Using the IBI Operator
:   For managed {{ sno }} clusters, you can use the `openshift-install` with the Image Based Install (IBI) Operator to scale up the operations. The program creates the live installation ISO and then the IBI Operator creates one configuration ISO for each host. For more information, see "Deploying {{ sno }} using the IBI Operator".

{% leveloffset +2 %}{% include "./modules/ibi-image-based-installation-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ibi-image-based-deployment-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ibi-installation-deployment-components.md" %}{% endleveloffset %}

**Additional resources**

*   [Deploying a {{ sno }} cluster using the `openshift-install` program](/edge_computing/image_base_install/ibi_deploying_sno_clusters/ibi-edge-image-based-install-standalone#create-standalone-config-iso_ibi-edge-image-based-install)

{% leveloffset +1 %}{% include "./modules/ibi-image-based-install-cluster-guide.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring a shared container partition between ostree stateroots](/edge_computing/image_base_install/ibi-preparing-for-image-based-install#cnf-image-based-upgrade-shared-container-partition_ibi-preparing-image-based-install)

{% leveloffset +1 %}{% include "./modules/ibi-validated-software-versions.md" %}{% endleveloffset %}

**Additional resources**

*   [Multicluster architecture](https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/2.12/html/about/welcome-to-red-hat-advanced-cluster-management-for-kubernetes#multicluster-architecture)
*   [Understanding the image-based upgrade for {{ sno }} clusters](/edge_computing/image_based_upgrade/cnf-understanding-image-based-upgrade#cnf-understanding-image-based-upgrade)
*   [SiteConfig operator](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.12/html-single/multicluster_engine_operator_with_red_hat_advanced_cluster_management/index#siteconfig-intro)