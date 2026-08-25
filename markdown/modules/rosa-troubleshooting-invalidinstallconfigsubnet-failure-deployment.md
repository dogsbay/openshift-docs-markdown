{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting cluster creation with an InvalidInstallConfigSubnet error {id="rosa-troubleshooting-invalidinstallconfigsubnet-failure-deployment_{{ context }}"}

If a cluster creation action fails, you might receive the following error messages. {._abstract}

The following example shows the install logs output:

```terminal
platform.aws.subnets[1]: Invalid value: "subnet-0babad72exxxxxxxx": subnet CIDR range start 10.69.1x.3x is outside of the specified machine networks
```

The following example shows the {{ cluster_manager }} output:

```terminal
Provisioning Error Code:    OCM3020
Provisioning Error Message: Subnet CIDR ranges are outside of specified machine CIDR.
```

These errors indicate that a subnet CIDR range start is outside of the specified machine networks.

**Procedure**

1.  Check your subnet configuration.
1.  Edit your machine CIDR range to include all subnet CIDR ranges. Generally, your machine CIDR should match your VPC CIDR.

    For more information about CIDR ranges, see _CIDR range definitions_ in the _Additional resources_ section .