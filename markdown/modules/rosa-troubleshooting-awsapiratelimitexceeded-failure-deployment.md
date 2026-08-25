{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting cluster creation with an AWSAPIRateLimitExceeded error {id="rosa-troubleshooting-awsapiratelimitexceeded-failure-deployment_{{ context }}"}

If a cluster creation action fails, you might receive the following error messages. {._abstract}

The following example shows the install logs output:

```terminal
level=error\nlevel=error msg=Error: error waiting for Route53 Hosted Zone .* creation: timeout while waiting for state to become 'INSYNC' (last state: 'PENDING', timeout: 15m0s)
```

The following example shows the {{ cluster_manager }} output:

```terminal
Provisioning Error Code:    OCM3008
Provisioning Error Message: AWS API rate limit exceeded. Please try again.
```

This error indicates that the AWS API rate limit has been exceeded while waiting for the Route 53 hosted zone.

**Procedure**

*   Reattempt the installation.