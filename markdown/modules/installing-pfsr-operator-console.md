{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the PF Status Relay Operator using the web console {id="installing-pfsr-console_{{ context }}"}

Install the PF Status Relay Operator to enable {{ product_title }} to use Link Aggregation Control Protocol (LACP) as an active health check on physical functions. {._abstract}

**Prerequisites**

*   You configured LACP on your upstream switch.
*   You configured pod-level bonding for your SR-IOV networks.
*   You have cluster-admin privileges.

**Procedure**

1.  Install the PF Status Relay Operator:
    1.  In the {{ product_title }} web console, click **Ecosystem** → **Software Catalog**.
    1.  Select **PF Status Relay Operator** from the list of available Operators, and then click **Install**.
    1.  On the **Install Operator** page, under **Installed Namespace**, select **Operator recommended Namespace**.
    1.  Click **Install**.

**Verification**

*   Verify that the PF Status Relay Operator shows the **Status** as **Succeeded** on the Installed Operators dashboard.