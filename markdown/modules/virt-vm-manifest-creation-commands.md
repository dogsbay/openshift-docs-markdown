{%- set _newdoc_version = "2.18.5" -%}
{%- set _template_generated = "2025-08-13" -%}
{%- set _mod_docs_content_type = "REFERENCE" %}

# VM manifest creation commands {id="vm-manifest-creation-commands_{{ context }}"}

You can use the following `virtctl create` commands to create manifests for virtual machines, instance types, and preferences. {._abstract}

***VM manifest creation commands***

<table>
<thead>
<tr>
  <th>Command</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>virtctl create vm</code></td>
  <td>Create a <code>VirtualMachine</code> (VM) manifest.</td>
</tr>
<tr>
  <td><code>virtctl create vm --name <vm_name></code></td>
  <td>Create a VM manifest, specifying a name for the VM.</td>
</tr>
<tr>
  <td>`virtctl create vm --user <user_name> --ssh-key\</td>
  <td>password-file=<value>`</td>
</tr>
<tr>
  <td>Create a VM manifest with a cloud-init configuration to create the selected user and either add an SSH public key from the supplied string, or a password from a file.</td>
  <td><code>virtctl create vm --access-cred type:password,src:<secret></code></td>
</tr>
<tr>
  <td>Create a VM manifest with a user and password combination injected from the selected secret.</td>
  <td><code>virtctl create vm --access-cred type:ssh,src:<secret>,user:<user_name></code></td>
</tr>
<tr>
  <td>Create a VM manifest with an SSH public key injected from the selected secret.</td>
  <td><code>virtctl create vm --volume-sysprep src:<config_map></code></td>
</tr>
<tr>
  <td>Create a VM manifest, specifying a config map to use as the sysprep volume. The config map must contain a valid answer file named <code>unattend.xml</code> or <code>autounattend.xml</code>.</td>
  <td><code>virtctl create vm --instancetype <instancetype_name></code></td>
</tr>
<tr>
  <td>Create a VM manifest that uses an existing cluster-wide instance type.</td>
  <td><code>virtctl create vm --instancetype=virtualmachineinstancetype/<instancetype_name></code></td>
</tr>
<tr>
  <td>Create a VM manifest that uses an existing namespaced instance type.</td>
  <td><code>virtctl create instancetype --cpu <cpu_value> --memory <memory_value> --name <instancetype_name></code></td>
</tr>
<tr>
  <td>Create a manifest for a cluster-wide instance type.</td>
  <td><code>virtctl create instancetype --cpu <cpu_value> --memory <memory_value> --name <instancetype_name> --namespace <namespace_value></code></td>
</tr>
<tr>
  <td>Create a manifest for a namespaced instance type.</td>
  <td><code>virtctl create preference --name <preference_name></code></td>
</tr>
<tr>
  <td>Create a manifest for a cluster-wide VM preference, specifying a name for the preference.</td>
  <td><code>virtctl create preference --namespace <namespace_value></code></td>
</tr>
<tr>
  <td>Create a manifest for a namespaced VM preference.</td>
</tr>
</tbody>
</table>