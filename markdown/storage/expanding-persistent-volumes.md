---
title: Expanding persistent volumes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Expanding persistent volumes {id="expanding-persistent-volumes"}
{%- set context = "expanding-persistent-volumes" %}

Expand persistent volumes to increase storage capacity as your application data grows. You can resize volumes without recreating volumes or disrupting running workloads. {._abstract}

{% if openshift_enterprise or openshift_webscale or openshift_origin or openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
{% leveloffset +1 %}{% include "./modules/storage-expanding-add-volume-expansion.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-expanding-csi-volumes.md" %}{% endleveloffset %}

{%- set FeatureName = "Expanding CSI volumes" -%}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/storage-expanding-flexvolume.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/storage-expanding-local-volumes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-expanding-filesystem-pvc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-expanding-recovering-failure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-expanding-recovering-failure-view-status.md" %}{% endleveloffset %}

{% endif %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [CSI drivers supported by {{ product_title }}](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html/storage/using-container-storage-interface-csi#csi-drivers-supported_persistent-storage-csi)