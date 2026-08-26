{%- set _mod_docs_content_type = "PROCEDURE" %}
# Step Two - Cluster Creator: Reserving your DNS and creating cluster operator roles {id="rosa-sharing-vpc-dns-and-roles_{{ context }}"}

After the **VPC Owner** creates a virtual private cloud, subnets, and an IAM role for sharing the VPC resources, reserve an `openshiftapps.com` DNS domain and create Operator roles to communicate back to the **VPC Owner**. {._abstract}


:::note

For shared VPC clusters, you can choose to create the Operator roles after the cluster creation steps. The cluster will be in a `waiting` state until the Ingress Operator role ARN is added to the shared VPC role trusted relationships.

:::


![372_OpenShift_on_AWS_persona_worflows_0923_2](/images/372_OpenShift_on_AWS_persona_worflows_0923_2.png)

**Prerequisites**

*   You have the `SharedVPCRole` ARN for the IAM role from the **VPC Owner**.

**Procedure**

1.  Reserve an `openshiftapps.com` DNS domain with the following command:
    ```terminal
    $ rosa create dns-domain
    ```

    The command creates a reserved `openshiftapps.com` DNS domain.
    ```terminal
    I: DNS domain '14eo.p1.openshiftapps.com' has been created.
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
1.  Create the Operator roles by entering the following command. Provide the OIDC configuration ID from the previous step, your installer ARN that was created as part of the `rosa create account-roles` process, the ARN for the role that the **VPC Owner** created, and a prefix for the Operator roles.
    ```terminal
    $ rosa create operator-roles --oidc-config-id <oidc-config-ID> \
        --installer-role-arn <Installer_Role> \
        --shared-vpc-role-arn <Created_VPC_Role_Arn> \
        --prefix <operator-prefix>
    ```

    :::note

    The Installer account role and the shared VPC role must have a one-to-one relationship. If you want to create multiple shared VPC roles, you should create one set of account roles per shared VPC role.
    
    :::

1.  After creating the Operator roles, share the following information with the **VPC Owner** to proceed with the configuration:
    *   The full domain name, `<intended_cluster_domain_prefix>.<reserved_dns_domain>` (for example, `my-rosa-cluster.14eo.p1.openshiftapps.com`)
    *   The ARN for your Installer role (for example, `arn:aws:iam::111122223333:role/ManagedOpenShift-Installer-Role`)
    *   The ARN for your Ingress Operator Cloud Credentials role (for example, `arn:aws:iam::111122223333:role/my-rosa-cluster-openshift-ingress-operator-cloud-credentials`)