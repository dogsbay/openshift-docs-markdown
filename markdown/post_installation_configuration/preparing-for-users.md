---
title: Preparing for users
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "post-install-preparing-for-users" %}
# Preparing for users {id="post-install-preparing-for-users"}
{% include "./_attributes/common-attributes.md" %}

You can prepare your cluster for users by configuring authentication and permissions, managing initial administrative access, and making Operators available through the software catalog.

After installing {{ product_title }}, you can further expand and customize your cluster to your requirements, including taking steps to prepare for users.

## Understanding identity provider configuration {id="post-install-understanding-identity-provider"}

The {{ product_title }} control plane includes a built-in OAuth server. Developers and
administrators obtain OAuth access tokens to authenticate themselves to the API.

As an administrator, you can configure OAuth to specify an identity provider
after you install your cluster.

{% leveloffset +2 %}{% include "./modules/identity-provider-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/post-install-supported-identity-providers.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/identity-provider-parameters.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/identity-provider-default-CR.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/post-install-using-rbac-to-define-and-apply-permissions.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/rbac-overview.md" %}{% endleveloffset %}

**Additional resources**

*   [RBAC rules allow execution privileges](https://access.redhat.com/solutions/6989997)
*   [Aggregated ClusterRoles (Kubernetes documentation)](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#aggregated-clusterroles)

{% leveloffset +2 %}{% include "./modules/rbac-projects-namespaces.md" %}{% endleveloffset %}

**Additional resources**

*   [Kubernetes documentation on namespaces](https://kubernetes.io/docs/tasks/administer-cluster/namespaces/)

{% leveloffset +2 %}{% include "./modules/rbac-default-projects.md" %}{% endleveloffset %}

**Additional resources**

*   [Guaranteed Scheduling For Critical Add-On Pods (Kubernetes documentation)](https://kubernetes.io/docs/tasks/administer-cluster/guaranteed-scheduling-critical-addon-pods/#rescheduler-guaranteed-scheduling-of-critical-add-ons)

{% leveloffset +2 %}{% include "./modules/rbac-viewing-cluster-roles.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/rbac-viewing-local-roles.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/rbac-adding-roles.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/rbac-creating-local-role.md" %}{% endleveloffset %}

{% if openshift_enterprise or openshift_webscale or openshift_origin %}
{% leveloffset +2 %}{% include "./modules/rbac-creating-cluster-role.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +2 %}{% include "./modules/rbac-local-role-binding-commands.md" %}{% endleveloffset %}

{% if openshift_enterprise or openshift_webscale or openshift_origin %}
{% leveloffset +2 %}{% include "./modules/rbac-cluster-role-binding-commands.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/rbac-creating-cluster-admin.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +2 %}{% include "./modules/unauthenticated-users-cluster-role-binding-con.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/unauthenticated-users-cluster-role-binding.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/authentication-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/authentication-remove-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/post-install-mirrored-catalogs.md" %}{% endleveloffset %}

**Additional resources**

*   [Mirroring Operator catalogs for use with disconnected clusters](/disconnected/installing-mirroring-installation-images#olm-mirror-catalog_installing-mirroring-installation-images)

{% leveloffset +2 %}{% include "./modules/olm-mirroring-catalog-icsp.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-creating-catalog-from-index.md" %}{% endleveloffset %}

**Additional resources**

*   [Accessing images for Operators from private registries](/operators/admin/olm-managing-custom-catalogs#olm-accessing-images-private-registries_olm-managing-custom-catalogs)
*   [Image template for custom catalog sources](/operators/understanding/olm/olm-understanding-olm#olm-catalogsource-image-template_olm-understanding-olm)
*   [Image pull policy](/openshift_images/managing_images/image-pull-policy#image-pull-policy)

{% leveloffset +1 %}{% include "./modules/olm-installing-operators-from-software-catalog.md" %}{% endleveloffset %}

{% if openshift_origin %}
{% leveloffset +2 %}{% include "./modules/olm-installing-operators-from-software-catalog-configure.md" %}{% endleveloffset %}

{%- endif %}
{% leveloffset +2 %}{% include "./modules/olm-installing-from-software-catalog-using-web-console.md" %}{% endleveloffset %}

{% if openshift_enterprise or openshift_webscale or openshift_origin %}
{% leveloffset +2 %}{% include "./modules/olm-installing-from-software-catalog-using-cli.md" %}{% endleveloffset %}

**Additional resources**

*   [About OperatorGroups](/operators/understanding/olm/olm-understanding-operatorgroups#olm-operatorgroups-about_olm-understanding-operatorgroups)
{% endif %}