{% if context == "rosa-hcp-service-definition" %}
{%- set rosa_with_hcp = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# Security {id="rosa-sdpolicy-security_{{ context }}"}

This section provides information about the service definition for
{%- if openshift_rosa_hcp %}
{{ hcp_title_first }}
{%- endif %}
{%- if not openshift_rosa_hcp %}
{{ product_title }}
{%- endif %}
security.

## Authentication provider {id="rosa-sdpolicy-auth-provider_{{ context }}"}
Authentication for the cluster can be configured using either {{ cluster_manager_url }} or cluster creation process or using the ROSA CLI, `rosa`. ROSA is not an identity provider, and all access to the cluster must be managed by the customer as part of their integrated solution. The use of multiple identity providers provisioned at the same time is supported. The following identity providers are supported:

*   GitHub or GitHub Enterprise
*   GitLab
*   Google
*   LDAP
*   OpenID Connect
*   htpasswd

## Privileged containers {id="rosa-sdpolicy-privileged-containers_{{ context }}"}
Privileged containers are available for users with the `cluster-admin` role. Usage of privileged containers as `cluster-admin` is subject to the responsibilities and exclusion notes in the [Red&#160;Hat Enterprise Agreement Appendix 4](https://www.redhat.com/en/about/agreements) (Online Subscription Services).

## Customer administrator user {id="rosa-sdpolicy-customer-admin-user_{{ context }}"}
In addition to normal users,
{%- if openshift_rosa_hcp %}
{{ hcp_title_first }}
{%- endif %}
{%- if not openshift_rosa_hcp %}
{{ product_title }}
{%- endif %}
provides access to a
{%- if openshift_rosa_hcp %}
{{ hcp_title }}-specific
{%- endif %}
{%- if not openshift_rosa_hcp %}
ROSA-specific
{%- endif %}
group called `dedicated-admin`. Any users on the cluster that are members of the `dedicated-admin` group:

*   Have administrator access to all customer-created projects on the cluster.
*   Can manage resource quotas and limits on the cluster.
*   Can add and manage `NetworkPolicy` objects.
*   Are able to view information about specific nodes and PVs in the cluster, including scheduler information.
*   Can access the reserved `dedicated-admin` project on the cluster, which allows for the creation of service accounts with elevated privileges and also gives the ability to update default limits and quotas for projects on the cluster.
*   Can install Operators from the software catalog and perform all verbs in all `*.operators.coreos.com` API groups.

## Cluster administration role {id="rosa-sdpolicy-cluster-admin-role_{{ context }}"}
The administrator of
{%- if openshift_rosa_hcp %}
{{ hcp_title_first }}
{%- endif %}
{%- if not openshift_rosa_hcp %}
{{ product_title }}
{%- endif %}
has default access to the `cluster-admin` role for your organization’s cluster. While logged into an account with the `cluster-admin` role, users have increased permissions to run privileged security contexts.

## Project self-service {id="rosa-sdpolicy-project-self-service_{{ context }}"}
By default, all users have the ability to create, update, and delete their projects. This can be restricted if a member of the `dedicated-admin` group removes the `self-provisioner` role from authenticated users:
```terminal
$ oc adm policy remove-cluster-role-from-group self-provisioner system:authenticated:oauth
```

Restrictions can be reverted by applying:
```terminal
$ oc adm policy add-cluster-role-to-group self-provisioner system:authenticated:oauth
```

## Regulatory compliance {id="rosa-sdpolicy-regulatory-compliance_{{ context }}"}
See the _Compliance_ table in _Understanding process and security for ROSA_ for the latest compliance information.

## Network security {id="rosa-sdpolicy-network-security_{{ context }}"}
With {{ product_title }}, AWS provides a standard DDoS protection on all load balancers, called AWS Shield. This provides 95% protection against most commonly used level 3 and 4 attacks on all the public facing load balancers used for ROSA. A 10-second timeout is added for HTTP requests coming to the `haproxy` router to receive a response or the connection is closed to provide additional protection.

## etcd encryption {id="rosa-sdpolicy-etcd-encryption_{{ context }}"}

In {{ product_title }}, the control plane storage is encrypted at rest by default, including encryption of the etcd volumes. This storage-level encryption is provided through the storage layer of the cloud provider.

{% if openshift_rosa_hcp %}
Customers can also opt to encrypt the etcd database at build time or provide their own custom AWS KMS keys for the purpose of encrypting the etcd database.

Etcd encryption will encrypt the following Kubernetes API server and OpenShift API server resources:
{% endif %}
{% if not openshift_rosa_hcp %}
You can also enable etcd encryption, which encrypts the key values in etcd, but not the keys. If you enable etcd encryption, the following Kubernetes API server and OpenShift API server resources are encrypted:
{% endif %}

*   Secrets
*   Config maps
*   Routes
*   OAuth access tokens
*   OAuth authorize tokens

{% if not openshift_rosa_hcp %}
The etcd encryption feature is not enabled by default and it can be enabled only at cluster installation time. Even with etcd encryption enabled, the etcd key values are accessible to anyone with access to the control plane nodes or `cluster-admin` privileges.


:::important

By enabling etcd encryption for the key values in etcd, you will incur a performance overhead of approximately 20%. The overhead is a result of introducing this second layer of encryption, in addition to the default control plane storage encryption that encrypts the etcd volumes. Red&#160;Hat recommends that you enable etcd encryption only if you specifically require it for your use case.

:::

{% endif %}

{% if context == "rosa-hcp-service-definition" %}
{%- set rosa_with_hcp = "" -%}
{% endif %}