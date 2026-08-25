{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding upgrades for {{ product_title }} clusters configured with {{ autonode }} {id="rosa-nodes-autonode-upgrading-autonode_{{ context }}"}

You can upgrade clusters that are configured with {{ autonode }}.  {._abstract}

<a name="rosa-nodes-autonode-upgrading-autonode-openshiftec2nodeclass_{{ context }}"></a>

**Default `OpenshiftEC2NodeClass`**

When you enable {{ autonode }}, a default `OpenshiftEC2NodeClass` resource is created with the same version as that of the hosted control plane. All node pools that reference the default `EC2NodeClass` are automatically upgraded as part of the hosted control plane upgrade.

<a name="rosa-nodes-autonode-upgrading-autonode-secondary-openshiftec2nodeclass_{{ context }}"></a>

**Optional `OpenshiftEC2NodeClass`**

Upgrade behavior depends on whether or not the `OpenshiftEC2NodeClass` is pinned to a version by using the `spec.version` field.  


Unpinned `OpenshiftEC2NodeClass`
:   By default, `OpenshiftEC2NodeClass` resources have the same version of the hosted control plane. When the hosted control plane is upgraded, unpinned `OpenshiftEC2NodeClass` resources are automatically upgraded.  


Pinned `OpenshiftEC2NodeClass`
:   In the `OpenshiftEC2NodeClass` resource, you can specify a valid {{ ocp_short }} version in `spec.version`. Specifying this version pins the cluster’s node pools to a specific version. Any pinned `OpenshiftEC2NodeClass` resources are not upgraded as part of the hosted control plane upgrade. You can update the `spec.version` of pinned `OpenshiftEC2NodeClass` resources to a valid version. Updating this `spec.version` field initiates the upgrade of all of the node pools that reference its corresponding `OpenshiftEC2NodeClass` resource.