{%- set _mod_docs_content_type = "PROCEDURE" %}
[id="virt-creating-udn-namespace-web_{{ context }}"]                                   
= Creating a namespace for user-defined networks by using the web console

You can create a namespace to be used with primary user-defined networks (UDNs) by using the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   Log in to the {{ product_title }} web console as a user with `cluster-admin` permissions.

**Procedure**

1.  From the **Administrator** perspective, click **Administration** -> **Namespaces**.
1.  Click **Create Namespace**.
1.  In the **Name** field, specify a name for the namespace. The name must consist of lower case alphanumeric characters or '-', and must start and end with an alphanumeric character.
1.  In the **Labels** field, add the `k8s.ovn.org/primary-user-defined-network` label.
1.  Optional: If the namespace is to be used with an existing cluster-scoped UDN, add the appropriate labels as defined in the `spec.namespaceSelector` field in the `ClusterUserDefinedNetwork` custom resource.
1.  Optional: Specify a default network policy.
1.  Click **Create** to create the namespace.