{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ aws_short }} component secret permissions requirements {id="cco-short-term-creds-component-permissions-aws_{{ context }}"}

You should familiarize yourself with the permissions required by the {{ product_title }} components. These values are in the `CredentialsRequest` custom resource (CR) for each component. {._abstract}

{{ product_title }} components require the following permissions:


:::note

These permissions apply to all resources. Unless specified, there are no request conditions on these permissions.

:::


<table>
<tbody>
<tr>
  <td>Component</td>
  <td>Custom resource</td>
  <td>Required permissions for services</td>
</tr>
<tr>
  <td>{{ cluster_capi_operator }}</td>
  <td><code>openshift-cluster-api-aws</code></td>
  <td><strong>EC2</strong><br><br><ul><li><code>ec2:CreateTags</code></li><li><code>ec2:DescribeAvailabilityZones</code></li><li><code>ec2:DescribeDhcpOptions</code></li><li><code>ec2:DescribeImages</code></li><li><code>ec2:DescribeInstances</code></li><li><code>ec2:DescribeInternetGateways</code></li><li><code>ec2:DescribeSecurityGroups</code></li><li><code>ec2:DescribeSubnets</code></li><li><code>ec2:DescribeVpcs</code></li><li><code>ec2:DescribeNetworkInterfaces</code></li><li><code>ec2:DescribeNetworkInterfaceAttribute</code></li><li><code>ec2:ModifyNetworkInterfaceAttribute</code></li><li><code>ec2:RunInstances</code></li><li><code>ec2:TerminateInstances</code></li></ul><strong>Elastic load balancing</strong><br><br><ul><li><code>elasticloadbalancing:DescribeLoadBalancers</code></li><li><code>elasticloadbalancing:DescribeTargetGroups</code></li><li><code>elasticloadbalancing:DescribeTargetHealth</code></li><li><code>elasticloadbalancing:RegisterInstancesWithLoadBalancer</code></li><li><code>elasticloadbalancing:RegisterTargets</code></li><li><code>elasticloadbalancing:DeregisterTargets</code></li></ul><strong>Identity and Access Management (IAM)</strong><br><br><ul><li><code>iam:PassRole</code></li><li><code>iam:CreateServiceLinkedRole</code></li></ul><strong>Key Management Service (KMS)</strong><br><br><ul><li><code>kms:Decrypt</code></li><li><code>kms:Encrypt</code></li><li><code>kms:GenerateDataKey</code></li><li><code>kms:GenerateDataKeyWithoutPlainText</code></li><li><code>kms:DescribeKey</code></li><li><code>kms:RevokeGrant</code>^[1]^</li><li><code>kms:CreateGrant</code> ^[1]^</li><li><code>kms:ListGrants</code> ^[1]^</li></ul></td>
</tr>
<tr>
  <td>Machine API Operator</td>
  <td><code>openshift-machine-api-aws</code></td>
  <td><strong>EC2</strong><br><br><ul><li><code>ec2:CreateTags</code></li><li><code>ec2:DescribeAvailabilityZones</code></li><li><code>ec2:DescribeDhcpOptions</code></li><li><code>ec2:DescribeImages</code></li><li><code>ec2:DescribeInstances</code></li><li><code>ec2:DescribeInstanceTypes</code></li><li><code>ec2:DescribeInternetGateways</code></li><li><code>ec2:DescribeSecurityGroups</code></li><li><code>ec2:DescribeRegions</code></li><li><code>ec2:DescribeSubnets</code></li><li><code>ec2:DescribeVpcs</code></li><li><code>ec2:RunInstances</code></li><li><code>ec2:TerminateInstances</code></li></ul><strong>Elastic load balancing</strong><br><br><ul><li><code>elasticloadbalancing:DescribeLoadBalancers</code></li><li><code>elasticloadbalancing:DescribeTargetGroups</code></li><li><code>elasticloadbalancing:DescribeTargetHealth</code></li><li><code>elasticloadbalancing:RegisterInstancesWithLoadBalancer</code></li><li><code>elasticloadbalancing:RegisterTargets</code></li><li><code>elasticloadbalancing:DeregisterTargets</code></li></ul><strong>Identity and Access Management (IAM)</strong><br><br><ul><li><code>iam:PassRole</code></li><li><code>iam:CreateServiceLinkedRole</code></li></ul><strong>Key Management Service (KMS)</strong><br><br><ul><li><code>kms:Decrypt</code></li><li><code>kms:Encrypt</code></li><li><code>kms:GenerateDataKey</code></li><li><code>kms:GenerateDataKeyWithoutPlainText</code></li><li><code>kms:DescribeKey</code></li><li><code>kms:RevokeGrant</code>^[1]^</li><li><code>kms:CreateGrant</code> ^[1]^</li><li><code>kms:ListGrants</code> ^[1]^</li></ul></td>
</tr>
<tr>
  <td>Cloud Credential Operator</td>
  <td><code>cloud-credential-operator-iam-ro</code></td>
  <td><strong>Identity and Access Management (IAM)</strong><br><br><ul><li><code>iam:GetUser</code></li><li><code>iam:GetUserPolicy</code></li><li><code>iam:ListAccessKeys</code></li></ul></td>
</tr>
<tr>
  <td>Cluster Image Registry Operator</td>
  <td><code>openshift-image-registry</code></td>
  <td><strong>S3</strong><br><br><ul><li><code>s3:CreateBucket</code></li><li><code>s3:DeleteBucket</code></li><li><code>s3:PutBucketTagging</code></li><li><code>s3:GetBucketTagging</code></li><li><code>s3:PutBucketPublicAccessBlock</code></li><li><code>s3:GetBucketPublicAccessBlock</code></li><li><code>s3:PutEncryptionConfiguration</code></li><li><code>s3:GetEncryptionConfiguration</code></li><li><code>s3:PutLifecycleConfiguration</code></li><li><code>s3:GetLifecycleConfiguration</code></li><li><code>s3:GetBucketLocation</code></li><li><code>s3:ListBucket</code></li><li><code>s3:GetObject</code></li><li><code>s3:PutObject</code></li><li><code>s3:DeleteObject</code></li><li><code>s3:ListBucketMultipartUploads</code></li><li><code>s3:AbortMultipartUpload</code></li><li><code>s3:ListMultipartUploadParts</code></li></ul></td>
</tr>
<tr>
  <td>Ingress Operator</td>
  <td><code>openshift-ingress</code></td>
  <td><strong>Elastic load balancing</strong><br><br><ul><li><code>elasticloadbalancing:DescribeLoadBalancers</code></li></ul><strong>Route 53</strong><br><br><ul><li><code>route53:ListHostedZones</code></li><li><code>route53:ListTagsForResources</code></li><li><code>route53:ChangeResourceRecordSets</code></li></ul><strong>Tag</strong><br><br><ul><li><code>tag:GetResources</code></li></ul><strong>Security Token Service (STS)</strong><br><br><ul><li><code>sts:AssumeRole</code></li></ul></td>
</tr>
<tr>
  <td>Cluster Network Operator</td>
  <td><code>openshift-cloud-network-config-controller-aws</code></td>
  <td><strong>EC2</strong><br><br><ul><li><code>ec2:DescribeInstances</code></li><li><code>ec2:DescribeInstanceStatus</code></li><li><code>ec2:DescribeInstanceTypes</code></li><li><code>ec2:UnassignPrivateIpAddresses</code></li><li><code>ec2:AssignPrivateIpAddresses</code></li><li><code>ec2:UnassignIpv6Addresses</code></li><li><code>ec2:AssignIpv6Addresses</code></li><li><code>ec2:DescribeSubnets</code></li><li><code>ec2:DescribeNetworkInterfaces</code></li></ul></td>
</tr>
<tr>
  <td>AWS Elastic Block Store CSI Driver Operator</td>
  <td><code>aws-ebs-csi-driver-operator</code></td>
  <td><strong>EC2</strong><br><br><ul><li><code>ec2:AttachVolume</code></li><li><code>ec2:CreateSnapshot</code></li><li><code>ec2:CreateTags</code></li><li><code>ec2:CreateVolume</code></li><li><code>ec2:DeleteSnapshot</code></li><li><code>ec2:DeleteTags</code></li><li><code>ec2:DeleteVolume</code></li><li><code>ec2:DescribeInstances</code></li><li><code>ec2:DescribeSnapshots</code></li><li><code>ec2:DescribeTags</code></li><li><code>ec2:DescribeVolumes</code></li><li><code>ec2:DescribeVolumesModifications</code></li><li><code>ec2:DetachVolume</code></li><li><code>ec2:ModifyVolume</code></li><li><code>ec2:DescribeAvailabilityZones</code></li><li><code>ec2:EnableFastSnapshotRestores</code></li></ul><strong>Key Management Service (KMS)</strong><br><br><ul><li><code>kms:ReEncrypt*</code></li><li><code>kms:Decrypt</code></li><li><code>kms:Encrypt</code></li><li><code>kms:GenerateDataKey</code></li><li><code>kms:GenerateDataKeyWithoutPlainText</code></li><li><code>kms:DescribeKey</code></li><li><code>kms:RevokeGrant</code>^[1]^</li><li><code>kms:CreateGrant</code> ^[1]^</li><li><code>kms:ListGrants</code> ^[1]^</li></ul></td>
</tr>
</tbody>
</table>

1.  Request condition: `kms:GrantIsForAWSResource: true`