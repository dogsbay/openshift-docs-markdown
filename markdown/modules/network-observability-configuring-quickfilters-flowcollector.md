{%- set _mod_docs_content_type = "REFERENCE" %}
# Configuring quick filters {id="network-observability-config-quick-filters_{{ context }}"}

Use the list of available source, destination, and universal filter keys to modify quick filters within the `FlowCollector` resource. {._abstract}

Exact matches are possible using double-quotes around values. Otherwise, partial matches are used for textual values. The bang (!) character, placed at the end of a key, means negation. See the sample `FlowCollector` resource for more context about modifying the YAML.


:::note

The filter matching types "all of" or "any of" is a UI setting that the users can modify from the query options. It is not part of this resource configuration.

:::


Here is a list of all available filter keys:

**Filter keys**

<table>
<thead>
<tr>
  <th>Universal*</th>
  <th>Source</th>
  <th>Destination</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>namespace</td>
  <td><code>src_namespace</code></td>
  <td><code>dst_namespace</code></td>
  <td>Filter traffic related to a specific namespace.</td>
</tr>
<tr>
  <td>name</td>
  <td><code>src_name</code></td>
  <td><code>dst_name</code></td>
  <td>Filter traffic related to a given leaf resource name, such as a specific pod, service, or node (for host-network traffic).</td>
</tr>
<tr>
  <td>kind</td>
  <td><code>src_kind</code></td>
  <td><code>dst_kind</code></td>
  <td>Filter traffic related to a given resource kind. The resource kinds include the leaf resource (Pod, Service or Node), or the owner resource (Deployment and StatefulSet).</td>
</tr>
<tr>
  <td>owner_name</td>
  <td><code>src_owner_name</code></td>
  <td><code>dst_owner_name</code></td>
  <td>Filter traffic related to a given resource owner; that is, a workload or a set of pods. For example, it can be a Deployment name, a StatefulSet name, etc.</td>
</tr>
<tr>
  <td>resource</td>
  <td><code>src_resource</code></td>
  <td><code>dst_resource</code></td>
  <td>Filter traffic related to a specific resource that is denoted by its canonical name, that identifies it uniquely. The canonical notation is <code>kind.namespace.name</code> for namespaced kinds, or <code>node.name</code> for nodes. For example, <code>Deployment.my-namespace.my-web-server</code>.</td>
</tr>
<tr>
  <td>address</td>
  <td><code>src_address</code></td>
  <td><code>dst_address</code></td>
  <td>Filter traffic related to an IP address. IPv4 and IPv6 are supported. CIDR ranges are also supported.</td>
</tr>
<tr>
  <td>mac</td>
  <td><code>src_mac</code></td>
  <td><code>dst_mac</code></td>
  <td>Filter traffic related to a MAC address.</td>
</tr>
<tr>
  <td>port</td>
  <td><code>src_port</code></td>
  <td><code>dst_port</code></td>
  <td>Filter traffic related to a specific port.</td>
</tr>
<tr>
  <td>host_address</td>
  <td><code>src_host_address</code></td>
  <td><code>dst_host_address</code></td>
  <td>Filter traffic related to the host IP address where the pods are running.</td>
</tr>
<tr>
  <td>protocol</td>
  <td>N/A</td>
  <td>N/A</td>
  <td>Filter traffic related to a protocol, such as TCP or UDP.</td>
</tr>
</tbody>
</table>

*   Universal keys filter for any of source or destination. For example, filtering `name: 'my-pod'` means all traffic from `my-pod` and all traffic to `my-pod`, regardless of the matching type used, whether **Match all** or **Match any**.