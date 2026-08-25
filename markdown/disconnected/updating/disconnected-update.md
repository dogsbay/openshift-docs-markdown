---
title: Updating a cluster in a disconnected environment without the OpenShift Update Service
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{% if not openshift_origin %}
# Updating a cluster in a disconnected environment without the OpenShift Update Service {id="updating-disconnected-cluster"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "updating-disconnected-cluster" -%}
{% endif %}

{% if openshift_origin %}
# Updating a cluster in a disconnected environment by using the CLI {id="updating-disconnected-cluster"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "updating-disconnected-cluster" -%}
{% endif %}

{% if not openshift_origin %}
You can update a cluster in a disconnected environment without using the OpenShift Update Service.
{% endif %}

{% if openshift_origin %}
You can update a cluster in a disconnected environment by using the CLI.
{% endif %}

Use the following procedures to update a cluster in a disconnected environment without access to the OpenShift Update Service.

{% leveloffset +1 %}{% include "./modules/updating-without-osus-prereqs.md" %}{% endleveloffset %}

**Additional resources**

*   [Mirroring {{ product_title }} images](/disconnected/updating/mirroring-image-repository#mirroring-ocp-image-repository)
*   [Using RBAC to define and apply permissions](/authentication/using-rbac#using-rbac)
*   [Backing up etcd](/backup_and_restore/control_plane_backup_and_restore/backing-up-etcd#backup-etcd)
*   [Restoring to an earlier cluster state](/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-2-restoring-cluster-state#dr-restoring-cluster-state)
*   [Updating installed Operators](/operators/admin/olm-upgrading-operators#olm-upgrading-operators)
*   [Preparing to update a cluster with manually maintained credentials](/updating/preparing_for_updates/preparing-manual-creds-update#preparing-manual-creds-update)

{% leveloffset +1 %}{% include "./modules/machine-health-checks-pausing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/update-restricted-image-digests.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/update-restricted.md" %}{% endleveloffset %}

**Additional resources**

*   [Mirroring {{ product_title }} images](/disconnected/updating/mirroring-image-repository#mirroring-ocp-image-repository)

{% leveloffset +1 %}{% include "./modules/images-configuration-registry-mirror.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-configuration-registry-mirror-configuring.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-configuration-registry-mirror-convert.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/generating-icsp-object-scoped-to-a-registry.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)
*   [Machine Config Overview](/machine_configuration/index#machine-config-overview)