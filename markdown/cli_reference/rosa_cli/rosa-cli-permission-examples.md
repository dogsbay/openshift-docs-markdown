{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Least privilege permissions for {{ rosa_cli }} commands {id="rosa-cli-permission-examples"}
{%- set context = "rosa-cli-permission-examples" %}

Create AWS Identity and Access Management (IAM) roles that grant only the rights each user needs for {{ rosa_cli_first }} tasks. The following examples use least privilege with the {{ rosa_cli }}. {._abstract}


:::important

Although these policies and commands work together, other restrictions in your AWS environment might make these policies insufficient for your specific needs. Red&#160;Hat provides these examples as a baseline, assuming no other AWS Identity and Access Management (IAM) restrictions are present.

:::


{%- if openshift_rosa_hcp %}
{% leveloffset +1 %}{% include "./modules/rosa-cli-hcp-examples.md" %}{% endleveloffset %}
{%- endif %}
{%- if openshift_rosa %}
{% leveloffset +1 %}{% include "./modules/rosa-cli-classic-examples.md" %}{% endleveloffset %}
{%- endif %}
{% leveloffset +1 %}{% include "./modules/rosa-cli-no-permissions-required.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_min-permissions-required" ._additional-resources}

*   [IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html)
*   [Policies and permissions in IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html)