---
title: Postinstallation storage configuration
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "post-install-storage-configuration" %}
# Postinstallation storage configuration {id="post-install-storage-configuration"}
{% include "./_attributes/common-attributes.md" %}
{%- set gluster = "GlusterFS" -%}
{%- set gluster_native = "Containerized GlusterFS" -%}
{%- set gluster_external = "External GlusterFS" -%}
{% if openshift_enterprise or openshift_webscale %}
{%- set gluster = "Red Hat Gluster Storage" -%}
{%- set gluster_native = "converged mode" -%}
{%- set gluster_external = "independent mode" -%}
{% endif %}

You can configure persistent storage after installation by using dynamic or static provisioning to retain application data beyond the lifetime of individual containers.

After installing {{ product_title }}, you can further expand and customize your cluster to your requirements, including storage configuration.

By default, containers operate by using the ephemeral storage or transient local storage. The ephemeral storage has a lifetime limitation. To store the data for a long time, you must configure persistent storage. You can configure storage by using one of the following methods:


Dynamic provisioning
:   You can dynamically provision storage on-demand by defining and creating storage classes that control different levels of storage, including storage access.


Static provisioning
:   You can use Kubernetes persistent volumes to make existing storage available to a cluster. Static provisioning can support various device configurations and mount options.

{% leveloffset +1 %}{% include "./modules/post-install-dynamic-provisioning.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/recommended-configurable-storage-technology.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/post-install-deploy-openshift-data-foundation.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/deploy-red-hat-openshift-container-storage.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Dynamic provisioning](/storage/dynamic-provisioning#dynamic-provisioning)
*   [{{ rh_storage_first }} documentation](https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation)
*   [Red Hat OpenShift Data Foundation Supportability and Interoperability Guide](https://access.redhat.com/articles/4731161)
{%- if not (openshift_enterprise or openshift_webscale) %}
*   [GlusterFS installation guide](https://docs.gluster.org/en/latest/Install-Guide/Overview/)
*   [GlusterFS administration guide](https://docs.gluster.org/en/latest/Administrator%20Guide/overview/)
*   [OpenShift GlusterFS Ansible role](https://github.com/openshift/openshift-ansible/tree/master/roles/openshift_storage_glusterfs)
{% endif %}
{% if openshift_enterprise or openshift_webscale %}
*   [Red Hat Gluster Storage installation guide](https://access.redhat.com/documentation/en-us/red_hat_gluster_storage/3.3/html/installation_guide/)
*   [Red Hat Gluster Storage administration guide](https://access.redhat.com/documentation/en-us/red_hat_gluster_storage/3.3/html/administration_guide/)
*   [Container-Native Storage for OpenShift Container Platform](https://access.redhat.com/documentation/en-us/red_hat_gluster_storage/3.3/html/container-native_storage_for_openshift_container_platform/)
{% endif %}