{%- set _mod_docs_content_type = "REFERENCE" %}
# About authorization in {{ product_title }} {id="authorization-overview_{{ context }}"}

Authorization involves determining whether the identified user has permissions to perform the requested action. {._abstract}

Administrators can define permissions and assign them to users using the [RBAC objects, such as rules, roles, and bindings](/authentication/using-rbac#authorization-overview_using-rbac). To understand how authorization works in {{ product_title }}, see [Evaluating authorization](/authentication/using-rbac#evaluating-authorization_using-rbac).

You can also control access to an {{ product_title }} cluster through [projects and namespaces](/authentication/using-rbac#rbac-projects-namespaces_using-rbac).

Along with controlling user access to a cluster, you can also control the actions a pod can perform and the resources it can access using [security context constraints (SCCs)](/authentication/managing-security-context-constraints#managing-pod-security-policies).

You can manage authorization for {{ product_title }} through the following tasks:

*   Viewing [local](/authentication/using-rbac#viewing-local-roles_using-rbac) and [cluster](/authentication/using-rbac#viewing-cluster-roles_using-rbac) roles and bindings.
*   Creating a [local role](/authentication/using-rbac#creating-local-role_using-rbac) and assigning it to a user or group.

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   Creating a cluster role and assigning it to a user or group: {{ product_title }} includes a set of [default cluster roles](/authentication/using-rbac#default-roles_using-rbac). You can create additional [cluster roles](/authentication/using-rbac#creating-cluster-role_using-rbac) and [add them to a user or group](/authentication/using-rbac#adding-roles_using-rbac).
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   Assigning a cluster role to a user or group: {{ product_title }} includes a set of [default cluster roles](/authentication/using-rbac#default-roles_using-rbac). You can [add them to a user or group](/authentication/using-rbac#adding-roles_using-rbac).
{% endif %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   Creating a cluster-admin user: By default, your cluster has only one cluster administrator called `kubeadmin`. You can [create another cluster administrator](/authentication/using-rbac#creating-cluster-admin_using-rbac). Before creating a cluster administrator, ensure that you have configured an identity provider.

    :::note

    After creating the cluster admin user, [delete the existing kubeadmin user](/authentication/remove-kubeadmin#removing-kubeadmin_removing-kubeadmin) to improve cluster security.
    
    :::

{% endif %}

{% if openshift_rosa or openshift_rosa_hcp %}
*   Creating cluster-admin and dedicated-admin users: The user who created the {{ product_title }} cluster can grant access to other [`cluster-admin`](/authentication/using-rbac#rosa-create-cluster-admins_using-rbac) and [`dedicated-admin`](/authentication/using-rbac#rosa-create-dedicated-cluster-admins_using-rbac) users.
{% endif %}

{% if openshift_dedicated %}
*   Granting administrator privileges to users: You can [grant `dedicated-admin` privileges to users](/authentication/using-rbac#osd-grant-admin-privileges_using-rbac).
{% endif %}
*   Creating service accounts: [Service accounts](/authentication/understanding-and-creating-service-accounts#service-accounts-overview_understanding-service-accounts) provide a flexible way to control API access without sharing a regular user’s credentials. A user can [create and use a service account in applications](/authentication/understanding-and-creating-service-accounts#service-accounts-managing_understanding-service-accounts) and also as [an OAuth client](/authentication/using-service-accounts-as-oauth-client#using-service-accounts-as-oauth-client).
*   [Scoping tokens](/authentication/tokens-scoping#tokens-scoping): A scoped token is a token that identifies as a specific user who can perform only specific operations. You can create scoped tokens to delegate some of your permissions to another user or a service account.
*   Syncing LDAP groups: You can manage user groups in one place by [syncing the groups stored in an LDAP server](/authentication/ldap-syncing#ldap-syncing) with the {{ product_title }} user groups.