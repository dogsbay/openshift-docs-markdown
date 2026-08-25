---
title: "Installing {{ kueue_name }} in a disconnected environment"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing {{ kueue_name }} in a disconnected environment {id="install-disconnected"}
{%- set context = "install-disconnected" %}

You can install {{ kueue_name }} on a disconnected {{ product_title }} cluster after enabling {{ olm_first }} in your disconnected environment.

Before you can install {{ kueue_name }}, you must complete the following steps:

*   Disable the default remote OperatorHub sources for OLM.
*   Use a workstation with full internet access to create and push local mirrors of the OperatorHub content to a mirror registry.
*   Configure OLM to install and manage Operators from local sources on the mirror registry instead of the default remote sources.

After enabling OLM in a disconnected environment, you can continue to use your unrestricted workstation to keep your local OperatorHub sources updated as newer versions of Operators are released.

For full documentation on completing these steps, see "Using Operator Lifecycle Manager in disconnected environments".

{% leveloffset +1 %}{% include "./modules/kueue-compatible-environments.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-install-kueue-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing the {{ cert_manager_operator }}](/security/cert_manager_operator/cert-manager-operator-install#installing-the-cert-manager-operator-for-red-hat-openshift)

{% leveloffset +1 %}{% include "./modules/upgrading-kueue.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-create-kueue-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-label-namespaces.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)