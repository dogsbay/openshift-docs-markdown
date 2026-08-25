---
title: "Postinstallation storage configuration {id=\"virt-post-install-storage-config\"}{% if not (openshift_rosa or (openshift_dedicated or openshift_rosa_hcp)) %}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Postinstallation storage configuration {id="virt-post-install-storage-config"}
{%- set context = "virt-post-install-storage-config" %}

{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
After you install {{ VirtProductName }}, you must configure a default storage class. Configuring a storage class allows your cluster to receive automated boot source updates.
{%- endif %}
If your storage provider is not recognized by the Containerized Data Importer (CDI), you must configure storage profiles after you install {{ VirtProductName }}. Storage profiles provide recommended storage settings based on the associated storage class.

Optional: You can configure local storage by using the hostpath provisioner (HPP).

See the "Storage configuration overview" documentation for more options, including configuring the CDI, data volumes, and automatic boot source updates.

## Configuring local storage by using the HPP {id="configuring-local-storage-hpp"}

When you install the {{ VirtProductName }} Operator, the Hostpath Provisioner (HPP) Operator is automatically installed. The HPP Operator creates the HPP provisioner.

The HPP is a local storage provisioner designed for {{ VirtProductName }}. To use the HPP, you must create an HPP custom resource (CR).


:::important

HPP storage pools must not be in the same partition as the operating system. Otherwise, the storage pools might fill the operating system partition. If the operating system partition is full, this might negatively impact performance, or the node can become unstable or unusable.

:::


{% leveloffset +2 %}{% include "./modules/virt-creating-storage-class-csi-driver.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Defining a storage class](/storage/dynamic-provisioning#dynamic-provisioning-defining-storage-class_dynamic-provisioning)
{%- endif %}
*   [Configuring storage profiles](/virt/storage/virt-configuring-storage-profile#virt-configuring-storage-profile)
*   [Storage configuration overview](/virt/storage/virt-storage-config-overview#virt-storage-config-overview)