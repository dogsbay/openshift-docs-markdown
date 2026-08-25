{%- set _mod_docs_content_type = "PROCEDURE" %}

# Creating a cluster on AWS {id="osd-create-aws-cluster-ccs_{{ context }}"}

Deploy a {{ product_title }} cluster with the Customer Cloud Subscription (CCS) or Red&#160;Hat cloud account billing model to get more financial control. By configuring AWS Identity and Access Management (IAM) roles, Virtual Private Clouds (VPC) networking, and PrivateLink, you integrate your clusters into existing infrastructure while ensuring security.   {._abstract}

**Prerequisites**

You have completed the following tasks:

*   Configure your AWS account for use with {{ product_title }}.
*   Ensure that you have not deployed any services in your AWS account.
*   Configure the AWS account quotas and limits required to support the specified cluster size.
*   Create an `osdCcsAdmin` AWS Identity and Access Management (IAM) user with the `AdministratorAccess` policy attached.
*   Set up a service control policy (SCP) in your AWS organization. For more information, see _Minimum required service control policy (SCP)_.
*   Consider having **Business Support** or higher from AWS.
*   If you are configuring a cluster-wide proxy, verify that the proxy is accessible from the VPC where you installed the cluster. 
*   Ensure that you can access the proxy from the private subnets of the VPC.

**Procedure**

1.  Log in to {{ cluster_manager_url }}.
1.  On the **Overview** page, select **Create cluster** in the **Red&#160;Hat {{ product_title }}** card.
1.  Under **Billing model**, configure the subscription type and infrastructure type:
    1.  Select a subscription type. For information about {{ product_title }} subscription options, see [Cluster subscriptions and registration](https://access.redhat.com/documentation/en-us/openshift_cluster_manager/1-latest/html-single/managing_clusters/index#assembly-cluster-subscriptions) in the {{ cluster_manager }} documentation.

        :::note

        The subscription types that are available to you depend on your {{ product_title }} subscriptions and resource quotas. For more information, contact your sales representative or Red Hat support.
        
        :::

    1.  Select the **Customer Cloud Subscription** infrastructure type to deploy {{ product_title }} in an existing cloud provider account that you own or select **Red Hat cloud account** infrastructure type to deploy {{ product_title }} in a Red Hat cloud provider account.
    1.  Click **Next**.
1.  Select **Run on Amazon Web Services**. If you are provisioning your cluster in an AWS account, complete the following substeps:
    1.  Review and complete the listed **Prerequisites**.
    1.  Select the checkbox to acknowledge that you have read and completed all of the prerequisites.
    1.  Give your AWS account details:
        1.  Enter your **AWS account ID**.
        1.  Enter your **AWS access key ID** and **AWS secret access key** for your AWS IAM user account.

            :::note

            Revoking these credentials in AWS results in a loss of access to any cluster created with these credentials.
            
            :::

        1.  Optional: You can select **Bypass AWS service control policy (SCP) checks** to disable the SCP checks.

            :::note

            Some AWS SCPs can cause the installation to fail, even if you have the required permissions. Disabling the SCP checks allows an installation to proceed. Even when you bypass the checks, the SCP still runs. 
            
            :::

1.  Click **Next** to validate your cloud provider account and go to the **Cluster details** page.
1.  On the **Cluster details** page, give a name for your cluster and specify the cluster details:
    1.  Add a **Cluster name**.
    1.  Optional: Cluster creation generates a domain prefix as a subdomain for your provisioned cluster on `openshiftapps.com`. If the cluster name is less than or equal to 15 characters, then the domain prefix uses that name. If the cluster name is longer than 15 characters, the domain prefix is randomly generated to a 15 character string.

        To customize the subdomain, select the **Create customize domain prefix** checkbox, and enter your domain prefix name in the **Domain prefix** field. The domain prefix cannot be longer than 15 characters, must be unique within your organization, and cannot be changed after cluster creation.
    1.  Select a cluster version from the **Version** drop-down menu.
    1.  Select a cloud provider region from the **Region** drop-down menu.
    1.  Select a **Single zone** or **Multi-zone** configuration.
    1.  Leave **Enable user workload monitoring** selected to monitor your own projects in isolation from Red Hat Site Reliability Engineer (SRE) platform metrics. This option is enabled by default.
    1.  Optional: Expand **Advanced Encryption** to make changes to encryption settings.
        1.  Accept the default setting **Use default KMS Keys** to use your default AWS KMS key, or select **Use Custom KMS keys** to use a custom KMS key.
            1.  With **Use Custom KMS keys** selected, enter the AWS Key Management Service (KMS) custom key Amazon Resource Name (ARN) ARN in the **Key ARN** field.
            Use the key to encrypt all control plane, infrastructure, worker node root volumes, and persistent volumes in your cluster.
        1.  Optional: Select **Enable FIPS cryptography** if you require your cluster to be FIPS validated.

            :::note

            If you select  **Enable FIPS cryptography**, then by default, you enable  **Enable additional etcd encryption** and you cannot disable this feature. You can select **Enable additional etcd encryption** without selecting **Enable FIPS cryptography**.
            
            :::

        1.  Optional: Select **Enable additional etcd encryption** if you require etcd key value encryption. With this option, the etcd key values are encrypted, but the keys are not. This option is in addition to the control plane storage encryption that encrypts the etcd volumes in {{ product_title }} clusters by default.

            :::note

            By enabling etcd encryption for the key values in etcd, you increase the performance impact on your workloads by about 20%. The workload increase is a result of introducing this second layer of encryption, in addition to the default control plane storage encryption that encrypts the etcd volumes. Consider enabling etcd encryption only if you specifically require it for your use case.
            
            :::

    1.  Click **Next**.
1.  On the **Default machine pool** page, select a **Compute node instance type** from the drop-down menu.
1.  Optional: Select the **Enable autoscaling** checkbox to enable autoscaling.
    1.  Click **Edit cluster autoscaling settings** to make changes to the autoscaling settings.
    1.  After you make your changes, click **Close**.
    1.  Select a minimum and maximum node count. Select the node counts by engaging the available plus and minus signs or inputting the node count into the number input field.
1.  Select a **Compute node count** from the drop-down menu.

    :::note

    After you create your cluster, you can change the number of compute nodes in it, but you cannot change the compute node instance type in a machine pool. The number and types of nodes available to you depend on your {{ product_title }} subscription.
    
    :::

1.  Choose your preference for the Instance Metadata Service (IMDS) type, either using both IMDSv1 and IMDSv2 types or requiring your EC2 instances to use only IMDSv2. You can access instance metadata from a running instance in two ways:
    *   Instance Metadata Service Version 1 (IMDSv1) - a request/response method
    *   Instance Metadata Service Version 2 (IMDSv2) - a session-oriented method

        :::important

        After you create your cluster, you cannot change the Instance Metadata Service settings. 
        
        :::


        :::note

        IMDSv2 uses session-oriented requests. With session-oriented requests, you create a session token that defines the session duration, which can range from a minimum of one second to a maximum of six hours. During the specified duration, you can use the same session token for future requests. After the specified duration expires, you must create a new session token to use for future requests.
        
        :::


        For more information regarding IMDS, see [Instance metadata and user data](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html) in the AWS documentation.
1.  Optional: Expand **Edit node labels** to add labels to your nodes. Click **Add label** to add more node labels and select **Next**.
1.  On the **Network configuration** page, select **Public** or **Private** to use either public or private API endpoints and application routes for your cluster.

    :::important

    If you are using private API endpoints, you cannot access your cluster until you update the network settings in your cloud provider account.
    
    :::

1.  Optional: To install the cluster in an existing AWS Virtual Private Cloud (VPC):
{% include "./snippets/snip_install-cluster-in-vpc.md" %}

    1.  Select **Install into an existing VPC**.
    1.  If you are installing into an existing VPC and opted to use private API endpoints, you can select **Use a PrivateLink**. This option enables connections to the cluster by Red Hat Site Reliability Engineering (SRE) using only AWS PrivateLink endpoints.

        :::note

        You cannot change the **Use a PrivateLink** option after you create a cluster.
        
        :::

    1.  If you are installing into an existing VPC and you want to enable an HTTP or HTTPS proxy for your cluster, select **Configure a cluster-wide proxy**.
1.  If you opted to install the cluster in an existing AWS VPC, give your **Virtual Private Cloud (VPC) subnet settings** and select **Next**.
You must have created the Cloud network address translation (NAT) and a Cloud router. See the "Additional resources" section for information about Cloud NATs and Google VPCs.

    :::note

    Ensure that you configure the VPC with a public and a private subnet for each availability zone that you want the cluster installed into. If you opted to use PrivateLink, you only need private subnets.
    
    :::

    1.  Optional: Expand **Additional security groups** and select additional custom security groups to apply to nodes in the default machine pools. You must have already created the security groups and associated them with the VPC that you selected for this cluster. You cannot add or edit security groups to the default machine pools after you create the cluster.

        By default, the security groups you specify are added for all node types. Clear the **Apply the same security groups to all node types** checkbox to apply different security groups for each node type.

        For more information, see the requirements for _Security groups_ under _Additional resources_.
1.  Accept the default application ingress settings, or to create your own custom settings, select **Custom Settings**.
    1.  Optional: Give route selector.
    1.  Optional: Give excluded namespaces.
    1.  Select a namespace ownership policy.
    1.  Select a wildcard policy.

        For more information about custom application ingress settings, click the information icon for each setting.
1.  If you opted to configure a cluster-wide proxy, give your proxy configuration details on the **Cluster-wide proxy** page:
    1.  Enter a value in at least one of the following fields:
        *   Specify a valid **HTTP proxy URL**.
        *   Specify a valid **HTTPS proxy URL**.
        *   In the **Additional trust bundle** field, give a PEM encoded X.509 certificate bundle. The bundle is added to the trusted certificate store for the cluster nodes. You need an additional trust bundle file if you use a TLS-inspecting proxy unless you have an identity certificate for the proxy, signed by an authority from the {{ op_system_first }} trust bundle. This requirement applies regardless of whether the proxy is transparent or requires explicit configuration using the `http-proxy` and `https-proxy` arguments.
    1.  Click **Next**.

        For more information about configuring a proxy with {{ product_title }}, see _Configuring a cluster-wide proxy_.
1.  In the **CIDR ranges** dialog, configure custom classless inter-domain routing (CIDR) ranges or use the designated defaults.

    :::note

    If you are installing into a VPC, the **Machine CIDR** range must match the VPC subnets.
    
    :::


    :::important

    You cannot change CIDR configurations. Confirm your selections with your network administrator before proceeding.
    
    :::

1.  On the **Cluster update strategy** page, configure your update preferences:
    1.  Choose a cluster update method:
        *   Select **Individual updates** if you want to schedule each update individually. This is the default option.
        *   Select **Recurring updates** to update your cluster on your preferred day and start time, when updates are available.

            :::note

            You can review the end-of-life dates in the update lifecycle documentation for {{ product_title }}. For more information, see [OpenShift Dedicated update life cycle](https://access.redhat.com/documentation/en-us/openshift_dedicated/4/html/introduction_to_openshift_dedicated/policies-and-service-definition#osd-life-cycle).
            
            :::

    1.  If you opted for recurring updates, select a preferred day of the week and upgrade start time in UTC from the drop-down menus.
    1.  Optional: You can set a grace period for **Node draining** during cluster upgrades. By default, you get a **1 hour** grace period.
    1.  Click **Next**.

        :::note

        If critical security concerns that significantly impact the security or stability of a cluster occur, Red Hat Site Reliability Engineering (SRE) might schedule automatic updates to the latest z-stream version that is not impacted. The updates apply within 48 hours after you get customer notifications. For a description of the critical impact security rating, see [Understanding Red Hat security ratings](https://access.redhat.com/security/updates/classification).
        
        :::

1.  Review the summary of your selections and click **Create cluster** to start the cluster installation. The installation takes approximately 30-40 minutes to complete.
1.  Optional: On the **Overview** tab, you can enable the delete protection feature by going to  **Delete Protection: Disabled** and selecting **Enable**. This feature gives your cluster delete protection. To disable delete protection, select **Disable**.
By default, clusters are created with the delete protection feature disabled.

**Verification**

*   You can monitor the progress of the installation in the **Overview** page for your cluster. You can view the installation logs on the same page. Your cluster is ready when the **Status** in the **Details** section of the page is listed as **Ready**.

{% if context == "osd-creating-a-cluster-on-aws" %}
{%- set osd_on_aws = false -%}
{% endif %}