{%- set _mod_docs_content_type = "CONCEPT" %}
# Disaster recovery {id="rosa-policy-disaster-recovery_{{ context }}"}

Disaster recovery includes backing up data and configurations, replicating them to a disaster recovery environment, and failing over during a disaster event. {._abstract}

The effectiveness of disaster recovery depends on the architecture. Deploy highly available applications, storage, and clusters to achieve your required level of resilience, for example:

*   **Zone outages**: Deploy a cluster with multiple machine pools distributed across multiple availability zones (AZs) and manage your own failover.
*   **Regional outages**: Deploy multiple clusters in several regions with multiple machine pools in more than one AZ and manage your own failover.

For more information, see “Disaster recovery options in the cloud” in _Additional resources_.

The following responsibility matrix provides details about disaster recovery practices as part of {{ product_title }}.

**Disaster recovery responsibilities**

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
  <td>Virtual networking management</td>
  <td><strong>Red&#160;Hat</strong><br><br><ul><li>Re-create affected virtual network components that are necessary for the platform to function.</li></ul></td>
  <td><ul><li>Configure virtual networking connections with more than one tunnel where possible for protection against outages as recommended by the public cloud provider.</li><li>Maintain failover DNS and load balancing if using a global load balancer with multiple clusters.</li></ul></td>
</tr>
<tr>
  <td>Virtual storage management</td>
  <td><strong>Red&#160;Hat</strong><br><br> {% if openshift_rosa %} <ul><li>For {{ product_title }} clusters created with IAM user credentials, back up all Kubernetes objects on the cluster through hourly, daily, and weekly volume snapshots. Hourly backups are retained for 24 hrs (1 day), daily backups are retained for 168 hrs (1 week), and weekly backups are retained for 720 hrs (30 days).</li></ul> {% endif %}</td>
  <td><ul><li>Back up customer applications and application data.</li></ul></td>
</tr>
<tr>
  <td>Virtual compute management</td>
  <td><strong>Red&#160;Hat</strong> {% if openshift_rosa %} <ul><li>Monitor the cluster and replace failed Amazon EC2 control plane or infrastructure nodes.</li></ul> {% endif %} <br><br><ul><li>Provide the ability for the customer to manually or automatically replace failed worker nodes.</li></ul></td>
  <td><ul><li>Replace failed Amazon EC2 worker nodes by editing the machine pool configuration through {{ cluster_manager }} or the {{ rosa_cli_first }}.</li></ul></td>
</tr>
<tr>
  {% if openshift_rosa_hcp %}<td>Control plane</td>{% endif %}
  {% if openshift_rosa_hcp %}<td><strong>Red&#160;Hat</strong><br><br><ul><li>Use snapshots, troubleshooting tools, and control planes deployed in multiple AZs to minimize downtime during service-side disaster events.</li><li>Take a full snapshot of the control plane etcd database every hour and retain the snapshot for 24 hours. This backup schedule supports the Recovery Point Objective (RPO) of one hour.</li></ul>Note that these backups are intended for use within service-side disaster recovery scenarios and are not available for customer-requested restorations.<br><br><ul><li>Commit to a Recovery Time Objective (RTO) of up to one hour, covering complete cluster restoration and post-validation checks.</li><li>During disaster events, notify the customer that control plane recovery is in progress. If both the control and data planes are impacted, coordinate recovery efforts with the customer.</li></ul></td>{% endif %}
  {% if openshift_rosa_hcp %}<td><ul><li>Cooperate with Red&#160;Hat during disaster recovery events.</li></ul></td>{% endif %}
</tr>
<tr>
  {% if openshift_rosa_hcp %}<td>Data plane (worker nodes)</td>{% endif %}
  {% if openshift_rosa_hcp %}<td><strong>Red&#160;Hat</strong><br><br><ul><li>Red&#160;Hat is available to support customer efforts to restore data and applications upon submission of a support case.</li></ul></td>{% endif %}
  {% if openshift_rosa_hcp %}<td><ul><li>Back up data plane contents and configuration.</li></ul></td>{% endif %}
</tr>
<tr>
  <td>AWS software (public AWS services)</td>
  <td><strong>AWS</strong><br><br><strong>Compute:</strong> Provide Amazon EC2 features that support data resiliency such as Amazon EBS snapshots and Amazon EC2 Auto Scaling. For more information, see "Resilience in Amazon EC2" in <em>Additional resources</em>.<br><br><strong>Storage:</strong> Provide the ability for the {{ product_title }} service and customers to back up the Amazon EBS volume on the cluster through Amazon EBS volume snapshots.<br><br><strong>Storage:</strong> For information about Amazon S3 features that support data resiliency, see "Resilience in Amazon S3" in <em>Additional resources</em>.<br><br><strong>Networking:</strong> For information about Amazon VPC features that support data resiliency, see "Resilience in Amazon Virtual Private Cloud" in <em>Additional resources</em>.</td>
  <td><ul><li>Configure {{ product_title }} clusters with multiple machine pools across multiple AZs to improve fault tolerance and cluster availability.</li><li>Provision persistent volumes using the Amazon EBS CSI driver to enable volume snapshots.</li><li>Create CSI volume snapshots of Amazon EBS persistent volumes.</li></ul></td>
</tr>
<tr>
  <td>Hardware/AWS global infrastructure</td>
  <td><strong>AWS</strong><br><br><ul><li>Provide AWS global infrastructure that allows {{ product_title }} to scale</li></ul> {% if openshift_rosa %} control plane, infrastructure, and worker nodes {% endif %} {% if openshift_rosa_hcp %} nodes {% endif %} across AZs. This functionality enables orchestration of automatic failover between zones without interruption.</td>
  <td><ul><li>Configure {{ product_title }} clusters with multiple machine pools across multiple AZs to improve fault tolerance and cluster availability.</li></ul></td>
</tr>
</tbody>
</table>