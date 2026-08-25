{% if context == "rosa-classic-creating-a-cluster-quickly-terraform" %}
{%- set tf_classic = true -%}
{% endif %}
{% if context == "rosa-hcp-creating-a-cluster-quickly-terraform" %}
{%- set tf_hcp = true -%}
{% endif %}
{% if context == "rosa-hcp-quickstart-guide" %}
{%- set hcp_quickstart = true -%}
{% endif %}
{% if context == "rosa-hcp-sts-creating-a-cluster-quickly" %}
{%- set hcp = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# Overview of the default cluster specifications {id="rosa-sts-overview-of-the-default-cluster-specifications_{{ context }}"}

You can quickly create a {{ product_title }} cluster by using the default installation options. {._abstract}

**Default {{ product_title }} cluster specifications**

<table>
<thead>
<tr>
  <th>Component</th>
  <th>Default specifications</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Accounts and roles</td>
  <td><ul><li>Default IAM role prefix: <code>rosa-<6-digit-alphanumeric-string></code></li><li>Default IAM role prefix: <code>ManagedOpenShift</code></li><li>Default IAM role prefix: <code>HCP-ROSA</code></li><li>No cluster admin role created</li></ul></td>
</tr>
<tr>
  <td>Cluster settings</td>
  <td><ul><li>Default cluster version: <code>4.14</code></li><li>Cluster name: <code>rosa-<6-digit-alphanumeric-string></code></li><li>Default AWS region for installations using the {{ cluster_manager_first }} {{ hybrid_console_second }}: us-east-2 (US East, Ohio)</li><li>Availability: Multi zone for the data plane</li><li>EC2 Instance Metadata Service (IMDS) is enabled and allows the use of IMDSv1 or IMDSv2 (token optional)</li><li>Default cluster version: Latest</li><li>Default AWS region for installations using the {{ cluster_manager_first }} {{ hybrid_console_second }}: us-east-1 (US East, North Virginia)</li><li>Default AWS region for installations using the {{ rosa_cli }} (<code>rosa</code>): Defined by your <code>aws</code> CLI configuration</li><li>Default EC2 IMDS endpoints (both v1 and v2) are enabled</li><li>EC2 Instance Metadata Service (IMDS) is enabled and allows the use of IMDSv1 or IMDSv2 (token optional)</li><li>Availability: Single zone for the data plane</li><li>Monitoring for user-defined projects: Enabled</li><li>No cluster admin role created</li></ul></td>
</tr>
<tr>
  {% if not (openshift_rosa_hcp or hcp) %}<td>Encryption</td>{% endif %}
  {% if not (openshift_rosa_hcp or hcp) %}<td><ul><li>Cloud storage is encrypted at rest</li><li>Additional etcd encryption is not enabled</li><li>The default AWS Key Management Service (KMS) key is used as the encryption key for persistent data</li></ul></td>{% endif %}
</tr>
<tr>
  {% if openshift_rosa or tf_classic %}<td>Control plane node configuration</td>{% endif %}
  {% if openshift_rosa or tf_classic %}<td><ul><li>Control plane node instance type: m5.2xlarge (8 vCPU, 32 GiB RAM)</li><li>Control plane node count: 3</li></ul></td>{% endif %}
</tr>
<tr>
  {% if not (openshift_rosa_hcp or hcp) %}<td>Infrastructure node configuration</td>{% endif %}
  {% if not (openshift_rosa_hcp or hcp) %}<td><ul><li>Infrastructure node instance type: r5.xlarge (4 vCPU, 32 GiB RAM)</li><li>Infrastructure node count: 2</li></ul></td>{% endif %}
</tr>
<tr>
  <td>Compute node machine pool</td>
  <td><ul><li>Compute node instance type: m5.xlarge (4 vCPU 16, GiB RAM)</li><li>Compute node count: 2</li><li>Compute node count: 3</li><li>Autoscaling: Not enabled</li><li>No additional node labels</li></ul></td>
</tr>
<tr>
  <td>Networking configuration</td>
  <td><ul><li>Cluster privacy: Public</li><li>Cluster privacy: public or private</li><li>You can choose to create a new VPC during the Terraform cluster creation process.</li><li>You must have configured your own Virtual Private Cloud (VPC)</li><li>No cluster-wide proxy is configured</li></ul></td>
</tr>
<tr>
  <td>Classless Inter-Domain Routing (CIDR) ranges</td>
  <td><ul><li>Machine CIDR: 10.0.0.0/16</li><li>Service CIDR: 172.30.0.0/16</li><li>Pod CIDR: 10.128.0.0/14</li><li>Machine CIDR: 10.0.0.0/16</li><li>Service CIDR: 172.30.0.0/16</li><li>Pod CIDR: 10.128.0.0/14</li><li>Host prefix: /23</li></ul>+<dl><dt>Note</dt><dd>The static IP address <code>172.20.0.1</code> is reserved for the internal Kubernetes API address. The machine, pod, and service CIDRs ranges must not conflict with this IP address.</dd></dl></td>
</tr>
<tr>
  <td>Cluster roles and policies</td>
  <td><ul><li>Mode used to create the Operator roles and the OpenID Connect (OIDC) provider: <code>auto</code></li><li>A configured <code>ocm-role</code>, which is required for all {{ product_title }} clusters.</li></ul>+<dl><dt>Note</dt><dd>For installations that use {{ cluster_manager }} on the {{ hybrid_console_second }}, the <code>auto</code> mode requires an admin-privileged {{ cluster_manager }} role (ocm-role).</dd></dl><ul><li>Default Operator role prefix: <code>rosa-<6-digit-alphanumeric-string></code></li><li>Default Operator role prefix: <code><cluster_name>-<4_digit_random_string></code></li></ul></td>
</tr>
<tr>
  <td>Storage</td>
  <td><ul><li>Node volumes:<ul><li>Type: AWS EBS GP3</li><li>Default size: 300GiB (adjustable at creation time)</li></ul></li><li>Workload persistent volumes:<ul><li>Default StorageClass: gp3-csi</li><li>Provisioner: ebs.csi.aws.com</li><li>Dynamic persistent volume provisioning</li></ul></li></ul></td>
</tr>
<tr>
  <td>Cluster update strategy</td>
  <td><ul><li>Individual updates</li><li>1 hour grace period for node draining</li></ul></td>
</tr>
</tbody>
</table>

{% if context == "rosa-classic-creating-a-cluster-quickly-terraform" %}
{%- set tf_classic = false -%}
{% endif %}
{% if context == "rosa-hcp-creating-a-cluster-quickly-terraform" %}
{%- set tf_hcp = false -%}
{% endif %}
{% if context == "rosa-hcp-quickstart-guide" %}
{%- set hcp_quickstart = false -%}
{% endif %}
{% if context == "rosa-hcp-sts-creating-a-cluster-quickly" %}
{%- set hcp = false -%}
{% endif %}