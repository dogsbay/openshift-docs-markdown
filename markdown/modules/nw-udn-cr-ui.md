{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a UserDefinedNetwork CR by using the web console {id="nw-udn-cr-ui_{{ context }}"}

To implement isolated network segments with layer 2 connectivity in {{ product_title }}, create a `UserDefinedNetwork` custom resource (CR) by using the web console. Defining this resource ensures that your cluster workloads can communicate directly at the data link layer. {._abstract}


:::note

Currently, creation of a `UserDefinedNetwork` CR with a `Layer3` topology or a `Secondary` role are not supported when using the {{ product_title }} web console.

:::


**Prerequisites**

*   As a cluster administrator, you have created a namespace.
    *   During namespace creation, ensure you also applied the `k8s.ovn.org/primary-user-defined-network` label to the namespace.
    *   After you create the namespace, a user that has `view` and `edit` role-based access control (RBAC) permissions can create a `UserDefinedNetwork` CR in the namespace.

**Procedure**

1.  From the **Administrator** perspective, click **Networking** -> **UserDefinedNetworks**.
1.  Click **Create UserDefinedNetwork**.
1.  From the **Project name** list, select the namespace that you previously created.
1.  Specify a value in the **Subnet** field.
1.  Click **Create**. The user-defined network serves as the default primary network for pods that you create in this namespace.