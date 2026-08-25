{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a private {{ product_title }} cluster using the ROSA CLI {id="rosa-hcp-aws-private-create-cluster_{{ context }}"}

You can create a private cluster with multiple availability zones (Multi-AZ) on {{ product_title }} using the ROSA command-line interface (CLI), `rosa`. {._abstract}

Creating a cluster with {{ hcp }} can take around 10 minutes.

**Prerequisites**

*   You have available AWS service quotas.
*   You have enabled the {{ product_title }} in the AWS Console.
*   You have installed and configured the latest version of the ROSA CLI on your installation host.

**Procedure**

1.  Create a VPC with at least one private subnet. Ensure that your machine’s classless inter-domain routing (CIDR) matches your virtual private cloud’s CIDR. For more information, see [Requirements for using your VPC](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html-single/installing_on_aws/index#installation-custom-aws-vpc-requirements_installing-aws-vpc) and [VPC validation](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html-single/installing_on_aws/index#installation-custom-aws-vpc-validation_installing-aws-vpc).

    :::important

    If you use a firewall, you must configure it so that ROSA can access the sites that required to function.

    For more information, see the "AWS PrivateLink firewall prerequisites" section.
    
    :::

1.  Create the account-wide IAM roles by running the following command:
    ```terminal
    $ rosa create account-roles --hosted-cp
    ```
1.  Create the OIDC configuration by running the following command:
    ```terminal
    $ rosa create oidc-config --mode=auto --yes
    ```

    Save the OIDC configuration ID because you need it to create the Operator roles.
    ```terminal title="Example output"
    I: Setting up managed OIDC configuration
    I: To create Operator Roles for this OIDC Configuration, run the following command and remember to replace <user-defined> with a prefix of your choice:
    	rosa create operator-roles --prefix <user-defined> --oidc-config-id 28s4avcdt2l318r1jbk3ifmimkurk384
    If you are going to create a Hosted Control Plane cluster please include '--hosted-cp'
    I: Creating OIDC provider using 'arn:aws:iam::46545644412:user/user'
    I: Created OIDC provider with ARN 'arn:aws:iam::46545644412:oidc-provider/oidc.op1.openshiftapps.com/28s4avcdt2l318r1jbk3ifmimkurk384'
    ```
1.  Create the Operator roles by running the following command:
    ```terminal
    $ rosa create operator-roles --hosted-cp --prefix <operator_roles_prefix> --oidc-config-id <oidc_config_id> --installer-role-arn arn:aws:iam::$<account_roles_prefix>:role/$<account_roles_prefix>-HCP-ROSA-Installer-Role
    ```
1.  Create a private {{ product_title }} cluster by running the following command:
    ```terminal
    $ rosa create cluster --private --cluster-name=<cluster-name> --sts --mode=auto --hosted-cp --operator-roles-prefix <operator_role_prefix> --oidc-config-id <oidc_config_id> [--machine-cidr=<VPC CIDR>/16] --subnet-ids=<private-subnet-id1>[,<private-subnet-id2>,<private-subnet-id3>]
    ```
1.  Enter the following command to check the status of your cluster. During cluster creation, the `State` field transitions from `pending` to `installing`, and finally, to `ready`.
    ```terminal
    $ rosa describe cluster --cluster=<cluster_name>
    ```

    :::note

    If installation fails or the `State` field does not change to `ready` after 10 minutes, see the "Troubleshooting Red&#160;Hat OpenShift Service on AWS installations" documentation in the Additional resources section.
    
    :::

1.  Enter the following command to follow the OpenShift installer logs to track the progress of your cluster:
    ```terminal
    $ rosa logs install --cluster=<cluster_name> --watch
    ```