{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting cluster creation with an AWSVPCLimitExceeded error {id="rosa-troubleshooting-awsvpclimit-failure-deployment_{{ context }}"}

If a cluster creation action fails, you might receive the following error message. {._abstract}

The following example shows the {{ cluster_manager }} output:

```terminal
Provisioning Error Code:    OCM3013
Provisioning Error Message: VPC limit exceeded. Clean unused VPCs or increase quota and try again.
```

This error indicates that you have reached the quota for the number of VPCs.

**Procedure**

*   To fix this issue, try one of the following methods:
*   Request a quota increase from AWS:
    1.  Sign in to the [AWS Management Console](https://aws.amazon.com/console/).
    1.  Click your user name and select ***Service Quotas***.
    1.  Under ***Manage quotas***, select a service to view available quotas.
    1.  If the quota is adjustable, you can choose the button or the name, and then choose ***Request increase***.
    1.  For ***Increase quota value***, enter the new value. The new value must be greater than the current value.
    1.  Choose ***Request***.
*   Clean unused VPCs. Before you can delete a VPC, you must first stop or delete any resources that created a requester-managed network interface in the VPC. For example, you must stop your EC2 instances and delete your load balancers, NAT gateways, transit gateways, and interface VPC endpoints before deleting a VPC:
    1.  Sign in to the [AWS EC2 console](https://console.aws.amazon.com/ec2/).
    1.  Stop all instances in the VPC. For more information, see [Stop Amazon EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html).
    1.  Open the [Amazon VPC console](https://console.aws.amazon.com/vpc).
    1.  In the navigation pane, choose ***Your VPCs***.
    1.  Select the VPC to delete and choose ***Actions, Delete VPC***.
    1.  If you have a Site-to-Site VPN connection, select the option to delete it; otherwise, leave it unselected. Choose ***Delete VPC***.