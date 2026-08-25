{%- set _mod_docs_content_type = "REFERENCE" %}
# Restore management commands {id="oadp-cli-admin-restores_{{ context }}"}

You can use the {{ oadp_short }} command-line interface (CLI) to create, view, describe, and delete restores. {._abstract}

## Prerequisites {id="oadp-cli-admin-restores-prereqs_{{ context }}"}

*   The {{ oadp_short }} CLI plugin is installed and configured in admin mode.
*   You are logged in to the {{ product_title }} cluster as a user with `cluster-admin` privileges.
*   A completed backup exists to restore from.

## Restore creation command {id="oadp-cli-admin-restores-create_{{ context }}"}

To create a restore from an existing backup, use the following command:

```terminal
$ oc oadp restore create <restore_name> [flags]
```

**Flags for the `oc oadp restore create` command**

| Flag | Description |
| --- | --- |
| `--from-backup` | The name of the backup to restore from. |
| `--from-schedule` | The name of the schedule to restore from. This flag uses the most recent backup. |
| `--include-namespaces` | The namespaces to include in the restore. The default value is `*` (all namespaces). |
| `--exclude-namespaces` | The namespaces to exclude from the restore. |
| `--include-resources` | The resources to include in the restore. You can specify simple kind names, for example, `deployments,services`, or you can use the `resource.group` format for disambiguation, for example, `deployments.apps`. The default value is `*` (all resources). |
| `--exclude-resources` | The resources to exclude from the restore. This flag uses the same format as the `--include-resources` flag. |
| `--selector`, `-l` | A label selector to filter resources. |
| `--or-selector` | An OR combination of label selectors. |
| `--include-cluster-resources` | Specifies whether to include cluster-scoped resources. |
| `--restore-volumes` | Specifies whether to restore persistent volume (PV) data from snapshots. |
| `--preserve-nodeports` | Specifies whether to preserve NodePort service port assignments. |
| `--item-operation-timeout` | The timeout for asynchronous plugin operations. |
| `--request-timeout` | The timeout for the request to the Kubernetes API server. |

```terminal title="Example of the restore creation command"
$ oc oadp restore create my-restore \
    --from-backup my-backup \
    --include-namespaces my-namespace
```

## Restore listing command {id="oadp-cli-admin-restores-list_{{ context }}"}

To list all restores, use the following command:

```terminal
$ oc oadp restore get [<restore_name>] [flags]
```

**Flags for the `oc oadp restore get` command**

| Flag | Description |
| --- | --- |
| `-o` | The output format. Supported values are `json` and `yaml`. |

## Restore description command {id="oadp-cli-admin-restores-describe_{{ context }}"}

To view the details of a restore, use the following command:

```terminal
$ oc oadp restore describe <restore_name> [flags]
```

**Flags for the `oc oadp restore describe` command**

| Flag | Description |
| --- | --- |
| `--details` | Specifies whether to display additional details in the output. |

## Restore logs command {id="oadp-cli-admin-restores-logs_{{ context }}"}

To view the logs for a restore, use the following command:

```terminal
$ oc oadp restore logs <restore_name>
```

## Restore deletion command {id="oadp-cli-admin-restores-delete_{{ context }}"}

To delete a restore, use the following command:

```terminal
$ oc oadp restore delete <restore_name> [flags]
```

**Flags for the `oc oadp restore delete` command**

| Flag | Description |
| --- | --- |
| `--confirm` | Specifies whether to confirm the deletion without prompting. |