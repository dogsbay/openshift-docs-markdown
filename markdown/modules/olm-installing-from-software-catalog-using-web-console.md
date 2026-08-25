{%- if not filter_type %}
{%- set filter_type = "jaeger" -%}
{%- set filter_operator = "Jaeger" -%}
{%- set olm_admin = true -%}
{% endif %}
{% if context == "olm-installing-operators-in-namespace" %}
{%- set filter_type = "advanced" -%}
{%- set filter_operator = "Advanced Cluster Management for Kubernetes" %}
{%- set olm_user = true -%}
{% endif %}

{%- if context == "olm-adding-operators-to-a-cluster" %}
{%- set filter_type = "advanced" -%}
{%- set filter_operator = "Advanced Cluster Management for Kubernetes" -%}
{%- set olm_admin = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}

# Installing from the software catalog by using the web console {id="olm-installing-from-software-catalog-using-web-console_{{ context }}"}

To install and subscribe to an Operator from the software catalog, you can use the {{ product_title }} web console. The console guides you through selecting an install mode, namespace, and approval strategy. {._abstract}

**Prerequisites**

{% if olm_admin %}
*   Access to an {{ product_title }} cluster using an account with
{%- if openshift_enterprise or openshift_webscale or openshift_origin %}
`cluster-admin` permissions.
{% endif %}
{% if openshift_dedicated or openshift_rosa %}
the `dedicated-admin` role.
{% endif %}
{% endif %}

{% if olm_user %}
*   Access to an {{ product_title }} cluster using an account with Operator installation permissions.
{% endif %}

**Procedure**

1.  Navigate in the web console to the **Ecosystem** -> **Software Catalog** page.
1.  Scroll or type a keyword into the **Filter by keyword** box to find the Operator you want. For example, type `{{ filter_type }}` to find the {{ filter_operator }} Operator.

    You can also filter options by **Infrastructure Features**. For example, select **Disconnected** if you want to see Operators that work in disconnected environments, also known as restricted network environments.
1.  Select the Operator to display additional information.

    :::note

    Choosing a Community Operator warns that Red Hat does not certify Community Operators; you must acknowledge the warning before continuing.
    
    :::

1.  Read the information about the Operator and click **Install**.
1.  On the **Install Operator** page, configure your Operator installation:
    1.  If you want to install a specific version of an Operator, select an **Update channel** and **Version** from the lists. You can browse the various versions of an Operator across any channels it might have, view the metadata for that channel and version, and select the exact version you want to install.

        :::note

        The version selection defaults to the latest version for the channel selected. If the latest version for the channel is selected, the **Automatic** approval strategy is enabled by default. Otherwise, **Manual** approval is required when not installing the latest version for the selected channel.

        Installing an Operator with **Manual** approval causes all Operators installed within the namespace to function with the **Manual** approval strategy and all Operators are updated together. If you want to update Operators independently, install Operators into separate namespaces.
        
        :::


{% if olm_admin %}
    1.  Confirm the installation mode for the Operator:
        *   **All namespaces on the cluster (default)** installs the Operator in the default `openshift-operators` namespace to watch and be made available to all namespaces in the cluster. This option is not always available.
        *   **A specific namespace on the cluster** allows you to choose a specific, single namespace in which to install the Operator. The Operator will only watch and be made available for use in this single namespace.
            {% endif %}
            {% if olm_user %}
    1.  Choose a specific, single namespace in which to install the Operator. The Operator will only watch and be made available for use in this single namespace.
{% endif %}

{% if not openshift_rosa %}
    1.  For clusters on cloud providers with token authentication enabled:
        *   If the cluster uses {{ aws_short }} {{ sts_full }} (**STS Mode** in the web console), enter the Amazon Resource Name (ARN) of the AWS IAM role of your service account in the **role ARN** field. To create the role’s ARN, follow the procedure described in [Preparing AWS account](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html/tutorials/cloud-experts-deploy-api-data-protection#prepare-aws-account_cloud-experts-deploy-api-data-protection).
            {% endif %}
            {% if openshift_rosa %}
            1.  For clusters on cloud providers with token authentication enabled:
        *   If the cluster uses {{ aws_short }} {{ sts_full }} (**STS Mode** in the web console), enter the Amazon Resource Name (ARN) of the AWS IAM role of your service account in the **role ARN** field. To create the role’s ARN, follow the procedure described in [Preparing AWS account](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html/tutorials/cloud-experts-deploy-api-data-protection).
            {% endif %}
        *   If the cluster uses {{ entra_first }} (**Workload Identity / Federated Identity Mode** in the web console), add the client ID, tenant ID, and subscription ID in the appropriate fields.
        *   If the cluster uses {{ gcp_wid_first }} (**{{ gcp_wid_short }} / Federated Identity Mode** in the web console), add the project number, pool ID, provider ID, and service account email in the appropriate fields.

1.  For **Update approval**, select either the **Automatic** or **Manual** approval strategy.

    :::important

    If the web console shows that the cluster uses {{ aws_short }} {{ sts_short }}, {{ entra_first }}, or {{ gcp_wid_short }}, you must set **Update approval** to **Manual**.

    Subscriptions with automatic approvals for updates are not recommended because there might be permission changes to make before updating. Subscriptions with manual approvals for updates ensure that administrators have the opportunity to verify the permissions of the later version, take any necessary steps, and then update.
    
    :::

    1.  Click **Install** to make the Operator available to the selected namespaces on this {{ product_title }} cluster:
1.  If you selected a **Manual** approval strategy, the upgrade status of the subscription remains **Upgrading** until you review and approve the install plan.

    After approving on the **Install Plan** page, the subscription upgrade status moves to **Up to date**.
1.  If you selected an **Automatic** approval strategy, the upgrade status should resolve to **Up to date** without intervention.

**Verification**

*   After the upgrade status of the subscription is **Up to date**, select **Ecosystem** -> **Installed Operators** to verify that the cluster service version (CSV) of the installed Operator eventually shows up. The **Status** should eventually resolve to **Succeeded** in the relevant namespace.

    :::note

    For the **All namespaces...** installation mode, the status resolves to **Succeeded** in the `openshift-operators` namespace, but the status is **Copied** if you check in other namespaces.
    
    :::


    If it does not:
    *   Check the logs in any pods in the `openshift-operators` project (or other relevant namespace if **A specific namespace...** installation mode was selected) on the **Workloads** -> **Pods** page that are reporting issues to troubleshoot further.
*   When the Operator is installed, the metadata indicates which channel and version are installed.

    :::note

    The **Channel** and **Version** dropdown menus are still available for viewing other version metadata in this catalog context.
    
    :::