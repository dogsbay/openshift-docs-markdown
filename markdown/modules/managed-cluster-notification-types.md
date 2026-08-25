{%- set _mod_docs_content_type = "REFERENCE" %}
# Cluster notification types {id="managed-cluster-notification-types_{{ context }}"}

Each cluster notification has an associated notification type to help you identify notifications that are relevant to your role and responsibilities. {._abstract}

Red&#160;Hat uses the following notification types to indicate notification relevance:


Capacity management
:   Notifications for events related to updating, creating, or deleting node pools, machine pools, compute replicas or quotas (load balancer, storage, etc.).

Cluster access
:   Notifications for events related to adding or deleting groups, roles or identity providers, for example, when SRE cannot access your cluster because STS credentials have expired, when there is a configuration problem with your AWS roles, or when you add or remove identity providers.

Cluster add-ons
:   Notifications for events related to add-on management or upgrade maintenance for add-ons, for example, when an add-on is installed, upgraded, or removed, or cannot be installed due to unmet requirements.

Cluster configuration
:   Notifications for cluster tuning events, workload monitoring, and inflight checks.

Cluster lifecycle
:   Notifications for cluster or cluster resource creation, deletion, and registration, or change in cluster or resource status (for example, ready or hibernating).

Cluster networking
:   Notifications related to cluster networking, including HTTP/S proxy, router, and ingress state.

Cluster ownership
:   Notifications related to cluster ownership transfer from one user to another.

Cluster scaling
:   Notifications related to updating, creating, or deleting node pools, machine pools, compute replicas or quota.

Cluster security
:   Events related to cluster security, for example, an increased number of failed access attempts, updates to trust bundles, or software updates with security impact.

Cluster subscription
:   Cluster expiration, trial cluster notifications, or switching from free to paid.

Cluster updates
:   Anything relating to upgrades, such as upgrade maintenance or enablement.

Customer support
:   Updates on support case status.

General notification
:   The default notification type. This is only used for notifications that do not have a more specific category.