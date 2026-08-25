{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# About log collection and forwarding {id="log-forwarding"}
{%- set context = "log-forwarding" %}

The {{ clo }} deploys a collector based on the `ClusterLogForwarder` resource specification. There are two collector options supported by this Operator: the legacy Fluentd collector, and the Vector collector.

{% include "./snippets/logging-fluentd-dep-snip.md" %}

{% leveloffset +1 %}{% include "./modules/about-log-collection.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/logging-vector-fluentd-feature-comparison.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/log-forwarding-collector-outputs.md" %}{% endleveloffset %}

## Log forwarding {id="log-forwarding-about-clf"}

Administrators can create `ClusterLogForwarder` resources that specify which logs are collected, how they are transformed, and where they are forwarded to.

`ClusterLogForwarder` resources can be used up to forward container, infrastructure, and audit logs to specific endpoints within or outside of a cluster. Transport Layer Security (TLS) is supported so that log forwarders can be configured to send logs securely.

Administrators can also authorize RBAC permissions that define which service accounts and users can access and forward which types of logs.

{% leveloffset +2 %}{% include "./modules/log-forwarding-implementations.md" %}{% endleveloffset %}

### Enabling the multi log forwarder feature for a cluster {id="log-forwarding-enabling-multi-clf-feature"}

To use the multi log forwarder feature, you must create a service account and cluster role bindings for that service account. You can then reference the service account in the `ClusterLogForwarder` resource to control access permissions.


:::important

In order to support multi log forwarding in additional namespaces other than the `openshift-logging` namespace, you must update the {{ clo }} to watch all namespaces]. This functionality is supported by default in new {{ clo }} version 5.8 installations.

:::


{% leveloffset +3 %}{% include "./modules/log-collection-rbac-permissions.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{%- if openshift_enterprise %}
*   [Using RBAC to define and apply permissions](/authentication/using-rbac#using-rbac)
*   [Using service accounts in applications](/authentication/using-service-accounts-in-applications#using-service-accounts-in-applications)
{%- endif %}
*   [Using RBAC Authorization Kubernetes documentation](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)