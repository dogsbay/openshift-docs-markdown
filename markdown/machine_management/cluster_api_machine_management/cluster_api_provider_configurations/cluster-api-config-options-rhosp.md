---
title: Cluster API configuration options for Red Hat OpenStack Platform
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Cluster API configuration options for Red&#160;Hat OpenStack Platform {id="cluster-api-config-options-rhosp"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cluster-api-config-options-rhosp" %}

You can change the configuration of your {{ rh_openstack_first }} Cluster API machines by updating values in the Cluster API custom resource manifests.

{%- set FeatureName = "Managing machines with the Cluster API" %}
{% include "./snippets/technology-preview.md" %}

## Sample YAML for configuring {{ rh_openstack }} clusters {id="cluster-api-sample-yaml-rhosp_{{ context }}"}

The following example YAML files show configurations for a {{ rh_openstack }} cluster.

{% leveloffset +2 %}{% include "./modules/capi-yaml-machine-template-rhosp.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating flavors for launching instances](https://docs.redhat.com/en/documentation/red_hat_openstack_platform/17.1/html/configuring_the_compute_service_for_instance_creation/assembly_creating-flavors-for-launching-instances_instance-flavors)

{% leveloffset +2 %}{% include "./modules/capi-yaml-machine-set-rhosp.md" %}{% endleveloffset %}