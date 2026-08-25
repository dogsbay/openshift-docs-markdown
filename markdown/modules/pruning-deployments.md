{%- set _mod_docs_content_type = "PROCEDURE" %}
# Pruning deployment resources {id="pruning-deployments_{{ context }}"}

Delete completed or failed deployment configurations and pod records to free up cluster storage, reduce database clutter, and speed up resource lookups. {._abstract}

You can prune resources associated with deployments that are no longer required by the system, due to age and status.

The following command prunes replication controllers associated with `DeploymentConfig` objects:

```terminal
$ oc adm prune deployments [<options>]
```


:::note

To also prune replica sets associated with `Deployment` objects, use the `--replica-sets` flag. This flag is currently a Technology Preview feature.

:::


**`oc adm prune deployments` flags**

<table>
<thead>
<tr>
  <th>Option</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>--confirm</code></td>
  <td>Indicate that pruning should occur, instead of performing a dry-run.</td>
</tr>
<tr>
  <td><code>--keep-complete=&lt;N&gt;</code></td>
  <td>Per the <code>DeploymentConfig</code> object, keep the last <code>N</code> replication controllers that have a status of <code>Complete</code> and replica count of zero. The default is <code>5</code>.</td>
</tr>
<tr>
  <td><code>--keep-failed=&lt;N&gt;</code></td>
  <td>Per the <code>DeploymentConfig</code> object, keep the last <code>N</code> replication controllers that have a status of <code>Failed</code> and replica count of zero. The default is <code>1</code>.</td>
</tr>
<tr>
  <td><code>--keep-younger-than=&lt;duration&gt;</code></td>
  <td>Do not prune any replication controller that is younger than <code>&lt;duration&gt;</code> relative to the current time. Valid units of measurement include nanoseconds (<code>ns</code>), microseconds (<code>us</code>), milliseconds (<code>ms</code>), seconds (<code>s</code>), minutes (<code>m</code>), and hours (<code>h</code>). The default is <code>60m</code>.</td>
</tr>
<tr>
  <td><code>--orphans</code></td>
  <td>Prune all replication controllers that no longer have a <code>DeploymentConfig</code> object, has status of <code>Complete</code> or <code>Failed</code>, and has a replica count of zero.</td>
</tr>
<tr>
  {% if not (openshift_rosa or openshift_dedicated) %}<td><code>--replica-sets=true|false</code></td>{% endif %}
  {% if not (openshift_rosa or openshift_dedicated) %}<td>If <code>true</code>, replica sets are included in the pruning process. The default is <code>false</code>.<br><br><dl class="db-admonition db-admonition-important"><dt>Important</dt><dd>This flag is a Technology Preview feature.</dd></dl></td>{% endif %}
</tr>
</tbody>
</table>

**Procedure**

1.  To see what a pruning operation would delete, run the following command:
    ```terminal
    $ oc adm prune deployments --orphans --keep-complete=5 --keep-failed=1 \
        --keep-younger-than=60m
    ```
1.  To actually perform the prune operation, add the `--confirm` flag:
    ```terminal
    $ oc adm prune deployments --orphans --keep-complete=5 --keep-failed=1 \
        --keep-younger-than=60m --confirm
    ```