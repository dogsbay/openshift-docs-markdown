{%- set _mod_docs_content_type = "CONCEPT" %}
# Manila CSI volumes dynamic provisioning {id="persistent-storage-csi-manila-dynamic-provisioning-overview_{{ context }}"}

{{ product_title }} installs a storage class for each available Manila share type. To dynamically provision shared storage volumes that support concurrent access from multiple pods, you must create persistent volume claims (PVCs) by using Manila Container Storage Interface CSI storage classes. {._abstract}

The YAML files that are created are completely decoupled from Manila and from its Container Storage Interface (CSI) plugin. As an application developer, you can dynamically provision ReadWriteMany (RWX) storage and deploy pods with applications that safely consume the storage using YAML manifests.

You can use the same pod and persistent volume claim (PVC) definitions on-premise that you use with {{ product_title }} on AWS, {{ gcp_short }}, Azure, and other platforms, with the exception of the storage class reference in the PVC definition.


:::important

By default, the access rule that is assigned to a volume is `0.0.0.0/0`, which allows access from all IPv4 clients. To limit client access, create custom storage classes that use specific client IP addresses or subnets. For more information, see "Customizing Manila share access rules".

:::



:::note

Manila service is optional. If the service is not enabled in {{ rh_openstack_first }}, the Manila CSI driver is not installed and the storage classes for Manila are not created.

:::