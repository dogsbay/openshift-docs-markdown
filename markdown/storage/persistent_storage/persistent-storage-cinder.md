---
title: Persistent storage using Cinder
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Persistent storage using Cinder {id="persistent-storage-cinder"}
{%- set context = "persistent-storage-cinder" %}

{{ product_title }} supports OpenStack Cinder volumes. You can provision your {{ product_title }} cluster with persistent storage using OpenStack Cinder. Some familiarity with Kubernetes and OpenStack is assumed. {._abstract}

Persistent volumes are not bound to a single project or namespace; they can be shared across the {{ product_title }} cluster. Persistent volume claims are specific to a project or namespace and can be requested by users.


:::important

{{ product_title }} 4.11 and later provides automatic migration for the Cinder in-tree volume plugin to its equivalent CSI driver.

CSI automatic migration should be seamless. Migration does not change how you use all existing API objects, such as persistent volumes, persistent volume claims, and storage classes. For more information about migration, see "CSI automatic migration".

:::


**Additional resources**
{._additional-resources}

*   [CSI automatic migration](/storage/container_storage_interface/persistent-storage-csi-migration#persistent-storage-csi-migration)
*   [OpenStack Cinder](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/8/html-single/architecture_guide/index#comp-cinder)

{% leveloffset +1 %}{% include "./modules/persistent-storage-cinder-provisioning.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-cinder-creating-pv.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-cinder-pv-format.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-cinder-volume-security.md" %}{% endleveloffset %}