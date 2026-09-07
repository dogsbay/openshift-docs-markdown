{%- set _mod_docs_content_type = "CONCEPT" %}
# Managing user-defined labels and tags for {{ gcp_short }} {id="installing-gcp-user-defined-labels-and-tags_{{ context }}"}

You can use {{ gcp_first }} labels and tags to identify and organize the resources created for a specific {{ product_title }} cluster. {._abstract}

You can define labels and tags for each {{ gcp_short }} resource only during {{ product_title }} cluster installation.


:::important

User-defined labels and tags are not supported for {{ product_title }} clusters upgraded to {{ product_title }} {{ product_version }}.

:::



:::note

You cannot update the tags that are already added. Also, a new tag-supported resource creation fails if the configured tag keys or tag values are deleted.

:::


User-defined labels and {{ product_title }} specific labels are applied only to resources created by the {{ product_title }} installation program and its core components, such as the following:

*   {{ gcp_short }} FileStore CSI Driver Operator
*   {{ gcp_short }} PD CSI Driver Operator
*   Image Registry Operator
*   Machine API provider for {{ gcp_short }}

User-defined labels are not attached to the resources created by any other Operators or the Kubernetes in-tree components.

User-defined labels and {{ product_title }} labels are available on the following {{ gcp_short }} resources:

*   Compute disk
*   Compute forwarding rule
*   Compute image
*   Compute instance
*   DNS managed zone
*   Filestore backup 
*   Filestore instance
*   Storage bucket

User-defined labels have the following limitations:

*   Labels for `ComputeAddress` are supported in the {{ gcp_short }} beta version. {{ product_title }} does not add labels to the resource.

User-defined tags are applied only to resources created by the {{ product_title }} installation program and its core components, such as the following:

*   {{ gcp_short }} FileStore CSI Driver Operator
*   {{ gcp_short }} PD CSI Driver Operator
*   Image Registry Operator
*   Machine API provider for {{ gcp_short }}

User-defined tags are not attached to the resources created by any other Operators or the Kubernetes in-tree components.

User-defined tags are available on the following {{ gcp_short }} resources:

*   Compute disk
*   Compute instance
*   Filestore backup
*   Filestore instance
*   Storage bucket

User-defined tags have the following limitations:

*   Tags must not be restricted to particular service accounts, because Operators create and use service accounts with minimal roles.
*   {{ product_title }} does not create any key and value resources of the tag.
*   {{ product_title }} specific tags are not added to any resource.

**Additional resources**
{._additional-resources}

*   [Retrieving your organization ID](https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id)
*   [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
*   [Labels overview](https://cloud.google.com/resource-manager/docs/labels-overview)
*   [Tags overview](https://cloud.google.com/resource-manager/docs/tags/tags-overview)