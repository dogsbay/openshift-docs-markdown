{%- set _mod_docs_content_type = "REFERENCE" %}
# Minimum set of effective permissions for service control policies (SCP) {id="rosa-minimum-scp_{{ context }}"}

Service control policies (SCP) are a type of organization policy that manages permissions within your organization. SCPs ensure that accounts within your organization stay within your defined access control guidelines. These policies are maintained in AWS organizations and control the services that are available within the attached AWS accounts. SCP management is the responsibility of the customer. {._abstract}

{% if context == "rosa-sts-about-iam-resources" %}
{%- set aws_sts = true -%}
{% endif %}

{% if context == "prerequisites" %}
{%- set aws_non_sts = true -%}
{% endif %}

{% if aws_sts %}

:::note

When using AWS Security Token Service (STS), you must ensure that the service control policy does not block the following resources:

*   `ec2:{}`
*   `iam:{}`
*   `tag:*`

:::

{% endif %}

{% if aws_non_sts %}

:::note

The minimum SCP requirement does not apply when using AWS Security Token Service (STS). For more information about STS, see [AWS prerequisites for ROSA with STS](https://docs.openshift.com/rosa/rosa_getting_started_sts/rosa-sts-aws-prereqs.html).

:::

{% endif %}

Verify that your service control policy (SCP) does not restrict any of these required permissions.

<table>
<thead>
<tr>
  <th></th>
  <th>Service</th>
  <th>Actions</th>
  <th>Effect</th>
</tr>
</thead>
<tbody>
<tr>
  <td>.18+</td>
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
  <td>AWS EC2 Instance Connect</td>
  <td>SendSerialConsoleSSHPublicKey</td>
  <td>Allow</td>
</tr>
<tr>
  <td>AWS Support</td>
  <td>All</td>
  <td>Allow</td>
  <td>AWS Key Management Service</td>
</tr>
<tr>
  <td>All</td>
  <td>Allow</td>
  <td>AWS Security Token Service</td>
  <td>All</td>
</tr>
<tr>
  <td>Allow</td>
  <td>AWS Tiro</td>
  <td>CreateQuery GetQueryAnswer GetQueryExplanation</td>
  <td>Allow</td>
</tr>
<tr>
  <td>AWS Marketplace</td>
  <td>Subscribe Unsubscribe View Subscriptions</td>
  <td>Allow</td>
  <td>AWS Resource Tagging</td>
</tr>
<tr>
  <td>All</td>
  <td>Allow</td>
  <td>AWS Route53 DNS</td>
  <td>All</td>
</tr>
<tr>
  <td>Allow</td>
  <td>AWS Service Quotas</td>
  <td>ListServices GetRequestedServiceQuotaChange GetServiceQuota RequestServiceQuotaIncrease ListServiceQuotas</td>
  <td>Allow<br><br><br><br>.3+|Optional</td>
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

**Additional resources**
{._additional-resources}

*   [Service control policies](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html)
*   [SCP effects on permissions](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html#scp-effects-on-permissions)