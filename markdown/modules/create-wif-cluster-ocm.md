{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a Workload Identity Federation cluster using {{ cluster_manager }} {id="create-wif-cluster-ocm_{{ context }}"}

Follow the steps in this procedure to create an {{ product_title }} cluster on {{ gcp_full }} using Workload Identity Federation (WIF) for authentication through the {{ cluster_manager }} web console {._abstract}

**Prerequisites**

*   You have created a WIF configuration. For more information, see "Creating a Workload Identity Federation configuration".
*   You have access to the {{ cluster_manager }} web console. For more information, see _Accessing {{ cluster_manager }}_ in the _Additional resources_ section.

**Procedure**

1.  Log in to {{ cluster_manager_url }} and click **Create cluster** on the {{ product_title }} card.
1.  Under **Billing model**, configure the subscription type and infrastructure type.
    1.  Select a subscription type. For information about {{ product_title }} subscription options, see [Cluster subscriptions and registration](https://access.redhat.com/documentation/en-us/openshift_cluster_manager/1-latest/html-single/managing_clusters/index#assembly-cluster-subscriptions) in the {{ cluster_manager }} documentation.
    1.  Select the **Customer cloud subscription** infrastructure type.
    1.  Click **Next**.
1.  Select **Run on {{ gcp_full }}**.
1.  Select **Workload Identity Federation** as the Authentication type.

    :::note

    Workload Identity Federation (WIF) is {{ gcp_full }}'s recommended method of authentication for {{ product_title }} installation. It greatly improves a cluster’s resilience by using short-lived, least-privilege credentials and eliminates the need for static service account keys.
    
    :::

    1.  Read and complete all the required prerequisites.
    1.  Click the checkbox indicating that you have read and completed all the required prerequisites.
1.  Select a configured WIF configuration from the **WIF configuration** drop-down list.
1.  Click **Next**.
1.  On the **Details** page, provide a name for your cluster and specify the cluster details:
    1.  In the **Cluster name** field, enter a name for your cluster.
    1.  Optional: Cluster creation generates a domain prefix as a subdomain for your provisioned cluster on `openshiftapps.com`. If the cluster name is less than or equal to 15 characters, that name is used for the domain prefix. If the cluster name is longer than 15 characters, the domain prefix is randomly generated as a 15-character string.

        To customize the subdomain prefix, select the **Create custom domain prefix** checkbox, and enter your domain prefix name in the **Domain prefix** field. The domain prefix cannot be longer than 15 characters, must be unique within your organization, and cannot be changed after cluster creation. If you plan to install the cluster into a Shared VPC and select a managed DNS zone in a later step, the **DNS Zone** list is filtered to show only zones that begin with this domain prefix; ensure the prefix matches the managed DNS zones you have created or intend to use.
    1.  Select a cluster version from the **Version** drop-down menu.

        :::note

        Workload Identity Federation (WIF) is only supported on {{ product_title }} version 4.17 and later.
        
        :::

    1.  Select a channel from the **Channel** drop-down menu.
{% include "./snippets/rosa-osd-channel-group-options.md" %}
    1.  Select a cloud provider region from the **Region** drop-down menu.
    1.  Select a **Single zone** or **Multi-zone** configuration.
    1.  Optional: Select **Enable Secure Boot support for Shielded VMs** to use Shielded VMs when installing your cluster. Once you create your cluster, the **Enable Secure Boot support for Shielded VMs** setting cannot be changed. For more information, see [Shielded VMs](https://cloud.google.com/security/products/shielded-vm).

        :::important

        To successfully create a cluster, you must select **Enable Secure Boot support for Shielded VMs** if your organization has the policy constraint `constraints/compute.requireShieldedVm` enabled. For more information regarding {{ gcp_short }} organizational policy constraints, see [Organization policy constraints](https://cloud.google.com/resource-manager/docs/organization-policy/org-policy-constraints).
        
        :::


        :::important

        **Enable Secure Boot support for Shielded VMs** is not supported for {{ product_title }} on {{ GCP }} clusters created using bare-metal instance types. For more information, see [Limitations](https://cloud.google.com/compute/shielded-vm/docs/shielded-vm#limitations) in the {{ gcp_full }} documentation.
        
        :::

    1.  Leave **Enable user workload monitoring** selected to monitor your own projects in isolation from Red Hat Site Reliability Engineer (SRE) platform metrics. This option is enabled by default.
1.  Optional: Expand **Advanced Encryption** to make changes to encryption settings.
    1.  Select **Use custom KMS keys** to use custom KMS keys. If you prefer not to use custom KMS keys, leave the default setting **Use default KMS Keys**.
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

        By enabling etcd encryption for the key values in etcd, you incur a performance overhead of approximately 20%. The overhead is a result of introducing this second layer of encryption, in addition to the default control plane storage encryption that encrypts the etcd volumes. Consider enabling etcd encryption only if you specifically require it for your use case.
        
        :::

1.  Click **Next**.
1.  On the **Machine pool** page, select a **Compute node instance type** and a **Compute node count**. The number and types of nodes that are available depend on your {{ product_title }} subscription. If you are using multiple availability zones, the compute node count is per zone.
1.  Optional: Expand **Add node labels** to add labels to your nodes. Click **Add additional label** to add more node labels.

    :::important

    This step refers to labels within Kubernetes, not {{ gcp_full }}. For more information regarding Kubernetes labels, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/).
    
    :::

1.  Click **Next**.
1.  In the **Cluster privacy** dialog, select **Public** or **Private** to use either public or private API endpoints and application routes for your cluster. If you select **Private**, **Use Private Service Connect** is selected by default, and cannot be disabled. Private Service Connect (PSC) is {{ gcp_full }}’s security-enhanced networking feature.
1.  Optional: To install the cluster in an existing {{ gcp_short }} Virtual Private Cloud (VPC):
    1.  Select **Install into an existing VPC**.

        :::important

        Private Service Connect is supported only with **Install into an existing VPC**.
        
        :::

    1.  If you are installing into an existing VPC and you want to enable an HTTP or HTTPS proxy for your cluster, select **Configure a cluster-wide proxy**.
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
1.  Optional: To install the cluster into a {{ gcp_short }} Shared VPC, follow these steps.
{% include "./snippets/snip_install-cluster-in-vpc.md" %}
    1.  Select **Install into {{ gcp_short }} Shared VPC**.
    1.  Specify the **Host project ID**. If the specified host project ID is incorrect, cluster creation fails.

        :::note

        In a typical Shared VPC deployment, the following {{ gcp_short }} roles are required on the project hosting the VPC:

        *   `roles/compute.networkAdmin`
        *   `roles/compute.securityAdmin`
        *   `roles/dns.admin`

        If you use a managed DNS zone (by selecting a zone from the **DNS Zone** list), the `roles/dns.admin` role is not required on the host project.
        
        :::

    1.  Optional. To use a pre-created DNS zone and reduce host project permissions, complete the following actions:
        1.  View the provided CLI command instructions to create a zone if you have not already done so. For more information about creating a DNS zone using the ocm CLI, see _Creating a managed DNS zone_ in the _Additional resources_ section.
        1.  Click the ***Refresh*** button to update the list of available zones.
        1.  Select your preferred zone from the ***DNS Zone*** list. The list displays the zone ID alongside the {{ GCP }} project and managed zone ID for easy identification.

            :::note

            A custom domain prefix must be specified on a previous step  on the **Details** page before zones appear in the **DNS Zone** list. The **DNS Zone** list is filtered to show only zones that begin with the domain prefix you specified. The list may be empty if no matching DNS zones exist, or if the domain prefix was entered incorrectly. If the list is empty, verify your domain prefix and ensure you have created a managed DNS zone with a matching prefix.
            
            :::


            If no zone is selected, the installer will attempt to create one automatically, which requires higher-level permissions in the host project.
1.  If you opted to install the cluster in an existing {{ GCP }} VPC, provide your VPC subnet settings and select **Next**. You must ensure that your VPC is configured to allow outbound internet access to the domains required for the {{ product_title }} service. This outbound access is required for the {{ product_title }} service to communicate with Red&#160;Hat’s management plane and SRE tooling via secure and encrypted endpoints over the public internet.

    :::note

    If you are installing a cluster into a Shared VPC, the VPC name and subnets are shared from the host project.
    
    :::

1.  Click **Next**.
1.  If you opted to configure a cluster-wide proxy, provide your proxy configuration details on the **Cluster-wide proxy** page:
    1.  Enter a value in at least one of the following fields:
        *   Specify a valid **HTTP proxy URL**.
        *   Specify a valid **HTTPS proxy URL**.
        *   In the **Additional trust bundle** field, provide a PEM encoded X.509 certificate bundle. The bundle is added to the trusted certificate store for the cluster nodes. An additional trust bundle file is required if you use a TLS-inspecting proxy unless the identity certificate for the proxy is signed by an authority from the {{ op_system_first }} trust bundle. This requirement applies regardless of whether the proxy is transparent or requires explicit configuration using the `http-proxy` and `https-proxy` arguments.
    1.  Click **Next**.

        For more information about configuring a proxy with {{ product_title }}, see _Configuring a cluster-wide proxy_.
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

            You can review the end-of-life dates in the update lifecycle documentation for {{ product_title }}. For more information, see [OpenShift Dedicated update life cycle](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/introduction_to_openshift_dedicated/policies-and-service-definition#osd-life-cycle).
            
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

**Verification**

*   You can monitor the progress of the installation in the **Overview** page for your cluster. You can view the installation logs on the same page. Your cluster is ready when the **Status** in the **Details** section of the page is listed as **Ready**.


:::important

If your cluster deployment fails during installation, certain resources created during the installation process are not automatically removed from your {{ GCP }} account. To remove these resources from your {{ gcp_short }} account, you must delete the failed cluster.

:::

{%- if context == "osd-creating-a-cluster-on-aws" %}
{%- set osd_on_aws = false -%}
{% endif %}
{% if context == "osd-creating-a-cluster-on-gcp" %}
{%- set osd_on_gcp = false -%}
{% endif %}