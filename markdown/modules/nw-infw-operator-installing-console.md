{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Ingress Node Firewall Operator using the web console {id="install-operator-web-console_{{ context }}"}

As a cluster administrator, you can install the Ingress Node Firewall Operator to enable node-level ingress firewalling by using the web console. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have an account with administrator privileges.

**Procedure**

1.  Install the Ingress Node Firewall Operator:
    1.  In the {{ product_title }} web console, click **Ecosystem** -> **Software Catalog**.
    1.  Select **Ingress Node Firewall Operator** from the list of available Operators, and then click **Install**.
    1.  On the **Install Operator** page, under **Installed Namespace**, select **Operator recommended Namespace**.
    1.  Click **Install**.
1.  Verify that the Ingress Node Firewall Operator is installed successfully:
    1.  Navigate to the **Ecosystem** -> **Installed Operators** page.
    1.  Ensure that **Ingress Node Firewall Operator** is listed in the **openshift-ingress-node-firewall** project with a **Status** of **InstallSucceeded**.

        :::note

        During installation an Operator might display a **Failed** status.
        If the installation later succeeds with an **InstallSucceeded** message, you can ignore the **Failed** message.
        
        :::



        If the Operator does not have a **Status** of **InstallSucceeded**, troubleshoot using the following steps:
        *   Inspect the **Operator Subscriptions** and **Install Plans** tabs for any failures or errors under **Status**.
        *   Navigate to the **Workloads** -> **Pods** page and check the logs for pods in the `openshift-ingress-node-firewall` project.
        *   Check the namespace of the YAML file. If the annotation is missing, you can add the annotation `workload.openshift.io/allowed=management` to the Operator namespace with the following command:
            ```terminal
            $ oc annotate ns/openshift-ingress-node-firewall workload.openshift.io/allowed=management
            ```

            :::note

            For {{ sno }} clusters, the `openshift-ingress-node-firewall` namespace requires the `workload.openshift.io/allowed=management` annotation.
            
            :::