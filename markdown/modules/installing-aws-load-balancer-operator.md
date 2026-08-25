{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the AWS Load Balancer Operator by using the web console {id="nw-installing-aws-load-balancer-operator_{{ context }}"}

To deploy the AWS Load Balancer Operator, install the Operator by using the web console. You can manage the lifecycle of the Operator by using a graphical interface. {._abstract}

**Prerequisites**

*   You have logged in to the {{ product_title }} web console as a user with `cluster-admin` permissions.
*   Your cluster is configured with AWS as the platform type and cloud provider.
*   If you are using a security token service (STS) or user-provisioned infrastructure, follow the related preparation steps. For example, if you are using AWS Security Token Service, see "Preparing for the AWS Load Balancer Operator on a cluster using the AWS Security Token Service (STS)".

**Procedure**

1.  Navigate to **Ecosystem** → **Software Catalog** in the {{ product_title }} web console.
1.  Select the **AWS Load Balancer Operator**. You can use the **Filter by keyword** text box or the filter list to search for the AWS Load Balancer Operator from the list of Operators.
1.  Select the `aws-load-balancer-operator` namespace.
1.  On the **Install Operator** page, select the following options:
    1.  For the **Update the channel** option, select **stable-v1**.
    1.  For the **Installation mode** option, select **All namespaces on the cluster (default)**.
    1.  For the **Installed Namespace** option, select `aws-load-balancer-operator`. If the `aws-load-balancer-operator` namespace does not exist, it gets created during the Operator installation.
    1.  Select **Update approval** as **Automatic** or **Manual**. By default, the **Update approval** is set to **Automatic**. If you select automatic updates, the Operator Lifecycle Manager (OLM) automatically upgrades the running instance of your Operator without any intervention. If you select manual updates, the OLM creates an update request. As a cluster administrator, you must then manually approve that update request to have the Operator update to the newer version.
1.  Click **Install**.

**Verification**

*   Verify that the AWS Load Balancer Operator shows the **Status** as **Succeeded** on the Installed Operators dashboard.