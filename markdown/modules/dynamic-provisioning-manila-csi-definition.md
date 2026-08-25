{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ rh_openstack }} Manila Container Storage Interface (CSI) object definition {id="openstack-manila-csi-definition_{{ context }}"}

The OpenStack Manila CSI Driver Operator automatically creates storage classes for all available Manila share types immediately after installation, eliminating manual configuration. This automation ensures you can start provisioning persistent volumes right away without needing to understand Manila share type details or write custom `StorageClass` definitions. {._abstract}