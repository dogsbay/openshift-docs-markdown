{%- set _mod_docs_content_type = "REFERENCE" %}
# Other infrastructure components {id="installation-aws-user-infra-other-infrastructure_{{ context }}"}

Your {{ product_title }} cluster on user-provisioned infrastructure in {{ aws_first }} requires additional infrastructure components, including a VPC, DNS entries, load balancers, security groups, and IAM roles. {._abstract}

*   A VPC
*   DNS entries
*   Load balancers (classic or network) and listeners
*   A public and a private Route 53 zone
*   Security groups
*   IAM roles
*   S3 buckets

If you are working in a disconnected environment, you cannot reach the public IP addresses for EC2, ELB, and S3 endpoints. Depending on the level to which you want to restrict internet traffic during the installation, the following configuration options are available:

## Option 1: Create VPC endpoints {id="create-vpc-endpoints_{{ context }}"}

Create a VPC endpoint and attach it to the subnets that the clusters are using. Name the endpoints as follows:

*   `ec2.<aws_region>.amazonaws.com`
*   `elasticloadbalancing.<aws_region>.amazonaws.com`
*   `s3.<aws_region>.amazonaws.com`

With this option, network traffic remains private between your VPC and the required {{ aws_short }} services.

## Option 2: Create a proxy without VPC endpoints {id="create-proxy-without-vpc-endpoints_{{ context }}"}
As part of the installation process, you can configure an HTTP or HTTPS proxy. With this option, internet traffic goes through the proxy to reach the required {{ aws_short }} services.

## Option 3: Create a proxy with VPC endpoints {id="create-proxy-with-vpc-endpoints_{{ context }}"}
As part of the installation process, you can configure an HTTP or HTTPS proxy with VPC endpoints. Create a VPC endpoint and attach it to the subnets that the clusters are using. Name the endpoints as follows:

*   `ec2.<aws_region>.amazonaws.com`
*   `elasticloadbalancing.<aws_region>.amazonaws.com`
*   `s3.<aws_region>.amazonaws.com`

When configuring the proxy in the `install-config.yaml` file, add these endpoints to the `noProxy` field. With this option, the proxy prevents the cluster from accessing the internet directly. However, network traffic remains private between your VPC and the required {{ aws_short }} services.

You must provide a suitable VPC and subnets that allow communication to your machines.

**Required VPC components**

<table>
<thead>
<tr>
  <th>Component</th>
  <th>{{ aws_short }} type</th>
  <th colspan="2">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>VPC</td>
  <td><ul><li><code>AWS::EC2::VPC</code></li><li><code>AWS::EC2::VPCEndpoint</code></li></ul></td>
  <td colspan="2">You must provide a public VPC for the cluster to use. The VPC uses an endpoint that references the route tables for each subnet to improve communication with the registry that is hosted in S3.</td>
</tr>
<tr>
  <td>Public subnets</td>
  <td><ul><li><code>AWS::EC2::Subnet</code></li><li><code>AWS::EC2::SubnetNetworkAclAssociation</code></li></ul></td>
  <td colspan="2">Your VPC must have public subnets for between 1 and 3 availability zones and associate them with appropriate Ingress rules.</td>
</tr>
<tr>
  <td>Internet gateway</td>
  <td><ul><li><code>AWS::EC2::InternetGateway</code></li><li><code>AWS::EC2::VPCGatewayAttachment</code></li><li><code>AWS::EC2::RouteTable</code></li><li><code>AWS::EC2::Route</code></li><li><code>AWS::EC2::SubnetRouteTableAssociation</code></li><li><code>AWS::EC2::NatGateway</code></li><li><code>AWS::EC2::EIP</code></li></ul></td>
  <td colspan="2">You must have a public internet gateway, with public routes, attached to the VPC. In the provided templates, each public subnet has a NAT gateway with an EIP address. These NAT gateways allow cluster resources, such as private subnet instances, to reach the internet and are not required for some restricted network or proxy scenarios.</td>
</tr>
<tr>
  <td rowspan="7">Network access control</td>
  <td rowspan="7"><ul><li><code>AWS::EC2::NetworkAcl</code></li><li><code>AWS::EC2::NetworkAclEntry</code></li></ul></td>
  <td colspan="2">You must allow the VPC to access the following ports:</td>
</tr>
<tr>
  <th>Port</th>
  <th>Reason</th>
</tr>
<tr>
  <td><code>80</code></td>
  <td>Inbound HTTP traffic</td>
</tr>
<tr>
  <td><code>443</code></td>
  <td>Inbound HTTPS traffic</td>
</tr>
<tr>
  <td><code>22</code></td>
  <td>Inbound SSH traffic</td>
</tr>
<tr>
  <td><code>1024</code> - <code>65535</code></td>
  <td>Inbound ephemeral traffic</td>
</tr>
<tr>
  <td><code>0</code> - <code>65535</code></td>
  <td>Outbound ephemeral traffic</td>
</tr>
<tr>
  <td>Private subnets</td>
  <td><ul><li><code>AWS::EC2::Subnet</code></li><li><code>AWS::EC2::RouteTable</code></li><li><code>AWS::EC2::SubnetRouteTableAssociation</code></li></ul></td>
  <td colspan="2">Your VPC can have private subnets. The provided CloudFormation templates can create private subnets for between 1 and 3 availability zones. If you use private subnets, you must provide appropriate routes and tables for them.</td>
</tr>
</tbody>
</table>

Your DNS and load balancer configuration must use a public hosted zone and can use a private hosted zone similar to the one that the installation program uses if it provisions the cluster’s infrastructure. You must create a DNS entry that resolves to your load balancer. An entry for `api.<cluster_name>.<domain>` must point to the external load balancer, and an entry for `api-int.<cluster_name>.<domain>` must point to the internal load balancer.

The cluster also requires load balancers and listeners for port 6443, which the Kubernetes API and its extensions require, and port 22623, which the Ignition config files for new machines require. The targets are the control plane nodes. Port 6443 must be accessible to both clients external to the cluster and nodes within the cluster. Port 22623 must be accessible to nodes within the cluster.

**Required DNS and load balancing components**

<table>
<thead>
<tr>
  <th>Component</th>
  <th>{{ aws_short }} type</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>DNS</td>
  <td><code>AWS::Route53::HostedZone</code></td>
  <td>The hosted zone for your internal DNS.</td>
</tr>
<tr>
  <td>Public load balancer</td>
  <td><code>AWS::ElasticLoadBalancingV2::LoadBalancer</code></td>
  <td>The load balancer for your public subnets.</td>
</tr>
<tr>
  <td>External API server record</td>
  <td><code>AWS::Route53::RecordSetGroup</code></td>
  <td>Alias records for the external API server.</td>
</tr>
<tr>
  <td>External listener</td>
  <td><code>AWS::ElasticLoadBalancingV2::Listener</code></td>
  <td>A listener on port 6443 for the external load balancer.</td>
</tr>
<tr>
  <td>External target group</td>
  <td><code>AWS::ElasticLoadBalancingV2::TargetGroup</code></td>
  <td>The target group for the external load balancer.</td>
</tr>
<tr>
  <td>Private load balancer</td>
  <td><code>AWS::ElasticLoadBalancingV2::LoadBalancer</code></td>
  <td>The load balancer for your private subnets.</td>
</tr>
<tr>
  <td>Internal API server record</td>
  <td><code>AWS::Route53::RecordSetGroup</code></td>
  <td>Alias records for the internal API server.</td>
</tr>
<tr>
  <td>Internal listener</td>
  <td><code>AWS::ElasticLoadBalancingV2::Listener</code></td>
  <td>A listener on port 22623 for the internal load balancer.</td>
</tr>
<tr>
  <td>Internal target group</td>
  <td><code>AWS::ElasticLoadBalancingV2::TargetGroup</code></td>
  <td>The target group for the internal load balancer.</td>
</tr>
<tr>
  <td>Internal listener</td>
  <td><code>AWS::ElasticLoadBalancingV2::Listener</code></td>
  <td>A listener on port 6443 for the internal load balancer.</td>
</tr>
<tr>
  <td>Internal target group</td>
  <td><code>AWS::ElasticLoadBalancingV2::TargetGroup</code></td>
  <td>The target group for the internal load balancer.</td>
</tr>
</tbody>
</table>

The control plane and worker machines require access to the following ports:

**Security groups**

<table>
<thead>
<tr>
  <th>Group</th>
  <th>Type</th>
  <th>IP Protocol</th>
  <th>Port range</th>
</tr>
</thead>
<tbody>
<tr>
  <td rowspan="4"><code>MasterSecurityGroup</code></td>
  <td rowspan="4"><code>AWS::EC2::SecurityGroup</code></td>
  <td><code>icmp</code></td>
  <td><code>0</code></td>
</tr>
<tr>
  <td><code>tcp</code></td>
  <td><code>22</code></td>
</tr>
<tr>
  <td><code>tcp</code></td>
  <td><code>6443</code></td>
</tr>
<tr>
  <td><code>tcp</code></td>
  <td><code>22623</code></td>
</tr>
<tr>
  <td rowspan="2"><code>WorkerSecurityGroup</code></td>
  <td rowspan="2"><code>AWS::EC2::SecurityGroup</code></td>
  <td><code>icmp</code></td>
  <td><code>0</code></td>
</tr>
<tr>
  <td><code>tcp</code></td>
  <td><code>22</code></td>
</tr>
<tr>
  <td rowspan="2"><code>BootstrapSecurityGroup</code></td>
  <td rowspan="2"><code>AWS::EC2::SecurityGroup</code></td>
  <td><code>tcp</code></td>
  <td><code>22</code></td>
</tr>
<tr>
  <td><code>tcp</code></td>
  <td><code>19531</code></td>
</tr>
</tbody>
</table>

The control plane machines require the following Ingress groups. Each Ingress group is an `AWS::EC2::SecurityGroupIngress` resource.

**Control plane Ingress**

<table>
<thead>
<tr>
  <th>Ingress group</th>
  <th>Description</th>
  <th>IP protocol</th>
  <th>Port range</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>MasterIngressEtcd</code></td>
  <td>etcd</td>
  <td><code>tcp</code></td>
  <td><code>2379</code>- <code>2380</code></td>
</tr>
<tr>
  <td><code>MasterIngressVxlan</code></td>
  <td>Vxlan packets</td>
  <td><code>udp</code></td>
  <td><code>6081</code></td>
</tr>
<tr>
  <td><code>MasterIngressWorkerVxlan</code></td>
  <td>Vxlan packets</td>
  <td><code>udp</code></td>
  <td><code>6081</code></td>
</tr>
<tr>
  <td><code>MasterIngressInternal</code></td>
  <td>Internal cluster communication and Kubernetes proxy metrics</td>
  <td><code>tcp</code></td>
  <td><code>9000</code> - <code>9999</code></td>
</tr>
<tr>
  <td><code>MasterIngressWorkerInternal</code></td>
  <td>Internal cluster communication</td>
  <td><code>tcp</code></td>
  <td><code>9000</code> - <code>9999</code></td>
</tr>
<tr>
  <td><code>MasterIngressKube</code></td>
  <td>Kubernetes kubelet, scheduler and controller manager</td>
  <td><code>tcp</code></td>
  <td><code>10250</code> - <code>10259</code></td>
</tr>
<tr>
  <td><code>MasterIngressWorkerKube</code></td>
  <td>Kubernetes kubelet, scheduler and controller manager</td>
  <td><code>tcp</code></td>
  <td><code>10250</code> - <code>10259</code></td>
</tr>
<tr>
  <td><code>MasterIngressIngressServices</code></td>
  <td>Kubernetes Ingress services</td>
  <td><code>tcp</code></td>
  <td><code>30000</code> - <code>32767</code></td>
</tr>
<tr>
  <td><code>MasterIngressWorkerIngressServices</code></td>
  <td>Kubernetes Ingress services</td>
  <td><code>tcp</code></td>
  <td><code>30000</code> - <code>32767</code></td>
</tr>
<tr>
  <td><code>MasterIngressGeneve</code></td>
  <td>Geneve packets</td>
  <td><code>udp</code></td>
  <td><code>6081</code></td>
</tr>
<tr>
  <td><code>MasterIngressWorkerGeneve</code></td>
  <td>Geneve packets</td>
  <td><code>udp</code></td>
  <td><code>6081</code></td>
</tr>
<tr>
  <td><code>MasterIngressIpsecIke</code></td>
  <td>IPsec IKE packets</td>
  <td><code>udp</code></td>
  <td><code>500</code></td>
</tr>
<tr>
  <td><code>MasterIngressWorkerIpsecIke</code></td>
  <td>IPsec IKE packets</td>
  <td><code>udp</code></td>
  <td><code>500</code></td>
</tr>
<tr>
  <td><code>MasterIngressIpsecNat</code></td>
  <td>IPsec NAT-T packets</td>
  <td><code>udp</code></td>
  <td><code>4500</code></td>
</tr>
<tr>
  <td><code>MasterIngressWorkerIpsecNat</code></td>
  <td>IPsec NAT-T packets</td>
  <td><code>udp</code></td>
  <td><code>4500</code></td>
</tr>
<tr>
  <td><code>MasterIngressIpsecEsp</code></td>
  <td>IPsec ESP packets</td>
  <td><code>50</code></td>
  <td><code>All</code></td>
</tr>
<tr>
  <td><code>MasterIngressWorkerIpsecEsp</code></td>
  <td>IPsec ESP packets</td>
  <td><code>50</code></td>
  <td><code>All</code></td>
</tr>
<tr>
  <td><code>MasterIngressInternalUDP</code></td>
  <td>Internal cluster communication</td>
  <td><code>udp</code></td>
  <td><code>9000</code> - <code>9999</code></td>
</tr>
<tr>
  <td><code>MasterIngressWorkerInternalUDP</code></td>
  <td>Internal cluster communication</td>
  <td><code>udp</code></td>
  <td><code>9000</code> - <code>9999</code></td>
</tr>
<tr>
  <td><code>MasterIngressIngressServicesUDP</code></td>
  <td>Kubernetes Ingress services</td>
  <td><code>udp</code></td>
  <td><code>30000</code> - <code>32767</code></td>
</tr>
<tr>
  <td><code>MasterIngressWorkerIngressServicesUDP</code></td>
  <td>Kubernetes Ingress services</td>
  <td><code>udp</code></td>
  <td><code>30000</code> - <code>32767</code></td>
</tr>
</tbody>
</table>

The worker machines require the following Ingress groups. Each Ingress group is an `AWS::EC2::SecurityGroupIngress` resource.

**Worker Ingress**

<table>
<thead>
<tr>
  <th>Ingress group</th>
  <th>Description</th>
  <th>IP protocol</th>
  <th>Port range</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>WorkerIngressVxlan</code></td>
  <td>Vxlan packets</td>
  <td><code>udp</code></td>
  <td><code>6081</code></td>
</tr>
<tr>
  <td><code>WorkerIngressWorkerVxlan</code></td>
  <td>Vxlan packets</td>
  <td><code>udp</code></td>
  <td><code>6081</code></td>
</tr>
<tr>
  <td><code>WorkerIngressInternal</code></td>
  <td>Internal cluster communication</td>
  <td><code>tcp</code></td>
  <td><code>9000</code> - <code>9999</code></td>
</tr>
<tr>
  <td><code>WorkerIngressWorkerInternal</code></td>
  <td>Internal cluster communication</td>
  <td><code>tcp</code></td>
  <td><code>9000</code> - <code>9999</code></td>
</tr>
<tr>
  <td><code>WorkerIngressKube</code></td>
  <td>Kubernetes kubelet, scheduler, and controller manager</td>
  <td><code>tcp</code></td>
  <td><code>10250</code></td>
</tr>
<tr>
  <td><code>WorkerIngressWorkerKube</code></td>
  <td>Kubernetes kubelet, scheduler, and controller manager</td>
  <td><code>tcp</code></td>
  <td><code>10250</code></td>
</tr>
<tr>
  <td><code>WorkerIngressIngressServices</code></td>
  <td>Kubernetes Ingress services</td>
  <td><code>tcp</code></td>
  <td><code>30000</code> - <code>32767</code></td>
</tr>
<tr>
  <td><code>WorkerIngressWorkerIngressServices</code></td>
  <td>Kubernetes Ingress services</td>
  <td><code>tcp</code></td>
  <td><code>30000</code> - <code>32767</code></td>
</tr>
<tr>
  <td><code>WorkerIngressGeneve</code></td>
  <td>Geneve packets</td>
  <td><code>udp</code></td>
  <td><code>6081</code></td>
</tr>
<tr>
  <td><code>WorkerIngressMasterGeneve</code></td>
  <td>Geneve packets</td>
  <td><code>udp</code></td>
  <td><code>6081</code></td>
</tr>
<tr>
  <td><code>WorkerIngressIpsecIke</code></td>
  <td>IPsec IKE packets</td>
  <td><code>udp</code></td>
  <td><code>500</code></td>
</tr>
<tr>
  <td><code>WorkerIngressMasterIpsecIke</code></td>
  <td>IPsec IKE packets</td>
  <td><code>udp</code></td>
  <td><code>500</code></td>
</tr>
<tr>
  <td><code>WorkerIngressIpsecNat</code></td>
  <td>IPsec NAT-T packets</td>
  <td><code>udp</code></td>
  <td><code>4500</code></td>
</tr>
<tr>
  <td><code>WorkerIngressMasterIpsecNat</code></td>
  <td>IPsec NAT-T packets</td>
  <td><code>udp</code></td>
  <td><code>4500</code></td>
</tr>
<tr>
  <td><code>WorkerIngressIpsecEsp</code></td>
  <td>IPsec ESP packets</td>
  <td><code>50</code></td>
  <td><code>All</code></td>
</tr>
<tr>
  <td><code>WorkerIngressMasterIpsecEsp</code></td>
  <td>IPsec ESP packets</td>
  <td><code>50</code></td>
  <td><code>All</code></td>
</tr>
<tr>
  <td><code>WorkerIngressInternalUDP</code></td>
  <td>Internal cluster communication</td>
  <td><code>udp</code></td>
  <td><code>9000</code> - <code>9999</code></td>
</tr>
<tr>
  <td><code>WorkerIngressMasterInternalUDP</code></td>
  <td>Internal cluster communication</td>
  <td><code>udp</code></td>
  <td><code>9000</code> - <code>9999</code></td>
</tr>
<tr>
  <td><code>WorkerIngressIngressServicesUDP</code></td>
  <td>Kubernetes Ingress services</td>
  <td><code>udp</code></td>
  <td><code>30000</code> - <code>32767</code></td>
</tr>
<tr>
  <td><code>WorkerIngressMasterIngressServicesUDP</code></td>
  <td>Kubernetes Ingress services</td>
  <td><code>udp</code></td>
  <td><code>30000</code> - <code>32767</code></td>
</tr>
</tbody>
</table>

You must grant the machines permissions in {{ aws_short }}. The provided CloudFormation templates grant the machines `Allow` permissions for the following `AWS::IAM::Role` objects and provide an `AWS::IAM::InstanceProfile` for each set of roles. If you do not use the templates, you can grant the machines the following broad permissions or the following individual permissions.

**Roles and instance profiles**

<table>
<thead>
<tr>
  <th>Role</th>
  <th>Effect</th>
  <th>Action</th>
  <th>Resource</th>
</tr>
</thead>
<tbody>
<tr>
  <td rowspan="4">Control plane</td>
  <td><code>Allow</code></td>
  <td><code>ec2:*</code></td>
  <td><code>*</code></td>
</tr>
<tr>
  <td><code>Allow</code></td>
  <td><code>elasticloadbalancing:*</code></td>
  <td><code>*</code></td>
</tr>
<tr>
  <td><code>Allow</code></td>
  <td><code>iam:PassRole</code></td>
  <td><code>*</code></td>
</tr>
<tr>
  <td><code>Allow</code></td>
  <td><code>s3:GetObject</code></td>
  <td><code>*</code></td>
</tr>
<tr>
  <td>Worker</td>
  <td><code>Allow</code></td>
  <td><code>ec2:Describe*</code></td>
  <td><code>*</code></td>
</tr>
<tr>
  <td rowspan="3">Bootstrap</td>
  <td><code>Allow</code></td>
  <td><code>ec2:Describe*</code></td>
  <td><code>*</code></td>
</tr>
<tr>
  <td><code>Allow</code></td>
  <td><code>ec2:AttachVolume</code></td>
  <td><code>*</code></td>
</tr>
<tr>
  <td><code>Allow</code></td>
  <td><code>ec2:DetachVolume</code></td>
  <td><code>*</code></td>
</tr>
</tbody>
</table>