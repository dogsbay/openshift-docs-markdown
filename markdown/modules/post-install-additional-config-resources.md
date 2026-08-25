{%- set _mod_docs_content_type = "REFERENCE" %}
# Additional configuration resources {id="additional-configuration-resources_{{ context }}"}

Review the additional configuration resources that represent a single instance of a particular {{ product_title }} component. {._abstract}

These configuration resources represent a single instance of a particular component. In some cases, you can request multiple
instances by creating multiple instances of the resource. In other cases, the Operator can use only a specific
resource instance name in a specific namespace. Reference the component-specific
documentation for details on how and when you can create additional resource instances.

<table>
<thead>
<tr>
  <th>Resource name</th>
  <th>Instance name</th>
  <th>Namespace</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>alertmanager.monitoring.coreos.com</code></td>
  <td><code>main</code></td>
  <td><code>openshift-monitoring</code></td>
  <td>Controls the <a href="https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_core_platform_monitoring/configuring-alerts-and-notifications">Alertmanager</a> deployment parameters.</td>
</tr>
<tr>
  <td><code>ingresscontroller.operator.openshift.io</code></td>
  <td><code>default</code></td>
  <td><code>openshift-ingress-operator</code></td>
  <td>Configures <a href="/networking/networking_operators/ingress-operator#configuring-ingress-controller">Ingress Operator</a> behavior such as domain, number of replicas, certificates, and controller placement.</td>
</tr>
</tbody>
</table>