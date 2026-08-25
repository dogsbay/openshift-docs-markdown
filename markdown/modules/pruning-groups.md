{%- set _mod_docs_content_type = "PROCEDURE" %}
# Pruning groups {id="pruning-groups_{{ context }}"}

Remove stale user group records from external identity providers by using the group pruner. Pruning orphaned groups keeps user management data accurate, ensures cluster security, and prevents unauthorized access permissions. {._abstract}

To prune groups records from an external provider, administrators can run the
following command:

```terminal
$ oc adm prune groups \
    --sync-config=path/to/sync/config [<options>]
```

**`oc adm prune groups` flags**

| Options | Description |
| --- | --- |
| `--confirm` | Indicate that pruning should occur, instead of performing a dry-run. |
| `--blacklist` | Path to the group blacklist file. |
| `--whitelist` | Path to the group whitelist file. |
| `--sync-config` | Path to the synchronization configuration file. |

**Procedure**

1.  To see the groups that the prune command deletes, run the following command:
    ```terminal
    $ oc adm prune groups --sync-config=ldap-sync-config.yaml
    ```
1.  To perform the prune operation, add the `--confirm` flag:
    ```terminal
    $ oc adm prune groups --sync-config=ldap-sync-config.yaml --confirm
    ```