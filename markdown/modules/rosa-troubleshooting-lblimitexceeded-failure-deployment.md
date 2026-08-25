{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting cluster creation with an ALoadBalancerLimitExceeded error {id="rosa-troubleshooting-lblimitexceeded-failure-deployment_{{ context }}"}

If a cluster creation action fails, you might receive the following error message: {._abstract}

```terminal
Provisioning Error Code:    OCM3036
Provisioning Error Message: AWS Load Balancer quota limit exceeded. Clean unused load balancers or increase quota and try again.
```

This error indicates that you have reached the quota for the number of load balancers.

**Procedure**

*   To fix this issue, try one of the following methods:
    *   Request a quota increase from AWS:
        1.  Sign in to the [AWS Management Console](https://aws.amazon.com/console/).
        1.  Click your user name and select **Service Quotas**.
        1.  Under **Manage quotas**, select a service to view available quotas.
        1.  If the quota is adjustable, you can choose the button or the name, and then choose Request quota increase.
        1.  For **Change quota value**, enter the new value. The new value must be greater than the current value.
        1.  Choose **Request**.
    *   Delete a load balancer using the console:
        1.  If you have a CNAME record for your domain that points to your load balancer, point it to a new location and wait for the DNS change to take effect before deleting your load balancer.
        1.  Open the [Amazon EC2 console](https://console.aws.amazon.com/ec2/).
        1.  On the navigation pane, under **LOAD BALANCING**, choose **Load Balancers**.
        1.  Select the load balancer, and then choose **Actions, Delete**.
        1.  When prompted for confirmation, choose **Yes, Delete**.