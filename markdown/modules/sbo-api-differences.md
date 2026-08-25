{%- set _mod_docs_content_type = "CONCEPT" %}
# API differences {id="sbo-api-differences_{{ context }}"}

The CRD of the {{ servicebinding_title }} supports the following APIs:

*   **Service Binding** with the `binding.operators.coreos.com` API group.
*   **Service Binding (Spec API)** with the `servicebinding.io` API group.

Both of these API groups have similar features, but they are not completely identical. Here is the complete list of differences between these API groups:

<table>
<tbody>
<tr>
  <td>Feature</td>
  <td>Supported by the <code>binding.operators.coreos.com</code> API group</td>
  <td>Supported by the <code>servicebinding.io</code> API group</td>
  <td>Notes</td>
</tr>
<tr>
  <td>Binding to provisioned services</td>
  <td>Yes</td>
  <td>Yes</td>
  <td>Not applicable (N/A)</td>
</tr>
<tr>
  <td>Direct secret projection</td>
  <td>Yes</td>
  <td>Yes</td>
  <td>Not applicable (N/A)</td>
</tr>
<tr>
  <td>Bind as files</td>
  <td>Yes</td>
  <td>Yes</td>
  <td><ul><li>Default behavior for the service bindings of the <code>servicebinding.io</code> API group</li><li>Opt-in functionality for the service bindings of the <code>binding.operators.coreos.com</code> API group</li></ul></td>
</tr>
<tr>
  <td>Bind as environment variables</td>
  <td>Yes</td>
  <td>Yes</td>
  <td><ul><li>Default behavior for the service bindings of the <code>binding.operators.coreos.com</code> API group.</li><li>Opt-in functionality for the service bindings of the <code>servicebinding.io</code> API group: Environment variables are created alongside files.</li></ul></td>
</tr>
<tr>
  <td>Selecting workload with a label selector</td>
  <td>Yes</td>
  <td>Yes</td>
  <td>Not applicable (N/A)</td>
</tr>
<tr>
  <td>Detecting binding resources (<code>.spec.detectBindingResources</code>)</td>
  <td>Yes</td>
  <td>No</td>
  <td>The <code>servicebinding.io</code> API group has no equivalent feature.</td>
</tr>
<tr>
  <td>Naming strategies</td>
  <td>Yes</td>
  <td>No</td>
  <td>There is no current mechanism within the <code>servicebinding.io</code> API group to interpret the templates that naming strategies use.</td>
</tr>
<tr>
  <td>Container path</td>
  <td>Yes</td>
  <td>Partial</td>
  <td>Because a service binding of the <code>binding.operators.coreos.com</code> API group can specify mapping behavior within the <code>ServiceBinding</code> resource, the <code>servicebinding.io</code> API group cannot fully support an equivalent behavior without more information about the workload.</td>
</tr>
<tr>
  <td>Container name filtering</td>
  <td>No</td>
  <td>Yes</td>
  <td>The <code>binding.operators.coreos.com</code> API group has no equivalent feature.</td>
</tr>
<tr>
  <td>Secret path</td>
  <td>Yes</td>
  <td>No</td>
  <td>The <code>servicebinding.io</code> API group has no equivalent feature.</td>
</tr>
<tr>
  <td>Alternative binding sources (for example, binding data from annotations)</td>
  <td>Yes</td>
  <td>Allowed by {{ servicebinding_title }}</td>
  <td>The specification requires support for getting binding data from provisioned services and secrets. However, a strict reading of the specification suggests that support for other binding data sources is allowed. Using this fact, {{ servicebinding_title }} can pull the binding data from various sources (for example, pulling binding data from annotations). {{ servicebinding_title }} supports these sources on both the API groups.</td>
</tr>
</tbody>
</table>