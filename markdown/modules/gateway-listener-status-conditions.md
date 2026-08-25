{%- set _mod_docs_content_type = "REFERENCE" %}
# Gateway and listener status conditions reference {id="gateway-listener-status-conditions_{{ context }}"}

To verify that your gateway is configured in the data plane and ready to route traffic, review its gateway-level and listener-level `status` conditions. A healthy `Gateway` custom resource (CR) reports a status of `True` for its `Accepted` and `Programmed` conditions. {._abstract}


:::important

The `Conflicted` listener condition uses negative polarity. This means that a status of `False` indicates a healthy state, while a status of `True` indicates an error.

:::


**Gateway-level status conditions**

| Condition | Status | Description and common reasons |
| --- | --- | --- |
| `Accepted` | `True` | The gateway configuration is valid and working properly. |
| `Accepted` | `False` | The configuration has errors. Common reasons include `ListenersNotValid` (one or more listeners have issues) or `InvalidParameters` (the configuration is invalid). |
| `Accepted` | `Unknown` | The controller has not evaluated the gateway yet. |
| `Programmed` | `True` | The infrastructure is provisioned and the gateway is configured in the data plane, such as a load balancer or proxy. |
| `Programmed` | `False` | Programming failed or the data plane is not ready. Common reasons include `NoResources` (insufficient resources or pods unavailable), `Invalid` (cannot apply to the data plane), or `Pending`. |
| `Programmed` | `Unknown` | Programming is currently in progress. |
| `LoadBalancerReady` | `True` | The cloud load balancer service for the gateway is successfully provisioned. |
| `LoadBalancerReady` | `False` | The load balancer service failed to provision or is pending. Common reasons include `ServiceNotFound`, `LoadBalancerPending`, or `SyncLoadBalancerFailed`. |
| `DNSReady` | `True` | DNS records for all listeners are functioning correctly. |
| `DNSReady` | `False` | One or more listeners have DNS provisioning issues. |

**Listener-level status conditions**

<table>
<thead>
<tr>
  <th>Condition</th>
  <th>Status</th>
  <th>Description and common reasons</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>Accepted</code></td>
  <td><code>True</code></td>
  <td>The listener configuration is valid and working properly.</td>
</tr>
<tr>
  <td><code>Accepted</code></td>
  <td><code>False</code></td>
  <td>The listener configuration has errors.</td>
</tr>
<tr>
  <td><code>Programmed</code></td>
  <td><code>True</code></td>
  <td>The listener is successfully configured in the data plane.</td>
</tr>
<tr>
  <td><code>Programmed</code></td>
  <td><code>False</code></td>
  <td>The listener configuration failed in the data plane.</td>
</tr>
<tr>
  <td><code>ResolvedRefs</code></td>
  <td><code>True</code></td>
  <td>All references, such as TLS certificates, are found and valid.</td>
</tr>
<tr>
  <td><code>ResolvedRefs</code></td>
  <td><code>False</code></td>
  <td>At least one reference is invalid. Common reasons include <code>InvalidCertificateRef</code> (a TLS certificate was not found or is invalid) or <code>RefNotPermitted</code> (a cross-namespace reference is not allowed).</td>
</tr>
<tr>
  <td><code>Conflicted</code> (Negative polarity)</td>
  <td><code>False</code></td>
  <td>Healthy state. There are no conflicts.</td>
</tr>
<tr>
  <td><code>Conflicted</code> (Negative polarity)</td>
  <td><code>True</code></td>
  <td>The listener conflicts with another listener. Common reasons include <code>ProtocolConflict</code> (multiple listeners on the same port with incompatible protocols) or <code>HostnameConflict</code> (overlapping hostnames).</td>
</tr>
<tr>
  <td><code>DNSReady</code></td>
  <td><code>True</code></td>
  <td>The DNS record for this listener's hostname is successfully provisioned in all reported zones.</td>
</tr>
<tr>
  <td><code>DNSReady</code></td>
  <td><code>False</code></td>
  <td>The DNS record failed to provision. Common reasons include <code>FailedZones</code>, <code>NoDNSZones</code>, or <code>RecordNotFound</code>.</td>
</tr>
<tr>
  <td><code>DNSReady</code></td>
  <td><code>Unknown</code></td>
  <td>The DNS status cannot be determined or is unmanaged.<br><br><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>Listeners without a configured hostname will not have DNS conditions added to their <code>status</code>.</dd></dl></td>
</tr>
</tbody>
</table>

```yaml title="Example Gateway CR status output showing a DNS failure on one listener"
# ...
status:
  # Gateway-level conditions (LoadBalancer and aggregate DNS status)
  conditions:
  - type: LoadBalancerReady
    status: "True"
    reason: LoadBalancerProvisioned
    message: "The LoadBalancer service is provisioned"
    observedGeneration: 1
    lastTransitionTime: "2025-01-12T10:00:00Z"
  - type: DNSReady
    status: "False"
    reason: SomeListenersNotReady
    message: "One or more listeners have DNS provisioning issues"
    observedGeneration: 1
    lastTransitionTime: "2025-01-12T10:00:00Z"

  # Listener-level conditions (DNS status per listener)
  listeners:
  - name: <stage_http>
    conditions:
    - type: DNSReady
      status: "True"
      reason: NoFailedZones
      message: "The record is provisioned in all reported zones."
      observedGeneration: 1
      lastTransitionTime: "2025-01-12T10:00:00Z"
  - name: <prod_https>
    conditions:
    - type: DNSReady
      status: "False"
      reason: FailedZones
      message: "The record failed to provision in some zones: [<prod.example.com>]"
      observedGeneration: 1
      lastTransitionTime: "2025-01-12T10:00:00Z"
```


:::note

For {{ gcp_first }} installations, you can use a custom DNS solution. You must manually create a DNS record for any gateways in Gateway API. For more information, see "Installing a cluster on {{ gcp_short }} with customizations".

:::