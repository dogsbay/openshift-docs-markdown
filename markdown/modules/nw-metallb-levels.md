{%- set _mod_docs_content_type = "REFERENCE" %}
# FRRouting (FRR) log levels {id="frr-log-levels_{{ context }}"}

To control the verbosity of network logs for troubleshooting or monitoring, refer to the `FRRouting` (FRR) logging levels. {._abstract}

The following values define the severity of recorded events, so that you can use them to filter output based on operational requirements:

***Log levels***

<table>
<thead>
<tr>
  <th>Log level</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>all</code></td>
  <td>Supplies all logging information for all logging levels.</td>
</tr>
<tr>
  <td><code>debug</code></td>
  <td>Information that is diagnostically helpful to people. Set to <code>debug</code> to give detailed troubleshooting information.</td>
</tr>
<tr>
  <td><code>info</code></td>
  <td></td>
</tr>
<tr>
  <td><code>warn</code></td>
  <td></td>
</tr>
<tr>
  <td><code>error</code></td>
  <td>Any unrecoverable error in <code>MetalLB</code>. These errors usually require administrator intervention to fix.</td>
</tr>
<tr>
  <td><code>none</code></td>
  <td>Turn off all logging.</td>
</tr>
</tbody>
</table>