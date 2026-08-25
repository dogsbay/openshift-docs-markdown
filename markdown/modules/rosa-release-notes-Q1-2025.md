{%- set _mod_docs_content_type = "REFERENCE" %}
# Q1 2025 {id="rosa-q1-2025_{{ context }}"}

The following items were added during the first quarter of 2025. {._abstract}

{% if openshift_rosa_hcp %}

Cluster autoscaling is now available for {{ product_title }}
:   You can configure cluster autoscaling for {{ product_title }}. For more information, see [Cluster autoscaling](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html/cluster_administration/rosa-cluster-autoscaling-hcp#cluster-autoscaler-about_rosa-cluster-autoscaling-hcp).
{% endif %}

{% if openshift_rosa %}

{{ product_title }} region added
:   {{ product_title }} is now available in the following regions:

    *   Tel Aviv (`il-central-1`)
    *   Calgary (`ca-west-1`)


    For more information on region availabilities, see [Regions and availability zones](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/introduction_to_rosa/index#rosa-sdpolicy-regions-az_rosa-service-definition).
{% endif %}

{% if openshift_rosa_hcp %}

{{ product_title }} region added
:   {{ product_title }} is now available in the following regions:

    *   Malaysia (`ap-southeast-5`)
    *   Tel Aviv (`il-central-1`)
    *   Calgary (`ca-west-1`)


    For more information on region availabilities, see [Regions and availability zones](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/introduction_to_rosa/index#rosa-sdpolicy-regions-az_rosa-hcp-service-definition).
{% endif %}

{% if openshift_rosa %}

Cluster autoscaling is now available for {{ product_title }}
:   You can configure cluster autoscaling for {{ product_title }}. For more information, see [Cluster autoscaling](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/cluster_administration/index#rosa-cluster-autoscaling).


New version of {{ product_title }} available
:   {{ product_title }} version 4.18 is now available. For more information about upgrading to this latest version, see [Upgrading {{ product_title }} clusters](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/upgrading/index#rosa-upgrading-sts).
{% endif %}

{% if openshift_rosa_hcp %}

New version of {{ product_title }} available
:   {{ product_title }} version 4.18 is now available. For more information about upgrading to this latest version, see [Upgrading {{ product_title }} clusters](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/upgrading/index#rosa-hcp-upgrading).
{% endif %}


Graphical installer enhancements
:   You can now use the graphical installer in {{ hybrid_console }} to configure the following options when you create your cluster:

    *   Configure a `cluster-admin` user and optionally define a custom password.
    *   Configure the root disk size for the default machine pool.

{% if openshift_rosa_hcp %}

Image configuration is now available for {{ product_title }}
:   You can configure registries within a cluster to exclude some registries or allow only a defined list. It also allows to expose additional trusted bundle for registries to pull from. For more information, see [Image configuration resources for {{ product_title }}](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/images/index#images-configuration-parameters-hcp_image-configuration-hcp).
{% endif %}

{% if openshift_rosa %}

{{ product_title }} cluster node limit update
:   {{ product_title }} clusters versions 4.14.14 and greater can now scale to 249 worker nodes. This is an increase from the previous limit of 180 nodes.


Red&#160;Hat SRE log-based alerting endpoints have been updated
:   {{ product_title }} customers who are using a firewall to control egress traffic can now remove all references to `*.osdsecuritylogs.splunkcloud.com:9997` from your firewall allowlist. {{ product_title }} clusters still require the `http-inputs-osdsecuritylogs.splunkcloud.com:443` log-based alerting endpoint to be accessible from the cluster.
{% endif %}

{% if openshift_rosa_hcp %}

{{ product_title }} now creates independent security groups for the AWS PrivateLink endpoint and worker nodes
:   {{ product_title }} clusters version 4.17.2 and greater can now add additional AWS security groups to the AWS PrivateLink endpoint to allow additional ingress traffic to the cluster’s API. For more information, see [Adding additional AWS security groups to the AWS PrivateLink endpoint](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/install_clusters/index#rosa-hcp-aws-private-security-groups_rosa-hcp-aws-private-creating-cluster).


Egress zero is now generally available on {{ product_title }} clusters
:   You can create a fully operational cluster that does not require a public egress by configuring a virtual private cloud (VPC) and using the `--properties zero_egress:true` flag when creating your cluster. For more information, see [Creating a {{ egress_zero_title }}](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/install_clusters/index#rosa-hcp-egress-zero-install).
{% endif %}