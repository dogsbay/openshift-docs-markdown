{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ VirtProductName }} Operator by using the web console {id="virt-installing-virt-operator_{{ context }}"}

You can deploy the {{ VirtProductName }} Operator by using the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   Install {{ product_title }} {{ product_version }} on your cluster.
*   Log in to the {{ product_title }} web console as a user with `cluster-admin` permissions.
{%- if openshift_rosa or openshift_dedicated or openshift_rosa_hcp %}
*   Create a machine pool based on a bare metal compute node instance type. For more information, see "Creating a machine pool" in the Additional resources of this section.
{% endif %}

**Procedure**

1.  From the **Administrator** perspective, click **Ecosystem** -> **Software Catalog**.
1.  In the **Filter by keyword** field, type **Virtualization**.
1.  Select the **{{ CNVOperatorDisplayName }}** tile with the **Red Hat** source label.
1.  Read the information about the Operator and click **Install**.
1.  On the **Install Operator** page:
    1.  Select **stable** from the list of available **Update Channel** options. This ensures that you install the version of {{ VirtProductName }} that is compatible with your {{ product_title }} version.
    1.  For **Installed Namespace**, ensure that the **Operator recommended namespace** option is selected. This installs the Operator in the mandatory `{{ CNVNamespace }}` namespace, which is automatically created if it does not exist.

        :::warning

        Attempting to install the {{ VirtProductName }} Operator in a namespace other than `{{ CNVNamespace }}` causes the installation to fail.
        
        :::

    1.  For **Approval Strategy**, it is highly recommended that you select **Automatic**, which is the default value, so that {{ VirtProductName }} automatically updates when a new version is available in the **stable** update channel.

        Selecting the **Manual** approval strategy is not recommended, as it poses a high risk to cluster support and functionality. Only select **Manual** if you fully understand these risks and cannot use **Automatic**.

        :::warning

        Because {{ VirtProductName }} is only supported when used with the corresponding {{ product_title }} version, missing {{ VirtProductName }} updates can cause your cluster to become unsupported.
        
        :::

1.  Click **Install** to make the Operator available to the `{{ CNVNamespace }}` namespace.
1.  When the Operator installs successfully, click **Create HyperConverged**.
1.  Optional: Configure **Infra** and **Workloads** node placement options for {{ VirtProductName }} components.
1.  Click **Create** to launch {{ VirtProductName }}.

**Verification**

*   Navigate to the **Workloads** -> **Pods** page and monitor the {{ VirtProductName }} pods until they are all **Running**. After all the pods display the **Running** state, you can use {{ VirtProductName }}.