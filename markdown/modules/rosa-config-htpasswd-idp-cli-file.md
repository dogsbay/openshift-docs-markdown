{%- set _mod_docs_content_type = "PROCEDURE" -%}
{% if context == "config-identity-providers" %}
{%- set osd_distro = true -%}
{% endif %}
{% if context == "rosa-sts-config-identity-providers" %}
{%- set rosa_distro = true -%}
{% endif %}
{% if context == "rosa-config-identity-providers" %}
{%- set rosa_distro = true -%}
{% endif %}

# Configure an htpasswd identity provider with an htpasswd file {id="rosa-config-htpasswd-idp-cli-file_{{ context }}"}

You can create an htpasswd identity provider (IDP) with the {{ rosa_cli_first }} tool and a well-formed htpasswd file. {._abstract}

**Prerequisites**

*   You have installed and configured the latest version of the {{ rosa_cli }}.

**Procedure**

*   Create a text file with a new row for each set of credentials with the username and password being colon separated as in the following example:
    ```text
    johndoe:$apr1$hRY7OJWH$km1EYH.UIRj00000000/
    janedoe:$apr1$Q58SO804$B/fECNWfn5F00000000/
    ```

    :::note

    The htpasswd file is encrypted using APR1 hashing. For more information, see "Apache Password Formats" in the _Additional resources_.
    
    :::

    ```terminal
    $ rosa create idp --type=htpasswd -c <cluster_name> --from-file=myhtpassfile.txt
    ```

{% if context == "config-identity-providers" %}
{%- set osd_distro = false -%}
{% endif %}
{% if context == "rosa-sts-config-identity-providers" %}
{%- set rosa_distro = false -%}
{% endif %}
{% if context == "rosa-config-identity-providers" %}
{%- set rosa_distro = false -%}
{% endif %}