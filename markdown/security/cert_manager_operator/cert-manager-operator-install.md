---
title: "Installing the {{ cert_manager_operator }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing the {{ cert_manager_operator }} {id="cert-manager-operator-install"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cert-manager-operator-install" %}

The {{ cert_manager_operator }} is not installed in {{ product_title }} by default. You can install the {{ cert_manager_operator }} by using the web console and command-line interface (CLI).

The {{ cert_manager_operator }} sets the `features.operators.openshift.io/token-auth-aws`, `features.operators.openshift.io/token-auth-azure`, and `features.operators.openshift.io/token-auth-gcp` annotations in the `ClusterServiceVersion` custom resource of the Operator. The {{ product_title }} web console requires the credential details when these annotations are set. Currently, the Operator does not use the values collected by the OpenShift web console and you can provide any value when asked for the input. For example, when installing on the managed {{ product_title }} cluster, the `identity-provider-arn` is asked and any value can be provided to proceed.


:::important

The {{ cert_manager_operator }} version 1.15 or later supports the `AllNamespaces`, `SingleNamespace`, and `OwnNamespace` installation modes. Earlier versions, such as 1.14, support only the `SingleNamespace` and `OwnNamespace` installation modes.

:::


{% leveloffset +1 %}{% include "./modules/cert-manager-install-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cert-manager-install-cli.md" %}{% endleveloffset %}

**Additional resources**

*   [Supported {{ cert_manager_operator }} versions](/security/cert_manager_operator/index#cert-manager-operator-supported-versions_cert-manager-operator-about)

{% leveloffset +1 %}{% include "./modules/cert-manager-operator-update-channels.md" %}{% endleveloffset %}

## Additional resources {id="cert-manager-operator-install_additional-resources"}

*   [Adding Operators to a cluster](/operators/admin/olm-adding-operators-to-cluster#olm-adding-operators-to-a-cluster)
*   [Updating installed Operators](/operators/admin/olm-upgrading-operators#olm-upgrading-operators)