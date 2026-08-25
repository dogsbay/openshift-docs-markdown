---
title: Upgrading Service Mesh
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Upgrading Service Mesh {id="upgrading-ossm"}
{%- set context = "ossm-upgrade" %}

To access the most current features of {{ SMProductName }}, upgrade to the current version, {{ SMProductVersion }}.

{% leveloffset +1 %}{% include "./modules/ossm-understanding-versioning.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-understanding-versions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-upgrade-considerations.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-upgrade-known-issues.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-upgrading-operator.md" %}{% endleveloffset %}

{% if openshift_enterprise %}
For more information about upgrading Operators, refer to the [Operator Lifecycle Manager](/operators/admin/olm-upgrading-operators) documentation.
{% endif %}

## Upgrading the control plane {id="upgrading-control-plane"}

You must manually update the control plane for minor and major releases. The community Istio project recommends canary upgrades, {{ SMProductName }} only supports in-place upgrades. {{ SMProductName }} requires that you upgrade from each minor release to the next minor release in sequence. For example, you must upgrade from version 2.0 to version 2.1, and then upgrade to version 2.2. You cannot update from {{ SMProductName }} 2.0 to 2.2 directly.

When you upgrade the service mesh control plane, all Operator managed resources, for example gateways, are also upgraded.

Although you can deploy multiple versions of the control plane in the same cluster, {{ SMProductName }} does not support canary upgrades of the service mesh. That is, you can have different SCMP resources with different values for `spec.version`, but they cannot be managing the same mesh.

For more information about migrating your extensions, refer to [Migrating from ServiceMeshExtension to WasmPlugin resources](/service_mesh/v2x/ossm-extensions#ossm-extensions-migration-overview_ossm-extensions).

{% leveloffset +2 %}{% include "./modules/ossm-upgrade-25-26-changes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-upgrade-24-25-changes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-upgrade-23-24-changes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-upgrade-22-23-changes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-upgrade-21-22-changes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-upgrade-20-21-changes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-upgrading-smcp.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-migrating-to-20.md" %}{% endleveloffset %}

## Upgrading the data plane {id="upgrading-data-plane"}

Your data plane will still function after you have upgraded the control plane. But in order to apply updates to the Envoy proxy and any changes to the proxy configuration, you must restart your application pods and workloads.

{% leveloffset +2 %}{% include "./modules/ossm-upgrade-apps-workloads.md" %}{% endleveloffset %}