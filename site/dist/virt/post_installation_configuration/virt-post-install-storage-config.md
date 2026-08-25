---
title: Postinstallation storage configuration {id="virt-post-install-storage-config"}{% if not (openshift_rosa or (openshift_dedicated or openshift_rosa_hcp)) %}
---

# Postinstallation storage configuration {#virt-post-install-storage-config}

{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %} After you install {{ VirtProductName }}, you must configure a default storage class. Configuring a storage class allows your cluster to receive automated boot source updates. {%- endif %} If your storage provider is not recognized by the Containerized Data Importer (CDI), you must configure storage profiles after you install {{ VirtProductName }}. Storage profiles provide recommended storage settings based on the associated storage class.

Optional: You can configure local storage by using the hostpath provisioner (HPP).

See the "Storage configuration overview" documentation for more options, including configuring the CDI, data volumes, and automatic boot source updates.

## Configuring local storage by using the HPP {#configuring-local-storage-hpp}

When you install the {{ VirtProductName }} Operator, the Hostpath Provisioner (HPP) Operator is automatically installed. The HPP Operator creates the HPP provisioner.

The HPP is a local storage provisioner designed for {{ VirtProductName }}. To use the HPP, you must create an HPP custom resource (CR).

> [!IMPORTANT]
> HPP storage pools must not be in the same partition as the operating system. Otherwise, the storage pools might fill the operating system partition. If the operating system partition is full, this might negatively impact performance, or the node can become unstable or unusable.

{% leveloffset +2 %}{% include "./modules/virt-creating-storage-class-csi-driver.md" %}

## Additional resources {#additional-resources_{{ context }}}

- [Defining a storage class](/openshift-docs-markdown/storage/dynamic-provisioning#dynamic-provisioning-defining-storage-class_dynamic-provisioning)
- [Configuring storage profiles](/openshift-docs-markdown/virt/storage/virt-configuring-storage-profile#virt-configuring-storage-profile)
- [Storage configuration overview](/openshift-docs-markdown/virt/storage/virt-storage-config-overview#virt-storage-config-overview)
