---
title: Installing the External Secrets Operator for Red Hat OpenShift
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing the External Secrets Operator for Red Hat OpenShift {id="external-secrets-operator-install"}
{%- set context = "external-secrets-operator-install" %}

The {{ external_secrets_operator }} is not installed on the {{ product_title }} by default. Install the {{ external_secrets_operator_short }} by using either the web console or the command-line interface (CLI). {._abstract}

{% leveloffset +1 %}{% include "./modules/external-secrets-operator-limitations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-secrets-operator-install-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-secrets-operator-install-cli.md" %}{% endleveloffset %}

## Additional resources {id="external-secrets-operator-install_additional-resources" ._additional-resources}

*   [Adding Operators to a cluster](/operators/admin/olm-adding-operators-to-cluster#olm-adding-operators-to-a-cluster)

{% leveloffset +1 %}{% include "./modules/external-secrets-operand-install-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-secrets-operator-update-channels.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/external-secrets-operator-stablev1-channel.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/external-secrets-operator-stablev1-y-channel.md" %}{% endleveloffset %}

## Additional resources {id="external-secrets-operator-update-channels_additional-resources" ._additional-resources}

*   [Adding Operators to a cluster](/operators/admin/olm-adding-operators-to-cluster#olm-adding-operators-to-a-cluster)
*   [Updating installed Operators](/operators/admin/olm-upgrading-operators#olm-upgrading-operators)