{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating vSphere storage topology during installation {id="persistent-storage-csi-vsphere-top-aware-during-install_{{ context }}"}

To enable automatic topology-aware storage provisioning across vSphere failure domains, configure regions and zones during cluster installation. {._abstract}

**Procedure**

*   Specify the topology during installation. See "Configuring regions and zones for a VMware vCenter".

    No additional action is necessary and the default storage class that is created by {{ product_title }} is topology aware and should allow provisioning of volumes in different failure domains.