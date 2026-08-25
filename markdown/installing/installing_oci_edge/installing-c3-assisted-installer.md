---
title: "Installing a cluster on {{ oci_edge_no_rt }} by using the {{ ai_full }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on {{ oci_edge_no_rt }} by using the {{ ai_full }} {id="installing-c3-assisted-installer"}
{%- set context = "installing-c3-assisted-installer" %}

You can use the {{ ai_full }} to install a cluster on {{ oci_edge }}, so that you can run cluster workloads on on-premise infrastructure while still using {{ oci_first }} services. {._abstract}

With {{ oci_edge }}, you can run applications and middleware by using {{ oci_first }} services on high performance cloud infrastructure in your data center.

The following procedures describe a cluster installation on {{ oci_c3 }} as an example.

{% leveloffset +1 %}{% include "./modules/installing-oci-edge-infra-support.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/c3-assisted-installer-overview.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Access and considerations (Oracle documentation)](https://www.oracle.com/a/otn/docs/compute_cloud_at_customer_assisted_installer.pdf?source=:em:nl:mt::::PCATP)
*   [Oracle Cloud Infrastructure](https://catalog.redhat.com/cloud/detail/216977)

{% leveloffset +1 %}{% include "./modules/c3-assisted-installer-preparing-bastion-server.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/c3-assisted-installer-running-script-via-home.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/c3-assisted-installer-preparing-image.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/c3-assisted-installer-preparing-image-generating.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/c3-assisted-installer-preparing-image-converting.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/c3-assisted-installer-running-script-via-region.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/c3-assisted-installer-completing-installation.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/c3-assisted-installer-completing-installation-nodes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/c3-assisted-installer-completing-installation-networking.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/c3-assisted-installer-completing-installation-manifests.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/c3-assisted-installer-opening-cluster.md" %}{% endleveloffset %}