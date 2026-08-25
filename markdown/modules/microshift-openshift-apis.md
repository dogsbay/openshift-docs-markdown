{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ microshift_short }} OpenShift APIs {id="microshift-openshift-apis_{{ context }}"}

Use the supported OpenShift APIs in {{ microshift_short }} to configure networking routes and security context constraints for your workloads. {._abstract}

In addition to standard Kubernetes APIs, {{ microshift_short }} includes a small subset of the APIs supported by {{ OCP }}.

**{{ microshift_short }} OpenShift APIs**

<table>
<thead>
<tr>
  <th>API ^</th>
  <th>API group</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Route</td>
  <td>route.openshift.io/v1</td>
</tr>
<tr>
  <td>SecurityContextConstraints</td>
  <td>security.openshift.io/v1</td>
</tr>
</tbody>
</table>