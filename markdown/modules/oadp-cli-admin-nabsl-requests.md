{%- set _mod_docs_content_type = "REFERENCE" %}
# NonAdminBackupStorageLocation approval request commands {id="oadp-cli-admin-nabsl-requests_{{ context }}"}

When the {{ oadp_short }} Operator is configured with `nonAdmin.requireApprovalForBSL: true`, non-admin users who create a `NonAdminBackupStorageLocation` (NABSL) object trigger an approval request. You can use the {{ oadp_short }} command-line interface (CLI) to view, describe, approve, and reject these requests. {._abstract}

## Prerequisites {id="oadp-cli-admin-nabsl-prereqs_{{ context }}"}

*   The {{ oadp_short }} CLI plugin is installed and configured in admin mode.
*   You are logged in to the {{ product_title }} cluster as a user with `cluster-admin` privileges.
*   The `DataProtectionApplication` custom resource (CR) is configured with `nonAdmin.enable: true` and `nonAdmin.requireApprovalForBSL: true`.

## NABSL approval request listing command {id="oadp-cli-admin-nabsl-list_{{ context }}"}

To list all pending NABSL approval requests, use the following command:

```terminal
$ oc oadp nabsl-request get [<request_name>] [flags]
```

**Flags for the `oc oadp nabsl-request get` command**

| Flag | Description |
| --- | --- |
| `-o` | The output format. Supported values are `json` and `yaml`. |

The output displays the request name, namespace, phase, requested NABSL name, requested namespace, and age.

## NABSL approval request description command {id="oadp-cli-admin-nabsl-describe_{{ context }}"}

To view the full details of an approval request, including the requested backup storage location specification, use the following command:

```terminal
$ oc oadp nabsl-request describe <request_name>
```

You can specify the request by using either the NABSL name or the full UUID.

## NABSL approval request approval command {id="oadp-cli-admin-nabsl-approve_{{ context }}"}

To approve a pending request and allow the controller to create the corresponding `BackupStorageLocation` object, use the following command:

```terminal
$ oc oadp nabsl-request approve <request_name> [flags]
```

**Flags for the `oc oadp nabsl-request approve` command**

| Flag | Description |
| --- | --- |
| `--reason` | The reason for the approval. This flag is optional. |

You can specify the request by using either the NABSL name or the full UUID.

```terminal title="Example of the NABSL approval request approval command"
$ oc oadp nabsl-request approve user-test-bsl --reason "Approved for production use"
```

## NABSL approval request rejection command {id="oadp-cli-admin-nabsl-reject_{{ context }}"}

To reject a pending request and deny the user’s request for a backup storage location, use the following command:

```terminal
$ oc oadp nabsl-request reject <request_name> [flags]
```

**Flags for the `oc oadp nabsl-request reject` command**

| Flag | Description |
| --- | --- |
| `--reason` | The reason for the rejection. This flag is recommended. |

You can specify the request by using either the NABSL name or the full UUID.

```terminal title="Example of the NABSL approval request rejection command"
$ oc oadp nabsl-request reject user-test-bsl --reason "Invalid configuration"
```