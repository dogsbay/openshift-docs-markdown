---
title: OpenShift Container Platform storage overview
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ product_title }} storage overview {id="storage-overview"}
{%- set context = "storage-overview" %}

{% if not (openshift_rosa or openshift_rosa_hcp) %}
{{ product_title }} supports multiple types of storage, both for on-premise and cloud providers. You can manage container storage for persistent and non-persistent data in an {{ product_title }} cluster. {._abstract}
{% endif %}

{% if openshift_rosa or openshift_rosa_hcp %}
{{ product_title }} supports Amazon Elastic Block Store (Amazon EBS) and Amazon Elastic File System (Amazon EFS) storage. You can manage container storage for persistent and non-persistent data in an {{ product_title }} cluster.
{% endif %}

{% leveloffset +1 %}{% include "./modules/openshift-storage-common-terms.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-types.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding ephemeral storage](/storage/understanding-ephemeral-storage#understanding-ephemeral-storage)
*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)

{% leveloffset +1 %}{% include "./modules/dynamic-provisioning.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Dynamic provisioning](/storage/dynamic-provisioning#dynamic-provisioning)

{% leveloffset +1 %}{% include "./modules/csi.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Using Container Storage Interface (CSI)](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)