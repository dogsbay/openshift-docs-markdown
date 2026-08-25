---
title: Understanding persistent storage
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Understanding persistent storage {id="understanding-persistent-storage"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "understanding-persistent-storage" %}

Persistent storage decouples data from pod lifecycles, allowing stateful applications to retain data across restarts and failures. Administrators provision persistent volumes (PVs), and developers create persistent volume claims (PVCs) to request storage without infrastructure knowledge.

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-lifecycle.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/storage-persistent-storage-reclaim-manual.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/storage-persistent-storage-reclaim.md" %}{% endleveloffset %}

**Additional resources**

*   [When using Persistent Volumes with high file counts in OpenShift, why do pods fail to start or take an excessive amount of time to achieve "Ready" state? (Red&#160;Hat Knowledgebase)](https://access.redhat.com/solutions/6221251)

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-pv.md" %}{% endleveloffset %}

**Additional resources**

*   [Block volume support](/storage/understanding-persistent-storage#block-volume-support_understanding-persistent-storage)
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [GCP hyperdisk-balanced disk additional limitations](https://cloud.google.com/compute/docs/disks/attach-disks)
*   [VMware vSphere CSI Driver Operator](/storage/container_storage_interface/persistent-storage-csi-vsphere#persistent-storage-vsphere)
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
*   [Configuring CSI volumes](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)
{% endif %}

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-pvc.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-pvc-volumeattributesclass.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/storage-persistent-storage-pvc-volumeattributesclass-apply-vac.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/storage-persistent-storage-pvc-volumeattributesclass-delete-vac.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-block-volume.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/storage-persistent-storage-block-volume-examples.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-fsGroup.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/storage-persistent-storage-fsGroup-namespace.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/storage-persistent-storage-fsGroup-pod.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-selinuxChangePolicy.md" %}{% endleveloffset %}

**Additional resources**

*   [OpenShift reports SELinux-related conflicts when creating Pods (Red&#160;Hat Knowledgebase)](https://access.redhat.com/solutions/7131398)
*   [Opting out of the SELinux mount option default](/storage/understanding-persistent-storage#using_selinuxChangePolicy_pod-opt-out_understanding-persistent-storage)

{% leveloffset +2 %}{% include "./modules/storage-persistent-storage-selinuxChangePolicy-testing-mountoption-RWO-RWX.md" %}{% endleveloffset %}

**Additional resources**

*   [OpenShift reports SELinux-related conflicts when creating Pods (Red&#160;Hat Knowledgebase)](https://access.redhat.com/solutions/7131398)
*   [Opting out of the SELinux mount option default](/storage/understanding-persistent-storage#using_selinuxChangePolicy_pod-opt-out_understanding-persistent-storage)

{% leveloffset +2 %}{% include "./modules/storage-persistent-storage-selinuxChangePolicy-opt-out.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/storage-persistent-storage-selinuxChangePolicy-namespace.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/storage-persistent-storage-selinuxChangePolicy-pod.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
## Additional resources {id="additional-resources_{{ context }}"}
*   [Enabling features using feature gates](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features)
{% endif %}