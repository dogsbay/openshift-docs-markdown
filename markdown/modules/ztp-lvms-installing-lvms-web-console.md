{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ lvms }} by using the web console {id="ztp-lvms-installing-using-web-console_{{ context }}"}

You can use the {{ product_title }} web console to install {{ lvms_first }}.

**Prerequisites**

*   Install the latest version of the {{ rh_rhacm }} Operator.
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Ecosystem** → **Software Catalog**.
1.  Search for the **{{ lvms }}** from the list of available Operators, and then click **Install**.
1.  Keep the default selection of **Installation mode** (**"All namespaces on the cluster (default)"**) and **Installed Namespace** (**"openshift-operators"**) to ensure that the Operator is installed properly.
1.  Click **Install**.

**Verification**

1.  To confirm that the installation is successful:
    1.  Navigate to the **Ecosystem** → **Installed Operators** page.
    1.  Check that the Operator is installed in the `All Namespaces` namespace and its status is `Succeeded`.
1.  If the Operator is not installed successfully:
    1.  Navigate to the **Ecosystem** → **Installed Operators** page and inspect the `Status` column for any errors or failures.
    1.  Navigate to the **Workloads** → **Pods** page and check the logs in any containers in the `local-storage-operator` pod that are reporting issues.