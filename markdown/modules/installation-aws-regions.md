{%- set _mod_docs_content_type = "REFERENCE" %}
# Supported {{ aws_short }} regions {id="installation-aws-regions_{{ context }}"}

You can deploy an {{ product_title }} cluster to the following regions. {._abstract}


:::note

Your IAM user must have the permission `tag:GetResources` in the region `us-east-1` to delete the base cluster resources. As part of the {{ aws_short }} API requirement, the {{ product_title }} installation program performs various actions in this region.

:::


## {{ aws_short }} public regions {id="installation-aws-public_{{ context }}"}

The following {{ aws_short }} public regions are supported:

*   `af-south-1` (Cape Town)
*   `ap-east-1` (Hong Kong)
*   `ap-east-2` (Taipei)
*   `ap-northeast-1` (Tokyo)
*   `ap-northeast-2` (Seoul)
*   `ap-northeast-3` (Osaka)
*   `ap-south-1` (Mumbai)
*   `ap-south-2` (Hyderabad)
*   `ap-southeast-1` (Singapore)
*   `ap-southeast-2` (Sydney)
*   `ap-southeast-3` (Jakarta)
*   `ap-southeast-4` (Melbourne)
*   `ap-southeast-5` (Malaysia)
*   `ap-southeast-6` (New Zealand)
*   `ap-southeast-7` (Thailand)
*   `ca-central-1` (Central Canada)
*   `ca-west-1` (Calgary)
*   `eu-central-1` (Frankfurt)
*   `eu-central-2` (Zurich)
*   `eu-north-1` (Stockholm)
*   `eu-south-1` (Milan)
*   `eu-south-2` (Spain)
*   `eu-west-1` (Ireland)
*   `eu-west-2` (London)
*   `eu-west-3` (Paris)
*   `il-central-1` (Tel Aviv)
*   `me-central-1` (UAE)
*   `me-south-1` (Bahrain)
*   `mx-central-1` (Central Mexico)
*   `sa-east-1` (São Paulo)
*   `us-east-1` (N. Virginia)
*   `us-east-2` (Ohio)
*   `us-west-1` (N. California)
*   `us-west-2` (Oregon)

## {{ aws_short }} EUSC region {id="installation-aws-eusc_region_{{ context }}"}
{%- set FeatureName = "European Sovereign Cloud (EUSC) region" %}
{% leveloffset +1 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}

Installing an {{ product_title }} cluster into the {{ aws_short }} European Sovereign Cloud (EUSC) region helps maximize the sovereignty of your data and satisfy your organization’s regulatory requirements. The {{ aws_short }} EUSC is separate and independent from other {{ aws_short }} regions. The infrastructure is located wholly within the European Union (EU). For more information, see [Establishing a European trust service provider for the {{ aws_short }} European Sovereign Cloud](https://aws.amazon.com/blogs/security/establishing-a-european-trust-service-provider-for-the-aws-european-sovereign-cloud/) in the {{ aws_short }} documentation.

The following {{ aws_short }} EUSC region is supported:

*   `eusc-de-east-1` (Brandenburg)


:::important

The following list outlines the limitations that apply to installing an {{ product_title }} cluster into the {{ aws_short }} EUSC region:

*   Only one region, `eusc-de-east-1`, and two zones in that region are available.
*   The Amazon Machine Images (AMIs) for public {{ op_system_first }} are not yet available in the EUSC region. As a workaround, until the AMI publication for {{ op_system }} is extended to the EUSC region, you must edit your `install-config.yaml` file to specify a custom AMI in the `amiID` field.
*   Support is not yet provided for the {{ aws_short }} Security Token Service (STS).
*   Support is not yet provided for installing a cluster into a shared Virtual Private Cloud (VPC) with a cross-account private hosted zone.

:::


## {{ aws_short }} GovCloud regions {id="installation-aws-govcloud_{{ context }}"}

The following {{ aws_short }} GovCloud regions are supported:

*   `us-gov-west-1`
*   `us-gov-east-1`

## {{ aws_short }} SC2S and C2S secret regions {id="installation-aws-c2s_{{ context }}"}

The following {{ aws_short }} secret regions are supported:

*   `us-isob-east-1` Secret Commercial Cloud Services (SC2S)
*   `us-iso-east-1` Commercial Cloud Services (C2S)

## {{ aws_short }} China regions {id="installation-aws-china_{{ context }}"}

The following {{ aws_short }} China regions are supported:

*   `cn-north-1` (Beijing)
*   `cn-northwest-1` (Ningxia)