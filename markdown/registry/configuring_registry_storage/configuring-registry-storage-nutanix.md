---
title: Configuring the registry for Nutanix
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring the registry for Nutanix {id="configuring-registry-storage-nutanix"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-registry-storage-nutanix" %}

Users can optimize container image distribution, security, and access controls, enabling a robust foundation for Nutanix applications on {{ product_title }}

{% leveloffset +1 %}{% include "./modules/registry-removed.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-change-management-state.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-registry-storage-config.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configuring-registry-storage-nutanix.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-registry-storage-non-production.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-registry-storage-block-recreate-rollout-nutanix.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/registry-configuring-registry-storage-rhodf-cephrgw.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/registry-configuring-registry-storage-rhodf-nooba.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-configuring-registry-storage-rhodf-cephfs.md" %}{% endleveloffset %}

## Additional resources {id="configuring-registry-storage-nutanix-addtl-resources"}

*   [Recommended configurable storage technology](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)
*   [Configuring Image Registry to use {{ rh_storage }}](https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation/latest/html-single/managing_and_allocating_storage_resources/index#configuring-image-registry-to-use-openshift-data-foundation_rhodf)