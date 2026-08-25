{%- set _mod_docs_content_type = "CONCEPT" %}
# About boot image management {id="mco-update-boot-images_{{ context }}"}

With boot image management enabled, the Machine Config Operator (MCO) manages and updates the {{ op_system_first }} version of the boot image in the machine sets for your control plane or worker nodes. This means that the MCO updates the boot image whenever you update your cluster. Without boot image management enabled, if your cluster was originally created with an older {{ product_title }} version, the boot image that the MCO would use to create new nodes is an older {{ op_system_first }} version, even if your cluster is at a later {{ product_title }} version.  {._abstract}

New nodes created after enabling the feature use the updated boot image. This feature has no effect on existing nodes.


:::note

{% include "./snippets/mco-update-boot-images-intro.md" %}

:::


For example, with the feature disabled, if your cluster was originally created with {{ product_title }} 4.16, the boot image that the MCO would use to create new nodes is the same {{ op_system }} version that was installed for the cluster, even if your cluster is currently at a later {{ product_title }} version.

Using an older boot image could cause the following issues:

*   Extra time to start nodes
*   Certificate expiration issues
*   Version skew issues

You can disable the boot image management feature, if needed. When the feature is disabled, the boot image version no longer updates with the cluster. For example, you could disable the boot image management feature in order to use a custom boot image that you do not want changed. For information on how to disable this feature, see "Disabling boot image management". If you disable this feature, you can re-enable the feature at any time. For information, see "Enabling boot image management".

How the cluster behaves after disabling or re-enabling the feature, depends upon when you made the change, including the following scenarios:

*   If you disable the feature before updating to a new {{ product_title }} version:
    *   The boot image version used by the machine sets remains the same {{ product_title }} version as when the feature was disabled. 
    *   When you scale up nodes, the new nodes use that same {{ product_title }} version.
*   If you disable the feature after updating to a new {{ product_title }} version: 
    *   The boot image version used by the machine sets is updated to match the updated {{ product_title }} version. 
    *   When you scale up nodes, the new nodes use the updated {{ product_title }} version. 
    *   If you update to a later {{ product_title }} version, the boot image version in the machine sets remains at the current version and is not updated with the cluster.
*   If you enable the feature after disabling: 
    *   The boot image version used by the machine sets is updated to the current {{ product_title }} version, if different. 
    *   When you scale up nodes, the new nodes use the current {{ product_title }} version in the cluster. 


:::note

Because a boot image is used only when a node is scaled up, this feature has no effect on existing nodes.

:::


To view the current {{ op_system_first }} boot image version used in your cluster, you can view the `/sysroot/.coreos-aleph-version.json` file on that node.

```yaml title="Example coreos-aleph-version.json file with an older boot image"
{
# ...
    "ref": "docker://ostree-image-signed:oci-archive:/rhcos-418.94.202511191518-0-ostree.x86_64.ociarchive",
    "version": "418.94.202511191518-0"
}
```
where:


`<version>`
:   Specifies the {{ op_system_first }} boot image version. In this example, the boot image is from the originally-installed {{ product_title }} 4.18 version, regardless of the current version of the cluster.


:::important

If any of the machine sets for which you want to enable boot image management use a `*-user-data` secret that is based on Ignition version 2.2.0, the Machine Config Operator converts the Ignition version to 3.4.0 when you enable the feature. {{ product_title }} versions 4.5 and lower use Ignition version 2.2.0. If this conversion fails, the MCO or your cluster could degrade. An error message that includes _err: converting ignition stub failed: failed to parse Ignition config_ is added to the output of the `oc get ClusterOperator machine-config` command. You can use the following general steps to correct the problem:

1.  Disable the boot image management feature. For information, see "Disabling boot image management".
1.  Manually update the `*-user-data` secret to use Ignition version to 3.2.0.
1.  Enable the boot image management feature. For information, see "Enabling boot image management".

:::