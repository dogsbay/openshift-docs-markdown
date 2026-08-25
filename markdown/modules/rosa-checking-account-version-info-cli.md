# Checking account and version information with the ROSA CLI {id="rosa-checking-account-version-information_{{ context }}"}

Use the following commands to check your account and version information with the {{ product_title }} (ROSA) CLI, `rosa`.

## whoami {id="rosa-whoami_{{ context }}"}

Display information about your AWS and Red Hat accounts.

```terminal title="Syntax"
$ rosa whoami [arguments]
```

**Optional arguments inherited from parent commands**

| Option | Definition |
| --- | --- |
| --help | Shows help for this command. |
| --debug | Enables debug mode. |
| --profile | Specifies an AWS profile (string) from your credentials file. |

```terminal title="Example"
$ rosa whoami
```

## version {id="rosa-version_{{ context }}"}

Display the version of your {{ product_title }} (ROSA) CLI, `rosa`.

```terminal title="Syntax"
$ rosa version [arguments]
```

**Optional arguments inherited from parent commands**

| Option | Definition |
| --- | --- |
| --help | Shows help for this command. |
| --debug | Enables debug mode. |
| --profile | Specifies an AWS profile (string) from your credentials file. |

```terminal title="Example"
$ rosa version
```