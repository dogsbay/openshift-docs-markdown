{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ cgu_operator_full }} by using the web console {id="installing-topology-aware-lifecycle-manager-using-web-console_{{ context }}"}

You can use the {{ product_title }} web console to install the {{ cgu_operator_full }}. {._abstract}

**Prerequisites**

*   Install the latest version of the {{ rh_rhacm }} Operator.
*   {{ cgu_operator }} requires {{ rh_rhacm }} 2.9 or later.
*   Set up a hub cluster with a disconnected registry.
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Ecosystem** -> **Software Catalog**.
1.  Search for the **{{ cgu_operator_full }}** from the list of available Operators, and then click **Install**.
1.  Keep the default selection of **Installation mode** ["All namespaces on the cluster (default)"] and **Installed Namespace** ("openshift-operators") to ensure that the Operator is installed properly.
1.  Click **Install**.

**Verification**

To confirm that the installation is successful:

1.  Navigate to the **Ecosystem** -> **Installed Operators** page.
1.  Check that the Operator is installed in the `All Namespaces` namespace and its status is `Succeeded`.

If the Operator is not installed successfully:

1.  Navigate to the **Ecosystem** -> **Installed Operators** page and inspect the `Status` column for any errors or failures.
1.  Navigate to the **Workloads** -> **Pods** page and check the logs in any containers in the `cluster-group-upgrades-controller-manager` pod that are reporting issues.