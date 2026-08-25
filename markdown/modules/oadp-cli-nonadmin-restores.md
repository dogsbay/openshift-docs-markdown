{%- set _mod_docs_content_type = "REFERENCE" %}
# Non-administrator restore management commands {id="oadp-cli-nonadmin-restores_{{ context }}"}

You can use the {{ oadp_short }} command-line interface (CLI) to create, view, describe, and delete non-administrator restores in your namespace. {._abstract}

## Prerequisites {id="oadp-cli-nonadmin-restores-prereqs_{{ context }}"}

*   The {{ oadp_short }} CLI plugin is installed and configured in non-administrator mode.
*   You are logged in to the {{ product_title }} cluster and your current namespace context is set to the namespace you want to restore into.
*   You have editor roles for `nonadminrestores.oadp.openshift.io` in your namespace.
*   A completed non-administrator backup exists to restore from.

## Non-administrator restore creation command {id="oadp-cli-nonadmin-restores-create_{{ context }}"}

To create a restore from an existing non-administrator backup, use the following command:

```terminal
$ oc oadp nonadmin restore create [<restore_name>] [flags]
```

where:


`<restore_name>`
:   Specifies the name of the restore. This value is optional. If you do not provide a name, a name is automatically generated.

**Flags for the `oc oadp nonadmin restore create` command**

| Flag | Description |
| --- | --- |
| `--backup-name` | The name of the non-administrator backup to restore from. This flag is required. |
| `--include-resources` | The resources to include in the restore. You can specify simple kind names, for example, `deployments,services`, or you can use the `resource.group` format for disambiguation, for example, `deployments.apps`. The default value is `*` (all resources). |
| `--exclude-resources` | The resources to exclude from the restore. This flag uses the same format as the `--include-resources` flag. |
| `--selector`, `-l` | Specifies that only the resources that match this label selector are restored. |
| `--or-selector` | Specifies that resources that match at least one of the label selectors, separated by `or`, are restored. |
| `--item-operation-timeout` | The timeout for asynchronous plugin operations. |

```terminal title="Example of the non-administrator restore creation command"
$ oc oadp nonadmin restore create my-restore \
    --backup-name my-backup \
    --include-resources deployments,services \
    --selector app=myapp
```

## Non-administrator restore listing command {id="oadp-cli-nonadmin-restores-list_{{ context }}"}

To list all restores in your current namespace, use the following command:

```terminal
$ oc oadp nonadmin restore get [<restore_name>] [flags]
```

where:


`<restore_name>`
:   Specifies the name of the restore. This value is optional.

**Flags for the `oc oadp nonadmin restore get` command**

| Flag | Description |
| --- | --- |
| `-o` | The output format. Supported values are `json` and `yaml`. |

## Non-administrator restore description command {id="oadp-cli-nonadmin-restores-describe_{{ context }}"}

To view the details of a restore, use the following command:

```terminal
$ oc oadp nonadmin restore describe <restore_name> [flags]
```

where:


`<restore_name>`
:   Specifies the name of the restore.

**Flags for the `oc oadp nonadmin restore describe` command**

| Flag | Description |
| --- | --- |
| `--details` | Specifies whether to display additional restore details. |
| `--request-timeout` | The timeout for fetching restore details from the server. |

## Non-administrator restore logs command {id="oadp-cli-nonadmin-restores-logs_{{ context }}"}

To view the logs for a restore, use the following command:

```terminal
$ oc oadp nonadmin restore logs <restore_name> [flags]
```

where:


`<restore_name>`
:   Specifies the name of the restore.

**Flags for the `oc oadp nonadmin restore logs` command**

| Flag | Description |
| --- | --- |
| `--request-timeout` | The timeout for fetching logs from the server. |


:::note

Restore logs are available only when you use a `NonAdminBackupStorageLocation` object. Logs are not available for restores associated with backups that use the default cluster backup storage location.

:::


## Non-administrator restore deletion command {id="oadp-cli-nonadmin-restores-delete_{{ context }}"}

To delete one or more restores, use the following command:

```terminal
$ oc oadp nonadmin restore delete [<restore_name>...] [flags]
```

where:


`<restore_name>`
:   Specifies the name of the restore. You can specify multiple restores.

**Flags for the `oc oadp nonadmin restore delete` command**

| Flag | Description |
| --- | --- |
| `--confirm` | Specifies whether to skip the confirmation prompt and delete immediately. |
| `--all` | Specifies whether to delete all restores in the current namespace. |

Restore deletion is performed asynchronously by the {{ oadp_short }} non-administrator controller.

```terminal title="Example of the non-administrator restore deletion command"
$ oc oadp nonadmin restore delete my-restore --confirm
```