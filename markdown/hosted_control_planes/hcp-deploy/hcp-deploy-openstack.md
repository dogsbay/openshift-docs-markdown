---
title: "Deploying {{ hcp }} on OpenStack"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Deploying {{ hcp }} on OpenStack {id="hcp-deploy-openstack"}
{%- set context = "hcp-deploy-openstack" %}

{%- set FeatureName = "Deploying {{ hcp }} clusters on {{ rh_openstack_first }}" %}
{% include "./snippets/technology-preview.md" %}

You can deploy {{ hcp }} with hosted clusters that run on {{ rh_openstack_first }} 17.1.

A _hosted cluster_ is an {{ product_title }} cluster with its API endpoint and control plane that are hosted on a management cluster. With {{ hcp }}, control planes exist as pods on a management cluster without the need for dedicated virtual or physical machines for each control plane.

{% leveloffset +1 %}{% include "./modules/hosted-clusters-openstack-prerequisites.md" %}{% endleveloffset %}

**Additional resources**

*   [Pull secret](https://console.redhat.com/openshift/install/platform-agnostic/user-provisioned)

{% leveloffset +1 %}{% include "./modules/hosted-clusters-openstack-prepare-etcd.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hosted-clusters-openstack-create-floating-ip.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hosted-clusters-openstack-upload-rhcos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-deploy-openstack-create.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-deploy-openstack-parameters.md" %}{% endleveloffset %}