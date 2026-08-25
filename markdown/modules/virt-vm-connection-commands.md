{%- set _newdoc_version = "2.18.5" -%}
{%- set _template_generated = "2025-08-13" -%}
{%- set _mod_docs_content_type = "REFERENCE" %}

# VM connection commands {id="vm-connection-commands_{{ context }}"}

You use can use the following `virtctl` commands to expose ports and connect to virtual machines (VMs) and VM instances (VMIs). {._abstract}

**VM connection commands**

<table>
<thead>
<tr>
  <th>Command</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>virtctl console &lt;vm_name&gt;</code></td>
  <td>Connect to the serial console of a VM.</td>
</tr>
<tr>
  <td><code>virtctl expose vm &lt;vm_name&gt; --name &lt;service_name&gt; --type &lt;ClusterIP|NodePort|LoadBalancer&gt; --port &lt;port&gt;</code></td>
  <td>Create a service that forwards a designated port of a VM and expose the service on the specified port of the node.<br><br>Example: <code>virtctl expose vm rhel9_vm --name rhel9-ssh --type NodePort --port 22</code></td>
</tr>
<tr>
  <td><code>virtctl scp -i &lt;ssh_key&gt; &lt;file_name&gt; &lt;user_name&gt;@vm/&lt;vm_name&gt;</code></td>
  <td>Copy a file from your machine to a VM. This command uses the private key of an SSH key pair. The VM must be configured with the public key.</td>
</tr>
<tr>
  <td><code>virtctl scp -i &lt;ssh_key&gt; &lt;user_name@vm/&lt;vm_name&gt;:&lt;file_name&gt; .</code></td>
  <td>Copy a file from a VM to your machine. This command uses the private key of an SSH key pair. The VM must be configured with the public key.</td>
</tr>
<tr>
  <td><code>virtctl ssh -i &lt;ssh_key&gt; &lt;user_name&gt;@vm/&lt;vm_name&gt;</code></td>
  <td>Open an SSH connection with a VM. This command uses the private key of an SSH key pair. The VM must be configured with the public key.</td>
</tr>
<tr>
  <td><code>virtctl vnc &lt;vm_name&gt;</code></td>
  <td>Connect to the VNC console of a VM.<br><br>You must have <code>virt-viewer</code> installed.</td>
</tr>
<tr>
  <td><code>virtctl vnc --proxy-only=true &lt;vm_name&gt;</code></td>
  <td>Display the port number and connect manually to a VM by using any viewer through the VNC connection.</td>
</tr>
<tr>
  <td><code>virtctl vnc --port=&lt;port-number&gt; &lt;vm_name&gt;</code></td>
  <td>Specify a port number to run the proxy on the specified port, if that port is available.<br><br>If a port number is not specified, the proxy runs on a random port.</td>
</tr>
</tbody>
</table>