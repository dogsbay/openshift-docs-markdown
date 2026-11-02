{%- set _mod_docs_content_type = "REFERENCE" %}
# EgressIP failover settings {id="egressip_failover_reference_{{ context }}"}

The `reachabilityTotalTimeoutSeconds` parameter defines the total time limit in seconds for the platform health check process before a node is declared down. {._abstract}

The following table summarizes the acceptable values and their implications:

<table>
<thead>
<tr>
  <th>Parameter Value (Seconds)</th>
  <th>Effect on reachability check</th>
  <th>Failover impact and use case</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>0</code></td>
  <td>Disables the reachability check.</td>
  <td>No automatic failover: Use only if an external system handles node health monitoring and failover. The platform will not automatically react to node failures.</td>
</tr>
<tr>
  <td><code>1 - 60</code></td>
  <td>Sets the total time limit for reachability probing.</td>
  <td>Directly controls detection time: This value defines the lower limit for your overall failover time. A smaller value leads to faster failover but might increase network traffic. Default: 1 second. The maximum accepted integer value is 60.</td>
</tr>
</tbody>
</table>