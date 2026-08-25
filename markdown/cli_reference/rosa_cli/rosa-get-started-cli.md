{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Get started with the ROSA CLI {id="rosa-get-started-cli"}
{%- set context = "rosa-getting-started-cli" %}

Learn how to install, configure, and update the {{ rosa_cli_first }}. You can use the {{ rosa_cli }} to create, update, manage, and delete {{ product_title }} clusters and resources. {._abstract}

{% leveloffset +1 %}{% include "./modules/rosa-setting-up-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-login.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-login-sso-auth-code.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-login-sso-device-code.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-login-offline-token.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-logout.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-verify.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-download.md" %}{% endleveloffset %}

{% if not openshift_rosa_hcp %}
{% leveloffset +1 %}{% include "./modules/rosa-initialize.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-using-bash-script.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/rosa-updating-rosa-cli.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_get-started-cli" ._additional-resources}

*   [Setting up the {{ rosa_cli }}](/cli_reference/rosa_cli/rosa-get-started-cli#rosa-setting-up-cli_rosa-getting-started-cli)
*   [Getting started with the OpenShift CLI](/cli_reference/openshift_cli/getting-started-cli#cli-getting-started)
*   [Service accounts](https://console.redhat.com/iam/service-accounts)