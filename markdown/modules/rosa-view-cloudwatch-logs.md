{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing forwarded logs {id="rosa-view-cloudwatch-logs_{{ context }}"}

Logs that are being forwarded from {{ product_title }} are viewed in the Amazon Web Services (AWS) console.

**Prerequisites**

*   The `cluster-logging-operator` add-on service is installed and `Cloudwatch` is enabled.

**Procedure**

1.  Log in to the AWS console.
1.  Select the region the cluster is deployed in.
1.  Select the **CloudWatch** service.
1.  Select **Logs** from the left column, and select **Log Groups**.
1.  Select a log group to explore. You can view application, infrastructure, or audit logs, depending on which types were enabled during the add-on service installation. See the [Amazon CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html) for more information.