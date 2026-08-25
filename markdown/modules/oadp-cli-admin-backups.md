{%- set _mod_docs_content_type = "REFERENCE" %}
# Backup management commands {id="oadp-cli-admin-backups_{{ context }}"}

You can use the {{ oadp_short }} command-line interface (CLI) to create, view, describe, download, and delete backups. {._abstract}

## Prerequisites {id="oadp-cli-admin-backups-prereqs_{{ context }}"}

*   The {{ oadp_short }} CLI plugin is installed and configured in admin mode.
*   You are logged in to the {{ product_title }} cluster as a user with `cluster-admin` privileges.

## Backup creation command {id="oadp-cli-admin-backups-create_{{ context }}"}

To create a backup of cluster resources, use the following command:

```terminal
$ oc oadp backup create <backup_name> [flags]
```

**Flags for the `oc oadp backup create` command**

| Flag | Description |
| --- | --- |
| `--include-namespaces` | The namespaces to include in the backup. The default value is `*` (all namespaces). |
| `--exclude-namespaces` | The namespaces to exclude from the backup. |
| `--include-resources` | The resources to include in the backup. You can specify simple kind names, for example, `deployments,services`, or you can use the `resource.group` format for disambiguation, for example, `deployments.apps`. The default value is `*` (all resources). |
| `--exclude-resources` | The resources to exclude from the backup. This flag uses the same format as the `--include-resources` flag. |
| `--storage-location` | The name of the backup storage location to use. |
| `--volume-snapshot-locations` | The volume snapshot location or locations to use. |
| `--selector`, `-l` | A label selector to filter resources. |
| `--or-selector` | An OR combination of label selectors. |
| `--snapshot-volumes` | Specifies whether to take persistent volume (PV) snapshots. The default value is `true`. |
| `--snapshot-move-data` | Specifies whether to move snapshot data to the backup storage location. |
| `--default-volumes-to-fs-backup` | Specifies whether to use a file system backup for all volumes. |
| `--include-cluster-resources` | Specifies whether to include cluster-scoped resources. |
| `--ttl` | The backup retention period. The default value is `720h`. |
| `--csi-snapshot-timeout` | The timeout for Container Storage Interface (CSI) snapshot creation. |
| `--item-operation-timeout` | The timeout for asynchronous plugin operations. |
| `--request-timeout` | The timeout for the request to the Kubernetes API server. |

```terminal title="Example of the backup creation command"
$ oc oadp backup create my-backup \
    --include-namespaces my-namespace \
    --snapshot-volumes \
    --ttl 720h
```

## Backup listing command {id="oadp-cli-admin-backups-list_{{ context }}"}

To list all backups, use the following command:

```terminal
$ oc oadp backup get [<backup_name>] [flags]
```

**Flags for the `oc oadp backup get` command**

| Flag | Description |
| --- | --- |
| `-o` | The output format. Supported values are `json` and `yaml`. |

## Backup description command {id="oadp-cli-admin-backups-describe_{{ context }}"}

To view the details of a backup, use the following command:

```terminal
$ oc oadp backup describe <backup_name> [flags]
```

**Flags for the `oc oadp backup describe` command**

| Flag | Description |
| --- | --- |
| `--details` | Specifies whether to display additional details in the output. |

## Backup logs command {id="oadp-cli-admin-backups-logs_{{ context }}"}

To view the logs for a backup, use the following command:

```terminal
$ oc oadp backup logs <backup_name>
```

## Backup download command {id="oadp-cli-admin-backups-download_{{ context }}"}

To download the contents of a backup, use the following command:

```terminal
$ oc oadp backup download <backup_name> [flags]
```

## Backup deletion command {id="oadp-cli-admin-backups-delete_{{ context }}"}

To delete a backup, use the following command:

```terminal
$ oc oadp backup delete <backup_name> [flags]
```

**Flags for the `oc oadp backup delete` command**

| Flag | Description |
| --- | --- |
| `--confirm` | Specifies whether to confirm the deletion without prompting. |