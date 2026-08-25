{%- set _mod_docs_content_type = "CONCEPT" %}
# Cluster role bindings for unauthenticated groups {id="unauthenticated-users-cluster-role-bindings-concept_{{ context }}"}

Unauthenticated groups do not have default access to cluster roles. As a cluster administrator, you can grant limited unauthenticated access when required, while ensuring that the change complies with organizational security standards. {._abstract}


:::note

Before {{ product_title }} 4.17, unauthenticated groups were allowed access to some cluster roles. Clusters updated from versions before {{ product_title }} 4.17 retain this access for unauthenticated groups.

:::


For security reasons {{ product_title }} {{ product_version }} does not allow unauthenticated groups to have default access to cluster roles.

There are use cases where it might be necessary to add `system:unauthenticated` to a cluster role.

Cluster administrators can add unauthenticated users to the following cluster roles:

*   `system:scope-impersonation`
*   `system:webhook`
*   `system:oauth-token-deleter`
*   `self-access-reviewer`


:::important

Always verify compliance with your organization’s security standards when modifying unauthenticated access.

:::