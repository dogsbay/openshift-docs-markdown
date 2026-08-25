{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ run_once_operator }} {id="rodoo-install-operator_{{ context }}"}

Install the {{ run_once_operator }} by using the web console to create the required namespace, install the Operator from the software catalog, and create a `RunOnceDurationOverride` instance. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Create the required namespace for the {{ run_once_operator }}.
    1.  Navigate to **Administration** -> **Namespaces** and click **Create Namespace**.
    1.  Enter `openshift-run-once-duration-override-operator` in the **Name** field and click **Create**.
1.  Install the {{ run_once_operator }}.
    1.  Navigate to **Ecosystem** -> **Software Catalog**.
    1.  Enter **{{ run_once_operator }}** into the filter box.
    1.  Select the **{{ run_once_operator }}** and click **Install**.
    1.  On the **Install Operator** page:
        1.  The **Update channel** is set to **stable**, which installs the latest stable release of the {{ run_once_operator }}.
        1.  Select **A specific namespace on the cluster**.
        1.  Choose **openshift-run-once-duration-override-operator** from the dropdown menu under **Installed namespace**.
        1.  Select an **Update approval** strategy.
            *   The **Automatic** strategy allows Operator Lifecycle Manager (OLM) to automatically update the Operator when a new version is available.
            *   The **Manual** strategy requires a user with appropriate credentials to approve the Operator update.
        1.  Click **Install**.
1.  Create a `RunOnceDurationOverride` instance.
    1.  From the **Ecosystem** -> **Installed Operators** page, click **{{ run_once_operator }}**.
    1.  Select the **Run Once Duration Override** tab and click **Create RunOnceDurationOverride**.
    1.  Edit the settings as necessary.

        Under the `runOnceDurationOverride` section, you can update the `spec.activeDeadlineSeconds` value, if required. The predefined value is `3600` seconds, or 1 hour.
    1.  Click **Create**.

**Verification**

1.  Log in to the OpenShift CLI.
1.  Verify all pods are created and running properly.
    ```terminal
    $ oc get pods -n openshift-run-once-duration-override-operator
    ```
    ```terminal title="Example output"
    NAME                                                   READY   STATUS    RESTARTS   AGE
    run-once-duration-override-operator-7b88c676f6-lcxgc   1/1     Running   0          7m46s
    runoncedurationoverride-62blp                          1/1     Running   0          41s
    runoncedurationoverride-h8h8b                          1/1     Running   0          41s
    runoncedurationoverride-tdsqk                          1/1     Running   0          41s
    ```