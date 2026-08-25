{%- set _mod_docs_content_type = "REFERENCE" %}
# Manually updating the boot image on a platform none or external cluster {id="mco-update-boot-images-plat-none_{{ context }}"}

For `platform: None` and `platform: External` clusters, you can manually update the boot image for your cluster by configuring your machine sets to use the latest {{ product_title }} image as the boot image to help ensure any new nodes can scale up properly. {._abstract}

For these clusters, {{ product_title }} does not manage node provisioning or {{ op_system_first }} boot images. These clusters do not use Machine API machine sets. 


:::note

The standard boot image management feature is not supported for `platform: None` or `platform: External` clusters.

:::


The method for updating boot images depends on how nodes are added to your cluster as a day-2 operation. 

| Method | Description |
| --- | --- |
| User-provisioned infrastructure clusters | Nodes are provisioned manually by a user-managed infrastructure. |
| {{ rh_rhacm_first }}-managed clusters | Nodes are added by using a discovery ISO managed by an `InfraEnv` object on the hub cluster. |
| External provider clusters | Nodes are provisioned by using provider-specific tooling with a user-uploaded {{ op_system }} image. |


User-provisioned infrastructure
:   For user-provisioned infrastructure clusters, you manage boot images as part of your infrastructure. To update the boot image, download the latest {{ op_system }} image for your architecture from [mirror.openshift.com](https://mirror.openshift.com/pub/openshift-v4/dependencies/rhcos/) and update your infrastructure to serve the new image.

    For the full procedure, see the section for your platform in "Adding compute machines to clusters with user-provisioned infrastructure manually".


{{ rh_rhacm }}-managed clusters
:   For clusters managed by {{ rh_rhacm }}, the boot image used to generate the discovery ISO image is controlled by the `spec.osImageVersion` parameter in the `InfraEnv` object on the hub cluster. After an {{ product_title }} upgrade, you need to update the existing `InfraEnv` object to add or update `spec.osImageVersion` field, specifying the {{ product_title }} version of the new boot image.  


External provider clusters
:   For clusters managed by an external infrastructure provider, such as Oracle Cloud Infrastructure (OCI), you must upload the new boot image to the provider’s image store and update your node provisioning configuration to reference the new image when creating new nodes. The exact steps are provider-specific.

If boot image skew enforcement in your cluster is set to the manual mode, after updating the boot image, update the version of the new boot image in the `MachineConfiguration` object as described in "Updating the boot image skew enforcement version".