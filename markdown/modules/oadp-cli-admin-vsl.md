{%- set _mod_docs_content_type = "REFERENCE" %}
# Volume snapshot location management commands {id="oadp-cli-admin-vsl_{{ context }}"}

You can use the {{ oadp_short }} command-line interface (CLI) to create, view, set, and delete volume snapshot locations (VSLs). Volume snapshot locations define where persistent volume (PV) snapshots are stored. {._abstract}

## Prerequisites {id="oadp-cli-admin-vsl-prereqs_{{ context }}"}

*   The {{ oadp_short }} CLI plugin is installed and configured in admin mode.
*   You are logged in to the {{ product_title }} cluster as a user with `cluster-admin` privileges.

## Volume snapshot location creation command {id="oadp-cli-admin-vsl-create_{{ context }}"}

To create a volume snapshot location, use the following command:

```terminal
$ oc oadp snapshot-location create <vsl_name> [flags]
```

**Flags for the `oc oadp snapshot-location create` command**

| Flag | Description |
| --- | --- |
| `--provider` | The name of the cloud provider, for example, `aws`, `gcp`, or `azure`. |
| `--config` | The provider-specific configuration as `key=value` pairs. |
| `--request-timeout` | The timeout for the request to the Kubernetes API server. |

```terminal title="Example of the volume snapshot location creation command"
$ oc oadp snapshot-location create my-vsl \
    --provider aws \
    --config region=us-east-1
```

## Volume snapshot location listing command {id="oadp-cli-admin-vsl-list_{{ context }}"}

To list all volume snapshot locations, use the following command:

```terminal
$ oc oadp snapshot-location get [<vsl_name>] [flags]
```

**Flags for the `oc oadp snapshot-location get` command**

| Flag | Description |
| --- | --- |
| `-o` | The output format. Supported values are `json` and `yaml`. |

## Default volume snapshot location command {id="oadp-cli-admin-vsl-set-default_{{ context }}"}

To set the default volume snapshot location, use the following command:

```terminal
$ oc oadp snapshot-location set <vsl_name>
```

## Volume snapshot location deletion command {id="oadp-cli-admin-vsl-delete_{{ context }}"}

To delete a volume snapshot location, use the following command:

```terminal
$ oc oadp snapshot-location delete <vsl_name> [flags]
```

**Flags for the `oc oadp snapshot-location delete` command**

| Flag | Description |
| --- | --- |
| `--confirm` | Specifies whether to confirm the deletion without prompting. |