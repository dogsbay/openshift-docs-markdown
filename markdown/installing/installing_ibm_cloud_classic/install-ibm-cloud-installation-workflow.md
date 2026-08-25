---
title: "Setting up the environment for an OpenShift Container Platform installation on {{ ibm_cloud_bm }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Setting up the environment for an {{ product_title }} installation on {{ ibm_cloud_bm }} {id="install-ibm-cloud-installation-workflow"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "install-ibm-cloud-installation-workflow" %}

After you complete the prerequisites, set up the environment for an {{ product_title }} installation on {{ ibm_cloud_bm }} by preparing the provisioner node, configuring the network, and deploying the cluster.

{% leveloffset +1 %}{% include "./modules/install-ibm-cloud-classic-preparing-the-provisioner-node.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/install-ibm-cloud-classic-configuring-the-public-subnet.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ipi-install-retrieving-the-openshift-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ipi-install-extracting-the-openshift-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/install-ibm-cloud-classic-configuring-the-install-config-file.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ipi-install-additional-install-config-parameters.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ipi-install-root-device-hints.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ipi-install-creating-the-openshift-manifests.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ipi-install-deploying-the-cluster-via-the-openshift-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ipi-install-following-the-progress-of-the-installation.md" %}{% endleveloffset %}