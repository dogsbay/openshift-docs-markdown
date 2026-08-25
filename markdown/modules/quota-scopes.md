{%- set _mod_docs_content_type = "REFERENCE" %}
# Quota scopes {id="quota-scopes_{{ context }}"}

To restrict the set of resources that a quota applies to, add associated scopes. This configuration limits usage measurement to the intersection of the enumerated scopes, ensuring that specifying a resource outside the allowed set results in a validation error. {._abstract}

<table>
<thead>
<tr>
  <th>Scope</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>Terminating</code></td>
  <td>Match pods where <code>spec.activeDeadlineSeconds &gt;= 0</code>.</td>
</tr>
<tr>
  <td><code>NotTerminating</code></td>
  <td>Match pods where <code>spec.activeDeadlineSeconds</code> is <code>nil</code>.</td>
</tr>
<tr>
  <td><code>BestEffort</code></td>
  <td>Match pods that have best effort quality of service for either <code>cpu</code> or <code>memory</code>.</td>
</tr>
<tr>
  <td><code>NotBestEffort</code></td>
  <td>Match pods that do not have best effort quality of service for <code>cpu</code> and <code>memory</code>.</td>
</tr>
<tr>
  <td><code>CrossNamespacePodAffinity</code></td>
  <td>Match all pod objects that have cross-namespace pod (anti)affinity mentioned.</td>
</tr>
<tr>
  <td><code>PriorityClass</code></td>
  <td>Match all pod objects that have priority class mentioned.</td>
</tr>
<tr>
  <td><code>VolumeAttributesClass</code></td>
  <td>Match all persistent volume claims (PVCs) that have volume attributes class mentioned.</td>
</tr>
</tbody>
</table>

A `BestEffort` scope restricts a quota to limiting the following resources:

*   pods

A `Terminating`, `NotTerminating`, and `NotBestEffort` scope restricts a quota to tracking the following resources:

*   `pods`
*   `memory`
*   `requests.memory`
*   `limits.memory`
*   `cpu`
*   `requests.cpu`
*   `limits.cpu`
*   `ephemeral-storage`
*   `requests.ephemeral-storage`
*   `limits.ephemeral-storage`


:::note

Ephemeral storage requests and limits apply only if you enabled the ephemeral storage technology preview. This feature is disabled by default.

:::


You can also limit a quota with the optional `scopeSelector` field. In `scopeSelector.matchExpressions`, set a `scopeName`, an `operator`, and, when required, a `values` array. Scopes such as `PriorityClass` and `VolumeAttributesClass` match resources when the selector selects them.

The `operator` field supports the following values:

*   `In`
*   `NotIn`
*   `Exists`
*   `DoesNotExist`

If the `operator` is `In` or `NotIn`, the `values` field must include at least one value. If the `operator` is `Exists` or `DoesNotExist`, do not set `values`.

```yaml title="Example ResourceQuota scoped to a PriorityClass"
apiVersion: v1
kind: ResourceQuota
metadata:
  name: pods-high-priority
spec:
  hard:
    pods: "10"
    requests.cpu: "1"
    requests.memory: 1Gi
  scopeSelector:
    matchExpressions:
    - scopeName: PriorityClass
      operator: In
      values:
      - high-priority
```