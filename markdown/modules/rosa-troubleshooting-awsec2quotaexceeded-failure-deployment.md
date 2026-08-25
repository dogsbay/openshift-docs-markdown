{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting cluster creation with an AWSEC2QuotaExceeded error {id="rosa-troubleshooting-awsec2quotaexceeded-failure-deployment_{{ context }}"}

If a cluster creation action fails, you might receive the following error message. {._abstract}

The following example shows the output:

```terminal
Provisioning Error Code:    OCM3042
Provisioning Error Message: AWS E2C quota limit exceeded. Clean unused load balancers or increase quota and try again.
```

This error indicates that you have reached the EC2 quota limit for the region mentioned in the error log.

**Procedure**

*   To fix this issue, try one of the following methods:
    *   Request a quota increase from AWS:
        1.  Sign in to the [AWS Management Console](https://aws.amazon.com/console/).
        1.  Click your user name and select ***Service Quotas***.
        1.  Under ***Manage quotas***, select an AWS service to view available quotas.
        1.  If the quota is adjustable, you can choose the button or the name, and then choose ***Request quota increase***.
    *   Delete unused EC2 instances using the console:
        1.  Before you delete an EC2 instance, verify your data by checking that your Amazon EBS volumes will still exist after you delete the unused EC2 instances.
        1.  Ensure you have copied any data that you need from your instance store volumes to persistent storage, such as Amazon EBS or Amazon S3.
        1.  If you have a CNAME record for your domain that points to your load balancer, point it to a new location and wait for the DNS change to take effect before deleting your load balancer.
        1.  Open the [Amazon EC2 console](https://console.aws.amazon.com/ec2/).
        1.  On the navigation pane, choose ***Instances***.
        1.  Select the instance, and choose ***Stop instance***.