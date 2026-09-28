{%- set _mod_docs_content_type = "CONCEPT" %}
# Manage internal authentication server session properties {id="manage-internal-authentication-server-session-properties-con_{{ context }}"}

The {{ product_title }} control plane includes a built-in OAuth server that issues the tokens users log in with. You can configure token duration, inactivity timeouts, and the OAuth server URL so that dormant or unneeded sessions close automatically.