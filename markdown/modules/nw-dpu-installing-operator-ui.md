{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the DPU Operator using the web console {id="nw-dpu-installing-operator-ui_{{ context }}"}

You can install the DPU Operator by using the web console. You can use the DPU Operator to simplify the installation process when setting up DPU device management on host clusters. {._abstract}

As a cluster administrator, you can install the DPU Operator by using the web console.

**Prerequisites**

*   Install the OpenShift CLI (`oc`).
*   An account with `cluster-admin` privileges.

**Procedure**

1.  In the {{ product_title }} web console, click **Ecosystem** -> **Software Catalog**.
1.  Select **DPU Operator** from the list of available Operators, and then click **Install**.
1.  On the **Install Operator** page, under **Installed Namespace**, the **Operator recommended Namespace** option is preselected by default. No action is required.
    1.  Click **Install**.

**Verification**

1.  Navigate to the **Ecosystem** -> **Installed Operators** page.
1.  Ensure that the **openshift-dpu-operator** project lists **DPU Operator** with a **Status** of **InstallSucceeded**.

    :::note

    During installation an Operator might display a **Failed** status.
    If the installation later succeeds with an **InstallSucceeded** message, you can ignore the **Failed** message.
    
    :::


**Troubleshooting**

*   Inspect the **Operator Subscriptions** and **Install Plans** tabs for any failure or errors under **Status**.
*   Navigate to the **Workloads** -> **Pods** page and check the logs for pods in the `openshift-dpu-operator` project.
*   Check the namespace of the YAML file. If the annotation is missing, you can add the annotation `workload.openshift.io/allowed=management` to the Operator namespace with the following command:
    ```terminal
    $ oc annotate ns/openshift-dpu-operator workload.openshift.io/allowed=management
    ```

    :::note

    For {{ sno }} clusters, the annotation `workload.openshift.io/allowed=management` is required for the namespace.
    
    :::