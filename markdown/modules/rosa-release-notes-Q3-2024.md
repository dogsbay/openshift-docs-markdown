{%- set _mod_docs_content_type = "REFERENCE" %}
# Q3 2024 {id="rosa-q3-2024_{{ context }}"}

The following items were added during the third quarter of 2024. {._abstract}

{% if openshift_rosa_hcp %}

{{ product_title }} multi-architecture cluster update
:   {{ product_title }} clusters created before 25 July, 2024 will migrate to a multi-architecture image on their next upgrade allowing you to use {{ AWS }} Arm-based Graviton instance types for your workloads. For more information, see [Upgrading {{ hcp_title }} clusters](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/upgrading/index#rosa-upgrade-options_rosa-hcp-upgrading).


{{ product_title }} cluster node limit update
:   {{ product_title }} clusters can now scale to 500 worker nodes. This is an increase from the previous limit of 250 nodes. The 250 node limit is an increase from the previous limit 90 nodes on 26 August, 2024.


IMDSv2 support in {{ product_title }}
:   You can now enforce the use of the IMDSv2 endpoint for default machine pool worker nodes on new {{ product_title }} clusters and for new machine pools on existing clusters. For more information, see [Creating a default {{ product_title }} cluster using Terraform](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/install_clusters/#rosa-hcp-creating-a-cluster-quickly-terraform).


Upgrade multiple nodes simultaneously
:   You can now configure a machine pool to upgrade multiple nodes simultaneously. Two new machine pool parameters, `max-surge` and `max-unavailable`, give you greater control over how machine pool upgrades occur. For more information, see [Upgrading {{ product_title }} clusters](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/upgrading/index#rosa-hcp-upgrading).


{{ product_title }} Graviton Arm-based instance types
:   You can now use {{ AWS }} Arm-based Graviton instance types for your workloads in {{ product_title }} clusters created after 24 July, 2024. For more information, see [AWS Graviton Arm-based instance types](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/introduction_to_rosa/index#rosa-sdpolicy-aws-instance-types-graviton_rosa-hcp-instance-types).
{% endif %}


ROSA CLI update
:   The ROSA CLI (`rosa`) was updated to a new version. For information about what has changed in this release, see the [ROSA CLI release notes](https://github.com/openshift/rosa/releases/tag/v1.2.42). For more information about the ROSA CLI (`rosa`), see
{%- if openshift_rosa %}
    [About the ROSA CLI](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/cli_tools/index#rosa-about_rosa-getting-started-cli).
{%- endif %}
{%- if openshift_rosa_hcp %}
    [About the ROSA CLI](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/cli_tools/index#rosa-about_rosa-getting-started-cli).
{%- endif %}