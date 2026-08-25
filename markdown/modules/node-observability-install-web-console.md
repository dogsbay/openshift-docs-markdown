{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Node Observability Operator using the web console {id="install-node-observability-using-web-console_{{ context }}"}

You can install the Node Observability Operator from the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  In the Administrator’s navigation panel, select **Ecosystem** -> **Software Catalog**.
1.  In the **All items** field, enter **Node Observability Operator** and select the **Node Observability Operator** tile.
1.  Click **Install**.
1.  On the **Install Operator** page, configure the following settings:
    1.  In the **Update channel** area, click **alpha**.
    1.  In the **Installation mode** area, click **A specific namespace on the cluster**.
    1.  From the **Installed Namespace** list, select **node-observability-operator** from the list.
    1.  In the **Update approval** area, select **Automatic**.
    1.  Click **Install**.

**Verification**

1.  In the Administrator’s navigation panel, expand **Ecosystem** -> **Installed Operators**.
1.  Verify that the Node Observability Operator is listed in the Operators list.