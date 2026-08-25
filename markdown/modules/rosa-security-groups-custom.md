{%- set _mod_docs_content_type = "REFERENCE" %}
# Additional custom security groups {id="rosa-security-groups-custom_{{ context }}"}

{%- if not openshift_rosa_hcp %}
When you create a cluster using an existing non-managed VPC, you
{% endif %}
{% if openshift_rosa_hcp %}
You
{%- endif %}
can add additional custom security groups during cluster creation. Custom security groups are subject to the following limitations: {._abstract}

*   You must create the custom security groups in AWS before you create the cluster. For more information, see [Amazon EC2 security groups for Linux instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html).
*   You must associate the custom security groups with the VPC that the cluster will be installed into. Your custom security groups cannot be associated with another VPC.
*   You might need to request additional quota for your VPC if you are adding additional custom security groups. For information on AWS quota requirements for {{ product_title }} see _Required AWS service quotas_ in _Prepare your environment_. For information on requesting an AWS quota increase, see [Requesting a quota increase](https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html).