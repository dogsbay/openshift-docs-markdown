{%- set _mod_docs_content_type = "REFERENCE" %}
# Log verbosity descriptions {id="log-verbosity-descriptions_{{ context }}"}

<table>
<thead>
<tr>
  <th>Log verbosity</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>--v=0</code></td>
  <td>Always visible to an Operator.</td>
</tr>
<tr>
  <td><code>--v=1</code></td>
  <td>A reasonable default log level if you do not want verbosity.</td>
</tr>
<tr>
  <td><code>--v=2</code></td>
  <td>Useful steady state information about the service and important log messages that might correlate to significant changes in the system. This is the recommended default log level.</td>
</tr>
<tr>
  <td><code>--v=3</code></td>
  <td>Extended information about changes.</td>
</tr>
<tr>
  <td><code>--v=4</code></td>
  <td>Debug level verbosity.</td>
</tr>
<tr>
  <td><code>--v=6</code></td>
  <td>Display requested resources.</td>
</tr>
<tr>
  <td><code>--v=7</code></td>
  <td>Display HTTP request headers.</td>
</tr>
<tr>
  <td><code>--v=8</code></td>
  <td>Display HTTP request contents.</td>
</tr>
</tbody>
</table>