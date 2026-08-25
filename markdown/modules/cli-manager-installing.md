{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ cli_manager }} {id="cli-manager-installing_{{ context }}"}

You can install the {{ cli_manager }} to facilitate adding CLI plugins in both connected and disconnected environments. {._abstract}


:::note

Krew always works with {{ oc_first }} without the {{ cli_manager }} installed. You can use the same commands outlined in this documentation to use Krew with `oc`. For more information, see [Krew documentation](https://krew.sigs.k8s.io/docs/).

:::


**Prerequisites**

*   [Krew is installed](https://krew.sigs.k8s.io/docs/user-guide/setup/install).
*   You are logged in to {{ product_title }} as a user with the `cluster-admin` role.
*   You have access to the {{ product_title }} web console.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Create the required namespace for the {{ cli_manager }}:
    1.  Navigate to **Administration** -> **Namespaces** and click **Create Namespace**.
    1.  In the **Name** field, enter `openshift-cli-manager-operator` and click **Create**.
1.  Install the {{ cli_manager }}:
    1.  Navigate to **Ecosystem** -> **Software Catalog**.
    1.  In the filter box, enter **{{ cli_manager }}**.
    1.  Select the **{{ cli_manager }}** and click **Install**.
    1.  On the **Install Operator** page, complete the following steps:
        1.  Ensure that the **Update channel** is set to **tech preview**, which installs the latest Technology Preview release of the {{ cli_manager }}.
        1.  From the drop-down menu, select **A specific namespace on the cluster** and select **openshift-cli-manager-operator**.
        1.  Click **Install**.
1.  Create the `CliManager` resource by completing the following steps:
    1.  Navigate to **Installed Operators**.
    1.  Select **{{ cli_manager }}**.
    1.  Select the **CLI Manager** tab.
    1.  Click **Create CliManager**.
    1.  Use the default **Name**.
    1.  Click **Create**.
        1.  The new `CliManager` resource is listed in the **CLI Manager** tab.

**Verification**

1.  Navigate to **Ecosystem** -> **Installed Operators**.
1.  Verify that **{{ cli_manager }}** is listed with a **Status** of **Succeeded**.