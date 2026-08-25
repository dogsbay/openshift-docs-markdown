{% if context == "installing-aws-specialized-region" %}
{%- set specialized = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
{% if not specialized %}
# AWS regions without a published {{ op_system }} AMI {id="installation-aws-regions-with-no-ami_{{ context }}"}

{% endif %}

{% if specialized %}
# Installation requirements for China, Secret, and Top Secret regions {id="_installation_requirements_for_china_secret_and_top_secret_regions"}

{% endif %}

{% if not specialized %}
You can deploy an {{ product_title }} cluster to {{ aws_first }} regions without native support for a {{ op_system_first }} Amazon Machine Image (AMI) or the {{ aws_short }} software development kit (SDK). {._abstract}

If a published AMI is not available for an {{ aws_short }} region, you can upload a custom AMI before installing the cluster.

If you are deploying to a region not supported by the {{ aws_short }} SDK and you do not specify a custom AMI, the installation program copies the `us-east-1` AMI to the user account automatically. Then the installation program creates the control plane machines with encrypted Elastic Block Store (EBS) volumes by using the default or user-specified Key Management Service (KMS) key. This allows the AMI to follow the same process workflow as published {{ op_system }} AMIs.

A region without native support for an {{ op_system }} AMI is not available to select from the terminal during cluster creation because it is not published. However, you can install to this region by configuring the custom AMI in the `install-config.yaml` file.
{% endif %}

{% if specialized %}
Red Hat does not publish a {{ op_system_first }} Amazon Machine Image (AMI) for the {{ aws_first }} China, Secret, or Top Secret regions.

Before you can install a cluster into one of these regions, you must:

*   Upload a custom {{ op_system }} AMI.
*   Manually create the installation configuration file (`install-config.yaml`).
*   Specify the {{ aws_short }} region, and the accompanying custom AMI, in the installation configuration file.

You cannot use the {{ product_title }} installation program to create the installation configuration file. The installer does not list an {{ aws_short }} region without native support for an {{ op_system }} AMI.


:::important

If you install a cluster into a Secret or Top Secret region, you must also define a custom CA certificate in the `additionalTrustBundle` field of the `install-config.yaml` file because the {{ aws_short }} API requires a custom CA trust bundle. To allow the installation program to access the {{ aws_short }} API, the CA certificates must also be defined on the machine that runs the installation program. You must add the CA bundle to the trust store on the machine, use the `AWS_CA_BUNDLE` environment variable, or define the CA bundle in the [`ca_bundle`](https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-ca_bundle.html) field of the {{ aws_short }} config file.

:::


{% endif %}

{% if context == "installing-aws-specialized-region" %}
{%- set specialized = "" -%}
{% endif %}