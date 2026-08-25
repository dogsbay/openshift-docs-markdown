{%- set _mod_docs_content_type = "REFERENCE" %}
# Requirements for deploying a cluster in an opt-in region {id="rosa-requirements-deploying-in-opt-in-regions_{{ context }}"}

An AWS opt-in region is a region that is not enabled in your AWS account by default. If you want to deploy a {{ product_title }} cluster that uses the AWS Security Token Service (STS) in an opt-in region, you must meet the following requirements: {._abstract}

*   The region must be enabled in your AWS account. For more information about enabling opt-in regions, see [Managing AWS Regions](https://docs.aws.amazon.com/general/latest/gr/rande-manage.html) in the AWS documentation.
*   The security token version in your AWS account must be set to version 2. You cannot use version 1 security tokens for opt-in regions.

    :::important

    Updating to security token version 2 can impact the systems that store the tokens, due to the increased token length. For more information, see [the AWS documentation on setting STS preferences](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/iam/set-security-token-service-preferences.html).
    
    :::