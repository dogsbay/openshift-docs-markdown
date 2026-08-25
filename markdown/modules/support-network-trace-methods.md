{%- set _mod_docs_content_type = "REFERENCE" %}
# Network trace methods {id="support-network-trace-methods_{{ context }}"}

Collecting network traces, in the form of packet capture records, can assist Red Hat Support with troubleshooting network issues. {._abstract}

{{ product_title }} supports two ways of performing a network trace.
Review the following table and choose the method that meets your needs.

***Supported methods of collecting a network trace***

<table>
<thead>
<tr>
  <th>Method</th>
  <th>Benefits and capabilities</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Collecting a host network trace</td>
  <td>You perform a packet capture for a duration that you specify on one or more nodes at the same time.The packet capture files are transferred from nodes to the client machine when the specified duration is met.<br><br>You can troubleshoot why a specific action triggers network communication issues. Run the packet capture, perform the action that triggers the issue, and use the logs to diagnose the issue.</td>
</tr>
<tr>
  <td>Collecting a network trace from an {{ product_title }} node or container</td>
  <td>You perform a packet capture on one node or one container.You run the <code>tcpdump</code> command interactively, so you can control the duration of the packet capture.<br><br>You can start the packet capture manually, trigger the network communication issue, and then stop the packet capture manually.<br><br>This method uses the <code>cat</code> command and shell redirection to copy the packet capture data from the node or container to the client machine.</td>
</tr>
</tbody>
</table>