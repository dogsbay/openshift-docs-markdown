{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ lcao }} by using the web console {id="cnf-image-based-upgrade-installing-lifecycle-agent-using-web-console_{{ context }}"}

You can use the {{ product_title }} web console to install the {{ lcao }}. {._abstract}

**Prerequisites**

*   You have logged in as a user with `cluster-admin` privileges.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Ecosystem** -> **Software Catalog**.
1.  Search for the **{{ lcao }}** from the list of available Operators, and then click **Install**.
1.  On the **Install Operator** page, under **A specific namespace on the cluster** select **openshift-lifecycle-agent**.
1.  Click **Install**.

**Verification**

1.  To confirm that the installation is successful:
    1.  Click **Ecosystem** -> **Installed Operators**.
    1.  Ensure that the {{ lcao }} is listed in the **openshift-lifecycle-agent** project with a **Status** of **InstallSucceeded**.

        :::note

        During installation an Operator might display a **Failed** status. If the installation later succeeds with an **InstallSucceeded** message, you can ignore the **Failed** message.
        
        :::


If the Operator is not installed successfully:

1.  Click **Ecosystem** -> **Installed Operators**, and inspect the **Operator Subscriptions** and **Install Plans** tabs for any failure or errors under **Status**.
1.  Click **Workloads** -> **Pods**, and check the logs for pods in the **openshift-lifecycle-agent** project.