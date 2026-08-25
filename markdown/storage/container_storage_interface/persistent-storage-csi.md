---
title: Configuring CSI volumes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring CSI volumes {id="persistent-storage-csi"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "persistent-storage-csi" %}

[role="_abstract"] 
Container Storage Interface (CSI) is a standard specification enabling storage vendors to develop plugins that work across container orchestration systems. {{ product_title }} uses CSI drivers to provision and manage persistent storage, replacing in-tree storage plugins.

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-architecture.md" %}{% endleveloffset %}

**Additional resources**

*   [CSI spec](https://github.com/container-storage-interface/spec)

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-external-controllers.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-driver-daemonset.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-drivers-supported.md" %}{% endleveloffset %}

**Additional resources**

*   [Setting up the AWS EFS CSI Driver Operator](/storage/container_storage_interface/persistent-storage-csi-aws-efs#persistent-storage-efs-csi-driver-operator-setup_persistent-storage-csi-aws-efs)
*   [Red Hat ecosystem portal](https://catalog.redhat.com/)
*   [Third-party support policy](https://access.redhat.com/articles/third-party-software-support)

{% if openshift_rosa or openshift_rosa_hcp %}
*   [AWS Elastic File Service CSI Driver Operator](/storage/container_storage_interface/persistent-storage-csi-aws-efs#persistent-storage-csi-aws-efs)
*   [Shared responsibilities for {{ product_title }}](/rosa_architecture/rosa_policy_service_definition/rosa-policy-responsibility-matrix#rosa-policy-shared-responsibility)
{% endif %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-dynamic-provisioning.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-mysql-example.md" %}{% endleveloffset %}