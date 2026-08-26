{%- set _mod_docs_content_type = "PROCEDURE" %}
# Step Two - Cluster Creator: Reserving your DNS entries and creating cluster Operator roles {id="rosa-hcp-sharing-vpc-dns-and-roles_{{ context }}"}

After the **VPC Owner** creates a VPC, subnets, and an IAM role, reserve an `openshiftapps.com` DNS domain and create Operator roles. {._abstract}


:::note

For shared VPC clusters, you can choose to create the Operator roles after the cluster creation steps. The cluster is in a `waiting` state until the Ingress Operator role ARN is added to the shared VPC role trusted relationships.

:::


![Step two of the shared VPC workflow showing DNS reservation and Operator role creation.](/images/522-shared-vpc-step-2.png)

**Prerequisites**

*   You have the `Route 53 role` ARN for the IAM role from the **VPC Owner**.
*   You have the `VPC endpoint role` ARN for the IAM role from the **VPC Owner**.

**Procedure**

1.  Reserve an `openshiftapps.com` DNS domain with the following command:
    ```terminal
    $ rosa create dns-domain --hosted-cp
    ```

    The command creates a reserved `openshiftapps.com` DNS domain.
    ```terminal
    I: DNS domain '14eo.p3.openshiftapps.com' has been created.
    I: To view all DNS domains, run 'rosa list dns-domains'
    ```
1.  Create an OIDC configuration.

    Review this article for more information on the [OIDC configuration process](https://access.redhat.com/articles/7031018). The following command produces the OIDC configuration ID that you need:
    ```terminal
    $ rosa create oidc-config
    ```

    You receive confirmation that the command created an OIDC configuration:
    ```terminal
    I: To create Operator Roles for this OIDC Configuration, run the following command and remember to replace <user-defined> with a prefix of your choice:
    	rosa create operator-roles --prefix <user-defined> --oidc-config-id 25tu67hq45rto1am3slpf5lq6jargg
    ```
1.  Create the account roles by entering the following command:
    ```terminal
    $ rosa create account-roles \
        --route53-role-arn <Created_Route_53_Role_Arn> \
        --vpc-endpoint-role-arn <Created_VPC_Endpoint_Role_Arn> \
        --prefix <user_defined_account_role_prefix> \
        --hosted-cp
    ```
    where:


    `<Created_Route_53_Role_Arn>`
    :   Provide the ARN for the Route 53 role that the **VPC Owner** created.

    `<Created_VPC_Endpoint_Role_Arn>`
    :   Provide the ARN for the VPC endpoint role that the **VPC Owner** created.

    `<user_defined_account_role_prefix>`
    :   Provide a prefix for the Operator roles.
1.  Create the Operator roles by entering the following command:
    ```terminal
    $ rosa create operator-roles --oidc-config-id <oidc-config-ID> \
        --installer-role-arn <Installer_Role> \
        --route53-role-arn <Created_Route_53_Role_Arn> \
        --vpc-endpoint-role-arn <Created_VPC_Endpoint_Role_Arn> \
        --prefix <operator-prefix> \
        --hosted-cp
    ```
    where:


    `<oidc-config-ID>`
    :   Provide the OIDC configuration ID that you created in the previous step.

    `<Installer_Role>`
    :   Provide your installer ARN that was created as part of the `rosa create account-roles` process.

    `<Created_Route_53_Role_Arn>`
    :   Provide the ARN for the Route 53 role that the **VPC Owner** created.

    `<Created_VPC_Endpoint_Role_Arn>`
    :   Provide the ARN for the VPC endpoint role that the **VPC Owner** created.

    `<operator-prefix>`
    :   Provide a prefix for the Operator roles.

    :::note

    The Installer account role and the shared VPC roles must have a one-to-one relationship. If you want to create multiple shared VPC roles, you should create one set of account roles per shared VPC role.
    
    :::

1.  After creating the Operator roles, share the _Ingress Operator Cloud Credentials_, _Installer_, and _Control plane Operator Cloud Credentials_ role ARNs with the **VPC Owner**.

    The shared information resembles these examples:
    *   ``my-rosa-cluster.14eo.p1.openshiftapps.com``
    *   ``arn:aws:iam::111122223333:role/ManagedOpenShift-Installer-Role``
    *   ``arn:aws:iam::111122223333:role/my-rosa-cluster-openshift-ingress-operator-cloud-credentials``
    *   ``arn:aws:iam::111122223333:role/my-rosa-cluster-control-plane-operator``