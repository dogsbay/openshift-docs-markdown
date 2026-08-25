{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Node Maintenance Operator by using the web console {id="installing-node-maintenance-operator-using-web-console_{{ context }}"}

You can use the {{ product_title }} web console to install the Node Maintenance Operator.

**Prerequisites**

*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Ecosystem** -> **Software Catalog**.
1.  Search for the Node Maintenance Operator, then click **Install**.
1.  Keep the default selection of **Installation mode** and **namespace** to ensure that the Operator will be installed to the `openshift-operators` namespace.
1.  Click **Install**.

**Verification**

To confirm that the installation is successful:

1.  Navigate to the **Ecosystem** -> **Installed Operators** page.
1.  Check that the Operator is installed in the `openshift-operators` namespace and that its status is `Succeeded`.

If the Operator is not installed successfully:

1.  Navigate to the **Ecosystem** -> **Installed Operators** page and inspect the `Status` column for any errors or failures.
1.  Navigate to the **Ecosystem** -> **Installed Operators** -> **Node Maintenance Operator** -> **Details** page, and inspect the `Conditions` section for errors before pod creation.
1.  Navigate to the **Workloads** -> **Pods** page, search for the `Node Maintenance Operator` pod in the installed namespace, and check the logs in the `Logs` tab.