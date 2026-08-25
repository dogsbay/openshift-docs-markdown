{%- set _mod_docs_content_type = "CONCEPT" %}
# VMware vSphere host group enablement {id="installation-vsphere-regions-zones-host-groups_{{ context }}"}

When deploying an {{ product_title }} cluster to {{ vmw_first }}, you can map your {{ vmw_short }} host groups onto {{ product_title }} failure domains. This is useful if you are using a stretched cluster configuration, where ESXi hosts are grouped into host groups by physical location. {._abstract}

To enable this feature, you must meet the following requirements:

*   You must arrange your ESXi hosts into host groups.
*   You must create a vCenter tag in the `openshift-region` tag category for your cluster. After you create the tag, you must attach the tag to the cluster.
*   You must create a vCenter tag in the `openshift-zone` tag category for each host group and then attach the correct tag to each ESXi host.
*   You must define multiple failure domains for your {{ product_title }} cluster in the `install-config.yaml` file.
*   You must grant the `Host.Inventory.EditCluster` privilege on the {{ vmw_short }} vCenter cluster object.

Review the following key terms, which correspond to parameters in your `install-config.yaml` file that you must configure to enable this feature:

*   Failure domain: Specifies the relationships between regions and zones in {{ product_title }}, and clusters and host groups in {{ vmw_short }}. You define a failure domain by using vCenter objects, such as a `datastore` object. A failure domain defines the vCenter location for {{ product_title }} cluster nodes.
*   Region: Specifies a vCenter cluster. You define a region by using a tag from the `openshift-region` tag category.
*   Zone: Specifies a vCenter host group. You define a zone by using a tag from the `openshift-zone` tag category.
*   Region type: Specifies the `ComputeCluster` region type to enable this feature.
*   Zone type: Specifies the `HostGroup` zone type to enable this feature.