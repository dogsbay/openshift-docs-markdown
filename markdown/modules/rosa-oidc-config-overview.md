{%- set _mod_docs_content_type = "CONCEPT" %}
# OpenID Connect configuration overview {id="rosa-byo-odic-overview_{{ context }}"}

When using a cluster hosted by Red&#160;Hat, you can create a managed or unmanaged OpenID Connect (OIDC) configuration by using the {{ rosa_cli_first }}. Your choice of OIDC configuration determines where the OIDC keys are stored. {._abstract}

A managed OIDC configuration is stored within Red&#160;Hat’s AWS account, while a generated unmanaged OIDC configuration is stored within your AWS account. The OIDC configuration is registered to be used with {{ cluster_manager }}. When creating an unmanaged OIDC configuration, the {{ rosa_cli }} provides the private key for you.