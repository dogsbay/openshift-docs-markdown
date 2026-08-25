{%- set _mod_docs_content_type = "REFERENCE" %}
# Non-admin backup management commands {id="oadp-cli-nonadmin-backups_{{ context }}"}

You can use the {{ oadp_short }} command-line interface (CLI) to create, view, describe, and delete non-admin backups in your namespace. {._abstract}

## Prerequisites {id="oadp-cli-nonadmin-backups-prereqs_{{ context }}"}

*   The {{ oadp_short }} CLI plugin is installed and configured in non-admin mode.
*   You are logged in to the {{ product_title }} cluster and your current namespace context is set to the namespace you want to back up.
*   You have editor roles for `nonadminbackups.oadp.openshift.io` in your namespace.
*   A `NonAdminBackupStorageLocation` object exists in your namespace, or a default has been configured by running the `oc oadp client config set default-nabsl=<name>` command.

## Non-admin backup creation command {id="oadp-cli-nonadmin-backups-create_{{ context }}"}

To create a backup of resources in your current namespace, use the following command:

```terminal
$ oc oadp nonadmin backup create <backup_name> [flags]
```

**Flags for the `oc oadp nonadmin backup create` command**

| Flag | Description |
| --- | --- |
| `--storage-location` | The name of the `NonAdminBackupStorageLocation` object to use. This flag is required unless a default is configured. |
| `--include-resources` | The resources to include in the backup. You can specify simple kind names, for example, `deployments,services`, or you can use the `resource.group` format for disambiguation, for example, `deployments.apps`. The default value is `*` (all resources). |
| `--exclude-resources` | The resources to exclude from the backup. This flag uses the same format as the `--include-resources` flag. |
| `--selector`, `-l` | Specifies to back up only the resources that match this label selector. |
| `--or-selector` | Specifies to back up resources that match at least one of the label selectors, separated by `or`. |
| `--ttl` | The amount of time before the backup can be garbage collected. The default value is `720h`. |
| `--csi-snapshot-timeout` | The timeout for Container Storage Interface (CSI) snapshot creation. |
| `--item-operation-timeout` | The timeout for asynchronous plugin operations. |
| `--snapshot-volumes` | Specifies whether to take snapshots of persistent volumes (PVs) as part of the backup. |
| `--snapshot-move-data` | Specifies whether to move snapshot data to the backup storage location. |
| `--default-volumes-to-fs-backup` | Specifies whether to use pod volume file system backups by default for all volumes. |

```terminal title="Example of the non-admin backup creation command"
$ oc oadp nonadmin backup create my-backup \
    --storage-location my-nabsl \
    --include-resources deployments,services \
    --selector app=myapp \
    --snapshot-volumes \
    --ttl 720h
```


:::tip

To avoid specifying the storage location on each backup, run the following command to set a default:

```terminal
$ oc oadp client config set default-nabsl=<nabsl_name>
```

:::


## Non-admin backup listing command {id="oadp-cli-nonadmin-backups-list_{{ context }}"}

To list all backups in your current namespace, use the following command:

```terminal
$ oc oadp nonadmin backup get [<backup_name>] [flags]
```

**Flags for the `oc oadp nonadmin backup get` command**

| Flag | Description |
| --- | --- |
| `-o` | The output format. Supported values are `json` and `yaml`. |

## Non-admin backup description command {id="oadp-cli-nonadmin-backups-describe_{{ context }}"}

To view the details of a backup, use the following command:

```terminal
$ oc oadp nonadmin backup describe <backup_name> [flags]
```

**Flags for the `oc oadp nonadmin backup describe` command**

| Flag | Description |
| --- | --- |
| `--details` | Specifies whether to display additional backup details, including volume snapshots, resource lists, and item operations. |
| `--request-timeout` | The timeout for fetching backup details from the server. |

## Non-admin backup logs command {id="oadp-cli-nonadmin-backups-logs_{{ context }}"}

To view the logs for a backup, use the following command:

```terminal
$ oc oadp nonadmin backup logs <backup_name> [flags]
```

**Flags for the `oc oadp nonadmin backup logs` command**

| Flag | Description |
| --- | --- |
| `--request-timeout` | The timeout for fetching logs from the server. |


:::note

Backup logs are available only when you use a `NonAdminBackupStorageLocation` object. Logs are not available for backups that use the default cluster backup storage location.

:::


## Non-admin backup deletion command {id="oadp-cli-nonadmin-backups-delete_{{ context }}"}

To delete one or more backups, use the following command:

```terminal
$ oc oadp nonadmin backup delete [<backup_name>...] [flags]
```

**Flags for the `oc oadp nonadmin backup delete` command**

| Flag | Description |
| --- | --- |
| `--confirm` | Specifies whether to skip the confirmation prompt and delete immediately. |
| `--all` | Specifies whether to delete all backups in the current namespace. |

Backup deletion is performed asynchronously by the {{ oadp_short }} non-admin controller.

```terminal title="Example of the non-admin backup deletion command"
$ oc oadp nonadmin backup delete my-backup --confirm
```