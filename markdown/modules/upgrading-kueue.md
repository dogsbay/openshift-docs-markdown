{%- set _mod_docs_content_type = "PROCEDURE" %}
# Upgrading {{ kueue_name }} {id="upgrading-kueue_{{ context }}"}

If you have previously installed {{ kueue_name }}, you must manually upgrade your deployment to the latest version to use the latest bug fixes and feature enhancements. {._abstract}

**Prerequisites**

*   You have installed a previous version of {{ kueue_name }}.
*   You are logged in to the {{ product_title }} web console with cluster administrator permissions.

**Procedure**

1.  In the {{ product_title }} web console, click **Operators** → **Installed Operators**, then select **{{ kueue_name }}** from the list.
1.  From the **Actions** drop-down menu, select **Uninstall Operator**.
1.  The **Uninstall Operator?** dialog box opens. Click **Uninstall**.

    :::important

    Selecting the **Delete all operand instances for this operator** checkbox before clicking **Uninstall** deletes all existing resources from the cluster, including:

    *   The `Kueue` CR
    *   Any cluster queues, local queues, or resource flavors that you have created

    Leave this box unchecked when upgrading your cluster to retain your created resources.
    
    :::

1.  In the {{ product_title }} web console, click **Operators** → **OperatorHub**.
1.  Choose **{{ kueue_op }}** from the list of available Operators, and click **Install**.

**Verification**

1.  Go to **Operators** → **Installed Operators**.
1.  Confirm that the **{{ kueue_op }}** is listed with **Status** as **Succeeded**.
1.  Confirm that the version shown under the Operator name in the list is the latest version.