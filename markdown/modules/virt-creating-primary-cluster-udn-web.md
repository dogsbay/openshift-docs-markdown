{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a primary cluster-scoped user-defined network by using the web console {id="virt-creating-primary-cluster-udn-web_{{ context }}"}

You can connect multiple namespaces to the same primary user-defined network (UDN) by creating a `ClusterUserDefinedNetwork` custom resource in the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   You have access to the {{ product_title }} web console as a user with `cluster-admin` permissions.

**Procedure**

1.  From the **Administrator** perspective, click **Networking** -> **UserDefinedNetworks**.
1.  From the **Create** list, select **ClusterUserDefinedNetwork**.
1.  In the **Name** field, specify a name for the cluster-scoped UDN.
1.  Specify a value in the **Subnet** field.
1.  In the **Project(s) Match Labels** field, add the appropriate labels to select namespaces that the cluster UDN applies to.
1.  Click **Create**. The cluster-scoped UDN serves as the default primary network for pods and virtual machines located in namespaces that contain the labels that you specified in step 5.