{%- set _mod_docs_content_type = "SNIPPET" %}


:::warning

Do not install Operators that require cluster-scoped permissions in namespaces where non-administrator users have any of the following permissions:

*   Default `edit` cluster role
*   Service account token creation
*   Workload creation, for example:
    *   Pods
    *   Replica sets
    *   Deployments
    *   Jobs
    *   Cron jobs
    *   Daemon sets

For more information, see [Audit and secure delegated Operator installations (Red Hat Knowledgebase)](https://access.redhat.com/articles/7149230).

:::