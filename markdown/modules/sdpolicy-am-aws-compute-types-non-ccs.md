{%- set _mod_docs_content_type = "CONCEPT" %}
# AWS instance types for non-CCS clusters {id="aws-instance-types-non-ccs_{{ context }}"}

{{ product_title }} offers the following worker node types and sizes on AWS: {._abstract}


:::note

The `m7i` instance type is not available in every AWS region. In regions where `m7i` is not offered, you must specify a supported instance type when you create a cluster or cluster creation fails. For a complete list of supported regions, see [_Amazon EC2 instance types by Region_](https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-instance-regions.html).

:::


:::details{title="General purpose"}
*   m5.xlarge (4 vCPU, 16 GiB)
*   m5.2xlarge (8 vCPU, 32 GiB)
*   m5.4xlarge (16 vCPU, 64 GiB)
:::

:::details{title="Memory-optimized"}
*   r5.xlarge (4 vCPU, 32 GiB)
*   r5.2xlarge (8 vCPU, 64 GiB)
*   r5.4xlarge (16 vCPU, 128 GiB)
:::

:::details{title="Compute-optimized"}
*   c5.2xlarge (8 vCPU, 16 GiB)
*   c5.4xlarge (16 vCPU, 32 GiB)
:::