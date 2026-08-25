{%- set _mod_docs_content_type = "REFERENCE" %}
# Container limits {id="container-limits_{{ context }}"}

After you create the `LimitRange` object, you can specify the exact amount of resources that a container can consume. {._abstract}

The following list shows resources that a container can consume:

*   CPU
*   Memory

The following table shows the supported constraints for a container. If specified, the constraints must hold true for each container.

**Supported constraints**

<table>
<thead>
<tr>
  <th>Constraint</th>
  <th>Behavior</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>Min</code></td>
  <td><code>Min[&lt;resource&gt;]</code> less than or equal to <code>container.resources.requests[&lt;resource&gt;]</code> (required) less than or equal to <code>container/resources.limits[&lt;resource&gt;]</code> (optional)<br><br>If the configuration defines a <code>min</code> CPU, the request value must be greater than the CPU value. If you do not set a <code>min</code> value or you set <code>min</code> to <code>0</code>, the result is no limit and the pod can consume more of the resource than the <code>max</code> value.</td>
</tr>
<tr>
  <td><code>Max</code></td>
  <td><code>container.resources.limits[&lt;resource&gt;]</code> (required) less than or equal to <code>Max[&lt;resource&gt;]</code><br><br>If the configuration defines a <code>max</code> CPU, you do not need to define a CPU request value. However, you must set a limit that satisfies the maximum CPU constraint that is specified in the limit range.</td>
</tr>
<tr>
  <td><code>MaxLimitRequestRatio</code></td>
  <td><code>MaxLimitRequestRatio[&lt;resource&gt;]</code> less than or equal to (<code>container.resources.limits[&lt;resource&gt;]</code> / <code>container.resources.requests[&lt;resource&gt;]</code>)<br><br>If the limit range defines a <code>maxLimitRequestRatio</code> constraint, any new containers must have both a <code>request</code> and a <code>limit</code> value. Additionally, {{ product_title }} calculates a limit-to-request ratio by dividing the <code>limit</code> by the <code>request</code>. The result should be an integer greater than 1.<br><br>For example, if a container has <code>cpu: 500</code> in the <code>limit</code> value, and <code>cpu: 100</code> in the <code>request</code> value, the limit-to-request ratio for <code>cpu</code> is <code>5</code>. This ratio must be less than or equal to the <code>maxLimitRequestRatio</code>.</td>
</tr>
</tbody>
</table>

The following list shows default resources that a container can consume:

*   `Default[<resource>]`: Defaults `container.resources.limit[<resource>]` to specified value if none.
*   `Default Requests[<resource>]`: Defaults `container.resources.requests[<resource>]` to specified value if none.