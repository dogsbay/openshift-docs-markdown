{%- set _mod_docs_content_type = "REFERENCE" %}
# Troubleshooting {{ oadp_short }} virtual machine data protection {id="oadp-vmdp-troubleshooting_{{ context }}"}

Troubleshoot common issues and solutions for the {{ oadp_full }} virtual machine data protection (VMDP) command-line interface (CLI). This helps you to resolve connection and configuration problems. {._abstract}

## Not connected to a backup storage location {id="_not_connected_to_a_backup_storage_location"}

If you receive a `Not connected to a Backup Storage Location` error message, check the connection status and reconnect:

```terminal
$ oadp-vmdp bsl status
```

```terminal
$ oadp-vmdp bsl connect s3 \
  --bucket <bucket_name> \
  --endpoint <s3_endpoint> \
  --access-key <access_key> \
  --secret-access-key <secret_access_key>
```

## Prefix must not contain oadp-vmdp {id="_prefix_must_not_contain_oadp-vmdp"}

The `oadp-vmdp/` prefix is added automatically. Do not include `oadp-vmdp` as a path segment in the `--prefix` option. Ensure that the `--prefix` value does not start or end with whitespace.

## S3 connection issues {id="_s3_connection_issues"}

For S3-compatible services, you might need to use the following options:

*   `--disable-tls` for non-HTTPS endpoints.
*   `--disable-tls-verification` for self-signed certificates.
*   `--root-ca-pem-path` to specify a custom CA certificate.

## Getting help {id="_getting_help"}

*   To view available commands and options, run the following command:

```terminal
$ oadp-vmdp --help
```
*   To view help for a specific command, run the following command:

```terminal
$ oadp-vmdp <command> --help
```