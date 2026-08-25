{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a primary namespace-scoped user-defined network by using the web console {id="virt-creating-primary-udn-web_{{ context }}"}

You can create an isolated primary network in your project namespace by creating a `UserDefinedNetwork` custom resource in the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   You have access to the {{ product_title }} web console as a user with `cluster-admin` permissions.
*   You have created a namespace and applied the `k8s.ovn.org/primary-user-defined-network` label. For more information, see "Creating a namespace for user-defined networks by using the web console".

**Procedure**

1.  From the **Administrator** perspective, click **Networking** → **UserDefinedNetworks**.
1.  Click **Create UserDefinedNetwork**.
1.  From the **Project name** list, select the namespace that you previously created.
1.  Specify a value in the **Subnet** field.
1.  Click **Create**. The user-defined network serves as the default primary network for pods and virtual machines that you create in this namespace.