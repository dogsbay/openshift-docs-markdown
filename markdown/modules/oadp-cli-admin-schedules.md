{%- set _mod_docs_content_type = "REFERENCE" %}
# Schedule management commands {id="oadp-cli-admin-schedules_{{ context }}"}

You can use the {{ oadp_short }} command-line interface (CLI) to create, view, describe, and delete backup schedules. Schedules automate the creation of backups at specified intervals by using a cron expression. {._abstract}

## Prerequisites {id="oadp-cli-admin-schedules-prereqs_{{ context }}"}

*   The {{ oadp_short }} CLI plugin is installed and configured in admin mode.
*   You are logged in to the {{ product_title }} cluster as a user with `cluster-admin` privileges.

## Schedule creation command {id="oadp-cli-admin-schedules-create_{{ context }}"}

To create a backup schedule, use the following command:

```terminal
$ oc oadp schedule create <schedule_name> [flags]
```

**Flags for the `oc oadp schedule create` command**

| Flag | Description |
| --- | --- |
| `--schedule` | The cron expression for the schedule, for example, `0 1 * * *` for daily at 1 AM. |
| `--include-namespaces` | The namespaces to include in scheduled backups. The default value is `*` (all namespaces). |
| `--exclude-namespaces` | The namespaces to exclude from scheduled backups. |
| `--include-resources` | The resources to include in scheduled backups. You can specify simple kind names, for example, `deployments,services`, or you can use the `resource.group` format for disambiguation, for example, `deployments.apps`. The default value is `*` (all resources). |
| `--exclude-resources` | The resources to exclude from scheduled backups. This flag uses the same format as the `--include-resources` flag. |
| `--storage-location` | The name of the backup storage location to use. |
| `--volume-snapshot-locations` | The volume snapshot location or locations to use. |
| `--selector`, `-l` | A label selector to filter resources. |
| `--snapshot-volumes` | Specifies whether to take persistent volume (PV) snapshots. The default value is `true`. |
| `--snapshot-move-data` | Specifies whether to move snapshot data to the backup storage location. |
| `--default-volumes-to-fs-backup` | Specifies whether to use a file system backup for all volumes. |
| `--include-cluster-resources` | Specifies whether to include cluster-scoped resources. |
| `--ttl` | The backup retention period. The default value is `720h`. |
| `--request-timeout` | The timeout for the request to the Kubernetes API server. |

```terminal title="Example of the schedule creation command"
$ oc oadp schedule create daily-backup \
    --schedule "0 1 * * *" \
    --include-namespaces my-namespace \
    --ttl 720h
```

## Schedule listing command {id="oadp-cli-admin-schedules-list_{{ context }}"}

To list all schedules, use the following command:

```terminal
$ oc oadp schedule get [<schedule_name>] [flags]
```

**Flags for the `oc oadp schedule get` command**

| Flag | Description |
| --- | --- |
| `-o` | The output format. Supported values are `json` and `yaml`. |

## Schedule description command {id="oadp-cli-admin-schedules-describe_{{ context }}"}

To view the details of a schedule, use the following command:

```terminal
$ oc oadp schedule describe <schedule_name>
```

## Schedule deletion command {id="oadp-cli-admin-schedules-delete_{{ context }}"}

To delete a schedule, use the following command:

```terminal
$ oc oadp schedule delete <schedule_name> [flags]
```

**Flags for the `oc oadp schedule delete` command**

| Flag | Description |
| --- | --- |
| `--confirm` | Specifies whether to confirm the deletion without prompting. |