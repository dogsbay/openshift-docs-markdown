{%- set _mod_docs_content_type = "CONCEPT" %}
# Revoking administrator privileges and user access {id="rosa-getting-started-revoking-admin-privileges-and-user-access_{{ context }}"}

You can revoke `cluster-admin` or `dedicated-admin` privileges from a user by using the {{ rosa_cli }}, `rosa`. {._abstract}

To revoke cluster access from a user, you must remove the user from your configured identity provider.