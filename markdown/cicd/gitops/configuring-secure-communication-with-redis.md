{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring secure communication with Redis {id="configuring-secure-communication-with-redis"}
{%- set context = "configuring-secure-communication-with-redis" %}

Using the Transport Layer Security (TLS) encryption with {{ gitops_title }}, you can secure the communication between the Argo CD components and Redis cache and protect the possibly sensitive data in transit.

You can secure communication with Redis by using one of the following configurations:

*   Enable the `autotls` setting to issue an appropriate certificate for TLS encryption.
*   Manually configure the TLS encryption by creating the `argocd-operator-redis-tls` secret with a key and certificate pair.

Both configurations are possible with or without the High Availability (HA) enabled.

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.
*   {{ gitops_title }} Operator is installed on your cluster.

{% leveloffset +1 %}{% include "./modules/gitops-configuring-tls-for-redis-with-autotls-enabled.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-configuring-tls-for-redis-with-autotls-disabled.md" %}{% endleveloffset %}