{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Approved access {id="approved-access"}

{%- if openshift_dedicated %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- endif %}
{%- set context = "approved-access" %}

You can use the Approved Access feature to review, approve, or deny elevated access requests from Red&#160;Hat Site Reliability Engineering (SRE) to your {{ product_title }} cluster resources. {._abstract}

Red&#160;Hat SRE typically does not require elevated access to systems as part of normal operations to manage and support {{ product_title }} clusters. Elevated access gives SRE the access levels of a cluster-admin role.

SRE creates elevated access requests either in response to a customer-initiated support ticket or in response to alerts received as part of the standard incident response process.

When Approved Access is enabled and an SRE creates an access request, cluster owners receive an email notification informing them of a new access request. The email notification contains a link allowing the cluster owner to quickly approve or deny the access request. You must respond in a timely manner otherwise there is a risk to your service-level agreement (SLA) for {{ product_rosa }}.

*   Pending access requests are available in the {{ hybrid_console_second }} on the clusters list or **Access Requests** tab on the cluster overview for the specific cluster.


:::note

Denying an access request requires you to complete the **Justification** field. In this case, SRE cannot directly act on the resources related to the incident. Customers can still use **Customer Support** to help investigate and resolve any issues.

:::


{% leveloffset +1 %}{% include "./modules/support-submitting-a-case-enable-approved-access.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/support-reviewing-an-access-request-from-an-email-notification.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/support-reviewing-an-access-request-from-the-hybrid-console.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Adding notification cluster contacts](/rosa_cluster_admin/rosa-cluster-notifications#add-notification-contact_rosa-cluster-notifications)
*   [Cluster roles](https://docs.openshift.com/container-platform/latest/authentication/using-rbac.html#default-roles_using-rbac)
*   [Customer Support](https://access.redhat.com/support/cases/#/case/list)