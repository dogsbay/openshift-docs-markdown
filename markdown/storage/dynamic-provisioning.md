---
title: Dynamic provisioning
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Dynamic provisioning {id="dynamic-provisioning"}
{%- set context = "dynamic-provisioning" %}

In dynamic provisioning, instead of a manually creating a pool of persistent volumes (PVs), an administrator creates a storage class. Using the storage class, {{ product_title }} automatically triggers the storage backend to create a brand-new volume of the exact size and type requested, creates the PV object, and then the PV binds to the persistent volume claim (PVC). {._abstract}

{% leveloffset +1 %}{% include "./modules/dynamic-provisioning-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/dynamic-provisioning-available-plugins.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/dynamic-provisioning-defining-storage-class.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/dynamic-provisioning-storage-class-definition.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
{% leveloffset +2 %}{% include "./modules/dynamic-provisioning-cinder-definition.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/dynamic-provisioning-manila-csi-definition.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +2 %}{% include "./modules/dynamic-provisioning-aws-definition.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [AWS documentation](http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html)

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
{% leveloffset +2 %}{% include "./modules/dynamic-provisioning-azure-disk-definition.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/dynamic-provisioning-azure-file-definition.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/dynamic-provisioning-azure-file-considerations.md" %}{% endleveloffset %}

{% endif %}

{% if not (openshift_rosa or openshift_rosa_hcp) %}
{% leveloffset +2 %}{% include "./modules/dynamic-provisioning-gce-definition.md" %}{% endleveloffset %}

{%- endif %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
{% leveloffset +2 %}{% include "./modules/dynamic-provisioning-vsphere-definition.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/dynamic-provisioning-annotations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/dynamic-provisioning-change-default-class.md" %}{% endleveloffset %}