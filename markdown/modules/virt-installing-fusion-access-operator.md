{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ FusionSAN }} Operator {id="installing-fusion-access-operator_{{ context }}"}

You can install the {{ FusionSAN }} Operator from the software catalog in the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have a working container registry enabled.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Ecosystem** -> **Software Catalog**.
1.  In the **Filter by keyword** field, type `Fusion Access for SAN`.
1.  Select the **{{ FusionSAN }}** tile and click **Install**.
1.  On the **Install Operator** page, keep the default selections for **Update Channel**, **Version**, and **Installation mode**.
1.  Verify that **Operator recommended Namespace** is selected for **Installed Namespace**.

    This installs the Operator in the `ibm-fusion-access` namespace. If this namespace does not yet exist, it is automatically created.

    :::warning

    You must install the {{ FusionSAN }} Operator in the `ibm-fusion-access` namespace. Installation in any other namespace is not supported.
    
    :::

1.  Verify that the **Automatic** default is selected for **Update Approval**.

    This enables automatic updates when a new z-stream release is available.
1.  Click **Install**.

    This installs the Operator.

**Verification**

1.  Navigate to **Ecosystem** -> **Installed Operators**.
1.  Verify that the {{ FusionSAN }} Operator is displayed.