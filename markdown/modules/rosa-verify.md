{%- set _mod_docs_content_type = "REFERENCE" %}
# Verify AWS settings with the {{ rosa_cli }} {id="rosa-verify_{{ context }}"}

Verify AWS permissions and quotas by using the {{ rosa_cli_first }}. {._abstract}

## verify permissions {id="rosa-verify-permissions_{{ context }}"}

Verify that the AWS permissions required to create a {{ product_title }} cluster are configured correctly:

```terminal title="Syntax"
$ rosa verify permissions [arguments]
```


:::note

This command verifies permissions only for clusters that do not use the AWS Security Token Service (STS).

:::


**Optional arguments inherited from parent commands**

| Option | Definition |
| --- | --- |
| --help | Shows help for this command. |
| --debug | Enables debug mode. |
| --region | The AWS region (string) in which to run the command. This value overrides the `AWS_REGION` environment variable. |
| --profile | Specifies an AWS profile (string) from your credentials file. |

Verify that the AWS permissions are configured correctly:

```terminal title="Example"
$ rosa verify permissions
```

Verify that the AWS permissions are configured correctly in a specific region:

```terminal title="Example"
$ rosa verify permissions --region=us-west-2
```

## verify quota {id="rosa-verify-quota_{{ context }}"}

Verifies that AWS quotas are configured correctly for your default region.

```terminal title="Syntax"
$ rosa verify quota [arguments]
```

**Optional arguments inherited from parent commands**

| Option | Definition |
| --- | --- |
| --help | Shows help for this command. |
| --debug | Enables debug mode. |
| --region | The AWS region (string) in which to run the command. This value overrides the `AWS_REGION` environment variable. |
| --profile | Specifies an AWS profile (string) from your credentials file. |

Verify that the AWS quotas are configured correctly for the default region:

```terminal title="Example"
$ rosa verify quota
```

Verify that the AWS quotas are configured correctly in a specific region:

```terminal title="Example"
$ rosa verify quota --region=us-west-2
```