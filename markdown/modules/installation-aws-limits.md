{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ aws_short }} account limits {id="installation-aws-limits_{{ context }}"}

The {{ product_title }} cluster uses several {{ aws_first }} components, and the default service limits affect your ability to install {{ product_title }} clusters. {._abstract}

If you use certain cluster configurations, deploy your cluster in certain {{ aws_short }} regions, or run multiple clusters from your account, you might need
to request additional resources for your {{ aws_short }} account.

The following table summarizes the {{ aws_short }}  components whose limits can impact your ability to install and run {{ product_title }} clusters.

<table>
<thead>
<tr>
  <th>Component</th>
  <th>Number of clusters available by default</th>
  <th>Default {{ aws_short }} limit</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Instance Limits</td>
  <td>Varies</td>
  <td>Varies</td>
  <td>By default, each cluster creates the following instances:<br><br><ul><li>One bootstrap machine, which is removed after installation</li><li>Three control plane nodes</li><li>Three worker nodes</li></ul>These instance type counts are within a new account's default limit. To deploy more worker nodes, enable autoscaling, deploy large workloads, or use a different instance type, review your account limits to ensure that your cluster can deploy the machines that you need.<br><br>In most regions, the worker machines use an <code>m6i.large</code> instanceand the bootstrap and control plane machines use <code>m6i.xlarge</code> instances. In some regions, including all regions that do not support these instance types, <code>m5.large</code> and <code>m5.xlarge</code> instances are used instead.</td>
</tr>
<tr>
  <td>Elastic IPs (EIPs)</td>
  <td>0 to 1</td>
  <td>5 EIPs per account</td>
  <td>To provision the cluster in a highly available configuration, the installation program creates a public and private subnet for each availability zone within a region.Each private subnet requires a NAT gateway, and each NAT gateway requires a separate elastic IP.Review the AWS region map to determine how many availability zones are in each region. To take advantage of the default high availability, install the cluster in a region with at least three availability zones. To install a cluster in a region with more than five availability zones, you must increase the EIP limit.<br><br><dl><dt>Important</dt><dd>To use the <code>us-east-1</code> region, you must increase the EIP limit for your account.</dd></dl></td>
</tr>
<tr>
  <td>Virtual Private Clouds (VPCs)</td>
  <td>5</td>
  <td>5 VPCs per region</td>
  <td>Each cluster creates its own VPC.</td>
</tr>
<tr>
  <td>Elastic Load Balancing (ELB/NLB)</td>
  <td>3</td>
  <td>20 per region</td>
  <td>By default, each cluster creates internal and external network load balancers for the masterAPI server and a single Classic Load Balancer for the router. Deploying more Kubernetes <code>Service</code> objects with type <code>LoadBalancer</code> will create additional load balancers.</td>
</tr>
<tr>
  <td>NAT Gateways</td>
  <td>5</td>
  <td>5 per availability zone</td>
  <td>The cluster deploys one NAT gateway in each availability zone.</td>
</tr>
<tr>
  <td>Elastic Network Interfaces (ENIs)</td>
  <td>At least 12</td>
  <td>350 per region</td>
  <td>The default installation creates 21 ENIs and an ENI for each availability zonein your region. For example, the <code>us-east-1</code> region contains six availability zones, so a cluster that is deployed in that zone uses 27 ENIs. Review the AWS region map to determine how many availability zones are in each region.<br><br>Additional ENIs are created for additional machines and ELB load balancers that are created by cluster usage and deployed workloads.</td>
</tr>
<tr>
  <td>VPC Gateway</td>
  <td>20</td>
  <td>20 per account</td>
  <td>Each cluster creates a single VPC Gateway for S3 access.</td>
</tr>
<tr>
  <td>S3 buckets</td>
  <td>99</td>
  <td>100 buckets per account</td>
  <td>Because the installation process creates a temporary bucket and the registry component in each cluster creates a bucket, you can create only 99 {{ product_title }} clusters per {{ aws_short }} account.</td>
</tr>
<tr>
  <td>Security Groups</td>
  <td>250</td>
  <td>2,500 per account</td>
  <td>Each cluster creates 10 distinct security groups.</td>
</tr>
<tr>
  <td>Security Groups on network interfaces</td>
  <td>Varies</td>
  <td>5 per network interface</td>
  <td>By default, {{ aws_short }} allows 5 security groups per network interface. The installation program creates 2 security groups for compute machines and 3 security groups for control plane machines. If you are installing a cluster into a shared VPC, there are three scenarios in which you must increase this quota:<br><br><ul><li>You specified 4 or more custom security groups for compute machines using the <code>compute.platform.aws.additionalSecurityGroupIDs</code> parameter in the <code>install-config.yaml</code> file.</li><li>You specified 3 or more custom security groups for control plane machines using the <code>controlPlane.platform.aws.additionalSecurityGroupIDs</code> parameter in the <code>install-config.yaml</code> file.</li><li>You specified 3 or more custom security groups for all machines using the <code>platform.aws.defaultMachinePlatform</code> parameter in the <code>install-config.yaml</code> file.</li></ul>You must increase the quota of security groups per network interface to a number greater than or equal to <code>3 + (number of control plane custom security groups OR number of default machine platform custom security groups)</code>, or <code>2 + (number of compute custom security groups OR number of default machine platform custom security groups)</code>, whichever is higher. If you do not specify a sufficient quota, the installation will succeed, but it will generate <code>SecurityGroupsPerInterfaceLimitExceeded</code> errors in the installation log, and the additional security groups will not be applied. The maximum allowed quota is 16 and the maximum number of user-specified security groups is 10.</td>
</tr>
</tbody>
</table>