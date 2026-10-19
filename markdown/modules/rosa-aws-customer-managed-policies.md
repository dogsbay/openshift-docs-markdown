{%- set _mod_docs_content_type = "CONCEPT" %}
# Customer-managed policies {id="rosa-aws-customer-managed-policies_{{ context }}"}

In {{ product_title }}, you can attach customer-managed policies to the Identity and Access Management (IAM) roles required to run and maintain {{ product_title }} clusters. This is a standard AWS IAM roles capability. {._abstract}

The ability to attach these policies to IAM roles specific to {{ product_title }} extends cluster permission capabilities; for example, as a way to allow cluster components to access additional AWS resources that are otherwise not part of the IAM policies specific to {{ product_title }}.

To ensure that any critical customer applications that rely on customer-managed policies are not modified in any way during cluster or role upgrades, {{ product_title }} uses the `ListAttachedRolesPolicies` permission to retrieve the list of permission policies from roles and the `ListRolePolicies` permission to retrieve the list of policies from roles specific to {{ product_title }}. This information ensures that customer-managed policies are not impacted during cluster events, and allows Red&#160;Hat Site Reliability Engineers (SREs) to monitor both {{ product_title }} and customer-managed policies attached to IAM roles specific to {{ product_title }}, enhancing their ability to troubleshoot any cluster issues more effectively.


:::warning

Attaching permission boundary policies to IAM roles that restrict policies specific to {{ product_title }} is not supported, as these policies could interrupt the functionality of the basic permissions necessary to successfully run and maintain your {{ product_title }} cluster. There are prepared permissions boundary policies for the {{ rosa_classic_title }} installer role. See the _Additional resources_ section for more information.

:::