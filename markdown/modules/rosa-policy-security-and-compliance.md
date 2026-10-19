{%- set _mod_docs_content_type = "REFERENCE" %}
# Security and regulation compliance {id="rosa-policy-security-compliance_{{ context }}"}

Red&#160;Hat, AWS, and the customer share responsibility for security and regulation compliance. {._abstract}

<table>
<thead>
<tr>
  <th>Resource</th>
  <th>Service responsibilities</th>
  <th>Customer responsibilities</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Logging</td>
  <td><strong>Red&#160;Hat</strong><br><br><ul><li>Send cluster audit logs to a Red&#160;Hat Security Information and Event Management (SIEM) system to analyze for security events. Retain audit logs for a defined period of time to support forensic analysis.</li></ul></td>
  <td><ul><li>Analyze application logs for security events.</li><li>Send application logs to an external endpoint through logging sidecar containers or third-party logging applications if longer retention is required than is offered by the default logging stack.</li></ul></td>
</tr>
<tr>
  <td>Virtual networking management</td>
  <td><strong>Red&#160;Hat</strong><br><br><ul><li>Monitor virtual networking components for potential issues and security threats.</li><li>Use public AWS tools for additional monitoring and protection.</li></ul></td>
  <td><ul><li>Monitor optional configured virtual networking components for potential issues and security threats.</li><li>Configure any necessary firewall rules or customer data center protections as required.</li></ul></td>
</tr>
<tr>
  <td>Virtual storage management</td>
  <td><strong>Red&#160;Hat</strong><br><br><ul><li>Monitor virtual storage components for potential issues and security threats.</li><li>Use public AWS tools for additional monitoring and protection.</li><li>Configure the {{ product_title }} service to encrypt control plane, infrastructure, and worker node volume data by default using the AWS managed Key Management Service (KMS) key that Amazon Elastic Block Store (EBS) provides.</li><li>Configure the {{ product_title }} service to encrypt customer persistent volumes that use the default storage class with the AWS managed KMS key that Amazon EBS provides.</li><li>Provide the ability for the customer to use a customer managed AWS KMS key to encrypt persistent volumes.</li><li>Configure the container image registry to encrypt image registry data at rest using server-side encryption with Amazon S3 managed keys (SSE-3).</li><li>Provide the ability for the customer to create a public or private Amazon S3 image registry to protect their container images from unauthorized user access.</li></ul></td>
  <td><ul><li>Provision Amazon EBS volumes.</li><li>Manage Amazon EBS volume storage to ensure enough storage is available to mount as a volume in {{ product_title }}.</li><li>Create the persistent volume claim and generate a persistent volume though {{ cluster_manager }}.</li></ul></td>
</tr>
<tr>
  <td>Virtual compute management</td>
  <td><strong>Red&#160;Hat</strong><br><br><ul><li>Monitor virtual compute components for potential issues and security threats.</li><li>Use public AWS tools for additional monitoring and protection.</li></ul></td>
  <td><ul><li>Monitor optional configured virtual networking components for potential issues and security threats.</li><li>Configure any necessary firewall rules or customer data center protections as required.</li></ul></td>
</tr>
<tr>
  <td>AWS software (public AWS services)</td>
  <td><strong>AWS</strong><br><br><strong>Compute:</strong> Secure Amazon Elastic Compute Cloud (EC2), used for {{ product_title }} {% if openshift_rosa %} control plane, infrastructure, and worker nodes. {% endif %} {% if openshift_rosa_hcp %} control plane and worker nodes. {% endif %} For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/infrastructure-security.html">Infrastructure security in Amazon EC2</a> in the Amazon EC2 User Guide.<br><br><strong>Storage:</strong> Secure Amazon EBS, used for {{ product_title }} {% if openshift_rosa %} control plane, infrastructure, and worker node volumes, {% endif %} {% if openshift_rosa_hcp %} control plane and worker node volumes, {% endif %} as well as Kubernetes persistent volumes. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/data-protection.html">Data protection in Amazon EC2</a> in the Amazon EC2 User Guide.<br><br><strong>Storage:</strong> Provide AWS KMS, which {{ product_title }} uses to {% if openshift_rosa %} encrypt control plane, infrastructure, worker node volumes and persistent volumes. {% endif %} {% if openshift_rosa_hcp %} encrypt control plane, worker node volumes and persistent volumes. {% endif %} For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the Amazon EC2 User Guide.<br><br><strong>Storage:</strong> Secure Amazon S3, used for the {{ product_title }} service's built-in container image registry. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/security.html">Amazon S3 security</a> in the S3 User Guide.<br><br><strong>Networking:</strong> Provide security capabilities and services to increase privacy and control network access on AWS global infrastructure, including network firewalls built into Amazon Virtual Private Cloud (VPC), private or dedicated network connections, and automatic encryption of all traffic on the AWS global and regional networks between AWS secured facilities. For more information, see the <a href="https://aws.amazon.com/compliance/shared-responsibility-model/">AWS Shared Responsibility Model</a> and <a href="https://docs.aws.amazon.com/whitepapers/latest/introduction-aws-security/infrastructure-security.html">Infrastructure security</a> in the Introduction to AWS Security whitepaper.</td>
  <td><ul><li>Ensure security best practices and the principle of least privilege are followed to protect data on the Amazon EC2 instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/infrastructure-security.html">Infrastructure security in Amazon EC2</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/data-protection.html">Data protection in Amazon EC2</a>.</li><li>Monitor optional configured virtual networking components for potential issues and security threats.</li><li>Configure any necessary firewall rules or customer data center protections as required.</li><li>Create an optional customer managed KMS key and encrypt the Amazon EBS persistent volume using the KMS key.</li><li>Monitor the customer data in virtual storage for potential issues and security threats. For more information, see the <a href="https://aws.amazon.com/compliance/shared-responsibility-model/">shared responsibility model</a>.</li></ul></td>
</tr>
<tr>
  <td>Hardware/AWS global infrastructure</td>
  <td><strong>AWS</strong><br><br><ul><li>Provide the AWS global infrastructure that {{ product_title }} uses to deliver service functionality. For more information regarding AWS security controls, see <a href="https://docs.aws.amazon.com/whitepapers/latest/introduction-aws-security/security-of-the-aws-infrastructure.html">Security of the AWS Infrastructure</a> in the AWS whitepaper.</li><li>Provide documentation for the customer to manage compliance needs and check their security state in AWS using tools such as AWS Artifact and AWS Security Hub. For more information, see <a href="https://docs.aws.amazon.com/ROSA/latest/userguide/compliance-validation.html">Compliance validation for {{ product_title }}</a> in the {{ product_title }} User Guide.</li></ul></td>
  <td><ul><li>Configure, manage, and monitor customer applications and data to ensure application and data security controls are properly enforced.</li><li>Use Identity and Access Management (IAM) tools to apply the appropriate permissions to AWS resources in the customer account.</li></ul></td>
</tr>
</tbody>
</table>