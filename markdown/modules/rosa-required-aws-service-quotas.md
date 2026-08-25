{%- set _mod_docs_content_type = "REFERENCE" %}
# Required AWS service quotas {id="rosa-required-aws-service-quotas_{{ context }}"}

The table below describes the AWS service quotas and levels required to create and run one {{ product_title }} cluster. Although most default values are suitable for most workloads, you might need to request additional quota for the following cases: {._abstract}

*   {{ product_title }} clusters require a minimum AWS EC2 service quota of
{%- if not openshift_rosa_hcp %}
100&#160;vCPUs
{%- endif %}
{%- if openshift_rosa_hcp %}
32&#160;vCPUs
{%- endif %}
to provide for cluster creation, availability, and upgrades. The default maximum value for vCPUs assigned to Running On-Demand Standard Amazon EC2 instances is `5`. Therefore if you have not created a {{ product_title }} cluster using the same AWS account previously, you must request additional EC2 quota for `Running On-Demand Standard (A, C, D, H, I, M, R, T, Z) instances`.

*   Some optional cluster configuration features, such as custom security groups, might require you to request additional quota. For example, because {{ product_title }} associates 1 security group with network interfaces in worker machine pools by default, and the default quota for `Security groups per network interface` is `5`, if you want to add 5 custom security groups, you must request additional quota, because this would bring the total number of security groups on worker network interfaces to 6.


:::note

The AWS SDK allows {{ product_title }} to check quotas, but the AWS SDK calculation does not account for your existing usage. Therefore, it is possible for cluster creation to fail because of a lack of available quota even though the AWS SDK quota check passes. To fix this issue, increase your quota.

:::


If you need to modify or increase a specific AWS quota, see Amazon’s documentation on [requesting a quota increase](https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html). Large quota requests are submitted to Amazon Support for review, and can take some time to be approved. If your quota request is urgent, contact AWS Support.

**{{ product_title }}-required service quota**

<table>
<thead>
<tr>
  <th>Quota name</th>
  <th>Service code</th>
  <th>Quota code</th>
  <th>AWS default</th>
  <th>Minimum required</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Running On-Demand Standard (A, C, D, H, I, M, R, T, Z) instances</td>
  <td>ec2</td>
  <td>L-1216C47A</td>
  <td>5</td>
  <td>{% if not openshift_rosa_hcp %} 100 {% endif %} {% if openshift_rosa_hcp %} 32 {% endif %}</td>
  <td>Maximum number of vCPUs assigned to the Running On-Demand Standard (A, C, D, H, I, M, R, T, Z) instances. The default value of 5 vCPUs is not sufficient to create {{ product_title }} clusters.</td>
</tr>
<tr>
  {% if not openshift_rosa_hcp %}<td>Storage for General Purpose SSD (gp2) volume storage in TiB</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>ebs</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>L-D18FCD1D</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>50</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>300</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>The maximum aggregated amount of storage, in TiB, that can be provisioned across General Purpose SSD (gp2) volumes in this Region.</td>{% endif %}
</tr>
<tr>
  <td>Storage for General Purpose SSD (gp3) volume storage in TiB</td>
  <td>ebs</td>
  <td>L-7A658B76</td>
  <td>50</td>
  <td>{% if not openshift_rosa_hcp %} 300 {% endif %} {% if openshift_rosa_hcp %} {%- set fn_hcp_storage_quota = "footnote:[The default quota of 50&#160;TiB is more than {{ product_title }} clusters require; however, because AWS cost is based on usage rather than quota, Red&#160;Hat recommends using the default quota.]" %}1{{ fn_hcp_storage_quota }} {% endif %}</td>
  <td>The maximum aggregated amount of storage, in TiB, that can be provisioned across General Purpose SSD (gp3) volumes in this Region. {% if not openshift_rosa_hcp %} 300&#160;TiB {% endif %} {% if openshift_rosa_hcp %} 1&#160;TiB {% endif %} of storage is the required minimum for optimal performance.</td>
</tr>
<tr>
  {% if not openshift_rosa_hcp %}<td>Storage for Provisioned IOPS SSD (io1) volumes in TiB</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>ebs</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>L-FD252861</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>50</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>300</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>The maximum aggregated amount of storage, in TiB, that can be provisioned across Provisioned IOPS SSD (io1) volumes in this Region.<br><br>{% if not openshift_rosa_hcp %}300&#160;TiB of storage is the required minimum for optimal performance.{% endif %}</td>{% endif %}
</tr>
</tbody>
</table>

**General AWS service quotas**

<table>
<thead>
<tr>
  <th>Quota name</th>
  <th>Service code</th>
  <th>Quota code</th>
  <th>AWS default</th>
  <th>Minimum required</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>EC2-VPC Elastic IPs</td>
  <td>ec2</td>
  <td>L-0263D0A3</td>
  <td>5</td>
  <td>5</td>
  <td>The maximum number of Elastic IP addresses that you can allocate for EC2-VPC in this Region.</td>
</tr>
<tr>
  <td>VPCs per Region</td>
  <td>vpc</td>
  <td>L-F678F1CE</td>
  <td>5</td>
  <td>5</td>
  <td>The maximum number of VPCs per Region. This quota is directly tied to the maximum number of internet gateways per Region.</td>
</tr>
<tr>
  <td>Internet gateways per Region</td>
  <td>vpc</td>
  <td>L-A4707A72</td>
  <td>5</td>
  <td>5</td>
  <td>The maximum number of internet gateways per Region. This quota is directly tied to the maximum number of VPCs per Region. To increase this quota, increase the number of VPCs per Region.</td>
</tr>
<tr>
  <td>Network interfaces per Region</td>
  <td>vpc</td>
  <td>L-DF5E4CA3</td>
  <td>5,000</td>
  <td>5,000</td>
  <td>The maximum number of network interfaces per Region.</td>
</tr>
<tr>
  <td>Security groups per network interface</td>
  <td>vpc</td>
  <td>L-2AFB9258</td>
  <td>5</td>
  <td>5</td>
  <td>The maximum number of security groups per network interface. This quota, multiplied by the quota for rules per security group, cannot exceed 1000.</td>
</tr>
<tr>
  {% if not openshift_rosa_hcp %}<td>Snapshots per Region</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>ebs</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>L-309BACF6</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>10,000</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>10,000</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>The maximum number of snapshots per Region</td>{% endif %}
</tr>
<tr>
  {% if not openshift_rosa_hcp %}<td>IOPS for Provisioned IOPS SSD (Io1) volumes</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>ebs</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>L-B3A130E6</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>300,000</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>300,000</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>The maximum aggregated number of IOPS that can be provisioned across Provisioned IOPS SDD (io1) volumes in this Region.</td>{% endif %}
</tr>
<tr>
  <td>Application Load Balancers per Region</td>
  <td>elasticloadbalancing</td>
  <td>L-53DA6B97</td>
  <td>50</td>
  <td>50</td>
  <td>The maximum number of Application Load Balancers that can exist in each region.</td>
</tr>
<tr>
  {% if not openshift_rosa_hcp %}<td>Classic Load Balancers per Region</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>elasticloadbalancing</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>L-E9E9831D</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>20</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>20</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>The maximum number of Classic Load Balancers that can exist in each region.</td>{% endif %}
</tr>
</tbody>
</table>

## Additional resources {id="_additional_resources" ._additional-resources}
*   [How can I request, view, and manage service quota increase requests using AWS CLI commands?](https://aws.amazon.com/premiumsupport/knowledge-center/request-service-quota-increase-cli/)
*   [{{ product_title }} service quotas](https://docs.aws.amazon.com/ROSA/latest/userguide/service-quotas-rosa.html)
*   [Request a quota increase](https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html)
*   [IAM and AWS STS quotas (AWS documentation)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html)