{%- set _mod_docs_content_type = "REFERENCE" %}
# Pod limits {id="pod-limits_{{ context }}"}

After you create the `LimitRange` object, you can specify the exact amount of resources that a pod can consume. {._abstract}

A pod can consume the following resources:

*   CPU
*   Memory

The following table shows the supported constraints for a pod. Across all pods, the following behavior must hold true:

<table>
<thead>
<tr>
  <th>Constraint</th>
  <th>Enforced behavior</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>Min</code></td>
  <td><code>Min[&lt;resource&gt;]</code> less than or equal to <code>container.resources.requests[&lt;resource&gt;]</code> (required) less than or equal to <code>container.resources.limits[&lt;resource&gt;]</code>. If you do not set a <code>min</code> value or you set <code>min</code> to <code>0</code>, the result is no limit and the pod can consume more of the resource than the <code>max</code> value.</td>
</tr>
<tr>
  <td><code>Max</code></td>
  <td><code>container.resources.limits[&lt;resource&gt;]</code> (required) less than or equal to <code>Max[&lt;resource&gt;]</code>.</td>
</tr>
<tr>
  <td><code>MaxLimitRequestRatio</code></td>
  <td><code>MaxLimitRequestRatio[&lt;resource&gt;]</code> less than or equal to (<code>container.resources.limits[&lt;resource&gt;]</code> / <code>container.resources.requests[&lt;resource&gt;]</code>).</td>
</tr>
</tbody>
</table>