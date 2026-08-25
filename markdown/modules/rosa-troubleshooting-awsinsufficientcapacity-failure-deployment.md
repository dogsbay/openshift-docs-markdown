{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting cluster creation with an AWSInsufficientCapacity error {id="rosa-troubleshooting-awsinsufficientcapacity-failure-deployment_{{ context }}"}

If a cluster creation action fails, you might receive the following error message: {._abstract}

```terminal
Provisioning Error Code:    OCM3052
Provisioning Error Message: AWSInsufficientCapacity.
```

This error indicates that AWS has run out of capacity for a particular availability zone that you have requested.

**Procedure**

*   Try reinstalling or select a different AWS region or different availability zones.