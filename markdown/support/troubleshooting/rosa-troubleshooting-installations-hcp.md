{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Troubleshooting {{ product_title }} cluster installations {id="rosa-troubleshooting-installations-hcp"}

{%- set context = "rosa-troubleshooting-installations-hcp" %}

Troubleshoot the installation of {{ product_title }} clusters by completing the following instructions. {._abstract}

{% leveloffset +1 %}{% include "./modules/rosa-troubleshooting-installing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-verify-hcp-install.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-troubleshoot-hcp-install.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-hcp-no-console-access.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-hcp-ready-no-console-access.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-hcp-private-ready-no-console-access.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Installation troubleshooting](#rosa-troubleshooting-installing_{{ context }})
*   [Verifying installation of {{ product_title }} clusters](#rosa-verify-hcp-install_{{ context }})
*   [Troubleshooting {{ product_title }} installation error codes](#rosa-troubleshoot-hcp-install_{{ context }})
*   [Troubleshooting access to {{ hybrid_console }}](#rosa-hcp-no-console-access_{{ context }})
*   [Verifying access to {{ product_title }} web console for {{ product_title }} cluster in ready state](#rosa-hcp-ready-no-console-access_{{ context }})
*   [Verifying access to {{ hybrid_console }} for private {{ product_title }} clusters](#rosa-hcp-private-ready-no-console-access_{{ context }})
*   [AWS prerequisites for {{ product_title }}](/rosa_planning/rosa-sts-aws-prereqs#rosa-sts-aws-prereqs)
*   [AWS STS and {{ product_title }} explained](/rosa_architecture/cloud-experts-rosa-hcp-sts-explained#cloud-experts-rosa-hcp-sts-explained)
*   [{{ product_title }} OAuth server](/authentication/understanding-authentication#oauth-server-overview)
*   [Web Console Overview](/web_console/web-console-overview#web-console-overview)
*   [`rosa describe machinepool`](/cli_reference/rosa_cli/rosa-cli-commands#rosa-describe-machinepool)
*   [AWS Virtual Private Cloud (VPC) Documentation](https://docs.aws.amazon.com/vpc/latest/userguide/extend-intro.html)