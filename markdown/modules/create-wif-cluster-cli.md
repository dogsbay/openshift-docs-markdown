{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a Workload Identity Federation cluster using the {{ cluster_manager }} CLI {id="create-wif-cluster-cli_{{ context }}"}

You can create an {{ product_title }} on {{ GCP }} cluster with Workload Identity Federation (WIF) using the {{ cluster_manager }} CLI (`ocm`) in interactive or noninteractive mode. {._abstract}

**Prerequisites**

*   You have created a WIF configuration. For more information, see "Creating a Workload Identity Federation configuration".
*   You have downloaded the latest version of the {{ cluster_manager }} CLI (`ocm`) for your operating system from the [Downloads](https://console.redhat.com/openshift/downloads) page on {{ cluster_manager }}.

**Procedure**

1.  Create a WIF cluster using the `interactive` or the `non-interactive` mode.
    1.  In `interactive` mode, cluster attributes are displayed automatically as prompts during the creation of the cluster. Enter the values for those prompts based on specified requirements in the fields provided.
    1.  In `non-interactive` mode, specify the values for specific parameters within the command.
        *   Based on your mode preference, run one of the following commands to create an {{ product_title }} cluster on {{ gcp_short }} with WIF configuration:
            *   Create a cluster in interactive mode by running the following command:
                ```terminal
                $ ocm create cluster --interactive
                ```

                where:

                `--interactive`
                :   Specifies that the cluster is created in interactive mode. This mode prompts you to enter the required configuration options during cluster creation. If you do not include this parameter, the cluster is created in `non-interactive` mode by default.
            *   Create a cluster in noninteractive mode by running the following command.
            The following example is made up of optional and required parameters and might differ from your noninteractive mode command. Parameters not identified as optional are required. For additional details about these and other parameters, run the `ocm create cluster --help flag` command in your terminal window.
                ```terminal
                $ ocm create cluster <cluster_name> \
                --provider=gcp \
                --ccs=true \
                --wif-config <wif_name> \
                --dns-zone-id <dns_zone_id> \
                --region <gcp_region> \
                --subscription-type=marketplace-gcp \
                --marketplace-gcp-terms=true \
                --version <version> \
                --multi-az=true  \
                --enable-autoscaling=true \
                --min-replicas=3 \
                --max-replicas=6 \
                --secure-boot-for-shielded-vms=true
                --channel <channel_name>
                ```

                where:

                `<cluster_name>`
                :   Specifies the name of the cluster. Replace `<cluster_name>` with a name for your cluster.


`--provider=gcp`
:   Specifies the cloud provider for the cluster.


`--ccs=true`
:   Specifies that the cluster is a Customer Cloud Subscription (CCS) cluster.


`--wif-config <wif_name>`
:   Specifies the name of the WIF configuration to assign to the cluster. Replace `<wif_name>` with the name of your WIF configuration.


`--dns-zone-id <dns_zone_id>`
:   Optional. Specifies the DNS zone ID to use for the cluster. Replace `<dns_zone_id>` with the ID of your DNS zone. For more information about this parameter, see _Creating a managed DNS zone_ in the _Additional resources_ section.


`--region <gcp_region>`
:   Specifies the {{ GCP }} region where the new cluster will be deployed. Replace `<gcp_region>` with the required {{ GCP }} region.


`--subscription-type=marketplace-gcp`
:   Optional. Specifies the subscription billing model for the cluster.


`--marketplace-gcp-terms=true`
:   Confirms that you have accepted the {{ GCP }} Marketplace terms and agreements for the OpenShift Dedicated product listing. This parameter is required if you provided a value of `marketplace-gcp` for the `subscription-type` parameter.


`--version <version>`
:   Specifies the required {{ product_title }} version. This parameter is optional. However, if an {{ product_title }} version is specified, the version must also be supported by the assigned WIF configuration. If a version is specified that is not supported by the assigned WIF configuration, cluster creation will fail.
    If this occurs, update the assigned WIF configuration to the required version or create a new WIF configuration with the required version. If you do not specify a version, the cluster is created with the default version for the assigned WIF configuration.
                For more information about supported versions for WIF configurations, see "Creating a Workload Identity Federation configuration".


`--multi-az=true`
:   Specifies that the cluster is deployed to multiple data centers. This parameter is optional.


`--enable-autoscaling=true`
:   Enables autoscaling of compute nodes. This parameter is optional.


`--min-replicas=3`
:   Specifies the minimum number of compute nodes. This parameter is optional.


`--max-replicas=6`
:   Specifies the maximum number of compute nodes. This parameter is optional.


`--secure-boot-for-shielded-vms=true`
:   Enables Secure Boot, which allows the use of Shielded VMs in the {{ gcp_full }}. This parameter is optional.


`--channel <channel_name>`
:   Specifies the name of the channel you want to assign the cluster to. Channel options include `stable-4.y`, `fast-4.y`, and `eus-4.y`. Replace `<channel_name>` with the required channel. This parameter is optional.

**Verification**

        *   To verify that the cluster was created successfully, run the following command:
            ```terminal
            $ ocm get cluster <cluster_name>
            ```

            If the cluster was created successfully, the output displays the cluster state as `ready`.


            :::important

            If your cluster deployment fails during installation, certain resources created during the installation process are not automatically removed from your {{ GCP }} account. To remove these resources from your {{ gcp_short }} account, you must delete the failed cluster. For more information, see "Deleting an {{ product_title }} cluster on {{ GCP }}".
            
            :::