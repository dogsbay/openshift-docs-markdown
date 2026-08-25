---
title: Configuring the registry for vSphere
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring the registry for vSphere {id="configuring-registry-storage-vsphere"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-registry-storage-vsphere" %}

Configure image registry storage for vSphere clusters after installation. Because vSphere installations do not automatically provision storage, you must change the registry management state from `Removed` to `Managed` and configure persistent storage or use {{ rh_storage_first }} before the registry can store container images.

{% leveloffset +1 %}{% include "./modules/registry-removed.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-change-management-state.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-registry-storage-config.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/registry-configuring-storage-vsphere.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-registry-storage-non-production.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-registry-storage-block-recreate-rollout.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/registry-configuring-registry-storage-rhodf-cephrgw.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/registry-configuring-registry-storage-rhodf-nooba.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-configuring-registry-storage-rhodf-cephfs.md" %}{% endleveloffset %}

## Additional resources {id="configuring-registry-storage-vsphere-addtl-resources"}

*   [Configuring the registry for vSphere](/registry/configuring_registry_storage/configuring-registry-storage-vsphere#registry-configuring-storage-vsphere_configuring-registry-storage-vsphere)
*   [Recommended configurable storage technology](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)
*   [Configuring Image Registry to use {{ rh_storage }}](https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation/latest/html-single/managing_and_allocating_storage_resources/index#configuring-image-registry-to-use-openshift-data-foundation_rhodf)