{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding the default ingress certificate {id="understanding-default-ingress_{{ context }}"}

You can replace the default ingress certificate with a certificate from a public CA so that external clients connect securely to your applications. {._abstract}

The default ingress certificate in {{ product_title }} is a wildcard certificate that the Ingress Operator issues from an internal CA for the web console, CLI, and applications under the `.apps` subdomain.