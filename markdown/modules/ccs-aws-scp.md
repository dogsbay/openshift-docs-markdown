{%- set _mod_docs_content_type = "REFERENCE" %}
# Minimum required service control policy (SCP) {id="ccs-aws-scp_{{ context }}"}

Service control policy (SCP) management is the responsibility of the customer. These policies are maintained in the AWS Organization and control what services are available within the attached AWS accounts. {._abstract}

<table>
<thead>
<tr>
  <th>Required/optional</th>
  <th>Service</th>
  <th>Actions</th>
  <th>Effect</th>
</tr>
</thead>
<tbody>
<tr>
  <td>.15+</td>
  <td>Required</td>
  <td>Amazon EC2</td>
  <td>All</td>
</tr>
<tr>
  <td>Allow</td>
  <td>Amazon EC2 Auto Scaling</td>
  <td>All</td>
  <td>Allow</td>
</tr>
<tr>
  <td>Amazon S3</td>
  <td>All</td>
  <td>Allow</td>
  <td>Identity And Access Management</td>
</tr>
<tr>
  <td>All</td>
  <td>Allow</td>
  <td>Elastic Load Balancing</td>
  <td>All</td>
</tr>
<tr>
  <td>Allow</td>
  <td>Elastic Load Balancing V2</td>
  <td>All</td>
  <td>Allow</td>
</tr>
<tr>
  <td>Amazon CloudWatch</td>
  <td>All</td>
  <td>Allow</td>
  <td>Amazon CloudWatch Events</td>
</tr>
<tr>
  <td>All</td>
  <td>Allow</td>
  <td>Amazon CloudWatch Logs</td>
  <td>All</td>
</tr>
<tr>
  <td>Allow</td>
  <td>AWS Support</td>
  <td>All</td>
  <td>Allow</td>
</tr>
<tr>
  <td>AWS Key Management Service</td>
  <td>All</td>
  <td>Allow</td>
  <td>AWS Security Token Service</td>
</tr>
<tr>
  <td>All</td>
  <td>Allow</td>
  <td>AWS Resource Tagging</td>
  <td>All</td>
</tr>
<tr>
  <td>Allow</td>
  <td>AWS Route53 DNS</td>
  <td>All</td>
  <td>Allow</td>
</tr>
<tr>
  <td>AWS Service Quotas</td>
  <td>ListServices GetRequestedServiceQuotaChange GetServiceQuota RequestServiceQuotaIncrease ListServiceQuotas</td>
  <td>Allow<br><br><br><br>.3+</td>
  <td>Optional</td>
</tr>
<tr>
  <td>AWS Billing</td>
  <td>ViewAccount<br><br>Viewbilling<br><br>ViewUsage</td>
  <td>Allow</td>
  <td>AWS Cost and Usage Report</td>
</tr>
<tr>
  <td>All</td>
  <td>Allow</td>
  <td>AWS Cost Explorer Services</td>
  <td>All</td>
</tr>
<tr>
  <td>Allow</td>
</tr>
</tbody>
</table>

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ec2:*"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "autoscaling:*"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:*"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "iam:*"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "elasticloadbalancing:*"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "cloudwatch:*"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "events:*"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "logs:*"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "support:*"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "kms:*"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "sts:*"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "tag:*"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "route53:*"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "servicequotas:ListServices",
                "servicequotas:GetRequestedServiceQuotaChange",
                "servicequotas:GetServiceQuota",
                "servicequotas:RequestServiceQuotaIncrease",
                "servicequotas:ListServiceQuotas"
            ],
            "Resource": [
                "*"
            ]
        }
    ]
}
```