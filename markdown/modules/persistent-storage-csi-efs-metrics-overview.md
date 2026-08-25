{%- set _mod_docs_content_type = "CONCEPT" %}
# AWS EFS storage CSI usage metrics {id="efs-metrics-overview_{{ context }}"}

Amazon Web Services (AWS) Elastic File System (EFS) storage Container Storage Interface (CSI) usage metrics allow you to monitor how much space is used by either dynamically or statically provisioned EFS volumes. {._abstract}


:::important

This features is disabled by default, because turning on metrics can lead to performance degradation.

:::


The AWS EFS usage metrics feature collects volume metrics in the AWS EFS CSI Driver by recursively walking through the files in the volume. Because this effort can degrade performance, administrators must explicitly enable this feature.