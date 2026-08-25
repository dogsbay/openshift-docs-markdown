{%- set _mod_docs_content_type = "PROCEDURE" %}
# Pruning builds {id="pruning-builds_{{ context }}"}

Prune obsolete build records and logs from your cluster to reclaim cluster storage and prevent API performance degradation. {._abstract}

To prune builds that are no longer required by the system due to age and status, administrators can run the following command:

```terminal
$ oc adm prune builds [<options>]
```

**`oc adm prune builds` flags**

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
  <td><code>--orphans</code></td>
  <td>Prune all builds whose build configuration no longer exists, status is complete, failed, error, or canceled.</td>
</tr>
<tr>
  <td><code>--keep-complete=&lt;N&gt;</code></td>
  <td>Per build configuration, keep the last <code>N</code> builds whose status is complete. The default is <code>5</code>.</td>
</tr>
<tr>
  <td><code>--keep-failed=&lt;N&gt;</code></td>
  <td>Per build configuration, keep the last <code>N</code> builds whose status is failed, error, or canceled. The default is <code>1</code>.</td>
</tr>
<tr>
  <td><code>--keep-younger-than=&lt;duration&gt;</code></td>
  <td>Do not prune any object that is younger than <code>&lt;duration&gt;</code> relative to the current time. The default is <code>60m</code>.</td>
</tr>
</tbody>
</table>

**Procedure**

1.  To see what a pruning operation would delete, run the following command:
    ```terminal
    $ oc adm prune builds --orphans --keep-complete=5 --keep-failed=1 \
        --keep-younger-than=60m
    ```
1.  To actually perform the prune operation, add the `--confirm` flag:
    ```terminal
    $ oc adm prune builds --orphans --keep-complete=5 --keep-failed=1 \
        --keep-younger-than=60m --confirm
    ```

    :::note

    Developers can enable automatic build pruning by modifying their build configuration.
    
    :::