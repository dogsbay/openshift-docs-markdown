{%- set _mod_docs_content_type = "REFERENCE" %}
# Incident and operations management {id="policy-incident_{{ context }}"}

This documentation details the Red&#160;Hat responsibilities for the {{ product_title }} managed service.
The cloud provider is responsible for protecting the hardware infrastructure that runs the services offered by the cloud provider.
The customer is responsible for incident and operations management of customer application data and any custom networking the customer has configured for the cluster network or virtual network. {._abstract}

## Platform monitoring {id="platform-monitoring_{{ context }}"}
A Red&#160;Hat Site Reliability Engineer (SRE) maintains a centralized monitoring and alerting system for all {{ product_title }} cluster components, SRE services, and underlying cloud provider accounts. Platform audit logs are securely forwarded to a centralized SIEM (Security Information and Event Monitoring) system, where they might trigger configured alerts to the SRE team and are also subject to manual review. Audit logs are retained in the SIEM for one year. Audit logs for a given cluster are not deleted at the time the cluster is deleted.

## Incident management {id="incident-management_{{ context }}"}
An incident is an event that results in a degradation or outage of one or more Red&#160;Hat services.

An incident can be raised by a customer or Customer Experience and Engagement (CEE) member through a support case, directly by the centralized monitoring and alerting system, or directly by a member of the SRE team.

Depending on the impact on the service and customer, the incident is categorized in terms of [severity](https://access.redhat.com/support/offerings/production/sla).

When managing a new incident, Red&#160;Hat uses the following general workflow:

1.  An SRE first responder is alerted to a new incident, and begins an initial investigation.
1.  After the initial investigation, the incident is assigned an incident lead, who coordinates the recovery efforts.
1.  The incident lead manages all communication and coordination around recovery, including any relevant notifications or support case updates.
1.  When the incident is resolved a brief summary of the incident and resolution are provided in the customer-initiated support ticket. This summary helps the customers understand the incident and its resolution in more detail.

If customers require more information in addition to what is provided in the support ticket, they can request the following workflow:

1.  The customer must make a request for the additional information within 5 business days of the incident resolution.
1.  Depending on the severity of the incident, Red&#160;Hat may provide customers with a root cause summary, or a root cause analysis (RCA) in the support ticket. The additional information will be provided within 7 business days for root cause summary and 30 business days for root cause analysis from the incident resolution.

Red&#160;Hat also assists with customer incidents raised through support cases.
Red&#160;Hat can assist with activities including but not limited to:

*   Forensic gathering, including isolating virtual compute
*   Guiding compute image collection
*   Providing collected audit logs

## Backup and recovery {id="backup-recovery_{{ context }}"}
All {{ product_title }} clusters are backed up using cloud provider snapshots. Notably, this does not include customer data stored on persistent volumes (PVs). All snapshots are taken using the appropriate cloud provider snapshot APIs and are uploaded to a secure object storage bucket (S3 in AWS, and GCS in {{ gcp_full }}) in the same account as the cluster.

<table>
<thead>
<tr>
  <th>Component</th>
  <th>Snapshot frequency</th>
  <th>Retention</th>
  <th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
  <td rowspan="2">Full object store backup</td>
  <td>Daily</td>
  <td>7 days</td>
  <td rowspan="2">This is a full backup of all Kubernetes objects like etcd. No PVs are backed up in this backup schedule.</td>
</tr>
<tr>
  <td>Weekly</td>
  <td>30 days</td>
</tr>
<tr>
  <td>Full object store backup</td>
  <td>Hourly</td>
  <td>24 hours</td>
  <td>This is a full backup of all Kubernetes objects like etcd. No PVs are backed up in this backup schedule.</td>
</tr>
<tr>
  <td>Node root volume</td>
  <td>Never</td>
  <td>N/A</td>
  <td>Nodes are considered to be short-term. Nothing critical should be stored on a node's root volume.</td>
</tr>
</tbody>
</table>

*   Red Hat does not commit to any Recovery Point Objective (RPO) or Recovery Time Objective (RTO).
*   Customers are responsible for taking regular backups of their data.
*   Customers should deploy multi-AZ clusters with workloads that follow Kubernetes best practices to ensure high availability within a region.
*   If an entire cloud region is unavailable, customers must install a new cluster in a different region and restore their apps using their backup data.

## Cluster capacity {id="cluster-capacity_{{ context }}"}
Evaluating and managing cluster capacity is a responsibility that is shared between Red Hat and the customer. Red Hat SRE is responsible for the capacity of all control plane and infrastructure nodes on the cluster.

Red Hat SRE also evaluates cluster capacity during upgrades and in response to cluster alerts. The impact of a cluster upgrade on capacity is evaluated as part of the upgrade testing process to ensure that capacity is not negatively impacted by new additions to the cluster. During a cluster upgrade, additional worker nodes are added to make sure that total cluster capacity is maintained during the upgrade process.

Capacity evaluations by SRE staff also happen in response to alerts from the cluster, once usage thresholds are exceeded for a certain period of time. Such alerts can also result in a notification to the customer.