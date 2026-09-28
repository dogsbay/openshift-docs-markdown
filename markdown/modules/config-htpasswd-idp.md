# Configuring an htpasswd identity provider {id="config-htpasswd-idp_{{ context }}"}

Configure an htpasswd identity provider to create static users. You can log in to your cluster as the user to troubleshoot problems. You can use the web user interface (UI) or your command-line interface (CLI) to create an htpasswd identity provider. {._abstract}

{% if not (openshift_rosa or openshift_rosa_hcp) %}

:::important

The htpasswd identity provider option is included only to create static administration users. htpasswd is not supported as a general-use identity provider for {{ product_title }}.

:::

{% endif %}