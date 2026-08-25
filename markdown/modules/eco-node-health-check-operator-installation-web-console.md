{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Node Health Check Operator by using the web console {id="installing-node-health-check-operator-using-web-console_{{ context }}"}

You can use the {{ product_title }} web console to install the Node Health Check Operator.

**Prerequisites**

*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Ecosystem** -> **Software Catalog**.
1.  Search for the Node Health Check Operator, then click **Install**.
1.  Keep the default selection of **Installation mode** and **namespace** to ensure that the Operator will be installed to the `openshift-operators` namespace.
1.  Ensure that the **Console plug-in** is set to `Enable`.
1.  Click **Install**.

**Verification**

To confirm that the installation is successful:

1.  Navigate to the **Ecosystem** -> **Installed Operators** page.
1.  Check that the Operator is installed in the `openshift-operators` namespace and that its status is `Succeeded`.

If the Operator is not installed successfully:

1.  Navigate to the **Ecosystem** -> **Installed Operators** page and inspect the `Status` column for any errors or failures.
1.  Navigate to the **Workloads** -> **Pods** page and check the logs in any pods in the `openshift-operators` project that are reporting issues.