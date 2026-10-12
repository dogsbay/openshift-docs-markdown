{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ kueue_name }} cluster roles {id="kueue-cluster-roles_{{ context }}"}

The {{ kueue_name }} Operator deploys the `kueue-batch-admin-role` and `kueue-batch-user-role` cluster roles by default. Bind these cluster roles to your own users and groups to grant {{ kueue_name }} permissions. {._abstract}


kueue-batch-admin-role
:   This cluster role includes the permissions to manage cluster queues, local queues, workloads, and resource flavors.

kueue-batch-user-role
:   This cluster role includes the permissions to manage jobs and to view local queues and workloads.