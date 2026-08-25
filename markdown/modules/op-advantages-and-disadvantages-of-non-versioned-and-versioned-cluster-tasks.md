{%- set _mod_docs_content_type = "CONCEPT" %}
# Advantages and disadvantages of non-versioned and versioned cluster tasks {id="advantages-and-disadvantages-of-non-versioned-and-versioned-cluster-tasks_{{ context }}"}

Before adopting non-versioned or versioned cluster tasks as a standard in production environments, cluster administrators might consider their advantages and disadvantages.

**Advantages and disadvantages of non-versioned and versioned cluster tasks**

<table>
<thead>
<tr>
  <th>Cluster task</th>
  <th>Advantages</th>
  <th>Disadvantages</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Non-versioned cluster task (NVCT)</td>
  <td><ul><li>If you prefer deploying pipelines with the latest updates and bug fixes, use the NVCT.</li><li>Upgrading the Operator upgrades the non-versioned cluster tasks, which consume fewer resources than multiple versioned cluster tasks.</li></ul></td>
  <td>If you deploy pipelines that use NVCT, they might break after an Operator upgrade if the automatically upgraded cluster tasks are not backward-compatible.</td>
</tr>
<tr>
  <td>Versioned cluster task (VCT)</td>
  <td><ul><li>If you prefer stable pipelines in production, use the VCT.</li><li>The earlier version is retained on the cluster even after the later version of a cluster task is installed. You can continue using the earlier cluster tasks.</li></ul></td>
  <td><ul><li>If you continue using an earlier version of a cluster task, you might miss the latest features and critical security updates.</li><li>The earlier versions of cluster tasks that are not operational consume cluster resources.</li><li>* After it is upgraded, the Operator cannot manage the earlier VCT. You can delete the earlier VCT manually by using the <code>oc delete clustertask</code> command, but you cannot restore it.</li></ul></td>
</tr>
<tr>
  <td></td>
</tr>
</tbody>
</table>