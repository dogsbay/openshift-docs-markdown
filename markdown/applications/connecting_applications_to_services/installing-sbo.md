{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/servicebinding-document-attributes.md" %}
# Installing Service Binding Operator {id="installing-sbo"}
{%- set context = "installing-sbo" %}

This guide walks cluster administrators through the process of installing the {{ servicebinding_title }} to an {{ product_title }} cluster. {._abstract}

You can install {{ servicebinding_title }} on {{ product_title }} 4.7 and later.

## Prerequisites {id="_prerequisites"}

*   You have access to an {{ product_title }} cluster using an account with `cluster-admin` permissions.
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   Your cluster has the [Marketplace capability](/installing/overview/cluster-capabilities#operator-marketplace_cluster-capabilities) enabled or the Red Hat Operator catalog source configured manually.
{%- endif %}

{% leveloffset +1 %}{% include "./modules/op-installing-sbo-operator-using-the-web-console.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   [Getting started with service binding](/applications/connecting_applications_to_services/getting-started-with-service-binding#getting-started-with-service-binding).