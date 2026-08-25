---
title: Configuring an htpasswd identity provider
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring an htpasswd identity provider {id="configuring-htpasswd-identity-provider"}
{%- set context = "configuring-htpasswd-identity-provider" %}

Configure the `htpasswd` identity provider to allow users to log in to {{ product_title }} with credentials from an htpasswd file.

To define an htpasswd identity provider, perform the following tasks:

1.  [Create an `htpasswd` file](/authentication/identity_providers/configuring-htpasswd-identity-provider#creating-htpasswd-file) to store the user and password information.
1.  [Create a secret](/authentication/identity_providers/configuring-htpasswd-identity-provider#identity-provider-creating-htpasswd-secret_{{ context }}) to represent the `htpasswd` file.
1.  [Define an htpasswd identity provider resource](/authentication/identity_providers/configuring-htpasswd-identity-provider#identity-provider-htpasswd-CR_{{ context }}) that references the secret.
1.  [Apply the resource](/authentication/identity_providers/configuring-htpasswd-identity-provider#add-identity-provider_{{ context }}) to
the default OAuth configuration to add the identity provider.

{% if openshift_origin or openshift_enterprise or openshift_webscale %}
{% leveloffset +1 %}{% include "./modules/identity-provider-overview.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/identity-provider-htpasswd-about.md" %}{% endleveloffset %}

## Creating the htpasswd file {id="creating-htpasswd-file"}

See one of the following sections for instructions about how to create the htpasswd file:

*   [Creating an htpasswd file using Linux](/authentication/identity_providers/configuring-htpasswd-identity-provider#identity-provider-creating-htpasswd-file-linux_configuring-htpasswd-identity-provider)
*   [Creating an htpasswd file using Windows](/authentication/identity_providers/configuring-htpasswd-identity-provider#identity-provider-creating-htpasswd-file-windows_configuring-htpasswd-identity-provider)

{% leveloffset +2 %}{% include "./modules/identity-provider-creating-htpasswd-file-linux.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/identity-provider-creating-htpasswd-file-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-htpasswd-secret.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-htpasswd-CR.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   See [Identity provider parameters](/authentication/understanding-identity-provider#identity-provider-parameters_understanding-identity-provider) for information on parameters, such as `mappingMethod`, that are common to all identity providers.

{% leveloffset +1 %}{% include "./modules/identity-provider-add.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-htpasswd-update-users.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-configuring-using-web-console.md" %}{% endleveloffset %}