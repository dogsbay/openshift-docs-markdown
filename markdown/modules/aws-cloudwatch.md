{%- set _mod_docs_content_type = "CONCEPT" %}

# Amazon CloudWatch {id="aws-cloudwatch_{{ context }}"}

Amazon CloudWatch forwards logs from {{ product_title }} (ROSA) to the AWS console for viewing. You must first install the ROSA `cluster-logging-operator` using the ROSA CLI (`rosa`) before installing the Amazon CloudWatch service through {{ cluster_manager_first }} console.