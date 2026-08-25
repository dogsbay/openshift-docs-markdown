---
title: Managing cluster extensions
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Managing cluster extensions {id="managing-ce"}
{%- set context = "managing-ce" %}

You use catalogs to access the versions, patches, and over-the-air updates for extensions and Operators. You use custom resources (CRs) to manage extensions declaratively from the CLI. {._abstract}

{% include "./snippets/olmv1-cli-only.md" %}

{% leveloffset +1 %}{% include "./modules/olmv1-finding-operators-to-install.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olmv1-catalog-queries.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-cluster-extension-permissions.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olmv1-creating-a-namespace.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olmv1-creating-a-service-account.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olmv1-downloading-bundle-manifests.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olmv1-required-rbac-to-install-and-manage-extension-resources.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olmv1-creating-a-cluster-role.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olmv1-example-pipelines-operator-cluster-role.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olmv1-creating-a-cluster-role-binding.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-installing-an-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-installing-an-operator-in-a-specific-namespace.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Supported extensions](/extensions/ce/olmv1-supported-extensions#olmv1-supported-extensions)
*   [Projects and namespaces](/authentication/using-rbac#rbac-projects-namespaces_using-rbac)
*   [Creating a service account](/extensions/ce/managing-ce#olmv1-creating-a-service-account_managing-ce)
*   [Example custom resources (CRs) that specify a target version](/extensions/ce/update-paths#olmv1-about-target-versions_update-paths)
*   [Support for version ranges](/extensions/ce/update-paths#olmv1-version-range-support_update-paths)

{% leveloffset +1 %}{% include "./modules/olmv1-troubleshooting-rbac-errors-with-preflight-check.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-updating-an-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Update paths](/extensions/ce/update-paths#update-paths)

{% leveloffset +1 %}{% include "./modules/olmv1-deleting-an-operator.md" %}{% endleveloffset %}