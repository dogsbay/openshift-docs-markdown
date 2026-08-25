{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Security Profiles Operator {id="spo-installing_{{ context }}"}

You can use the {{ product_title }} web console to install the Security Profiles Operator. This installs the Security Profiles Operator into the `openshift-security-profiles` namespace by default. You can also verify correct installation by using the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   You must have access to the web console as a user with `cluster-admin` privileges.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Ecosystem** -> **Software Catalog**.
1.  Search for the Security Profiles Operator, then click **Install**.
1.  Keep the default selection of **Installation mode** and **namespace** to ensure that the Operator will be installed to the `openshift-security-profiles` namespace.
1.  Click **Install**.

**Verification**

To confirm that the installation is successful:

1.  Navigate to the **Ecosystem** -> **Installed Operators** page.
1.  Check that the Security Profiles Operator is installed in the `openshift-security-profiles` namespace and its status is `Succeeded`.

If the Operator is not installed successfully:

1.  Navigate to the **Ecosystem** -> **Installed Operators** page and inspect the `Status` column for any errors or failures.
1.  Navigate to the **Workloads** -> **Pods** page and check the logs in any pods in the `openshift-security-profiles` project that are reporting issues.