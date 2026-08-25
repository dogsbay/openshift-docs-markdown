{%- set _mod_docs_content_type = "CONCEPT" %}
# AWS account limits {id="aws-limits_{{ context }}"}

The {{ product_title }} cluster uses a number of Amazon Web Services (AWS) components, and the default [service limits](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html) affect your ability to install {{ product_title }} clusters. If you use certain cluster configurations, deploy your cluster in certain AWS regions, or run multiple clusters from your account, you might need to request additional resources for your AWS account. {._abstract}

The following table summarizes the AWS components whose limits can impact your ability to install and run {{ product_title }} clusters.

<table>
<thead>
<tr>
  <th>Component</th>
  <th>Number of clusters available by default</th>
  <th>Default AWS limit</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Instance Limits</td>
  <td>Varies</td>
  <td>Varies</td>
  <td>At a minimum, each cluster creates the following instances:<br><br><ul><li>One bootstrap machine, which is removed after installation</li><li>Three control plane nodes</li><li>Two infrastructure nodes for a single availability zone; three infrascture nodes for multi-availability zones</li><li>Two worker nodes for a single availability zone; three worker nodes for multi-availability zones</li></ul>These instance type counts are within a new account's default limit. To deploy more worker nodes, deploy large workloads, or use a different instance type, review your account limits to ensure that your cluster can deploy the machines that you need.<br><br>In most regions, the bootstrap and worker machines uses an <code>m4.large</code> machines and the control plane machines use <code>m4.xlarge</code> instances. In some regions, including all regions that do not support these instance types, <code>m5.large</code> and <code>m5.xlarge</code> instances are used instead.</td>
</tr>
<tr>
  <td>Elastic IPs (EIPs)</td>
  <td>0 to 1</td>
  <td>5 EIPs per account</td>
  <td>To provision the cluster in a highly available configuration, the installation program creates a public and private subnet for each <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html">availability zone within a region</a>. Each private subnet requires a <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">NAT Gateway</a>, and each NAT gateway requires a separate <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ipaddresses-eip.html">elastic IP</a>. Review the <a href="https://aws.amazon.com/about-aws/global-infrastructure/">AWS region map</a> to determine how many availability zones are in each region. To take advantage of the default high availability, install the cluster in a region with at least three availability zones. To install a cluster in a region with more than five availability zones, you must increase the EIP limit.<br><br><br><br><dl class="db-admonition db-admonition-important"><dt>Important</dt><dd>To use the <code>us-east-1</code> region, you must increase the EIP limit for your account.</dd></dl></td>
</tr>
<tr>
  <td>Virtual Private Clouds (VPCs)</td>
  <td>5</td>
  <td>5 VPCs per region</td>
  <td>Each cluster creates its own VPC.</td>
</tr>
<tr>
  <td>Elastic Load Balancing (ELB)</td>
  <td>3</td>
  <td>20 per region</td>
  <td>By default, each cluster creates internal and external Network Load Balancers for the primary API server and a single Classic Load Balancer for the router. Deploying more Kubernetes LoadBalancer Service objects will create additional <a href="https://aws.amazon.com/elasticloadbalancing/">load balancers</a>.</td>
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
  <td>The default installation creates 21 ENIs and an ENI for each availability zone in your region. For example, the <code>us-east-1</code> region contains six availability zones, so a cluster that is deployed in that zone uses 27 ENIs. Review the <a href="https://aws.amazon.com/about-aws/global-infrastructure/">AWS region map</a> to determine how many availability zones are in each region.<br><br>Additional ENIs are created for additional machines and load balancers that are created by cluster usage and deployed workloads.</td>
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
  <td>Because the installation process creates a temporary bucket and the registry component in each cluster creates a bucket, you can create only 99 {{ product_title }} clusters per AWS account.</td>
</tr>
<tr>
  <td>Security Groups</td>
  <td>250</td>
  <td>2,500 per account</td>
  <td>Each cluster creates 10 distinct security groups.</td>
</tr>
</tbody>
</table>