{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Compliance Operator through the web console {id="installing-compliance-operator-web-console_{{ context }}"}

You can install the Compliance Operator through the {{ product_title }} web console by using the OperatorHub interface. {._abstract}

**Prerequisites**

*   You must have `admin` privileges.
*   You must have a `StorageClass` resource configured.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Ecosystem** -> **Software Catalog**.
1.  Search for the Compliance Operator, then click **Install**.
1.  Keep the default selection of **Installation mode** and **namespace** to ensure that the Operator will be installed to the `openshift-compliance` namespace.
1.  Click **Install**.

**Verification**

To confirm that the installation is successful:

1.  Navigate to the **Ecosystem** -> **Installed Operators** page.
1.  Check that the Compliance Operator is installed in the `openshift-compliance` namespace and its status is `Succeeded`.

If the Operator is not installed successfully:

1.  Navigate to the **Ecosystem** -> **Installed Operators** page and inspect the `Status` column for any errors or failures.
1.  Navigate to the **Workloads** -> **Pods** page and check the logs in any pods in the `openshift-compliance` project that are reporting issues.