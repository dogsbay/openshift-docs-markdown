{%- set _mod_docs_content_type = "PROCEDURE" %}
# Step Two - Cluster Creator: Reserve your DNS entries and create cluster Operator roles {id="rosa-sharing-vpc-dns-and-roles_{{ context }}"}

{% if openshift_rosa_hcp %}
After the **VPC Owner** creates a VPC, subnets, and an Identity and Access Management (IAM) role, reserve an `openshiftapps.com` DNS domain and create Operator roles.
{% endif %}
{% if openshift_rosa %}
After the **VPC Owner** creates a virtual private cloud, subnets, and an IAM role for sharing the VPC resources, reserve an `openshiftapps.com` DNS domain and create Operator roles to communicate back to the **VPC Owner**.
{% endif %}


:::note

For shared VPC clusters, you can choose to create the Operator roles after the cluster creation steps. The cluster is in a `waiting` state until the Ingress Operator role ARN is added to the shared VPC role trusted relationships.

:::


{% if openshift_rosa_hcp %}
![Step two of the shared VPC workflow showing DNS reservation and Operator role creation.](/images/522-shared-vpc-step-2.png)
{% endif %}
{% if openshift_rosa %}
![372_OpenShift_on_AWS_persona_worflows_0923_2](/images/372_OpenShift_on_AWS_persona_worflows_0923_2.png)
{%- endif %}

**Prerequisites**

{% if openshift_rosa_hcp %}
*   You have the `Route 53 role` Amazon Resource Name (ARN) for the IAM role from the **VPC Owner**.
*   You have the `VPC endpoint role` ARN for the IAM role from the **VPC Owner**.
{% endif %}
{% if openshift_rosa %}
*   You have the `SharedVPCRole` ARN for the IAM role from the **VPC Owner**.
{% endif %}

**Procedure**

1.  Reserve an `openshiftapps.com` DNS domain with the following command:
    ```terminal {minja}
    {% if openshift_rosa_hcp %}
    $ rosa create dns-domain --hosted-cp
    {% endif %}
    {% if openshift_rosa %}
    $ rosa create dns-domain
    {% endif %}
    ```

    The command creates a reserved `openshiftapps.com` DNS domain.
    ```terminal {minja}
    {% if openshift_rosa_hcp %}
    I: DNS domain '14eo.p3.openshiftapps.com' has been created.
    {% endif %}
    {% if openshift_rosa %}
    I: DNS domain '14eo.p1.openshiftapps.com' has been created.
    {%- endif %}
    I: To view all DNS domains, run 'rosa list dns-domains'
    ```
1.  Create an OpenID Connect (OIDC) configuration.

    Review this article for more information on the [OIDC configuration process](https://access.redhat.com/articles/7031018). The following command produces the OIDC configuration ID that you need:
    ```terminal
    $ rosa create oidc-config
    ```

    You receive confirmation that the command created an OIDC configuration:
    ```terminal
    I: To create Operator Roles for this OIDC Configuration, run the following command and remember to replace <user-defined> with a prefix of your choice:
    	rosa create operator-roles --prefix <user-defined> --oidc-config-id 25tu67hq45rto1am3slpf5lq6jargg
    ```

{% if openshift_rosa_hcp %}
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
    Take note of the Support role ARN and Worker role ARN, since you will use them in the cluster’s creation command.
    
    :::

1.  After creating the Operator roles, share the _Ingress Operator Cloud Credentials_, _Installer_, and _Control plane Operator Cloud Credentials_ role ARNs with the **VPC Owner**.

    The shared information resembles these examples:
    *   ``14eo.p3.openshiftapps.com``
    *   ``arn:aws:iam::111122223333:role/<PREFIX>-HCP-ROSA-Installer-Role``
    *   ``arn:aws:iam::111122223333:role/<PREFIX>-openshift-ingress-operator-cloud-credentials``
    *   ``arn:aws:iam::111122223333:role/<PREFIX>-kube-system-control-plane-operator``
{% endif %}
{% if openshift_rosa %}
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
{% endif %}