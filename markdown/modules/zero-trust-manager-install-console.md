{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ zero_trust_full }} by using the web console {id="zero-trust-manager-install-console_{{ context }}"}

Use the Software Catalog in the {{ product_title }} web console to install the {{ zero_trust_full }}. This process streamlines deployment and helps ensure the Operator is installed in the correct namespace with the appropriate installation mode. {._abstract}


:::note

A minimum of 1Gi persistent volume is required to install the SPIRE Server.

:::


**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Go to **Ecosystem** → **Software Catalog**.
1.  Search for **{{ zero_trust_full }}**.
1.  On the **Install Operator** page:
    1.  Update the **Update channel**, if necessary. The channel defaults to `stable-v1`, which installs the latest `stable-v1` release of the {{ zero_trust_full }}.
    1.  Choose the **Installed Namespace** for the Operator. The default Operator namespace is `zero-trust-workload-identity-manager`.

        If the `zero-trust-workload-identity-manager` namespace does not exist, it is created for you.

        :::note

        The Operator and operands are deployed in the same namespace.
        
        :::

    1.  Select an **Update Approval** strategy
        *   The **Automatic strategy** allows Operator Lifecycle Manager (OLM) to automatically update the Operator when a new version is available.
        *   The **Manual strategy** requires a user with appropriate credentials to approve the Operator update.
1.  Click **Install**.

**Verification**

1.  Navigate to **Ecosystem** → **Installed Operators**.
    1.  Verify that **Zero Trust Workload Identity Manager** is listed with a **Status** of **Succeeded** in the `zero-trust-workload-identity-manager` namespace.
    1.  Verify that Zero Trust Workload Identity Manager controller manager deployment is ready and available by running the following command:
        ```terminal
        $ oc get deployment -l name=zero-trust-workload-identity-manager -n zero-trust-workload-identity-manager
        ```
        ```terminal title="Example output"
        NAME                                                      READY   UP-TO-DATE   AVAILABLE   AGE
        zero-trust-workload-identity-manager-controller-manager   1/1     1            1           3h36m
        ```
1.  To check the Operator logs, run the following command:
    ```terminal
    $ oc logs -f deployment/zero-trust-workload-identity-manager-controller-manager -n zero-trust-workload-identity-manager
    ```