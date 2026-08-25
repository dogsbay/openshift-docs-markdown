{%- set _mod_docs_content_type = "CONCEPT" %}
# Colocation of Operators in a namespace {id="olm-colocation-namespaces_{{ context }}"}

Operator Lifecycle Manager (OLM) treats OLM-managed Operators that are installed in the same namespace as related Operators. Even if the Operators are not actually related, OLM considers their states, such as their version and update policy, when any one of them is updated. {._abstract}

This default behavior manifests in two ways:

*   `InstallPlan` resources of pending updates include `ClusterServiceVersion` (CSV) resources of all other Operators that are in the same namespace.
*   All Operators in the same namespace share the same update policy. For example, if one Operator is set to manual updates, all other Operators' update policies are also set to manual.

These scenarios can lead to the following issues:

*   It becomes hard to reason about install plans for Operator updates, because there are many more resources defined in them than just the updated Operator.
*   It becomes impossible to have some Operators in a namespace update automatically while other are updated manually, which is a common desire for cluster administrators.

These issues usually surface because, when installing Operators with the {{ product_title }} web console, the default behavior installs Operators that support the **All namespaces** install mode into the default `openshift-operators` global namespace.

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
As a cluster administrator,
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
As an administrator with the `dedicated-admin` role,
{%- endif %}
you can bypass this default behavior manually by using the following workflow:

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
1.  Create a namespace for the installation of the Operator.
{%- endif %}
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
1.  Create a project for the installation of the Operator.
{%- endif %}
1.  Create a custom _global Operator group_, which is an Operator group that watches all namespaces. By associating this Operator group with the namespace you just created, it makes the installation namespace a global namespace, which makes Operators installed there available in all namespaces.
1.  Install the desired Operator in the installation namespace.

If the Operator has dependencies, the dependencies are automatically installed in the pre-created namespace. As a result, it is then valid for the dependency Operators to have the same update policy and shared install plans. For a detailed procedure, see "Installing global Operators in custom namespaces".