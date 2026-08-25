{%- set _mod_docs_content_type = "REFERENCE" %}
# Shared responsibility matrix {id="policy-shared-responsibility_{{ context }}"}

The customer and Red&#160;Hat share responsibility for the monitoring and maintenance of an {{ product_title }} cluster. This documentation illustrates the delineation of responsibilities by area and task. {._abstract}

## Incident and operations management {id="incident-operations-management_{{ context }}"}
The customer is responsible for incident and operations management of customer application data and any custom networking the customer has configured for the cluster network or virtual network.

| Resource |
| --- |
| Red Hat responsibilities |
| Customer responsibilities |
| Application networking |
| Monitor cloud load balancers and native OpenShift router service, and respond to alerts. |
| * Monitor health of service load balancer endpoints. * Monitor health of application routes, and the endpoints behind them. * Report outages to Red Hat. |
| Virtual networking |
| * Monitor cloud load balancers, subnets, and public cloud components necessary for default platform networking, and respond to alerts. * Monitor the Red Hat Management project in {{ GCP }} and the Private Service Connect (PSC) attachments. ^[1]^ |
| Monitor network traffic that is optionally configured through VPC to VPC connection, VPN connection, or Direct connection for potential issues or security threats. |
1.  Applies to {{ product_title }} on {{ GCP }} clusters with PSC only.

## Change management {id="change-management_{{ context }}"}
Red Hat is responsible for enabling changes to the cluster infrastructure and services that the customer will control, as well as maintaining versions for the control plane nodes, infrastructure nodes and services, and worker nodes. The customer is responsible for initiating infrastructure change requests and installing and maintaining optional services and networking configurations on the cluster, as well as all changes to customer data and customer applications.

<table>
<thead>
<tr>
  <th>Resource</th>
  <th>Red Hat responsibilities</th>
  <th>Customer responsibilities</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Logging</td>
  <td><ul><li>Centrally aggregate and monitor platform audit logs.</li><li>Provide and maintain a logging operator to enable the customer to deploy a logging stack for default application logging.</li><li>Provide audit logs upon customer request.</li></ul></td>
  <td><ul><li>Install the optional default application logging operator on the cluster.</li><li>Install, configure, and maintain any optional app logging solutions, such as logging sidecar containers or third-party logging applications.</li><li>Tune size and frequency of application logs being produced by customer applications if they are affecting the stability of the logging stack or the cluster.</li><li>Request platform audit logs through a support case for researching specific incidents.</li></ul></td>
</tr>
<tr>
  <td>Application networking</td>
  <td><ul><li>Set up public cloud load balancers. Provide the ability to set up private load balancers and up to one additional load balancer when required.</li><li>Set up native OpenShift router service. Provide the ability to set the router as private and add up to one additional router shard.</li><li>Install, configure, and maintain OVN-Kubernetes components for default internal pod traffic.</li><li>Provide the ability for the customer to manage <code>NetworkPolicy</code> and <code>EgressNetworkPolicy</code> (firewall) objects.</li></ul></td>
  <td><ul><li>Configure non-default pod network permissions for project and pod networks, pod ingress, and pod egress using <code>NetworkPolicy</code> objects.</li><li>Use {{ cluster_manager_first }} to request a private load balancer for default application routes.</li><li>Use {{ cluster_manager }} to configure up to one additional public or private router shard and corresponding load balancer.</li><li>Request and configure any additional service load balancers for specific services.</li><li>Configure any necessary DNS forwarding rules.</li></ul></td>
</tr>
<tr>
  <td>Cluster networking</td>
  <td><ul><li>Set up cluster management components, such as public or private service endpoints and necessary integration with virtual networking components.</li><li>Set up internal networking components required for internal cluster communication between worker, infrastructure, and control plane nodes.</li></ul></td>
  <td><ul><li>Provide optional non-default IP address ranges for machine CIDR, service CIDR, and pod CIDR if needed through {{ cluster_manager }} when the cluster is provisioned.</li><li>Request that the API service endpoint be made public or private on cluster creation or after cluster creation through {{ cluster_manager }}.</li></ul></td>
</tr>
<tr>
  <td>Virtual networking</td>
  <td><ul><li>Set up and configure virtual networking components required to provision the cluster, including virtual private cloud, subnets, load balancers, internet gateways, NAT gateways, etc.</li><li>Provide the ability for the customer to manage VPN connectivity with on-premise resources, VPC to VPC connectivity, and Direct connectivity as required through {{ cluster_manager }}.</li><li>Setup and configure PSC attachments. ^[1]^</li><li>Enable customers to create and deploy public cloud load balancers for use with service load balancers.</li></ul></td>
  <td><ul><li>Set up and maintain optional public cloud networking components, such as VPC to VPC connection, VPN connection, or Direct connection.</li><li>Request and configure any additional service load balancers for specific services.</li><li>Create a PSC subnet. ^[1]^</li></ul></td>
</tr>
<tr>
  <td>Cluster version</td>
  <td><ul><li>Enable upgrade scheduling process.</li><li>Monitor upgrade progress and remedy any issues encountered.</li><li>Publish changelogs and release notes for minor and maintenance upgrades.</li></ul></td>
  <td><ul><li>Schedule maintenance version upgrades either immediately, for the future, or have automatic upgrades.</li><li>Acknowledge and schedule minor version upgrades.</li><li>Ensure the cluster version stays on a supported minor version.</li><li>Test customer applications on minor and maintenance versions to ensure compatibility.</li></ul></td>
</tr>
<tr>
  <td>Capacity management</td>
  <td><ul><li>Monitor utilization of control plane (control plane nodes and infrastructure nodes).</li><li>Scale or resize control plane nodes to maintain quality of service.</li><li>Monitor utilization of customer resources including Network, Storage and Compute capacity. Where autoscaling features are not enabled alert customer for any changes required to cluster resources (for example, new compute nodes to scale, additional storage, etc).</li></ul></td>
  <td><ul><li>Use the provided {{ cluster_manager }} controls to add or remove additional worker nodes as required.</li><li>Respond to Red Hat notifications regarding cluster resource requirements.</li></ul></td>
</tr>
</tbody>
</table>

1.  Applies to {{ product_title }} on {{ GCP }} clusters with PSC only.

## Access and identity authorization {id="identity-access-management_{{ context }}"}
The access and identity authorization matrix includes responsibilities for managing authorized access to clusters, applications, and infrastructure resources. This includes tasks such as providing access control mechanisms, authentication, authorization, and managing access to resources.

<table>
<thead>
<tr>
  <th>Resource</th>
  <th>Red Hat responsibilities</th>
  <th>Customer responsibilities</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Logging</td>
  <td><ul><li>Adhere to an industry standards-based tiered internal access process for platform audit logs.</li><li>Provide native OpenShift RBAC capabilities.</li></ul></td>
  <td><ul><li>Configure OpenShift RBAC to control access to projects and by extension a project’s application logs.</li><li>For third-party or custom application logging solutions, the customer is responsible for access management.</li></ul></td>
</tr>
<tr>
  <td>Application networking</td>
  <td>Provide native OpenShift RBAC and <code>dedicated-admin</code> capabilities.</td>
  <td><ul><li>Configure OpenShift dedicated-admins and RBAC to control access to route configuration as required.</li><li>Manage Org Admins for Red Hat organization to grant access to {{ cluster_manager }}. {{ cluster_manager }} is used to configure router options and provide service load balancer quota.</li></ul></td>
</tr>
<tr>
  <td>Cluster networking</td>
  <td><ul><li>Provide customer access controls through {{ cluster_manager }}.</li><li>Provide native OpenShift RBAC and <code>dedicated-admin</code> capabilities.</li></ul></td>
  <td><ul><li>Manage Red Hat organization membership of Red Hat accounts.</li><li>Manage Org Admins for Red Hat organization to grant access to {{ cluster_manager }}.</li><li>Configure OpenShift dedicated-admins and RBAC to control access to route configuration as required.</li></ul></td>
</tr>
<tr>
  <td>Virtual networking</td>
  <td>Provide customer access controls through {{ cluster_manager }}.</td>
  <td>Manage optional user access to public cloud components through {{ cluster_manager }}.</td>
</tr>
</tbody>
</table>

## Security and regulation compliance {id="security-regulation-compliance_{{ context }}"}
The following are the responsibilities and controls related to compliance:

<table>
<thead>
<tr>
  <th>Resource</th>
  <th>Red Hat responsibilities</th>
  <th>Customer responsibilities</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Logging</td>
  <td>Send cluster audit logs to a Red Hat SIEM to analyze for security events. Retain audit logs for a defined period of time to support forensic analysis.</td>
  <td>Analyze application logs for security events. Send application logs to an external endpoint through logging sidecar containers or third-party logging applications if longer retention is required than is offered by the default logging stack.</td>
</tr>
<tr>
  <td>Virtual networking</td>
  <td><ul><li>Monitor virtual networking components for potential issues and security threats.</li><li>Leverage additional public cloud provider tools for additional monitoring and protection.</li></ul></td>
  <td><ul><li>Monitor optionally-configured virtual networking components for potential issues and security threats.</li><li>Configure any necessary firewall rules or data center protections as required.</li></ul></td>
</tr>
</tbody>
</table>

## Disaster recovery {id="disaster-recovery_{{ context }}"}
Disaster recovery includes data and configuration backup, replicating data and configuration to the disaster recovery environment, and failover on disaster events.

<table>
<thead>
<tr>
  <th>Resource</th>
  <th>Red Hat responsibilities</th>
  <th>Customer responsibilities</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Virtual networking</td>
  <td>Restore or recreate affected virtual network components that are necessary for the platform to function.</td>
  <td><ul><li>Configure virtual networking connections with more than one tunnel where possible for protection against outages as recommended by the public cloud provider.</li><li>Maintain failover DNS and load balancing if using a global load balancer with multiple clusters.</li></ul></td>
</tr>
</tbody>
</table>