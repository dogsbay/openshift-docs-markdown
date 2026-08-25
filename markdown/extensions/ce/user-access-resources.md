---
title: User access to extension resources
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# User access to extension resources {id="user-access-resources"}
{%- set context = "user-access-resources" %}

After you install a cluster extension managed by {{ olmv1_first }}, the extension might provide `CustomResourceDefinition` (CRD) objects that expose new cluster APIs. While cluster administrators automatically have full access to these resources, regular users usually require additional permissions. {._abstract}

{{ olmv1 }} does not automatically configure or manage role-based access control (RBAC) for regular users to interact with the APIs provided by installed extensions. Cluster administrators must define the required RBAC policy to create, view, or edit these custom resources (CRs) for such users.


:::note

The RBAC permissions described for user access to extension resources are different from the permissions that must be added to a service account to enable {{ olmv1 }}-based initial installation of a cluster extension itself. For more on RBAC requirements while installing an extension, see "Cluster extension permissions" in "Managing extensions".

:::


**Additional resources**
{._additional-resources}

*   ["Managing extensions" → "Cluster extension permissions"](/extensions/ce/managing-ce#olmv1-cluster-extension-permissions_managing-ce)

{% leveloffset +1 %}{% include "./modules/olmv1-default-cluster-roles-users.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [User-facing roles (Kubernetes documentation)](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles)

{% leveloffset +1 %}{% include "./modules/olmv1-finding-ce-resources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-granting-user-access-binding.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-granting-user-access-aggregated.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Aggregated ClusterRoles (Kubernetes documentation)](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#aggregated-clusterroles)