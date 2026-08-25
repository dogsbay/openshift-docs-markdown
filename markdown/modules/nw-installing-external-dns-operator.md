{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the External DNS Operator with the Software Catalog {id="nw-installing-external-dns-operator_{{ context }}"}

You can install the External DNS Operator by using the {{ product_title }} Software Catalog. You can then manage the Operator lifecycle directly from the web console. {._abstract}

**Procedure**

1.  Click **Ecosystem** -> **Software Catalog** in the {{ product_title }} web console.
1.  Click **External DNS Operator**. You can use the **Filter by keyword** text box or the filter list to search for External DNS Operator from the list of Operators.
1.  Select the `external-dns-operator` namespace.
1.  On the **External DNS Operator** page, click **Install**.
1.  On the **Install Operator** page, ensure that you selected the following options:
    1.  Update the channel as **stable-v1**.
    1.  Installation mode as **A specific name on the cluster**.
    1.  Installed namespace as `external-dns-operator`. If namespace `external-dns-operator` does not exist, the Operator gets created during the Operator installation.
    1.  Select **Approval Strategy** as **Automatic** or **Manual**. The Approval Strategy defaults to **Automatic**.
    1.  Click **Install**.

        If you select **Automatic** updates, the Operator Lifecycle Manager (OLM) automatically upgrades the running instance of your Operator without any intervention.

        If you select **Manual** updates, the OLM creates an update request. As a cluster administrator, you must then manually approve that update request to have the Operator updated to the new version.

**Verification**

*   Verify that the External DNS Operator shows the **Status** as **Succeeded** on the **Installed Operators** dashboard.