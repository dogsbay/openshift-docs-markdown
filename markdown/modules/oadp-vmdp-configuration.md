{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ oadp_short }} virtual machine data protection configuration {id="oadp-vmdp-configuration_{{ context }}"}

Review the environment variables and file locations for the {{ oadp_full }} virtual machine data protection (VMDP) command-line interface (CLI). This helps you to configure credentials, logging, and behavioral settings. {._abstract}

## Environment variables {id="_environment_variables"}

**Credential environment variables**

| Variable | Description |
| --- | --- |
| `BSLS_PASSWORD` | BSL encryption password. Set this variable to avoid interactive prompts. |
| `AWS_ACCESS_KEY_ID` | Access key for S3 storage |
| `AWS_SECRET_ACCESS_KEY` | Secret key for S3 storage |
| `AWS_SESSION_TOKEN` | Session token for temporary credentials |

**Configuration environment variables**

| Variable | Description | Default |
| --- | --- | --- |
| `OADP_CONFIG_PATH` | Path to the configuration file | `~/.config/oadp/repository.config` |
| `OADP_CACHE_DIRECTORY` | Path to the cache directory | System-dependent |
| `OADP_LOG_DIR` | Directory for log files | `~/.cache/oadp/` |

**Behavior environment variables**

| Variable | Description | Default |
| --- | --- | --- |
| `OADP_CHECK_FOR_UPDATES` | Enable or disable update checks | `true` |
| `OADP_PERSIST_CREDENTIALS_ON_CONNECT` | Save credentials after connecting | `true` |
| `OADP_USE_KEYRING` | Use the system keyring for password storage | `false` |
| `OADP_BACKUP_FAIL_FAST` | Fail immediately on the first error | `false` |

**Logging environment variables**

| Variable | Description | Default |
| --- | --- | --- |
| `OADP_LOG_DIR_MAX_FILES` | Maximum number of log files | `1000` |
| `OADP_LOG_DIR_MAX_AGE` | Maximum age of log files | `720h` |
| `OADP_LOG_DIR_MAX_SIZE_MB` | Maximum total size of log files in MB | `1000` |

## File locations {id="_file_locations"}

**Default file locations**

| Type | Linux | Windows |
| --- | --- | --- |
| Configuration | `~/.config/oadp/repository.config` | `%APPDATA%\oadp\repository.config` |
| Logs | `~/.cache/oadp/` | `%LOCALAPPDATA%\oadp\` |

## Kopia compatibility {id="_kopia_compatibility"}

VMDP is based on Kopia and uses the same repository format. Repositories are fully compatible between the two tools.

**Command mapping between VMDP and Kopia**

| VMDP command | Kopia equivalent |
| --- | --- |
| `bsl` | `repository` |
| `backup` | `snapshot` |

When you connect to a VMDP repository by using the Kopia CLI, include the `oadp-vmdp/` prefix that VMDP adds automatically. For example:

```terminal
$ kopia repository connect s3 \
  --bucket <bucket_name> \
  --prefix oadp-vmdp/<your_prefix>/ \
  ...
```