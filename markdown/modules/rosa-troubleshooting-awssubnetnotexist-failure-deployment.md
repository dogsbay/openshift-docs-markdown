{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting cluster creation with an AWSSubnetDoesNotExist error {id="rosa-troubleshooting-awssubnetnotexist-failure-deployment_{{ context }}"}

If a cluster creation action fails, you can receive the following error messages. {._abstract}

The following example shows the install logs output:

```terminal
The subnet ID 'subnet-<somesubnetID>' does not exist.
```

The following example shows the {{ cluster_manager }} output:

```terminal
Provisioning Error Code:    OCM3032
Provisioning Error Message: You have specified an invalid subnet. Verify your subnet configuration is correct and try again.
```

This error indicates that the cluster installation is blocked by an invalid subnet selection error.

**Procedure**

*   Check your subnets provided in the `platform.aws.subnets` parameter during installation. The subnets must be a part of the same machine Network CIDR ranges that you specify.
    *   For a standard cluster, specify a public and a private subnet for each availability zone.
    *   For a private cluster, specify a private subnet for each availability zone.

        For more information about AWS VPC and subnet requirements and optional parameters, see the _VPC_ section in the _AWS prerequisites for ROSA_ guide.