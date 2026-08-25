{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a ClusterUserDefinedNetwork CR by using the web console {id="nw-cudn-cr-ui_{{ context }}"}

To implement isolated network segments with layer 2 connectivity in {{ product_title }}, create a `ClusterUserDefinedNetwork` custom resource (CR) by using the web console. Defining this resource ensures that your cluster workloads can communicate directly at the data link layer. {._abstract}


:::note

Currently, creation of a `ClusterUserDefinedNetwork` CR with a `Layer3` topology is not supported when using the {{ product_title }} web console.

:::


**Prerequisites**

*   You have access to the {{ product_title }} web console as a user with `cluster-admin` permissions.
*   You have created a namespace and applied the `k8s.ovn.org/primary-user-defined-network` label.

**Procedure**

1.  From the **Administrator** perspective, click **Networking** -> **UserDefinedNetworks**.
1.  Click **ClusterUserDefinedNetwork**.
1.  In the **Name** field, specify a name for the cluster-scoped UDN.
1.  Specify a value in the **Subnet** field.
1.  In the **Project(s) Match Labels** field, add the appropriate labels to select namespaces that the cluster UDN applies to.
1.  Click **Create**. The cluster-scoped UDN serves as the default primary network for pods located in namespaces that contain the labels that you specified in step 5.