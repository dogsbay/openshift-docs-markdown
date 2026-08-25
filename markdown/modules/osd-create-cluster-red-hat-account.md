{%- set _mod_docs_content_type = "PROCEDURE" %}

# Creating a cluster on {{ gcp_short }} with a Red Hat cloud account using {{ cluster_manager }} {id="osd-create-gcp-cluster-ccs_{{ context }}"}

Through {{ cluster_manager_url }}, you can create an {{ product_title }} cluster on {{ GCP }} using a standard cloud provider account owned by Red Hat. {._abstract}


:::note

If you want to create an {{ product_title }} cluster on {{ GCP }} with the {{ cluster_manager_first }} command-line interface (`ocm`), see the instructions for configuring machine pool root disk sizes for clusters

:::


**Procedure**

1.  Log in to {{ cluster_manager_url }} and click **Create cluster**.
1.  In the **Cloud** tab, click **Create cluster** in the **Red Hat {{ product_title }}** row.
1.  Under **Billing model**, configure the subscription type and infrastructure type:
    1.  Select the **Annual** subscription type. Only the **Annual** subscription type is available when you deploy a cluster using a Red Hat cloud account.

        For information about {{ product_title }} subscription options, see [Cluster subscriptions and registration](https://access.redhat.com/documentation/en-us/openshift_cluster_manager/1-latest/html-single/managing_clusters/index#assembly-cluster-subscriptions) in the {{ cluster_manager }} documentation.

        :::note

        You must have the required resource quota for the **Annual** subscription type to be available. For more information, contact your sales representative or Red Hat support.
        
        :::

    1.  Select the **Red Hat cloud account** infrastructure type to deploy {{ product_title }} in a cloud provider account that is owned by Red Hat.
    1.  Click **Next**.
1.  Select **Run on {{ gcp_full }}** and click **Next**.
1.  On the **Cluster details** page, provide a name for your cluster and specify the cluster details:
    1.  Add a **Cluster name**.
    1.  Optional: Cluster creation generates a domain prefix as a subdomain for your provisioned cluster on `openshiftapps.com`. If the cluster name is less than or equal to 15 characters, that name is used for the domain prefix. If the cluster name is longer than 15 characters, the domain prefix is randomly generated as a 15-character string.

        To customize the subdomain, select the **Create custom domain prefix** checkbox, and enter your domain prefix name in the **Domain prefix** field. The domain prefix cannot be longer than 15 characters, must be unique within your organization, and cannot be changed after cluster creation.
    1.  Select a cluster version from the **Version** drop-down menu.
    1.  Select a channel from the **Channel** drop-down menu.
{% include "./snippets/rosa-osd-channel-group-options.md" %}
    1.  Select a cloud provider region from the **Region** drop-down menu.
    1.  Select a **Single zone** or **Multi-zone** configuration.
    1.  Select a **Persistent storage** capacity for the cluster. For more information, see the _Storage_ section in the {{ product_title }} service definition.
    1.  Specify the number of **Load balancers** that you require for your cluster. For more information, see the _Load balancers_ section in the {{ product_title }} service definition.
    1.  Optional: Select **Enable Secure Boot support for Shielded VMs** to use Shielded VMs when installing your cluster. Once you create your cluster, the **Enable Secure Boot support for Shielded VMs** setting cannot be changed. For more information, see [Shielded VMs](https://cloud.google.com/security/products/shielded-vm).

        :::important

        To successfully create a cluster, you must select **Enable Secure Boot support for Shielded VMs** if your organization has the policy constraint `constraints/compute.requireShieldedVm` enabled. For more information regarding {{ gcp_short }} organizational policy constraints, see [Organization policy constraints](https://cloud.google.com/resource-manager/docs/organization-policy/org-policy-constraints).
        
        :::


        :::important

        **Enable Secure Boot support for Shielded VMs** is not supported for {{ product_title }} on {{ GCP }} clusters created using bare-metal instance types. For more information, see [Limitations](https://cloud.google.com/compute/shielded-vm/docs/shielded-vm#limitations) in the {{ gcp_full }} documentation.
        
        :::

    1.  Leave **Enable user workload monitoring** selected to monitor your own projects in isolation from Red Hat Site Reliability Engineer (SRE) platform metrics. This option is enabled by default.
1.  Optional: Expand **Advanced Encryption** to make changes to encryption settings.
    1.  Optional: Select **Enable FIPS cryptography** if you require your cluster to be FIPS validated.

        :::note

        If **Enable FIPS cryptography** is selected, **Enable additional etcd encryption** is enabled by default and cannot be disabled. You can select **Enable additional etcd encryption** without selecting **Enable FIPS cryptography**.
        
        :::

    1.  Optional: Select **Enable additional etcd encryption** if you require etcd key value encryption. With this option, the etcd key values are encrypted, but not the keys. This option is in addition to the control plane storage encryption that encrypts the etcd volumes in {{ product_title }} clusters by default.

        :::note

        By enabling etcd encryption for the key values in etcd, you increase the performance impact on your workloads by about 20%. This increase is a result of introducing this second layer of encryption, in addition to the default control plane storage encryption that encrypts the etcd volumes. Consider enabling etcd encryption only if you specifically require it for your use case.
        
        :::

    1.  Click **Next**.
1.  On the **Default machine pool** page, select a **Compute node instance type** and a **Compute node count**. The number and types of nodes that are available depend on your {{ product_title }} subscription. If you are using multiple availability zones, the compute node count is per zone.

    :::note

    After your cluster is created, you can change the number of compute nodes, but you cannot change the compute node instance type in a machine pool. For clusters that use the CCS model, you can add machine pools after installation that use a different instance type. The number and types of nodes available to you depend on your {{ product_title }} subscription.
    
    :::

1.  Optional: Expand **Edit node labels** to add labels to your nodes. Click **Add label** to add more node labels and select **Next**.
1.  In the **Cluster privacy** dialog, select **Public** or **Private** to use either public or private API endpoints and application routes for your cluster.
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

        For more information about custom application ingress settings, click the information icon provided for each setting.
1.  Click **Next**.
1.  In the **CIDR ranges** dialog, configure custom classless inter-domain routing (CIDR) ranges or use the defaults that are provided.

    :::important

    CIDR configurations cannot be changed later. Confirm your selections with your network administrator before proceeding.

    If the cluster privacy is set to **Private**, you cannot access your cluster until you configure private connections in your cloud provider.
    
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

        If there are critical security concerns that significantly impact the security or stability of a cluster, Red Hat Site Reliability Engineering (SRE) might schedule automatic updates to the latest z-stream version that is not impacted. The updates are applied within 48 hours after customer notifications are provided. For a description of the critical impact security rating, see [Understanding Red Hat security ratings](https://access.redhat.com/security/updates/classification).
        
        :::

1.  Review the summary of your selections and click **Create cluster** to start the cluster installation. The installation takes approximately 30-40 minutes to complete.
1.  Optional: On the **Overview** tab, you can enable the delete protection feature by selecting **Enable**, which is located directly under **Delete Protection: Disabled**. This will prevent your cluster from being deleted. To disable delete protection, select **Disable**.
By default, clusters are created with the delete protection feature disabled.

**Verification**

*   You can monitor the progress of the installation in the **Overview** page for your cluster. You can view the installation logs on the same page. Your cluster is ready when the **Status** in the **Details** section of the page is listed as **Ready**.


:::important

If your cluster deployment fails during installation, certain resources created during the installation process are not automatically removed from your {{ GCP }} account. To remove these resources from your {{ gcp_short }} account, you must delete the failed cluster.

:::