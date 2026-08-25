---
title: "Pre-caching images for {{ sno }} deployments"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Pre-caching images for {{ sno }} deployments {id="ztp-pre-staging-tool"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "pre-caching" %}

In environments with limited bandwidth where you use the {{ ztp_first }} solution to deploy a large number of clusters, you want to avoid downloading all the images that are required for bootstrapping and installing {{ product_title }}.
The limited bandwidth at remote {{ sno }} sites can cause long deployment times.
The {{ factory_prestaging_tool }} allows you to pre-stage servers before shipping them to the remote site for ZTP provisioning.

The {{ factory_prestaging_tool }} does the following:

*   Downloads the RHCOS rootfs image that is required by the minimal ISO to boot.
*   Creates a partition from the installation disk labelled as `data`.
*   Formats the disk in xfs.
*   Creates a GUID Partition Table (GPT) data partition at the end of the disk, where the size of the partition is configurable by the tool.
*   Copies the container images required to install {{ product_title }}.
*   Copies the container images required by ZTP to install {{ product_title }}.
*   Optional: Copies Day-2 Operators to the partition.

{%- set FeatureName = "The factory-precaching-cli tool" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/ztp-precaching-getting-tool.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-precaching-booting-from-live-os.md" %}{% endleveloffset %}

**Additional resources**

*   [About Butane](/installing/install_config/installing-customizing#installation-special-config-butane-about_installing-customizing)
*   [Creating a custom live {{ op_system }} ISO for remote server access](/installing/installing_sno/install-sno-installing-sno#create-custom-live-rhcos-iso_install-sno-installing-sno-with-the-assisted-installer)
*   [Integrated Dell Remote Access Controller 9 RACADM CLI Guide](https://www.dell.com/support/manuals/en-ie/poweredge-r440/idrac9_6.xx_racadm_pub/supported-racadm-interfaces?guid=guid-a5747353-fc88-4438-b617-c50ca260448e&lang=en-us)
*   [Using HPONCFG](https://support.hpe.com/hpesc/public/docDisplay?docId=emr_na-a00007610en_us)
*   [Booting from an HTTP-hosted ISO image using the Redfish API](/installing/installing_sno/install-sno-installing-sno#install-booting-from-an-iso-over-http-redfish_install-sno-installing-sno-with-the-assisted-installer)

{% leveloffset +1 %}{% include "./modules/ztp-precaching-partitioning.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-precaching-downloading-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-precaching-preparing-ocp-images.md" %}{% endleveloffset %}

**Additional resources**

*   [OpenShift installation customization tools](https://console.redhat.com/openshift/downloads#tool-pull-secret)
*   [About cluster lifecycle with the multicluster engine operator](https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/2.9/html/clusters/cluster_mce_overview#mce-intro)

{% leveloffset +2 %}{% include "./modules/ztp-precaching-downloading-ocp-images.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-precaching-downloading-operator-images.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-precaching-custom-disconnected.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-precaching-ztp-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-precaching-troubleshooting.md" %}{% endleveloffset %}