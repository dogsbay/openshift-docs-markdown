{%- set _mod_docs_content_type = "REFERENCE" %}
# Q2 2024 {id="rosa-q2-2024_{{ context }}"}

The following items were added during the second quarter of 2024. {._abstract}

{% if openshift_rosa_hcp %}

Approve additional principals for {{ product_title }} clusters
:   You can approve additional user-roles to connect to your cluster’s private API server endpoint. For more information, see [Additional principals on your {{ product_title }} cluster](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/install_clusters/index#rosa-additional-principals-overview_rosa-hcp-aws-private-creating-cluster).
{% endif %}


ROSA CLI update
:   The ROSA CLI (`rosa`) was updated to a new version. For information about what has changed in this release, see the [ROSA CLI release notes](https://github.com/openshift/rosa/releases/tag/v1.2.41). For more information about the ROSA CLI (`rosa`),
{%- if openshift_rosa %}
    see [About the ROSA CLI](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/cli_tools/#rosa-about_rosa-getting-started-cli).
{% endif %}
{% if openshift_rosa_hcp %}
    see [About the ROSA CLI](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/cli_tools/index#rosa-about_rosa-getting-started-cli).
{% endif %}


Approved Access for {{ product_title }} clusters
:   Red&#160;Hat Site Reliability Engineering (SRE) managing and proactively supporting {{ product_title }} clusters will typically not require elevated access to customer clusters as part of the normal operations. In the unlikely event should Red&#160;Hat SRE (Site Reliability Engineer) need elevated access, the _Approved Access_ functionality provides an interface for customers to review and _approve_ or _deny_ access requests.

    Elevated access requests to {{ product_title }} clusters and the corresponding cloud accounts can be created by Red&#160;Hat SRE either in response to a customer-initiated support ticket or in response to alerts received by a Red&#160;Hat SRE, as part of the standard incident response process. For more information,
{%- if openshift_rosa %}
    see [Approved Access](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/support/#approved-access).
{% endif %}
{% if openshift_rosa_hcp %}
    see [Approved Access](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/support/index#approved-access).
{% endif %}


`rosa` command enhancement
:   The `rosa describe` command has a new optional argument, `--get-role-policy-bindings`. This new argument allows users to view the policies attached to STS roles assigned to the selected cluster. For more information,
{%- if openshift_rosa %}
    see [describe cluster](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/cli_tools/index#rosa-describe-cluster_rosa-managing-objects-cli).
{% endif %}
{% if openshift_rosa_hcp %}
    see [describe cluster](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/cli_tools/index#rosa-describe-cluster_rosa-managing-objects-cli).
{% endif %}


Expanded customer-managed policy capabilities
:   You can now attach customer-managed policies to the IAM roles required to run {{ product_title }} clusters. Furthermore, these customer-managed policies, including the permissions attached to those policies, are not modified during cluster or role upgrades. For more information,
{%- if openshift_rosa %}
    see [Customer-managed policies](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/introduction_to_rosa/#rosa-aws-customer-managed-policies_rosa-sts-about-iam-resources).
{% endif %}
{% if openshift_rosa_hcp %}
    see [Customer-managed policies](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/introduction_to_rosa/index#rosa-aws-customer-managed-policies_rosa-sts-about-iam-resources).
{% endif %}

{% if openshift_rosa %}

Permission boundaries for the installer role policy
:   You can apply a policy as a _permissions boundary_ on the {{ product_title }} installer role. The combination of policy and boundary policy limits the maximum permissions for the Amazon Web Services(AWS) Identity and Access Management (IAM) entity role. {{ product_title }} includes a set of three prepared permission boundary policy files, with which you can restrict permissions for the installer role since changing the installer policy itself is not supported. For more information, see [Permission boundaries for the installer role](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/introduction_to_rosa/index#rosa-sts-aws-requirements-attaching-boundary-policy_rosa-sts-about-iam-resources).


Cluster delete protection
:   You can now enable the cluster delete protection option, which helps to prevent you from accidentally deleting a cluster. For more information on using the cluster delete protection option with the ROSA CLI, see [edit cluster](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/cli_tools/index#rosa-edit-cluster_rosa-managing-objects-cli). For more information on using the cluster delete protection option in the UI, see [Creating a cluster with the default options using OpenShift Cluster Manager](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/install_rosa_classic_clusters/index#rosa-sts-creating-a-cluster-using-defaults-ocm_rosa-sts-creating-a-cluster-quickly).
{% endif %}
{% if openshift_rosa_hcp %}

{{ product_title }} regions added
:   {{ product_title }} is now available in the following regions:

    *   Zurich (`eu-central-2`)
    *   Hong Kong (`ap-east-1`)
    *   Osaka (`ap-northeast-3`)
    *   Spain (`eu-south-2`)
    *   UAE (`me-central-1`)


    For more information on region availabilities, see [Regions and availability zones](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/introduction_to_rosa/index#rosa-sdpolicy-regions-az_rosa-hcp-service-definition).

    Added support for external authentication providers
    :   You can now create clusters configured with external authentication providers, such as Microsoft Entra ID and KeyCloak. For more information, see [Creating {{ product_title }} clusters with external authentication](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/install_clusters/index#rosa-hcp-sts-creating-a-cluster-ext-auth).
{% endif %}


Longer cluster names enhancement
    :   You can now specify a cluster name that is longer than 15 characters. For cluster names that are longer than 15 characters, you can customize the domain prefix for the cluster URL by using the `domain-prefix` flag in the ROSA CLI (`rosa`) or by selecting the ***Create custom domain prefix*** checkbox in the {{ hybrid_console }}. For more information,
{%- if openshift_rosa %}
    see [create cluster in Managing objects with the ROSA CLI](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/cli_tools/index#rosa-create-cluster-command_rosa-managing-objects-cli).
{% endif %}
{% if openshift_rosa_hcp %}
    see [create cluster in Managing objects with the ROSA CLI](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/cli_tools/index#rosa-create-cluster-command_rosa-managing-objects-cli).
{% endif %}

{% if openshift_rosa_hcp %}

Additional Security Groups for {{ product_title }}
    :   Starting with ROSA CLI version 1.2.37, you can now use the `--additional-security-group-ids <sec_group_id>` when creating machine pools on {{ hcp_title }} clusters. For more information, see [Creating a machine pool using the ROSA CLI](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/cluster_administration/index#creating_machine_pools_cli_rosa-managing-worker-nodes) and the [create machinepool](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/cli_tools/index#rosa-create-machinepool_rosa-managing-objects-cli) section of the ROSA CLI reference.
{% endif %}


Node management improvements
    :   Now, you can perform specific tasks to make clusters more efficient. You can cordon, uncordon, and drain a specific node. For more information,
{%- if openshift_rosa %}
    see [Working with nodes](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/nodes/#working-with-nodes).
{% endif %}
{% if openshift_rosa_hcp %}
    see [Working with nodes](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/nodes/#working-with-nodes).
{% endif %}

{% if openshift_rosa_hcp %}

Node drain grace periods
    :   You can now configure node drain grace periods in {{ hcp_title }} clusters with the `rosa` CLI.
    For more information about configuring node drain grace periods, see [Configuring node drain grace periods in {{ product_title }}](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/cluster_administration/index#rosa-node-drain-grace-period_rosa-managing-worker-nodes).
{% endif %}