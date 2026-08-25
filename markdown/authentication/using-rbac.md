---
title: Using RBAC to define and apply permissions
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Using RBAC to define and apply permissions {id="using-rbac"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "using-rbac" %}

{% leveloffset +1 %}{% include "./modules/rbac-overview.md" %}{% endleveloffset %}

**Additional resources**

*   [RBAC rules allow execution privileges](https://access.redhat.com/solutions/6989997)
*   [Aggregated ClusterRoles (Kubernetes documentation)](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#aggregated-clusterroles)

{% leveloffset +1 %}{% include "./modules/rbac-projects-namespaces.md" %}{% endleveloffset %}

**Additional resources**

*   [Kubernetes documentation on namespaces](https://kubernetes.io/docs/tasks/administer-cluster/namespaces/)

{% leveloffset +1 %}{% include "./modules/rbac-default-projects.md" %}{% endleveloffset %}

**Additional resources**

*   [Guaranteed Scheduling For Critical Add-On Pods (Kubernetes documentation)](https://kubernetes.io/docs/tasks/administer-cluster/guaranteed-scheduling-critical-addon-pods/#rescheduler-guaranteed-scheduling-of-critical-add-ons)

{% leveloffset +1 %}{% include "./modules/rbac-viewing-cluster-roles.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rbac-viewing-local-roles.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rbac-adding-roles.md" %}{% endleveloffset %}

{% if openshift_enterprise or openshift_webscale or openshift_origin or openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
{% leveloffset +1 %}{% include "./modules/rbac-creating-local-role.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rbac-creating-cluster-role.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/rbac-local-role-binding-commands.md" %}{% endleveloffset %}

{% if openshift_enterprise or openshift_webscale or openshift_origin or openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
{% leveloffset +1 %}{% include "./modules/rbac-cluster-role-binding-commands.md" %}{% endleveloffset %}

{% endif %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
{% leveloffset +1 %}{% include "./modules/rbac-creating-cluster-admin.md" %}{% endleveloffset %}

{% endif %}

{% if openshift_rosa or openshift_rosa_hcp %}
{% leveloffset +1 %}{% include "./modules/rosa-create-cluster-admins.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-create-dedicated-cluster-admins.md" %}{% endleveloffset %}

{% endif %}

{% if openshift_dedicated %}
{% leveloffset +1 %}{% include "./modules/osd-grant-admin-privileges.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/unauthenticated-users-cluster-role-binding-con.md" %}{% endleveloffset %}