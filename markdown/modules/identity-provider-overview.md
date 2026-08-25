{%- set _mod_docs_content_type = "CONCEPT" %}
# Identity providers in {{ product_title }} {id="identity-provider-overview_{{ context }}"}

You can configure identity providers by creating a custom resource (CR) that describes the provider and adding it to the cluster. Identity providers enable user authentication in {{ product_title }} beyond the default `kubeadmin` user. {._abstract}


:::note

{{ product_title }} usernames containing `/`, `:`, and `%` are not supported.

:::