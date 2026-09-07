---
title: Configuring an htpasswd identity provider
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring an htpasswd identity provider {id="configuring-htpasswd-identity-provider"}
{%- set context = "configuring-htpasswd-identity-provider" %}

Configure the `htpasswd` identity provider so users can log in to {{ product_title }} with credentials from an `htpasswd` file. {._abstract}

To define an `htpasswd` identity provider, complete these tasks:

1.  Create an `htpasswd` file to store the user and password information.
1.  Create a secret to represent the `htpasswd` file.
1.  Define an `htpasswd` identity provider resource that references the secret.
1.  Apply the resource to the default OAuth configuration to add the identity provider.

{% if openshift_origin or openshift_enterprise or openshift_webscale %}
{% leveloffset +1 %}{% include "./modules/identity-provider-overview.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/identity-provider-htpasswd-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-creating-htpasswd-file.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/identity-provider-creating-htpasswd-file-linux.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/identity-provider-creating-htpasswd-file-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-htpasswd-secret.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-htpasswd-CR.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Identity provider parameters](/authentication/understanding-identity-provider#identity-provider-parameters_understanding-identity-provider)

{% leveloffset +1 %}{% include "./modules/identity-provider-add.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-htpasswd-update-users.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-configuring-using-web-console.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [htpasswd utility (Apache HTTP Server documentation)](http://httpd.apache.org/docs/2.4/programs/htpasswd.html)