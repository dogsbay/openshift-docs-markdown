{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the NUMA Resources Operator using the web console {id="cnf-installing-numa-resources-operator-console_{{ context }}"}

To enable NUMA-aware scheduling for high-performance workloads, install the NUMA Resources Operator by using the web console. As a cluster administrator, you can deploy the Operator through the graphical interface. {._abstract}

**Procedure**

1.  Create a namespace for the NUMA Resources Operator:
    1.  In the {{ product_title }} web console, click **Administration** -> **Namespaces**.
    1.  Click **Create Namespace**, enter `openshift-numaresources` in the **Name** field, and then click **Create**.
1.  Install the NUMA Resources Operator:
    1.  In the {{ product_title }} web console, click **Ecosystem** -> **Software Catalog**.
    1.  Choose **numaresources-operator** from the list of available Operators, and then click **Install**.
    1.  In the **Installed Namespaces** field, select the `openshift-numaresources` namespace, and then click **Install**.
1.  Optional: Verify that the NUMA Resources Operator installed successfully:
    1.  Switch to the **Ecosystem** -> **Installed Operators** page.
    1.  Ensure that **NUMA Resources Operator** is listed in the `openshift-numaresources` namespace with a **Status** of **InstallSucceeded**.

        :::note

        During installation an Operator might display a **Failed** status. If the installation later succeeds with an **InstallSucceeded** message, you can ignore the **Failed** message.
        
        :::


        If the Operator does not appear as installed, to troubleshoot further:
        *   Go to the **Ecosystem** -> **Installed Operators** page and inspect the **Operator Subscriptions** and **Install Plans** tabs for any failure or errors under **Status**.
        *   Go to the **Workloads** -> **Pods** page and check the logs for pods in the `default` project.