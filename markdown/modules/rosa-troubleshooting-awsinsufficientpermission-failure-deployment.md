{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting cluster creation with an AWSInsufficientPermissions error {id="rosa-troubleshooting-awsinsufficientpermission-failure-deployment_{{ context }}"}

If a cluster creation action fails, you might receive the following error message. {._abstract}

The following example shows the {{ cluster_manager }} output:

```terminal
Provisioning Error Code:    OCM3033
Provisioning Error Message: Current credentials insufficient for performing cluster installation.
```

This error indicates that the cluster installation is blocked due to missing or insufficient privileges on the AWS account used to provision the cluster.

**Procedure**

1.  Ensure that the prerequisites are met by reviewing _Detailed requirements for deploying ROSA (classic architecture) using STS_ or _Deploying ROSA without AWS STS_ in _Additional resources_ depending on your choice of credential mode for installing clusters.

    :::tip

    AWS Security Token Service (STS) is the recommended credential mode for installing and interacting with clusters on {{ product_title }} because it provides enhanced security.
    
    :::

1.  If needed, you can re-create the permissions and policies by using the `-f` flag:
    ```terminal
    $ rosa create ocm-role -f
    ```
    ```terminal
    $ rosa create user-role -f
    ```
    ```terminal
    $ rosa create account-roles -f
    ```
    ```terminal
    $ rosa create operator-roles -c ${CLUSTER} -f
    ```
1.  Validate all the prerequisites and attempt cluster re-installation.