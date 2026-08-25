{%- set _mod_docs_content_type = "CONCEPT" %}
# Customer-managed policies {id="rosa-aws-customer-managed-policies_{{ context }}"}
{{ product_title }} (ROSA) users are able to attach customer-managed policies to the IAM roles required to run and maintain ROSA clusters. This capability is not uncommon with AWS IAM roles.
The ability to attach these policies to ROSA-specific IAM roles extends a ROSA cluster’s permission capabilities; for example, as a way to allow cluster components to access additional AWS resources that are otherwise not part of the ROSA-specific IAM policies.

To ensure that any critical customer applications that rely on customer-managed policies are not modified in any way during cluster or role upgrades, ROSA utilizes the `ListAttachedRolesPolicies` permission to retrieve the list of permission policies from roles and the `ListRolePolicies` permission to retrieve the list of policies from ROSA-specific roles. This information ensures that customer-managed policies are not impacted during cluster events, and allows Red Hat SREs to monitor both ROSA and customer-managed policies attached to ROSA-specific IAM roles, enhancing their ability to troubleshoot any cluster issues more effectively.


:::warning

Attaching permission boundary policies to IAM roles that restrict ROSA-specific policies is not supported, as these policies could interrupt the functionality of the basic permissions necessary to successfully run and maintain your ROSA cluster. There are prepared permissions boundary policies for the ROSA (classic architecture) installer role. See the Additional resources section for more information.

:::


**Additional resources**
{._additional-resources}

*   [Permissions boundaries for IAM entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html)