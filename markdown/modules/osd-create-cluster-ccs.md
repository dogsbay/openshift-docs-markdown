{%- set _mod_docs_content_type = "PROCEDURE" %}

# Creating a cluster with Service Account authentication using {{ cluster_manager }} {id="osd-create-gcp-cluster-ccs1_{{ context }}"}

Through {{ cluster_manager_url }}, you can create an {{ product_title }} cluster on {{ GCP }} using a cloud provider account that you own with the Service Account authentication type. {._abstract}

**Procedure**

1.  Log in to {{ cluster_manager_url }} and click **Create cluster**.
1.  On the **Create an OpenShift cluster** page, select **Create cluster** in the **Red Hat OpenShift Dedicated** row.
1.  Under **Billing model**, configure the subscription type and infrastructure type:
    1.  Select a subscription type. For information about {{ product_title }} subscription options, see [Cluster subscriptions and registration](https://access.redhat.com/documentation/en-us/openshift_cluster_manager/1-latest/html-single/managing_clusters/index#assembly-cluster-subscriptions) in the {{ cluster_manager }} documentation.

        :::note

        The subscription types that are available to you depend on your {{ product_title }} subscriptions and resource quotas.
        Red Hat recommends deploying your cluster with the On-Demand subscription type purchased through the {{ GCP }} Marketplace. This option provides flexible, consumption-based billing, consuming additional capacity is frictionless, and no Red Hat intervention is required.

        For more information, contact your sales representative or Red Hat support.
        
        :::

    1.  Select the **Customer Cloud Subscription** infrastructure type to deploy {{ product_title }} in an existing cloud provider account that you own.
    1.  Click **Next**.
1.  Select **Run on {{ gcp_full }}**.
1.  Select **Service Account**  as the Authentication type.

    :::note

    Red Hat recommends using Workload Identity Federation as the Authentication type. For more information, see _Creating a cluster on {{ gcp_short }} with Workload Identity Federation authentication_ in the _Additional resources_ section.
    
    :::

1.  Review and complete the listed **Prerequisites**.
1.  Select the checkbox to acknowledge that you have read and completed all of the prerequisites.
1.  Provide your {{ gcp_short }} service account private key in JSON format. You can either click **Browse** to locate and attach a JSON file or add the details in the **Service account JSON** field.
1.  Click **Next** to validate your cloud provider account and go to the **Cluster details** page.
1.  On the **Cluster details** page, provide a name for your cluster and specify the cluster details:
    1.  Add a **Cluster name**.
    1.  Optional: Cluster creation generates a domain prefix as a subdomain for your provisioned cluster on `openshiftapps.com`. If the cluster name is less than or equal to 15 characters, that name is used for the domain prefix. If the cluster name is longer than 15 characters, the domain prefix is randomly generated to a 15 character string.

        To customize the subdomain, select the **Create customize domain prefix** checkbox, and enter your domain prefix name in the **Domain prefix** field. The domain prefix cannot be longer than 15 characters, must be unique within your organization, and cannot be changed after cluster creation.
    1.  Select a cluster version from the **Version** drop-down menu.

        :::important

        Clusters configured with Private Service Connect (PSC) are only supported on OpenShift Dedicated version 4.17 and later. For more information regarding PSC, see _Private Service Overview_ in the _Additional resources_ section.
        
        :::

    1.  Select a channel from the **Channel** drop-down menu.
{% include "./snippets/rosa-osd-channel-group-options.md" %}
    1.  Select a cloud provider region from the **Region** drop-down menu.
    1.  Select a **Single zone** or **Multi-zone** configuration.
    1.  Optional: Select **Enable Secure Boot for Shielded VMs** to use Shielded VMs when installing your cluster. Once you create your cluster, the **Enable Secure Boot for Shielded VMs** setting cannot be changed. For more information, see [Shielded VMs](https://cloud.google.com/security/products/shielded-vm).

        :::important

        To successfully create a cluster, you must select **Enable Secure Boot support for Shielded VMs** if your organization has the policy constraint `constraints/compute.requireShieldedVm` enabled. For more information regarding {{ gcp_short }} organizational policy constraints, see [Organization policy constraints](https://cloud.google.com/resource-manager/docs/organization-policy/org-policy-constraints).
        
        :::


        :::important

        **Enable Secure Boot support for Shielded VMs** is not supported for {{ product_title }} on {{ GCP }} clusters created using bare-metal instance types. For more information, see [Limitations](https://cloud.google.com/compute/shielded-vm/docs/shielded-vm#limitations) in the {{ gcp_full }} documentation.
        
        :::

    1.  Leave **Enable user workload monitoring** selected to monitor your own projects in isolation from Red Hat Site Reliability Engineer (SRE) platform metrics. This option is enabled by default.
1.  Optional: Expand **Advanced Encryption** to make changes to encryption settings.
    1.  Select **Use custom KMS keys** to use custom KMS keys. If you prefer not to use custom KMS keys, leave the default setting **Use default KMS Keys**.


:::important

To use custom KMS keys, the IAM service account `osd-ccs-admin` must be granted the **Cloud KMS CryptoKey Encrypter/Decrypter** role. For more information about granting roles on a resource, see [Granting roles on a resource](https://cloud.google.com/kms/docs/iam#granting_roles_on_a_resource).

:::




1.  With **Use Custom KMS keys** selected:
    1.  Select a key ring location from the **Key ring location** drop-down menu.
    1.  Select a key ring from the **Key ring** drop-down menu.
    1.  Select a key name from the **Key name** drop-down menu.
    1.  Provide the **KMS Service Account**.
1.  Optional: Select **Enable FIPS cryptography** if you require your cluster to be FIPS validated.

    :::note

    If **Enable FIPS cryptography** is selected, **Enable additional etcd encryption** is enabled by default and cannot be disabled. You can select **Enable additional etcd encryption** without selecting **Enable FIPS cryptography**.
    
    :::

1.  Optional: Select **Enable additional etcd encryption** if you require etcd key value encryption.
With this option, the etcd key values are encrypted, but not the keys. This option is in addition to the control plane storage encryption that encrypts the etcd volumes in {{ product_title }} clusters by default.

    :::note

    By enabling additional etcd encryption, you will incur a performance overhead of approximately 20%. The overhead is a result of introducing this second layer of encryption, in addition to the default control plane storage encryption that encrypts the etcd volumes. Consider enabling etcd encryption only if you specifically require it for your use case.
    
    :::

1.  Click **Next**.
    1.  On the **Default machine pool** page, select a **Compute node instance type** from the drop-down menu.
    1.  Optional: Select the **Enable autoscaling** checkbox to enable autoscaling.
1.  Click **Edit cluster autoscaling settings** to make changes to the autoscaling settings.
1.  Once you have made your desired changes, click **Close**.
1.  Select a minimum and maximum node count. Node counts can be selected by engaging the available plus and minus signs or inputting the desired node count into the number input field.
    1.  Select a **Compute node count** from the drop-down menu.

        :::note

        If you are using multiple availability zones, the compute node count is per zone. After your cluster is created, you can change the number of compute nodes in your cluster, but you cannot change the compute node instance type in a machine pool. The number and types of nodes available to you depend on your {{ product_title }} subscription.
        
        :::

    1.  Optional: Expand **Add node labels** to add labels to your nodes. Click **Add additional label** to add an additional node label and select **Next**.


        :::important

        This step refers to labels within Kubernetes, not {{ gcp_full }}. For more information regarding Kubernetes labels, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/).
        
        :::

    1.  On the **Network configuration** page, select **Public** or **Private** to use either public or private API endpoints and application routes for your cluster.

        If you select **Private** and selected {{ product_title }} version 4.17 or later as your cluster version, **Use Private Service Connect** is selected by default. Private Service Connect (PSC) is {{ gcp_full }}’s security-enhanced networking feature. You can disable PSC by clicking the **Use Private Service Connect** checkbox.

        :::note

        Red Hat recommends using Private Service Connect when deploying a private {{ product_title }} cluster on {{ gcp_full }}. Private Service Connect ensures there is a secured, private connectivity between Red Hat infrastructure, Site Reliability Engineering (SRE) and private {{ product_title }} clusters.
        
        :::


        :::important

        If you are using private API endpoints, you cannot access your cluster until you update the network settings in your cloud provider account.
        
        :::

    1.  Optional: To install the cluster in an existing {{ gcp_short }} Virtual Private Cloud (VPC):
{% include "./snippets/snip_install-cluster-in-vpc.md" %}

        1.  Select **Install into an existing VPC**.

            :::important

            Private Service Connect is supported only with **Install into an existing VPC**.
            
            :::

        1.  If you are installing into an existing VPC and you want to enable an HTTP or HTTPS proxy for your cluster, select **Configure a cluster-wide proxy**.

            :::important

            In order to configure a cluster-wide proxy for your cluster, you must first create the Cloud network address translation (NAT) and a Cloud router. See the _Additional resources_ section for more information.
            
            :::

    1.  Accept the default application ingress settings, or to create your own custom settings, select **Custom Settings**. All of the custom settings are optional.
1.  In **Route selector**, enter a comma-separated list of `key=value` pairs to limit which routes this ingress exposes.
Leave the field empty if all routes should remain eligible based on your other choices.
1.  In **Excluded namespaces**, enter a comma-separated list of namespace names whose routes must not use this ingress.
1.  In **Exclude namespace selectors**, specify one or more label selectors. For each selector, provide a label key and a comma-separated list of label values. The default Ingress Controller does not apply to namespaces whose labels satisfy any of the configured selectors.

    :::important

    Do not include spaces around commas, for example, use `finance,HR,legal`, and not `finance, HR, legal`.
    
    :::

1.  Set **Namespace ownership policy** for route admission when namespaces share hostnames, for example, select **Strict** for restrictive admission.
1.  Set **Wildcard policy** to allow or disallow wildcard patterns in route hostnames, for example, select **Disallowed** to block wildcard host routes.

    For more information about custom application ingress settings, click on the information icon provided for each setting.
    1.  Click **Next**.
    1.  Optional: To install the cluster into a {{ gcp_short }} Shared VPC:

        :::important

        To install a cluster into a Shared VPC, you must use {{ product_title }} version 4.13.15 or later. Additionally, the VPC owner of the host project must enable a project as a host project in their {{ gcp_full }} console. For more information, see [Enable a host project](https://cloud.google.com/vpc/docs/provisioning-shared-vpc#set-up-shared-vpc).
        
        :::

1.  Select **Install into {{ gcp_short }} Shared VPC**.
1.  Specify the **Host project ID**. If the specified host project ID is incorrect, cluster creation fails.

    :::important

    Once you complete the steps within the cluster configuration wizard and click **Create Cluster**, the cluster will go into the "Installation Waiting" state. At this point, you must contact the VPC owner of the host project, who must assign the dynamically-generated service account the following roles: **Compute Network Administrator**, **Compute Security Administrator**, **Project IAM Admin**, and **DNS Administrator**.
    The VPC owner of the host project has 30 days to grant the listed permissions before the cluster creation fails.
    For information about Shared VPC permissions, see [Provision Shared VPC](https://cloud.google.com/vpc/docs/provisioning-shared-vpc#migs-service-accounts).
    
    :::

    1.  If you opted to install the cluster in an existing {{ gcp_short }} VPC, provide your **Virtual Private Cloud (VPC) subnet settings** and select **Next**. You must ensure that your VPC is configured to allow outbound internet access to the domains required for the {{ product_title }} service. This outbound access is required for the {{ product_title }} service to communicate with Red&#160;Hat’s management plane and SRE tooling via secure and encrypted endpoints over the public internet.
    1.  If you opted to configure a cluster-wide proxy, provide your proxy configuration details on the **Cluster-wide proxy** page:
1.  Enter a value in at least one of the following fields:
    *   Specify a valid **HTTP proxy URL**.
    *   Specify a valid **HTTPS proxy URL**.
    *   In the **Additional trust bundle** field, provide a PEM encoded X.509 certificate bundle. The bundle is added to the trusted certificate store for the cluster nodes. An additional trust bundle file is required if you use a TLS-inspecting proxy unless the identity certificate for the proxy is signed by an authority from the {{ op_system_first }} trust bundle. This requirement applies regardless of whether the proxy is transparent or requires explicit configuration using the `http-proxy` and `https-proxy` arguments.
1.  Click **Next**.

    For more information about configuring a proxy with {{ product_title }}, see _Configuring a cluster-wide proxy_.
    1.  In the **CIDR ranges** dialog, configure custom classless inter-domain routing (CIDR) ranges or use the defaults that are provided.

        :::note

        If you are installing into a VPC, the **Machine CIDR** range must match the VPC subnets.
        
        :::


        :::important

        CIDR configurations cannot be changed later. Confirm your selections with your network administrator before proceeding.
        
        :::

    1.  On the **Cluster update strategy** page, configure your update preferences:
1.  Choose a cluster update method:
    *   Select **Individual updates** if you want to schedule each update individually. This is the default option.
    *   Select **Recurring updates** to update your cluster on your preferred day and start time, when updates are available.

        :::note

        You can review the end-of-life dates in the update lifecycle documentation for {{ product_title }}. For more information, see [OpenShift Dedicated update life cycle](https://access.redhat.com/documentation/en-us/openshift_dedicated/4/html/introduction_to_openshift_dedicated/policies-and-service-definition#osd-life-cycle).
        
        :::

1.  Provide administrator approval based on your cluster update method:
    *   Individual updates: If you select an update version that requires approval, provide an administrator’s acknowledgment and click **Approve and continue**.
    *   Recurring updates: If you selected recurring updates for your cluster, provide an administrator’s acknowledgment and click **Approve and continue**. {{ cluster_manager }} does not start scheduled y-stream updates for minor versions without receiving an administrator’s acknowledgment.
1.  If you opted for recurring updates, select a preferred day of the week and upgrade start time in UTC from the drop-down menus.
1.  Optional: You can set a grace period for **Node draining** during cluster upgrades. A **1 hour** grace period is set by default.
1.  Click **Next**.

    :::note

    In the event of critical security concerns that significantly impact the security or stability of a cluster, Red Hat Site Reliability Engineering (SRE) might schedule automatic updates to the latest z-stream version that is not impacted. The updates are applied within 48 hours after customer notifications are provided. For a description of the critical impact security rating, see [Understanding Red Hat security ratings](https://access.redhat.com/security/updates/classification).
    
    :::

    1.  Review the summary of your selections and click **Create cluster** to start the cluster installation. The installation takes approximately 30-40 minutes to complete.
    1.  Optional: On the **Overview** tab, you can enable the delete protection feature by selecting **Enable**, which is located directly under **Delete Protection: Disabled**. This will prevent your cluster from being deleted. To disable delete protection, select **Disable**.
    By default, clusters are created with the delete protection feature disabled.


:::note

If you delete a cluster that was installed into a {{ gcp_short }} Shared VPC, inform the VPC owner of the host project to remove the IAM policy roles granted to the service account that was referenced during cluster creation.

:::


**Verification**

*   You can monitor the progress of the installation in the **Overview** page for your cluster. You can view the installation logs on the same page. Your cluster is ready when the **Status** in the **Details** section of the page is listed as **Ready**.


:::important

If your cluster deployment fails during installation, certain resources created during the installation process are not automatically removed from your {{ GCP }} account. To remove these resources from your {{ gcp_short }} account, you must delete the failed cluster.

:::