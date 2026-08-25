{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ js_operator }} {id="js-install_{{ context }}"}

Install the {{ js_operator }} on {{ product_title }} using the web console to begin managing large-scale, coordinated computing workloads. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.
*   You have installed the {{ cert_manager_operator }}.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Verify that the {{ cert_manager_operator }} is installed.
1.  Install the {{ js_operator }}.
    1.  Navigate to **Ecosystem** → **Software Catalog**.
    1.  Search for and select the **`openshift-operators`** project.
    1.  Enter **{{ js_operator }}** into the filter box.
    1.  Select the **{{ js_operator }}** and click **Install**.
    1.  On the **Install Operator** page:
        1.  The **Update channel** is set to **stable-v1.0**, which installs the latest stable release of {{ js_operator }}.
        1.  Under **Installation mode**, select **A specific namespace on the cluster**.
        1.  Under **Installed Namespace**, select **Operator recommended Namespace: openshift-jobset-operator**.
        1.  Under **Update approval**, select one of the following update strategies:
            *   The **Automatic** strategy allows {{ olm_first }} to automatically update the Operator when a new version is available.
            *   The **Manual** strategy requires a user with appropriate credentials to approve the Operator update.
        1.  Click **Install**.
1.  Create the custom resource (CR) for the {{ js_operator }}:
    1.  Navigate to **Installed Operators** → **{{ js_operator }}**.
    1.  Under **Provided APIs**, click **Create instance** in the **JobSetOperator** pane.
    1.  Set the name to **cluster**.
    1.  Set the **managementState** to **Managed**.
    1.  Click **Create**.

**Verification**

*   Check that the {{ js_operator }} and operand pods are running by entering the following command:
    ```terminal
    $ oc get pod -n openshift-jobset-operator
    ```
    ```terminal title="Example output"
    NAME                                        READY   STATUS    RESTARTS   AGE
    jobset-controller-manager-5595547fb-b4g2x   1/1     Running   0          48s
    jobset-operator-596cb848c6-q2dmp            1/1     Running   0          2m33s
    ```