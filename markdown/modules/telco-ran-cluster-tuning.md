{%- set _mod_docs_content_type = "REFERENCE" %}
# Cluster tuning {id="telco-ran-cluster-tuning_{{ context }}"}

Configure cluster tuning settings including cluster capabilities and monitoring for the telco RAN DU reference design. {._abstract}


New in this release
:   *   OLM profile collection is removed in {{ product_title }} 4.22. The `DisableOLMPprof` CR compliance type is now set to `mustnothave` to remove the previously applied configuration from clusters.

Description
:   For a full list of components that you can disable using the cluster capabilities feature, see "Cluster capabilities".


Limits and requirements
:   *   Cluster capabilities are not available for installer-provisioned installation methods.

The following table lists the required platform tuning configurations:

***Cluster capabilities configurations***

<table>
<thead>
<tr>
  <th>Feature</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Remove optional cluster capabilities</td>
  <td>Reduce the {{ product_title }} footprint by disabling optional cluster Operators on {{ sno }} clusters only.<br><br><ul><li>Remove all optional Operators except the Node Tuning Operator, Operator Lifecycle Manager, and the Ingress Operator.</li></ul></td>
</tr>
<tr>
  <td>Configure cluster monitoring</td>
  <td>Configure the monitoring stack for reduced footprint by doing the following:<br><br><ul><li>Disable the local <code>alertmanager</code> and <code>telemeter</code> components.</li><li>If you use {{ rh_rhacm }} observability, the CR must be augmented with appropriate <code>additionalAlertManagerConfigs</code> CRs to forward alerts to the hub cluster.</li><li>{{ rh_rhacm }} observability combines its default data values with the monitoring configuration <code>ConfigMap</code> CR provided as part of the cluster tuning reference CRs.</li></ul>This merge results in the policy becoming non-compliant.To ensure that the provided configuration is not overwritten or merged with {{ rh_rhacm }} data values, you can disable the {{ rh_rhacm }} management of this <code>ConfigMap</code> CR .This keeps the policy compliant. For more information, see the Observability section of Telco hub reference design specifications.<br><br><ul><li>Reduce the <code>Prometheus</code> retention period to 24h.</li></ul>+<dl><dt>Note</dt><dd>The {{ rh_rhacm }} hub cluster aggregates managed cluster metrics.</dd></dl></td>
</tr>
<tr>
  <td>Disable networking diagnostics</td>
  <td>Disable networking diagnostics for {{ sno }} because they are not required.</td>
</tr>
<tr>
  <td>Configure a single OperatorHub catalog source</td>
  <td>Configure the cluster to use a single catalog source that contains only the Operators required for a RAN DU deployment.</td>
</tr>
<tr>
  <td>Disable the Console Operator</td>
  <td>If the cluster was deployed with the console disabled, the <code>Console</code> CR (<code>ConsoleOperatorDisable.yaml</code>) is not needed.</td>
</tr>
</tbody>
</table>


Engineering considerations
:   *   As of {{ product_title }} 4.19, cgroup v1 is no longer supported and has been removed. 
    All workloads must now be compatible with cgroup v2. For more information, see [Red Hat Enterprise Linux 9 changes in the context of Red Hat OpenShift workloads](https://www.redhat.com/en/blog/rhel-9-changes-context-red-hat-openshift-workloads).