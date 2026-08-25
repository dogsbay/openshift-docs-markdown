{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ cert_manager_operator }} by using the web console {id="cert-manager-install-console_{{ context }}"}

You can use the web console to install the {{ cert_manager_operator }}. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Navigate to **Ecosystem** -> **Software Catalog**.
1.  Enter **{{ cert_manager_operator }}** into the filter box.
1.  Select the **{{ cert_manager_operator }}**
1.  Select the {{ cert_manager_operator }} version from **Version** drop-down list, and click **Install**.

    :::note

    See supported {{ cert_manager_operator }} versions in the following "Additional resources" section.
    
    :::

1.  On the **Install Operator** page:
    1.  Update the **Update channel**, if necessary. The channel defaults to **stable-v1**, which installs the latest stable release of the {{ cert_manager_operator }}.
    1.  Choose the **Installed Namespace** for the Operator. The default Operator namespace is `cert-manager-operator`.

        If the `cert-manager-operator` namespace does not exist, it is created for you.

        :::note

        During the installation, the {{ product_title }}  web console allows you to select between `AllNamespaces` and `SingleNamespace` installation modes. For installations with {{ cert_manager_operator }} version 1.15.0 or later, it is recommended to choose the `AllNamespaces` installation mode. `SingleNamespace` and `OwnNamespace` support will remain for earlier versions but will be deprecated in future versions.
        
        :::

    1.  Select an **Update approval** strategy.
        *   The **Automatic** strategy allows Operator Lifecycle Manager (OLM) to automatically update the Operator when a new version is available.
        *   The **Manual** strategy requires a user with appropriate credentials to approve the Operator update.
    1.  Click **Install**.

**Verification**

1.  Navigate to **Ecosystem** -> **Installed Operators**.
1.  Verify that **{{ cert_manager_operator }}** is listed with a **Status** of **Succeeded** in the `cert-manager-operator` namespace.
1.  Verify that cert-manager pods are up and running by entering the following command:
    ```terminal
    $ oc get pods -n cert-manager
    ```
    ```terminal title="Example output"
    NAME                                       READY   STATUS    RESTARTS   AGE
    cert-manager-bd7fbb9fc-wvbbt               1/1     Running   0          3m39s
    cert-manager-cainjector-56cc5f9868-7g9z7   1/1     Running   0          4m5s
    cert-manager-webhook-d4f79d7f7-9dg9w       1/1     Running   0          4m9s
    ```

    You can use the {{ cert_manager_operator }} only after cert-manager pods are up and running.