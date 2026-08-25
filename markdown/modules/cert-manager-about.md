{%- set _mod_docs_content_type = "CONCEPT" %}
# About the {{ cert_manager_operator }} {id="cert-manager-about_{{ context }}"}

The `cert-manager` project introduces certificate authorities and certificates as resource types in the Kubernetes API, which makes it possible to provide certificates on-demand to developers working within your cluster. The {{ cert_manager_operator }} provides a supported way to integrate `cert-manager` into your {{ product_title }} cluster. {._abstract}

The {{ cert_manager_operator }} provides the following features:

*   Support for integrating with external certificate authorities
*   Tools to manage certificates
*   Ability for developers to self-serve certificates
*   Automatic certificate renewal


:::important

Do not attempt to use both {{ cert_manager_operator }} for {{ product_title }} and the community cert-manager Operator at the same time in your cluster.

Also, you should not install {{ cert_manager_operator }} for {{ product_title }} in multiple namespaces within a single OpenShift cluster.

:::