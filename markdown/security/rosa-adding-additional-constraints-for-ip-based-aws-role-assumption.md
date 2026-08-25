{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Adding additional constraints for IP-based AWS role assumption {id="rosa-adding-additional-constraints-for-ip-based-aws-role-assumption"}

{% include "./_attributes/attributes-openshift-dedicated.md" %}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "rosa-adding-additional-constraints-for-ip-based-aws-role-assumption" %}

Create an identity-based policy that denies requests from non-allowlisted IP addresses. Restricting role access can improve your AWS account security. {._abstract}

{% leveloffset +1 %}{% include "./modules/rosa-create-an-identity-based-policy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-attaching-the-policy.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [AWS: Denies access to AWS based on the source IP](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_deny-ip.html)