{%- set _mod_docs_content_type = "CONCEPT" %}
# Identity provider configuration and cluster access {id="rosa-getting-started-configure-an-idp-and-grant-access_{{ context }}"}

{{ product_title }} includes a built-in OAuth server. After your {{ product_title }} cluster is created, you must configure OAuth to use an identity provider. You can then add members to your configured identity provider to grant them access to your cluster. {._abstract}

You can also grant the identity provider users with `cluster-admin` or `dedicated-admin` privileges as required.