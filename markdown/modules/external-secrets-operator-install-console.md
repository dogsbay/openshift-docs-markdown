{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ external_secrets_operator }} by using the web console {id="external-secrets-operator-install-console_{{ context }}"}

You can install the {{ external_secrets_operator }} by using the {{ product_title }} web console. You can select the desired update channel and approval strategy, and deploy the Operator into the recommended namespace without manually defining YAML resources. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Navigate to **Ecosystem** → **Software Catalog**.
1.  Enter **{{ external_secrets_operator_short }}** in the search box.
1.  Select the **{{ external_secrets_operator }}** from the generated list and click **Install**.
1.  On the **Install Operator** page:
    1.  Update the **Update channel**, if necessary. The channel defaults to **stable-v1**, which installs the latest stable release of the {{ external_secrets_operator_short }}.
    1.  Select the version from **Version** drop-down list.
    1.  Choose the **Installed Namespace** for the Operator.
        *   To use the default Operator namespace, select the **Operator recommended Namespace** option.
        *   To use the namespace that you created, select the **Select a Namespace** option, and then select the namespace from the drop-down list.
        *   If the default `external-secrets-operator` namespace does not exist, it is created for you by the {{ olm_first }}.
    1.  Select an **Update approval** strategy.
        *   The **Automatic** strategy enables {{ olm }} to automatically update the Operator when a new version is available.
        *   The **Manual** strategy requires a user with appropriate credentials to approve the Operator update.
    1.  Click **Install**.

**Verification**

1.  Navigate to **Ecosystem** → **Installed Operators**.
1.  Verify that **{{ external_secrets_operator_short }}** is listed with a **Status** of **Succeeded** in the `external-secrets-operator` namespace.