{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Local Storage Operator by using the {{ product_title }} web console {id="local-storage-install-console_{{ context }}"}

Install the Local Storage Operator (LSO) to provision and manage local persistent storage volumes in your cluster using the {{ product_title }} web console. {._abstract}

The LSO is not installed in {{ product_title }} by default. Use the following procedure to install and configure this Operator to enable local volumes in your cluster.

**Prerequisites**

*   Access to an `openshift-local-storage` project.
*   Access to the {{ product_title }} web console.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Navigate to **Ecosystem** -> **Software Catalog**.
1.  Type **Local Storage** into the filter box to locate the LSO.
1.  Click **Install**.
1.  On the **Install Operator** page, select **A specific namespace on the cluster**. Select **openshift-local-storage** from the drop-down menu.
1.  Adjust the values for **Update Channel** and **Approval Strategy** to the values that you want.
1.  Click **Install**.

**Result**

After finishing, the LSO is listed in the **Installed Operators** section of the {{ product_title }} web console.