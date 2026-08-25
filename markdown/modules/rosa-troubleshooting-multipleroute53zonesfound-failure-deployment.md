{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting cluster creation with a MultipleRoute53ZonesFound error {id="rosa-troubleshooting-multipleroute53zonesfound-failure-deployment_{{ context }}"}

If a cluster creation action fails, you might receive the following error message: {._abstract}

```terminal
Provisioning Error Code:    OCM3049
Provisioning Error Message: DNS zone conflicts encountered.
```

The problem occurs because a previous cluster did not have had its Route 53 hosted zone removed during uninstallation. As a result, the existing Route 53 entries are conflicting with the cluster’s DNS.

The cluster’s installation is blocked because a duplicate Route 53 hosted zone already exists in your account.

**Procedure**

1.  Verify the Route 53 configuration. If the hosted zone is no longer required, remove it.
1.  Attempt cluster installation again.