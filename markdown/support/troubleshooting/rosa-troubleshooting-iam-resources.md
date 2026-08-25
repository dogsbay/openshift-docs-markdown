{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Troubleshooting IAM roles {id="rosa-troubleshooting-iam-resources"}

{%- set context = "rosa-troubleshooting-iam-resources" %}

Troubleshoot IAM role issues that prevent proper access to your {{ product_title }} cluster resources. {._abstract}

{% leveloffset +1 %}{% include "./modules/rosa-sts-ocm-and-user-role-troubleshooting.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-sts-ocm-role-creation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-sts-user-role-creation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-sts-aws-requirements-creating-association.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-sts-aws-requirements-creating-multi-association.md" %}{% endleveloffset %}

{%- if not openshift_rosa_hcp %}
## Additional resources {id="additional-resources_aws-requirements_{{ context }}" ._additional-resources}
*   [Methods of account-wide role creation](/rosa_architecture/rosa-sts-about-iam-resources#rosa-sts-account-wide-roles-and-policies-creation-methods_rosa-sts-about-iam-resources)
*   [Account-wide IAM role and policy reference](/rosa_architecture/rosa-sts-about-iam-resources#rosa-sts-account-wide-roles-and-policies)
{%- endif %}