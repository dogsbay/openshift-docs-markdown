{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ oadp_short }} network requirements {id="oadp-performance-network-requirements_{{ context }}"}

For a supported experience with {{ oadp_first }}, you should have a stable and resilient network across {{ OCP_short }} nodes, {{ aws_short }} Simple Storage Service (S3)-compatible object storage, and in supported cloud environments that meet {{ OCP_short }} network requirements. {._abstract}

For deployments that use remote S3 buckets located off-cluster with suboptimal data paths, such as high-latency or geographically distant locations, successful backup and restore operations require specific configurations. Ensure your network settings meet the following minimum requirements:

*   Bandwidth (network upload speed to object storage): Greater than 2 Mbps for small backups and 10-100 Mbps depending on the data volume for larger backups.
*   Packet loss: 1%
*   Packet corruption: 1%
*   Latency: 100 ms

Ensure that your {{ product_title }} network performs optimally and meets {{ product_title }} network requirements.


:::important

Although Red Hat provides support for standard backup and restore failures, it does not provide support for failures caused by network settings that do not meet the recommended thresholds.

:::