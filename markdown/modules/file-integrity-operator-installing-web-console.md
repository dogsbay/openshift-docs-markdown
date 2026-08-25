{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the File Integrity Operator using the web console {id="installing-file-integrity-operator-using-web-console_{{ context }}"}

Install the File Integrity Operator from the {{ product_title }} web console by using the Software Catalog. {._abstract}

**Prerequisites**

*   You must have `admin` privileges.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Ecosystem** → **Software Catalog**.
1.  Search for the File Integrity Operator, then click **Install**.
1.  Keep the default selection of **Installation mode** and **namespace** to ensure that the Operator will be installed to the `openshift-file-integrity` namespace.
1.  Click **Install**.

**Verification**

To confirm that the installation is successful:

1.  Navigate to the **Ecosystem** → **Installed Operators** page.
1.  Check that the Operator is installed in the `openshift-file-integrity` namespace and its status is `Succeeded`.

If the Operator is not installed successfully:

1.  Navigate to the **Ecosystem** → **Installed Operators** page and inspect the `Status` column for any errors or failures.
1.  Navigate to the **Workloads** → **Pods** page and check the logs in any pods in the `openshift-file-integrity` project that are reporting issues.