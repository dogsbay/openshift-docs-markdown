{%- set _mod_docs_content_type = "REFERENCE" %}
# Options for creating a Hosted Control Planes cluster on OpenStack {id="hcp-deploy-openstack-parameters_{{ context }}"}

You can supply several options to the `hcp` CLI while deploying a Hosted Control Planes Cluster on {{ rh_openstack_first }}. {._abstract}

<table>
<thead>
<tr>
  <th>Option</th>
  <th>Description</th>
  <th>Required</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>--openstack-ca-cert-file</code></td>
  <td>Path to the OpenStack CA certificate file. If not provided, this will be automatically extracted from the cloud entry in <code>clouds.yaml</code>.</td>
  <td>No</td>
</tr>
<tr>
  <td><code>--openstack-cloud</code></td>
  <td>Name of the cloud entry in <code>clouds.yaml</code>. The default value is <code>openstack</code>.</td>
  <td>No</td>
</tr>
<tr>
  <td><code>--openstack-credentials-file</code></td>
  <td>Path to the OpenStack credentials file. If not provided, <code>hcp</code> will search the following directories:<br><br><ul><li>The current working directory</li><li><code>$HOME/.config/openstack</code></li><li><code>/etc/openstack</code></li></ul></td>
  <td>No</td>
</tr>
<tr>
  <td><code>--openstack-dns-nameservers</code></td>
  <td>List of DNS server addresses that are provided when creating the subnet.</td>
  <td>No</td>
</tr>
<tr>
  <td><code>--openstack-external-network-id</code></td>
  <td>ID of the OpenStack external network.</td>
  <td>No</td>
</tr>
<tr>
  <td><code>--openstack-ingress-floating-ip</code></td>
  <td>A floating IP for OpenShift ingress.</td>
  <td>No</td>
</tr>
<tr>
  <td><code>--openstack-node-additional-port</code></td>
  <td>Additional ports to attach to nodes. Valid values are: <code>network-id</code>, <code>vnic-type</code>, <code>disable-port-security</code>, and <code>address-pairs</code>.</td>
  <td>No</td>
</tr>
<tr>
  <td><code>--openstack-node-availability-zone</code></td>
  <td>Availability zone for the node pool.</td>
  <td>No</td>
</tr>
<tr>
  <td><code>--openstack-node-flavor</code></td>
  <td>Flavor for the node pool.</td>
  <td>Yes</td>
</tr>
<tr>
  <td><code>--openstack-node-image-name</code></td>
  <td>Image name for the node pool.</td>
  <td>No</td>
</tr>
</tbody>
</table>