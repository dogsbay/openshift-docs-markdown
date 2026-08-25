{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a cluster with the default options using {{ cluster_manager }} {id="rosa-sts-creating-a-cluster-using-defaults-ocm_{{ context }}"}

{% if context == "rosa-sts-creating-a-cluster-quickly" %}
{%- set quick_install = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}

When using {{ cluster_manager_first }} on the {{ hybrid_console_url }} to create a {{ product_title }} cluster that uses the AWS Security Token Service (STS), you can select the default options to create the cluster quickly. You can also use the admin {{ cluster_manager }} IAM role to enable automatic deployment of the cluster-specific Operator roles and the OpenID Connect (OIDC) provider. {._abstract}

{% if quick_install %}

**Prerequisites**

*   You have completed the AWS prerequisites for {{ product_title }} with STS.
*   You have available AWS service quotas.
*   You have enabled the {{ product_title }} service in the AWS Console.
*   You have installed and configured the latest {{ rosa_cli }}, `rosa`, on your installation host. Run `rosa version` to see your currently installed version of the {{ rosa_cli }}. If a newer version is available, the CLI provides a link to download this upgrade.
*   You have verified that the AWS Elastic Load Balancing (ELB) service role exists in your AWS account.
*   You have associated your AWS account with your Red&#160;Hat organization. When you associated your account, you applied the administrative permissions to the {{ cluster_manager }} role. For detailed steps, see _Associating your AWS account with your Red&#160;Hat organization_.
*   You have created the required account-wide STS roles and policies. For detailed steps, see _Creating the account-wide STS roles and policies_.
{% endif %}

**Procedure**

1.  Navigate to {{ cluster_manager_url }} and select **Create cluster**.
1.  On the **Create an OpenShift cluster** page, select **Create cluster** in the **{{ product_title }} (ROSA)** row.
1.  Verify that your AWS account ID is listed in the **Associated AWS accounts** drop-down menu and that the installation program, support, worker, and control plane account role Amazon Resource Names (ARNs) are listed on the **Accounts and roles** page.

    :::note

    If your AWS account ID is not listed, check that you have successfully associated your AWS account with your Red&#160;Hat organization. If your account role ARNs are not listed, check that the required account-wide STS roles exist in your AWS account.
    
    :::

1.  Click **Next**.
1.  On the **Cluster details** page, provide a name for your cluster in the **Cluster name** field. Leave the default values in the remaining fields and click **Next**.

    :::note

    Cluster creation generates a domain prefix as a subdomain for your provisioned cluster on `openshiftapps.com`. If the cluster name is less than or equal to 15 characters, that name is used for the domain prefix. If the cluster name is longer than 15 characters, the domain prefix is randomly generated as a 15-character string. To customize the subdomain, select the **Create custom domain prefix** checkbox, and enter your domain prefix name in the **Domain prefix** field.
    
    :::

1.  To deploy a cluster quickly, leave the default options in the **Cluster settings**, **Networking**, **Cluster roles and policies**, and **Cluster updates** pages and click **Next** on each page.
1.  On the **Review your {{ product_title }} cluster** page, review the summary of your selections and click **Create cluster** to start the installation.
1.  Optional: On the **Overview** tab, you can enable the delete protection feature by selecting **Enable**, which is located directly under **Delete Protection: Disabled**. This will prevent your cluster from being deleted. To disable delete protection, select **Disable**.
By default, clusters are created with the delete protection feature disabled.

**Verification**

*   You can check the progress of the installation in the **Overview** page for your cluster. You can view the installation logs on the same page. Your cluster is ready when the **Status** in the **Details** section of the page is listed as **Ready**.

    :::note

    If the installation fails or the cluster **State** does not change to **Ready** after about 40 minutes, check the installation troubleshooting documentation for details. For more information, see _Troubleshooting installations_. For steps to contact Red&#160;Hat Support for assistance, see _Getting support for Red&#160;Hat OpenShift Service on AWS_.
    
    :::


{% if context == "rosa-sts-creating-a-cluster-quickly" %}
{%- set quick_install = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}