{%- set _mod_docs_content_type = "REFERENCE" %}
# Backup storage location management commands {id="oadp-cli-admin-bsl_{{ context }}"}

You can use the {{ oadp_short }} command-line interface (CLI) to create, view, set, and delete backup storage locations (BSLs). Backup storage locations define where backup data is stored, such as an object storage bucket. {._abstract}

## Prerequisites {id="oadp-cli-admin-bsl-prereqs_{{ context }}"}

*   The {{ oadp_short }} CLI plugin is installed and configured in admin mode.
*   You are logged in to the {{ product_title }} cluster as a user with `cluster-admin` privileges.

## Backup storage location creation command {id="oadp-cli-admin-bsl-create_{{ context }}"}

To create a backup storage location, use the following command:

```terminal
$ oc oadp backup-location create <bsl_name> [flags]
```

**Flags for the `oc oadp backup-location create` command**

| Flag | Description |
| --- | --- |
| `--provider` | The name of the cloud provider, for example, `aws`, `gcp`, or `azure`. |
| `--bucket` | The name of the object storage bucket. |
| `--prefix` | The path prefix within the bucket. |
| `--credential` | The secret and key for the provider credentials in the format `SECRET_NAME=KEY`. |
| `--config` | The provider-specific configuration as `key=value` pairs. |
| `--backup-sync-period` | The frequency at which to synchronize the backup contents from object storage. |
| `--request-timeout` | The timeout for the request to the Kubernetes API server. |

```terminal title="Example of the backup storage location creation command"
$ oc oadp backup-location create my-bsl \
    --provider aws \
    --bucket my-velero-bucket \
    --prefix velero \
    --credential cloud-credentials=cloud
```

## Backup storage location listing command {id="oadp-cli-admin-bsl-list_{{ context }}"}

To list all backup storage locations, use the following command:

```terminal
$ oc oadp backup-location get [<bsl_name>] [flags]
```

**Flags for the `oc oadp backup-location get` command**

| Flag | Description |
| --- | --- |
| `-o` | The output format. Supported values are `json` and `yaml`. |

## Default backup storage location command {id="oadp-cli-admin-bsl-set-default_{{ context }}"}

To set the default backup storage location, use the following command:

```terminal
$ oc oadp backup-location set <bsl_name>
```

## Backup storage location deletion command {id="oadp-cli-admin-bsl-delete_{{ context }}"}

To delete a backup storage location, use the following command:

```terminal
$ oc oadp backup-location delete <bsl_name> [flags]
```

**Flags for the `oc oadp backup-location delete` command**

| Flag | Description |
| --- | --- |
| `--confirm` | Specifies whether to confirm the deletion without prompting. |