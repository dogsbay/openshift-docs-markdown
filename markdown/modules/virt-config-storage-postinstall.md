{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure storage infrastructure postinstallation {id="virt-configure-platform-infrastructure-storage_{{ context }}"}

Configure a default storage class to enable your cluster to receive automated boot source updates. You can configure local storage by using the hostpath provisioner (HPP).  {._abstract}


:::note

If your storage provider is not recognized by the Containerized Data Importer (CDI), you must configure storage profiles to provide recommended storage settings based on the associated storage class.

:::


## Configure local storage by using the HPP {id="configuring-local-storage-hpp"}

When you install the {{ VirtProductName }} Operator, the Hostpath Provisioner (HPP) Operator is automatically installed. The HPP Operator creates the HPP provisioner. {._abstract}

The HPP is a local storage provisioner designed for {{ VirtProductName }}. To use the HPP, you must create an HPP custom resource (CR).


:::important

HPP storage pools must not be in the same partition as the operating system. Otherwise, the storage pools might fill the operating system partition. If the operating system partition is full, this might negatively impact performance, or the node can become unstable or unusable.

:::


{% leveloffset +1 %}{% include "./virt-creating-storage-class-csi-driver.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Defining a storage class](/storage/dynamic-provisioning#dynamic-provisioning-defining-storage-class_dynamic-provisioning)
{%- endif %}
*   [Configuring storage profiles](/virt/storage/virt-configuring-storage-profile#virt-configuring-storage-profile)
*   [Storage configuration overview](/virt/storage/virt-storage-config-overview#virt-storage-config-overview)