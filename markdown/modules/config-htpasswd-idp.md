{%- set _mod_docs_content_type = "CONCEPT" -%}
{% if context == "config-identity-providers" %}
{%- set osd_distro = true -%}
{% endif %}
{% if context == "rosa-sts-config-identity-providers" %}
{%- set rosa_distro = true -%}
{% endif %}
{% if context == "rosa-config-identity-providers" %}
{%- set rosa_distro = true -%}
{% endif %}

# Configuring an htpasswd identity provider {id="config-htpasswd-idp_{{ context }}"}

Configure an htpasswd identity provider to create static users. You can log in to your cluster as the user to troubleshoot problems. You can use the web user interface (UI) or your command-line interface (CLI) to create an htpasswd identity provider. {._abstract}

{% if not (openshift_rosa or openshift_rosa_hcp) %}

:::important

The htpasswd identity provider option is included only to create static administration users. htpasswd is not supported as a general-use identity provider for {{ product_title }}.

:::

{% endif %}

{% if context == "config-identity-providers" %}
{%- set osd_distro = false -%}
{% endif %}
{% if context == "rosa-sts-config-identity-providers" %}
{%- set rosa_distro = false -%}
{% endif %}
{% if context == "rosa-config-identity-providers" %}
{%- set rosa_distro = false -%}
{% endif %}