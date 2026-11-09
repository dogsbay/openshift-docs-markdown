{%- set _mod_docs_content_type = "REFERENCE" %}
# Q4 2026 {id="rosa-q4-2026_{{ context }}"}

The following items were added during the fourth quarter of 2026. {._abstract}

{% if openshift_rosa_hcp %}

AWS resource tagging improvements
:   You can include spaces in AWS tag keys and values. In addition, when the same AWS tag key is defined at both the cluster and machine pool levels, the machine pool tag value takes precedence over the cluster tag value. For more information, see [Adding tags to a machine pool](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html/cluster_administration/managing-compute-nodes-using-machine-pools#rosa-adding-tags_rosa-managing-worker-nodes).


Edit AWS tags after cluster creation
:   With {{ rosa_cli }} 1.2.68 and later, you can edit AWS resource tags on existing {{ product_title }} clusters that run version 4.20.0 and later. You can add, update, and remove custom tags on both clusters and machine pools by using the `--tags` option with the `rosa edit cluster` and `rosa edit machinepool` commands. For more information, see [Manage AWS resource tags](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html/cluster_administration/manage-aws-resource-tags).


BGP routing for OpenShift Virtualization on AWS
:   Border Gateway Protocol (BGP) Cloud Connector integrates {{ product_title }} with {{ aws_short }} Route Server allowing direct, routed connectivity to {{ VirtProductName }} virtual machines (VMs) on {{ aws_short }}. For more information, see the following documentation:

    *   [About BGP routing for {{ product_title }}](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/advanced_networking/index#about-bgp-routing)
{% endif %}


{{ hcp_capital }} is the default in interactive cluster creation
:   With {{ rosa_cli }} 1.2.66 and later, when you run the `rosa create cluster` command in interactive mode without specifying the `--hosted-cp` option, the `Deploy cluster with Hosted Control Plane` prompt defaults to `Yes`. To create a {{ rosa_classic_title }} cluster interactively, answer `No` at this prompt or specify the `--hosted-cp=false` option.

    Non-interactive cluster creation is unchanged.
{%- if openshift_rosa %}

    For more information, see [Interactive cluster creation mode reference](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/install_rosa_classic_clusters/index#rosa-sts-interactive-mode-reference).
{%- endif %}

{% if openshift_rosa %}

The {{ rosa_cli }} uses AWS STS by default without prompting
:   With {{ rosa_cli }} 1.2.66 and later, the `--sts` option for the `rosa create cluster` command defaults to `true`, and the interactive `Deploy cluster using AWS STS` prompt is removed. To create a cluster that uses IAM user credentials instead, you must explicitly specify the `--non-sts` or `--mint-mode` option.
{% endif %}

{% if openshift_rosa %}

AWS EC2 IMDSv2 is required by default
:   New {{ product_title }} clusters default to requiring AWS EC2 Instance Metadata Service Version 2 (IMDSv2), whether you create them by using {{ cluster_manager }}, the {{ rosa_cli }}, Terraform, or the API. You can configure this setting at cluster creation. Existing clusters are unaffected. For more information, see [Default cluster specifications](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/install_rosa_classic_clusters/index#rosa-sts-overview-of-the-default-cluster-specifications_rosa-sts-creating-a-cluster-quickly).
{% endif %}

{% if openshift_rosa_hcp %}

AWS EC2 IMDSv2 is required by default
:   New {{ product_title }} clusters and machine pools default to requiring AWS EC2 Instance Metadata Service Version 2 (IMDSv2), whether you create them by using {{ cluster_manager }}, the {{ rosa_cli }}, Terraform, or the API. You can configure this setting at cluster creation or when creating machine pools. Existing clusters and machine pools are unaffected. For more information, see [Default cluster specifications](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html/install_clusters/rosa-hcp-sts-creating-a-cluster-quickly#rosa-sts-overview-of-the-default-cluster-specifications_rosa-hcp-sts-creating-a-cluster-quickly).
{% endif %}


Configure cluster notification contacts by using the {{ rosa_cli }} or Terraform
:   With {{ rosa_cli }} 1.2.66 and later, you can specify additional {{ cluster_manager }} account usernames or email addresses to receive cluster notification emails by using the `--notification-contacts` option. This feature is also available in version 1.7.10 and later of the Red&#160;Hat Cloud Services Terraform provider. For more information, see
{%- if openshift_rosa %}
    [Manage notification contacts by using the {{ rosa_cli_title }}](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html/cluster_administration/rosa-cluster-notifications#rosa-manage-notification-contacts-cli_rosa-cluster-notifications)
{%- endif %}
{%- if openshift_rosa_hcp %}
    [Manage notification contacts by using the {{ rosa_cli_title }}](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html/cluster_administration/rosa-cluster-notifications#rosa-manage-notification-contacts-cli_rosa-cluster-notifications)
{%- endif %}
    and [rhcs_cluster_notification_contacts](https://registry.terraform.io/providers/terraform-redhat/rhcs/latest/docs/resources/cluster_notification_contacts) in the Terraform Registry.

{% if openshift_rosa_hcp %}

New version of {{ product_title }} available
:   {{ product_title }} version 5.0 is available for new clusters. For more information, see [{{ OCP }} 5.0 release notes](https://docs.redhat.com/en/documentation/openshift_container_platform/5.0/html/release_notes/ocp-5-0-release-notes).
{% endif %}