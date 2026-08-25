---
title: "Installing {{ kueue_name }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing {{ kueue_name }} {id="install-kueue"}
{%- set context = "install-kueue" %}

You can install {{ kueue_name }} by using the {{ kueue_op }} in OperatorHub.

{% leveloffset +1 %}{% include "./modules/kueue-compatible-environments.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-install-kueue-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing the {{ cert_manager_operator }}](/security/cert_manager_operator/cert-manager-operator-install#installing-the-cert-manager-operator-for-red-hat-openshift)

{% leveloffset +1 %}{% include "./modules/upgrading-kueue.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-create-kueue-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-label-namespaces.md" %}{% endleveloffset %}