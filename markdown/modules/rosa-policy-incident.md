{%- set _mod_docs_content_type = "CONCEPT" %}
# Incident and operations management {id="rosa-policy-incident_{{ context }}"}

Red&#160;Hat is responsible for overseeing the service components required for default platform networking.
AWS is responsible for protecting the hardware infrastructure that runs all of the services offered in the AWS Cloud. The customer is responsible for incident and operations management of customer application data and any custom networking the customer has configured for the cluster network or virtual network. {._abstract}

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
  <td>Application networking</td>
  <td><strong>Red&#160;Hat</strong> - Monitor native OpenShift router service, and respond to alerts.</td>
  <td>- Monitor health of application routes, and the endpoints behind them.</td>
</tr>
<tr>
  <td>Cluster networking</td>
  <td><strong>Red&#160;Hat</strong> - Monitor, alert, and address incidents related to cluster DNS, network plugin connectivity between cluster components, and the default Ingress Controller.</td>
  <td>- Monitor and address incidents related to optional Ingress Controllers, additional Operators installed through the software catalog, and network plugins replacing the default OpenShift Container Network Interface (CNI) plugins.</td>
</tr>
<tr>
  <td>Virtual networking management</td>
  <td><strong>Red&#160;Hat</strong> - Monitor AWS load balancers, Amazon Virtual Private Cloud (VPC) subnets, and AWS service components necessary for default platform networking. Respond to alerts.</td>
  <td>- Monitor health of AWS load balancer endpoints.</td>
</tr>
<tr>
  <td>Virtual storage management</td>
  <td><strong>Red&#160;Hat</strong> - Monitor Amazon Elastic Block Store (EBS) volumes attached to cluster nodes and Amazon S3 buckets used for the {{ product_title }} service's built-in container image registry. Respond to alerts.</td>
  <td>- Monitor health of application data.</td>
</tr>
<tr>
  <td>Platform monitoring</td>
  <td><strong>Red&#160;Hat</strong> - Maintain a centralized monitoring and alerting system for all {{ product_title }} cluster components, site reliability engineer (SRE) services, and underlying AWS accounts.</td>
  <td></td>
</tr>
<tr>
  <td>Incident management</td>
  <td><strong>Red&#160;Hat</strong> - Raise and manage known incidents. - Share root cause analysis (RCA) drafts with the customer.</td>
  <td>- Raise known incidents through a support case.</td>
</tr>
<tr>
  <td>Infrastructure and data resiliency</td>
  <td><strong>Red&#160;Hat</strong> - There is no Red&#160;Hat-provided backup method available for {{ product_title }} clusters with the Security Token Service (STS).</td>
  <td>- Take regular backups of data and deploy multi-AZ clusters with workloads that follow Kubernetes best practices to ensure high availability within a region.</td>
</tr>
<tr>
  <td>Cluster capacity</td>
  <td><strong>Red&#160;Hat</strong> - Manage the capacity of all control plane and infrastructure nodes on the cluster. - Evaluate cluster capacity during upgrades and in response to cluster alerts.</td>
  <td></td>
</tr>
<tr>
  <td>AWS software (public AWS services)</td>
  <td><strong>AWS</strong> - For information regarding AWS incident and operations management, see "How AWS maintains operational resilience and continuity of service" in the AWS whitepaper linked in <em>Additional resources</em>.</td>
  <td>- Monitor health of AWS resources in the customer account.</td>
</tr>
<tr>
  <td>Hardware/AWS global infrastructure</td>
  <td><strong>AWS</strong> - For information regarding AWS incident and operations management, see "How AWS maintains operational resilience and continuity of service" in the AWS whitepaper linked in <em>Additional resources</em>.</td>
  <td>- Configure, manage, and monitor customer applications and data to ensure application and data security controls are properly enforced.</td>
</tr>
</tbody>
</table>

## Platform monitoring {id="rosa-policy-platform-monitoring_{{ context }}"}
Platform audit logs are securely forwarded to a centralized security information and event monitoring (SIEM) system, where they may trigger configured alerts to the Red&#160;Hat SRE team and are also subject to manual review. Audit logs are retained in the SIEM system for one year. Audit logs for a given cluster are not deleted at the time the cluster is deleted.

Red&#160;Hat monitors the cluster using monitoring and alerting systems that run on Red&#160;Hat managed infrastructure and operate independently of the cluster. Customers retain full access to the Cluster Monitoring Operator stack for their own in-cluster monitoring, alerting, and observability needs.

## Incident management {id="rosa-policy-incident-management_{{ context }}"}
An incident is an event that results in a degradation or outage of one or more Red&#160;Hat services.

An incident can be raised by a customer or a Customer Experience and Engagement (CEE) member through a support case, directly by the centralized monitoring and alerting system, or directly by a member of the SRE team.

Depending on the impact on the service and customer, the incident is categorized in terms of severity. To learn more, see "Production Support Terms of Service" in _Additional resources_.

When managing a new incident, Red&#160;Hat uses the following general workflow:

1.  An SRE first responder is alerted to a new incident and begins an initial investigation.
1.  After the initial investigation, the incident is assigned an incident lead, who coordinates the recovery efforts.
1.  The incident lead manages all communication and coordination around recovery, including any relevant notifications and support case updates.
1.  When the incident is resolved a brief summary of the incident and resolution are provided in the customer-initiated support ticket. This summary helps the customers understand the incident and its resolution in more detail.

If customers require more information in addition to what is provided in the support ticket, they can request the following workflow:

1.  The customer must make a request for the additional information within 5 business days of the incident resolution.
1.  Depending on the severity of the incident, Red&#160;Hat may provide customers with a root cause summary, or a root cause analysis (RCA) in the support ticket. The additional information will be provided within 7 business days for root cause summary and 30 business days for root cause analysis from the incident resolution.

Red&#160;Hat also assists with customer incidents raised through support cases.
Red&#160;Hat can assist with activities including but not limited to:

*   Forensic gathering, including isolating virtual compute
*   Guiding compute image collection
*   Providing collected audit logs

## Cluster capacity {id="rosa-policy-cluster-capacity_{{ context }}"}

The impact of a cluster upgrade on capacity is evaluated as part of the upgrade testing process to ensure that capacity is not negatively impacted by new additions to the cluster. During a cluster upgrade, additional worker nodes are added to make sure that total cluster capacity is maintained during the upgrade process.

Capacity evaluations by the Red&#160;Hat SRE staff also happen in response to alerts from the cluster, after usage thresholds are exceeded for a certain period of time. Such alerts can also result in a notification to the customer.

**Additional resources**
{._additional-resources}

*   [How AWS maintains operational resilience and continuity of service](https://docs.aws.amazon.com/whitepapers/latest/aws-operational-resilience/how-aws-maintains-operational-resilience-and-continuity-of-service.html#incident-management)
*   [Production Support Terms of Service](https://access.redhat.com/support/offerings/production/sla)