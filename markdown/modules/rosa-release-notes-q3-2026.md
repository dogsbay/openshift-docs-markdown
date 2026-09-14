{%- set _mod_docs_content_type = "REFERENCE" %}
# Q3 2026 {id="rosa-q3-2026_{{ context }}"}

The following items were added during the third quarter of 2026. {._abstract}


Cluster deletion protection
:   You can enable deletion protection when creating {{ product_title }} clusters using the {{ rosa_cli }} or Terraform to prevent accidental deletion. For more information, see the following documentation:

{% if openshift_rosa_hcp %}
*   [Creating a cluster using the CLI](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html/install_clusters/rosa-hcp-sts-creating-a-cluster-quickly#rosa-hcp-sts-creating-a-cluster-cli_rosa-hcp-sts-creating-a-cluster-quickly)
*   [Creating a default cluster using Terraform](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html/install_clusters/creating-a-red-hat-openshift-service-on-aws-cluster-with-terraform#rosa-hcp-terraform-cluster-creation-overview_rosa-hcp-creating-a-cluster-quickly-terraform)
{% endif %}
{% if openshift_rosa %}
*   [Creating a cluster using customizations](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/install_rosa_classic_clusters/index#rosa-sts-creating-a-cluster-with-customizations)
*   [Creating a cluster with Terraform](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/install_rosa_classic_clusters/index#creating-a-red-hat-openshift-service-on-aws-classic-architecture-cluster-with-terraform)
{% endif %}

{% if openshift_rosa_hcp %}

Disaster recovery policies are updated
:   A new backup and recovery strategy for the {{ product_title }} cluster control planes is implemented, minimizing cluster risk from disaster events. For more information, see [Disaster recovery](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/introduction_to_rosa/index#rosa-policy-disaster-recovery_rosa-policy-responsibility-matrix).


Spot instances are supported
:   AWS Spot instances are supported for {{ product_title }} clusters. This option can minimize compute costs by using spare EC2 instances and Spot market options in a cluster. Both simple mode and enhanced mode for graceful termination handling are supported. For more information, see the following documentation:
    *   [Configure AWS Spot instances for {{ product_title }} using the CLI](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html/install_clusters/rosa-hcp-config-aws-spot-instances-cli)
    *   [Configure AWS Spot instances for {{ product_title }} with Terraform](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html/install_clusters/creating-a-red-hat-openshift-service-on-aws-cluster-with-terraform#rosa-hcp-config-aws-spot-instances-terraform)
{% endif %}