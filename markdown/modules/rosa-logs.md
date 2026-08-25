# Checking logs with the ROSA CLI {id="rosa-logs_{{ context }}"}

You can check logs with the {{ product_title }} (ROSA) CLI, `rosa`. Use the following commands to check your install and uninstall logs.

## logs install {id="rosa-logs-install_{{ context }}"}

Show the cluster install logs.

```terminal title="Syntax"
$ rosa logs install --cluster=<cluster_name> | <cluster_id> [arguments]
```

**Arguments**

| Option | Definition |
| --- | --- |
| --cluster | Required: The name or ID (string) of the cluster to get logs for. |
| --tail | The number (integer) of lines to get from the end of the log. Default: `2000` |
| --watch | Watches for changes after getting the logs. |

**Optional arguments inherited from parent commands**

| Option | Definition |
| --- | --- |
| --help | Shows help for this command. |
| --debug | Enables debug mode. |
| --profile | Specifies an AWS profile (string) from your credentials file. |

**Examples**

Show the last 100 install log lines for a cluster named `mycluster`:

```terminal
$ rosa logs install mycluster --tail=100
```

Show the install logs for a cluster named `mycluster`:

```terminal
$ rosa logs install --cluster=mycluster
```

## logs uninstall {id="rosa-logs-uninstall_{{ context }}"}

Show the cluster uninstall logs.

```terminal title="Syntax"
$ rosa logs uninstall --cluster=<cluster_name> | <cluster_id> [arguments]
```

**Arguments**

| Option | Definition |
| --- | --- |
| --cluster | The name or ID (string) of the cluster to get logs for. |
| --tail | The number (integer) of lines to get from the end of the log. Default: `2000` |
| --watch | Watches for changes after getting the logs. |

**Optional arguments inherited from parent commands**

| Option | Definition |
| --- | --- |
| --help | Shows help for this command. |
| --debug | Enables debug mode. |
| --profile | Specifies an AWS profile (string) from your credentials file. |

**Example**

Show the last 100 uninstall logs for a cluster named `mycluster`:
```terminal
$ rosa logs uninstall --cluster=mycluster --tail=100
```