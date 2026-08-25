{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the MetalLB Operator from the software catalog by using the web console {id="metallb-installing-using-web-console_{{ context }}"}

As a cluster administrator, you can install the MetalLB Operator by using the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Ecosystem** → **Software Catalog**.
1.  Type `metallb` in the **Filter by keyword** box to find the MetalLB Operator.

    You can also filter options by **Infrastructure Features**. For example, select **Disconnected** if you want to see Operators that work in disconnected environments, also known as restricted network environments.
1.  Click the **MetalLB Operator** tile and click **Install**.
1.  On the **Install Operator** page, accept the defaults and click **Install**.

    The web console displays the **Installing Operator** page with a status update. Wait until the Operator installs before continuing.
1.  The web console displays the progress of the installation. When the installation is complete, click **View installed Operators**.

**Verification**

1.  To confirm that the installation is successful:
    1.  Navigate to the **Ecosystem** → **Installed Operators** page.
    1.  Check that the Operator is installed in the `metallb-system` namespace and that its status is `Succeeded`.
1.  If the Operator is not installed successfully, check the status of the Operator and review the logs:
    1.  Navigate to the **Ecosystem** → **Installed Operators** page and inspect the `Status` column for any errors or failures.
    1.  Navigate to the **Workloads** → **Pods** page and check the logs in any pods in the `metallb-system` project that are reporting issues.