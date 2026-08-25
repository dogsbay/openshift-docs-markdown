---
title: Optimizing storage
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Optimizing storage {id="optimizing-storage"}
{% include "./_attributes/common-attributes.md" %}
{%- set gluster = "GlusterFS" -%}
{%- set gluster_native = "Containerized GlusterFS" -%}
{%- set gluster_external = "External GlusterFS" -%}
{%- set gluster_install_link = "https://docs.gluster.org/en/latest/Install-Guide/Overview/" -%}
{%- set gluster_admin_link = "https://docs.gluster.org/en/latest/Administrator%20Guide/overview/" -%}
{%- set gluster_role_link = "https://github.com/openshift/openshift-ansible/tree/master/roles/openshift_storage_glusterfs" -%}
{% if openshift_enterprise or openshift_webscale %}
{%- set gluster = "Red Hat Gluster Storage" -%}
{%- set gluster_native = "converged mode" -%}
{%- set gluster_external = "independent mode" -%}
{%- set gluster_install_link = "https://access.redhat.com/documentation/en-us/red_hat_gluster_storage/3.3/html/installation_guide/" -%}
{%- set gluster_admin_link = "https://access.redhat.com/documentation/en-us/red_hat_gluster_storage/3.3/html/administration_guide/" -%}
{%- set cns_link = "https://access.redhat.com/documentation/en-us/red_hat_gluster_storage/3.3/html/container-native_storage_for_openshift_container_platform/" -%}
{% endif %}
{%- set context = "persistent-storage" %}

Optimizing storage helps to minimize storage use across all resources. As an administrator, you can optimize storage to ensure that existing storage resources are working in an efficient manner.

{% leveloffset +1 %}{% include "./modules/available-persistent-storage-options.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/recommended-configurable-storage-technology.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/specific-application-storage-recommendations.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Is NFS supported for OpenShift cluster internal components in Production?](https://access.redhat.com/solutions/3428661)

{% leveloffset +1 %}{% include "./modules/data-storage-management.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/optimizing-storage-azure.md" %}{% endleveloffset %}