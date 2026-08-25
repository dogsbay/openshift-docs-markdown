{%- set _mod_docs_content_type = "REFERENCE" %}
# Change management {id="rosa-policy-change-management_{{ context }}"}

This section describes the policies about how cluster and configuration changes, patches, and releases are managed. {._abstract}

Red&#160;Hat is responsible for enabling changes to the cluster infrastructure and services that the customer will control, as well as maintaining versions for the control plane nodes, infrastructure nodes and services, and worker nodes. AWS is responsible for protecting the hardware infrastructure that runs all of the services offered in the
AWS Cloud. The customer is responsible for initiating infrastructure change requests and installing and maintaining optional services and networking configurations on the cluster, as well as all changes to customer data and customer applications.

## Customer-initiated changes {id="rosa-policy-customer-initiated-changes_{{ context }}"}

You can initiate changes using self-service capabilities such as cluster deployment, worker node scaling, or cluster deletion.

Change history is captured in the **Cluster History** section in the OpenShift Cluster Manager **Overview tab**, and is available for you to view. The change history includes, but is not limited to, logs from the following changes:

*   Adding or removing identity providers
*   Adding or removing users to or from the `dedicated-admins` group
*   Scaling the cluster compute nodes
*   Scaling the cluster load balancer
*   Scaling the cluster persistent storage
*   Upgrading the cluster

You can implement a maintenance exclusion by avoiding changes in {{ cluster_manager }} for the following components:

*   Deleting a cluster
*   Adding, modifying, or removing identity providers
*   Adding, modifying, or removing a user from an elevated group
*   Installing or removing add-ons
*   Modifying cluster networking configurations
*   Adding, modifying, or removing machine pools
*   Enabling or disabling user workload monitoring
*   Initiating an upgrade


:::important

To enforce the maintenance exclusion, ensure machine pool autoscaling or automatic upgrade policies have been disabled. After the maintenance exclusion has been lifted, proceed with enabling machine pool autoscaling or automatic upgrade policies as desired.

:::


## Red&#160;Hat-initiated changes {id="rosa-policy-red-hat-initiated-changes_{{ context }}"}

Red&#160;Hat site reliability engineering (SRE) manages the infrastructure, code, and configuration of {{ product_title }} using a GitOps workflow and fully automated CI/CD pipelines. This process ensures that Red&#160;Hat can safely introduce service improvements on a continuous basis without negatively impacting customers.

Every proposed change undergoes a series of automated verifications immediately upon check-in. Changes are then deployed to a staging environment where they undergo automated integration testing. Finally, changes are deployed to the production environment. Each step is fully automated.

An authorized Red&#160;Hat SRE reviewer must approve advancement to each step. The reviewer cannot be the same individual who proposed the change. All changes and approvals are fully auditable as part of the GitOps workflow.

Some changes are released to production incrementally, using feature flags to control availability of new features to specified clusters or customers, such as private or public previews.

## Patch management {id="rosa-policy-patch-management_{{ context }}"}

OpenShift Container Platform software and the underlying immutable Red&#160;Hat CoreOS (RHCOS) operating system image are patched for bugs and vulnerabilities in regular z-stream upgrades. Read more about [RHCOS architecture](https://access.redhat.com/documentation/en-us/openshift_container_platform/4.6/html/architecture/architecture-rhcos) in the OpenShift Container Platform documentation.

## Release management {id="rosa-policy-release-management_{{ context }}"}

Red&#160;Hat does not automatically upgrade your clusters. You can schedule to upgrade the clusters at regular intervals (recurring upgrade) or just once (individual upgrade) using the {{ cluster_manager }} web console. Red&#160;Hat might forcefully upgrade a cluster to a new z-stream version only if the cluster is affected by a critical impact CVE.


:::note

Because the required permissions can change between y-stream releases, the AWS managed policies are automatically updated before an upgrade can be performed.

:::


{% if not openshift_dedicated %}
You can review the history of all cluster upgrade events in the {{ cluster_manager }} web console.
{% endif %}
{% if openshift_dedicated %}
You can review the history of all cluster upgrade events in the {{ cluster_manager }} web console. For more information about releases, see the [Life Cycle policy](https://access.redhat.com/support/policy/updates/openshift/dedicated).
{% endif %}

## Service and Customer resource responsibilities {id="rosa-policy-resource-responsibilities_{{ context }}"}

The following table defines the responsibilities for cluster resources.

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
  <td><strong>Red&#160;Hat</strong><br><br><ul><li>Centrally aggregate and monitor platform audit logs.</li><li>Provide and maintain a logging Operator to enable the customer to deploy a logging stack for default application logging.</li><li>Provide audit logs upon customer request.</li></ul></td>
  <td><ul><li>Install the optional default application logging Operator on the cluster.</li><li>Install, configure, and maintain any optional application logging solutions, such as logging sidecar containers or third-party logging applications.</li><li>Tune size and frequency of application logs being produced by customer applications if they are affecting the stability of the logging stack or the cluster.</li><li>Request platform audit logs through a support case for researching specific incidents.</li></ul></td>
</tr>
<tr>
  <td>Application networking</td>
  <td><strong>Red&#160;Hat</strong><br><br><ul><li>Set up public load balancers. Provide the ability to set up private load balancers and up to one additional load balancer when required.</li><li>Set up native OpenShift router service. Provide the ability to set the router as private and add up to one additional router shard.</li><li>Install, configure, and maintain OVN-Kubernetes components for default internal pod traffic.</li><li>Provide the ability for the customer to manage <code>NetworkPolicy</code> and <code>EgressNetworkPolicy</code> (firewall) objects.</li></ul></td>
  <td><ul><li>Configure non-default pod network permissions for project and pod networks, pod ingress, and pod egress using <code>NetworkPolicy</code> objects.</li><li>Use {{ cluster_manager }} to request a private load balancer for default application routes.</li><li>Use {{ cluster_manager }} to configure up to one additional public or private router shard and corresponding load balancer.</li><li>Request and configure any additional service load balancers for specific services.</li><li>Configure any necessary DNS forwarding rules.</li></ul></td>
</tr>
<tr>
  <td>Cluster networking</td>
  <td><strong>Red&#160;Hat</strong><br><br><ul><li>Set up cluster management components, such as public or private service endpoints and necessary integration with Amazon VPC components.</li><li>Set up internal networking components required for internal cluster communication between worker</li></ul>clusters and control planes.</td>
  <td><ul><li>Configure your firewall to grant access to the required OpenShift and AWS domains and ports before the cluster is provisioned. For more information, see "AWS firewall prerequisites".</li><li>Provide optional non-default IP address ranges for machine CIDR, service CIDR, and pod CIDR if needed through {{ cluster_manager }} when the cluster is provisioned.</li><li>Request that the API service endpoint be made public or private on cluster creation or after cluster creation through {{ cluster_manager }}.</li><li>Create additional Ingress Controllers to publish additional application routes.</li><li>Install, configure, and upgrade optional CNI plugins if clusters are installed without the default OpenShift CNI plugins.</li></ul></td>
</tr>
<tr>
  <td>Virtual networking management</td>
  <td><strong>Red&#160;Hat</strong><br><br><ul><li>Set up and configure Amazon VPC components required to provision the cluster, such as subnets, load balancers, internet gateways, and NAT gateways.</li><li>Provide the ability for the customer to</li></ul>manage AWS VPN connectivity with on-premise resources, Amazon VPC-to-VPC connectivity, and AWS Direct Connect as required through  {{ cluster_manager }}.<br><br><ul><li>Enable customers to create and deploy AWS load balancers for use with service load balancers.</li></ul></td>
  <td><ul><li>Set up and maintain optional Amazon VPC components, such as Amazon VPC-to-VPC connection, AWS VPN connection, or AWS Direct Connect.</li><li>Request and configure any additional service load balancers for specific services.</li></ul></td>
</tr>
<tr>
  <td>Virtual compute management</td>
  <td><strong>Red&#160;Hat</strong><br><br><ul><li>Set up and configure the ROSA control plane and data plane to use Amazon EC2 instances for cluster compute.</li><li>Monitor and manage the deployment of Amazon EC2 control plane and infrastructure nodes on the cluster.</li></ul></td>
  <td><ul><li>Monitor and manage Amazon EC2 worker nodes by creating a</li></ul>machine pool using the OpenShift Cluster Manager or the ROSA CLI (<code>rosa</code>).<ul><li>Manage changes to customer-deployed applications and application data.</li></ul></td>
</tr>
<tr>
  <td>Cluster version</td>
  <td><strong>Red&#160;Hat</strong><br><br><ul><li>Enable upgrade scheduling process.</li><li>Monitor upgrade progress and remedy any issues encountered.</li><li>Publish change logs and release notes for patch release upgrades.</li></ul></td>
  <td><ul><li>Either set up automatic upgrades or schedule patch release upgrades immediately or for the future.</li><li>Acknowledge and schedule minor version upgrades.</li><li>Test customer applications on patch releases to ensure compatibility.</li></ul></td>
</tr>
<tr>
  <td>Capacity management</td>
  <td><strong>Red&#160;Hat</strong><br><br><ul><li>Monitor the use of the control plane.</li></ul>Control planes include control plane nodes and infrastructure nodes.<ul><li>Scale and resize control plane to maintain quality of service.</li></ul></td>
  <td><ul><li>Monitor worker node utilization and, if appropriate, enables the auto-scaling feature.</li><li>Determine the scaling strategy of the cluster. See the additional resources for more information on machine pools.</li><li>Use the provided {{ cluster_manager }} controls to add or remove additional worker nodes as required.</li><li>Respond to Red&#160;Hat notifications regarding cluster resource requirements.</li></ul></td>
</tr>
<tr>
  <td>Virtual storage management</td>
  <td><strong>Red&#160;Hat</strong><br><br><ul><li>Set up and configure Amazon EBS to provision local node storage and persistent volume storage for the cluster.</li><li>Set up and configure the built-in image registry to use Amazon S3 bucket storage. ^[1]^</li><li>Regularly prune image registry resources in</li></ul>Amazon S3 to optimize Amazon S3 usage and cluster performance. ^[2]^</td>
  <td><ul><li>Optionally configure the Amazon EBS CSI driver or the Amazon</li></ul>EFS CSI driver to provision persistent volumes on the cluster.</td>
</tr>
<tr>
  <td>AWS software (public AWS services)</td>
  <td><strong>AWS</strong><br><br><strong>Compute:</strong> Provide the Amazon EC2 service, used for ROSA relevant resources.<br><br><strong>Storage:</strong> Provide Amazon EBS, used by ROSA to provision local node storage and persistent volume storage for the cluster.<br><br><strong>Storage:</strong> Provide Amazon S3, used for the ROSAbuilt-in image registry.<br><br><strong>Networking:</strong>Provide the following AWS Cloud services, used by ROSAto satisfy virtual networkinginfrastructure needs:<br><br><ul><li><ul><li>Amazon VPC</li><li>Elastic Load Balancing</li><li>AWS IAM</li><li>AWS STS</li></ul></li></ul><strong>Networking:</strong>Provide the following AWS services, which customers can optionally integrate with ROSA:<br><br><ul><li>AWS VPN</li><li>AWS Direct Connect</li><li>AWS PrivateLink</li><li>AWS Transit Gateway</li></ul></td>
  <td><ul><li>Sign requests using an access key ID and secret access key</li></ul>associated with an IAM principal or STS temporary securitycredentials.<ul><li>Specify VPC subnets for the cluster to use during cluster</li></ul>creation.<ul><li>Optionally configure a customer-managed VPC for use with ROSA clusters (required for PrivateLink and HCP clusters).</li></ul></td>
</tr>
<tr>
  <td>Hardware/AWS global infrastructure</td>
  <td><strong>AWS</strong><br><br><ul><li>For information regarding  management controls for AWS data centers, see <a href="https://aws.amazon.com/compliance/data-center/controls">Our Controls</a> on the AWS Cloud Security page.</li><li>For information regarding change management best practices, see <a href="https://aws.amazon.com/solutions/guidance/change-management-on-aws/">Guidance for Change Management on AWS</a> in the AWS Solutions Library.</li></ul></td>
  <td><ul><li>Implement change management best practices for customer</li></ul>applications and data hosted on the AWS Cloud.</td>
</tr>
</tbody>
</table>

1.  For more information on authentication flow for AWS STS, see [Authentication flow for AWS STS](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html/authentication_and_authorization/managing-cloud-provider-credentials#cco-short-term-creds-auth-flow-aws-diagram_cco-short-term-creds).
1.  For more information on pruning images, see [Automatically pruning Images](https://docs.redhat.com/en/documentation/openshift_container_platform/4.21/html/building_applications/pruning-objects).