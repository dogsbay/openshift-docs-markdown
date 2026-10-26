{%- set _mod_docs_content_type = "CONCEPT" %}
# Preparing for users {id="preparing-for-users-intro_{{ context }}"}

You can prepare your cluster for users by configuring authentication and permissions, managing initial administrative access, and making Operators available through the software catalog. {._abstract}

After installing {{ product_title }}, you can further expand and customize your cluster to your requirements, including taking steps to prepare for users.

## Understanding identity provider configuration {id="post-install-understanding-identity-provider_{{ context }}"}

The {{ product_title }} control plane includes a built-in OAuth server. Developers and
administrators obtain OAuth access tokens to authenticate themselves to the API.

As an administrator, you can configure OAuth to specify an identity provider
after you install your cluster.