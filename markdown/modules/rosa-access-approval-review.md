{%- set _mod_docs_content_type = "REFERENCE" %}

# Access approval and review {id="rosa-policy-access-approval_{{ context }}"}
New Red&#160;Hat SRE user access requires management approval. Separated or transferred SRE accounts are removed as authorized users through an automated process. Additionally, the SRE performs periodic access review, including management sign-off of authorized user lists.

The access and identity authorization table includes responsibilities for managing authorized access to clusters, applications, and infrastructure resources. This includes tasks such as providing access control mechanisms, authentication, authorization, and managing access to resources.

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
  <td><strong>Red&#160;Hat</strong><br><br><ul><li>Adhere to an industry standards-based tiered internal access process for platform audit logs.</li><li>Provide native OpenShift RBAC capabilities.</li></ul></td>
  <td><ul><li>Configure OpenShift RBAC to control access to projects and by extension a project's application logs.</li><li>For third-party or custom application logging solutions, the customer is responsible for access management.</li></ul></td>
</tr>
<tr>
  <td>Application networking</td>
  <td><strong>Red&#160;Hat</strong><br><br><ul><li>Provide native OpenShift RBAC and <code>dedicated-admin</code> capabilities.</li></ul></td>
  <td><ul><li>Configure OpenShift <code>dedicated-admin</code> and RBAC to control access to route configuration as required.</li><li>Manage organization administrators for Red&#160;Hat to grant access to {{ cluster_manager }}. The cluster manager is used to configure router options and provide service load balancer quota.</li></ul></td>
</tr>
<tr>
  <td>Cluster networking</td>
  <td><strong>Red&#160;Hat</strong><br><br><ul><li>Provide customer access controls through {{ cluster_manager }}.</li><li>Provide native OpenShift RBAC and <code>dedicated-admin</code> capabilities.</li></ul></td>
  <td><ul><li>Manage Red&#160;Hat organization membership of Red&#160;Hat accounts.</li><li>Manage organization administrators for Red&#160;Hat to grant access to {{ cluster_manager }}.</li><li>Configure OpenShift <code>dedicated-admin</code> and RBAC to control access to route configuration as required.</li></ul></td>
</tr>
<tr>
  <td>Virtual networking management</td>
  <td><strong>Red&#160;Hat</strong><br><br><ul><li>Provide customer access controls through {{ cluster_manager }}.</li></ul></td>
  <td><ul><li>Manage optional user access to AWS components through {{ cluster_manager }}.</li></ul></td>
</tr>
<tr>
  <td>Virtual storage management</td>
  <td><strong>Red&#160;Hat</strong><br><br><ul><li>Provide customer access controls through</li></ul>Red&#160;Hat OpenShift Cluster Manager.</td>
  <td><ul><li>Manage optional user access to AWS components through {{ cluster_manager }}.</li><li>Create AWS IAM roles and attached policies necessary to enable ROSA service access.</li></ul></td>
</tr>
<tr>
  <td>Virtual compute management</td>
  <td><strong>Red&#160;Hat</strong><br><br><ul><li>Provide customer access controls through</li></ul>Red&#160;Hat OpenShift Cluster Manager.</td>
  <td><ul><li>Manage optional user access to AWS components through {{ cluster_manager }}.</li><li>Create AWS IAM roles and attached policies necessary to enable ROSA service access.</li></ul></td>
</tr>
<tr>
  <td>AWS software (public AWS services)</td>
  <td><strong>AWS</strong><br><br><strong>Compute:</strong> Provide the Amazon EC2 service, {% if openshift_rosa_hcp %} used for ROSA control plane and worker nodes. {% endif %} {% if not openshift_rosa_hcp %} used for ROSA control plane, infrastructure, and worker nodes. {% endif %} <br><br><strong>Storage:</strong> Provide Amazon EBS, used to allow ROSA to provision local node storage and persistent volume storage for the cluster.<br><br><strong>Storage:</strong> Provide Amazon S3, used for the service's built-in image registry.<br><br><strong>Networking:</strong> Provide AWS Identity and Access Management (IAM), used by customers to control access to ROSA resources running on customer accounts.</td>
  <td><ul><li>Create AWS IAM roles and attached policies necessary to enable ROSA service access.</li><li>Use IAM tools to apply the appropriate permissions to AWS</li></ul>resources in the customer account.<br><br><ul><li>To enable ROSA across your AWS organization, the customer is</li></ul>responsible for managing AWS Organizations administrators.<br><br><ul><li>To enable ROSA across your AWS organization, the customer is</li></ul>responsible for distributing the ROSA entitlement grant using AWS License Manager.</td>
</tr>
<tr>
  <td>Hardware and AWS global infrastructure</td>
  <td><strong>AWS</strong><br><br><ul><li>For information about physical access controls for AWS data centers, see <a href="https://aws.amazon.com/compliance/data-center/controls/">Our Controls</a> on the AWS Cloud Security page.</li></ul></td>
  <td><ul><li>Customer is not responsible for AWS global infrastructure.</li></ul></td>
</tr>
</tbody>
</table>