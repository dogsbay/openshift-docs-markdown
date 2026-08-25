{%- set _mod_docs_content_type = "CONCEPT" %}
# About custom Operator IAM role prefixes {id="rosa-sts-about-operator-role-prefixes_{{ context }}"}

Each {{ product_title }} (ROSA) cluster
{%- if openshift_rosa_hcp %}
requires cluster-specific Operator IAM roles.
{% endif %}
{% if not openshift_rosa_hcp %}
that uses the AWS Security Token Service (STS) requires cluster-specific Operator IAM roles.
{% endif %}

By default, the Operator role names are prefixed with the cluster name and a random 4-digit hash. For example, the Ingress Cloud Credentials Operator IAM role for a cluster named `mycluster` has the default name `mycluster-<hash>-openshift-ingress-operator-cloud-credentials`, where `<hash>` is a random 4-digit string.

This default naming convention enables you to easily identify the Operator IAM roles for a cluster in your AWS account.

When you create the Operator roles for a cluster, you can optionally specify a custom prefix to use instead of `<cluster_name>-<hash>`. By using a custom prefix, you can prepend logical identifiers to your Operator role names to meet the requirements of your environment. For example, you might prefix the cluster name and the environment type, such as `mycluster-dev`. In that example, the Ingress Cloud Credentials Operator role name with the custom prefix is `mycluster-dev-openshift-ingress-operator-cloud-credenti`.


:::note

The role names are truncated to 64 characters.

:::