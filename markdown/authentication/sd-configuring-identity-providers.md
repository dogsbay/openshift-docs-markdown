{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Identity providers overview {id="sd-configuring-identity-providers"}

{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "sd-configuring-identity-providers" %}

After you create your {{ product_title }} cluster, configure identity providers so users can log in and access the cluster. {._abstract}

{% if openshift_rosa or openshift_rosa_hcp %}
The following topics describe how to configure an identity provider using the {{ cluster_manager }} console. Alternatively, you can use the {{ rosa_cli_first }} to configure an identity provider and access the cluster.
{% endif %}

{% leveloffset +1 %}{% include "./modules/understanding-idp.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/identity-provider-parameters.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/config-github-idp.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/config-gitlab-idp.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/config-google-idp.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/config-ldap-idp.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/config-openid-idp.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/config-htpasswd-idp.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/config-htpasswd-idp-webui.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/config-htpasswd-idp-from-file.md" %}{% endleveloffset %}
{%- if openshift_rosa_hcp or openshift_rosa %}
{% leveloffset +2 %}{% include "./modules/rosa-config-htpasswd-idp-cli.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/rosa-config-htpasswd-idp-cli-file.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/config-htpasswd-idp-terraform.md" %}{% endleveloffset %}
{% endif %}
{% if openshift_dedicated %}
{% leveloffset +2 %}{% include "./modules/sd-config-htpasswd-idp-cli.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/access-cluster.md" %}{% endleveloffset %}
{% endif %}

## Additional resources {id="additional-resources-cluster-access-sts" ._additional-resources}
{%- if openshift_rosa %}
*   [Accessing a cluster](/rosa_install_access_delete_clusters/rosa-sts-accessing-cluster#rosa-sts-accessing-cluster)
*   [Understanding the ROSA with STS deployment workflow](/rosa_getting_started/rosa-sts-getting-started-workflow#rosa-sts-understanding-the-deployment-workflow)
{%- endif %}
*   [Apache Password Formats](https://httpd.apache.org/docs/current/misc/password_encryptions.html)
*   [Google OpenID Connect integration](https://developers.google.com/identity/protocols/OpenIDConnect)
*   [Authorization Code Flow](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth)