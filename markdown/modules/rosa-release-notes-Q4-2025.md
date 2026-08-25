{%- set _mod_docs_content_type = "REFERENCE" %}
# Q4 2025 {id="rosa-q4-2025_{{ context }}"}

The following items were added during the fourth quarter of 2025. {._abstract}


AWS GovCloud
:   The Amazon Web Services (AWS) GovCloud service is now available for federal and government agencies. Commercial organizations and Federal Information Security Modernization Act (FISMA) R&D Universities may also use the service if they support a current government contract or are in the process of bidding on a government contract such as a request for proposal (RFP) or request for information (RFI) pre-bid stage. For more information, see
{%- if openshift_rosa_hcp %}
    [Getting started with ROSA GovCloud](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/getting_started_with_red_hat_openshift_service_on_aws_in_aws_govcloud).
{%- endif %}
{%- if openshift_rosa %}
    [Getting started with ROSA GovCloud](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/getting_started_with_red_hat_openshift_service_on_aws_in_aws_govcloud).
{%- endif %}


New version of {{ product_title }} available
:   {{ product_title }} version 4.20 is available for new clusters.

{% if openshift_rosa_hcp %}

On-Demand Capacity Reservations and Capacity Blocks for ML are supported
:   With this update, you can use pre-purchased Capacity Reservations when creating new machine pools on {{ product_title }} clusters. For more information, see [Managing compute nodes](https://docs.redhat.com/documentation/red_hat_openshift_service_on_aws/4/html-single/cluster_administration/index#rosa-managing-worker-nodes).


ImageDigestMirrorSets (IDMS) is supported
:   {{ product_title }} adds support for ImageDigestMirrorSets (IDMS), enabling clusters to redirect image pulls to a private, mirrored registry. This critical enhancement means customers in restricted networks can host their own mirrors for third-party images while satisfying strict security and compliance requirements. For more information, see [Image registry mirroring for {{ product_title }}](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/images/index#images-registry-mirroring_image-configuration-hcp).


{{ product_title }} regions added
:   {{ product_title }} is available in the following regions:

    *   Mexico (`mx-central-1`)
    *   Thailand (`ap-southeast-7`)


    For more information on region availabilities, see [Regions and availability zones](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/introduction_to_rosa/index#rosa-sdpolicy-regions-az_rosa-hcp-service-definition).
{% endif %}


The EUS channel group is available
:   You can select the Extended Update Support (EUS) channel group when creating or editing your {{ product_title }} cluster. The EUS channel group allows you to extend the life cycle of your even-numbered version {{ product_title }} cluster, giving you additional time to plan and budget for future upgrades as well as providing continued security patches and critical bug fixes. For more information, see
{%- if openshift_rosa_hcp %}
    [Life cycle dates](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html/introduction_to_rosa/policies-and-service-definition#sd-life-cycle-dates_rosa-hcp-life-cycle).
{%- endif %}
{%- if openshift_rosa %}
    [Life cycle dates](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html/introduction_to_rosa/policies-and-service-definition#sd-life-cycle-dates_rosa-life-cycle).
{%- endif %}