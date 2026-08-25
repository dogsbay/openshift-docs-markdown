---
title: Secrets Store Container Storage Interface Driver Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Secrets Store Container Storage Interface Driver Operator {id="persistent-storage-csi-secrets-store"}
{%- set context = "persistent-storage-csi-secrets-store" %}

To improve secret security and integrate with enterprise secret management systems, you can use the {{ secrets_store_operator }} to mount secrets from external stores without persisting them on the cluster after pod termination. {._abstract}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-secrets-store-driver-overview.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [CSI inline ephemeral volumes](/storage/container_storage_interface/ephemeral-storage-csi-inline#ephemeral-storage-csi-inline)
*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [Configuring CSI volumes](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)

{% leveloffset +2 %}{% include "./modules/secrets-store-providers.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-secrets-store-disconnect-environment.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About disconnected environments](/disconnected/about#about)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-secrets-store-network-policies.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-secrets-store-driver-install.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-secrets-store-driver-install-cli.md" %}{% endleveloffset %}

**Next steps**
{._additional-resources}

*   [Mounting secrets from an external secrets store to a CSI volume](/nodes/pods/nodes-pods-secrets-store#mounting-secrets-external-secrets-store_nodes-pods-secrets-store)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-secrets-store-driver-uninstall.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Configuring CSI volumes](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)