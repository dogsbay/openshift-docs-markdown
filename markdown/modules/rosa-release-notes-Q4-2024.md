{%- set _mod_docs_content_type = "REFERENCE" %}
# Q4 2024 {id="rosa-q4-2024_{{ context }}"}

The following items were added during the fourth quarter of 2024. {._abstract}

{% if openshift_rosa %}

Learning tutorials for {{ product_title }} cluster and application deployment
:   You can now use the [Getting started with {{ product_title }}](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/tutorials/index#cloud-experts-getting-started-choose-deployment-method) tutorials to quickly deploy a {{ product_title }} cluster for demo or learning purposes. You can also use the [Deploying an application](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/tutorials/index#cloud-experts-deploying-application-intro) tutorials to deploy an application on your demo cluster.
{% endif %}


Create a VPC using the ROSA CLI
:   The `rosa create network` command lets you use the ROSA CLI to create a VPC for your cluster based on an AWS CloudFormation template. You can use this command to create and configure a VPC before creating your cluster.
{%- if openshift_rosa %}
    For more information, see [create network](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/cli_tools/index#rosa-create-network_rosa-managing-objects-cli).
{% endif %}
{% if openshift_rosa_hcp %}
    For more information, see [create network](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/cli_tools/index#rosa-create-network_rosa-managing-objects-cli).
{% endif %}

{% if openshift_rosa_hcp %}

Create additional security groups in {{ product_title }} clusters
:   Starting with ROSA CLI version 1.2.47, you can now create additional security groups using the ROSA CLI when creating {{ product_title }} clusters. Note that additional security group IDs attached to the machine pool cannot be modified. To remove or add more security group IDs, replace the entire machine pool with a new one.
{% endif %}


ROSA CLI update
:   The ROSA CLI (`rosa`) was updated to a new version. For information about what has changed in this release, see the [ROSA CLI release notes](https://github.com/openshift/rosa/releases/). For more information about the ROSA CLI (`rosa`), see
{%- if openshift_rosa_hcp %}
    [About the ROSA CLI](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/cli_tools/index#rosa-about_rosa-getting-started-cli).
{% endif %}
{% if openshift_rosa %}
    [About the ROSA CLI](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/cli_tools/index#rosa-about_rosa-getting-started-cli).
{% endif %}

{% if openshift_rosa_hcp %}

`VolumeDetachTimeout` configuration applied to machine pools for {{ product_title }}
:   {{ product_title }} is applying a `VolumeDetachTimeout` configuration of 5 minutes to all machine pools. This prevents issues with node deletion when volumes fail to detach.


Configure machine pool disk volume for {{ product_title }} clusters
:   You can now configure the disk volume size for machine pools in {{ product_title }} clusters. The default disk size is 300 GiB, and you can configure it from a minimum of 75 GiB to a maximum of 16,384 GiB. For more information, see [Configuring machine pool disk volume](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/cluster_administration/#configuring-machine-pool-disk-volume_rosa-managing-worker-nodes).


Edit the billing account for existing {{ product_title }} clusters
:   You can now update the billing account associated with your {{ product_title }} clusters after cluster creation. For more information, see [Updating billing accounts for OpenShift Service on AWS Hosted Control Planes clusters](https://docs.redhat.com/en/documentation/openshift_cluster_manager/1-latest/html-single/managing_clusters/index#proc_updating-billing-accts-rosa-hcp_assembly-managing-clusters).
{% endif %}