{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing to deploy a {{ product_title }} cluster in AWS GovCloud {id="rosa-govcloud-deploy-cluster_{{ context }}"}

To deploy a {{ product_title }} cluster in AWS GovCloud, you must be logged in to your Red&#160;Hat FedRAMP account. {._abstract}

**Prerequisites**

*   You have configured your AWS CLI to use GovCloud.
*   You are logged into your government region.

**Procedure**

1.  Navigate to https://console.openshiftusgov.com/openshift/token.
1.  Sign in with your Red&#160;Hat FedRAMP account credentials where you will see a screen with your token.
1.  Copy your token for the next step.
1.  In your terminal:
    1.  Run `rosa login` and paste your copied token to log in to the service.
        ```terminal
        $ rosa login --govcloud --token=<TOKEN>
        ```

        :::note

        Depending on your AWS CLI configuration, you might need to add a government region to the end of the command string, such as `--region us-gov-west-1`.
        
        :::

    1.  Run `rosa whoami` to confirm all information is correct ensuring that you are using the AWS Gov region and the {{ cluster_manager_first }} API is “https://api.openshiftusgov.com”..
        ```terminal
        $ rosa whoami
        ```

        ```text title="Example output"
        AWS ARN:                                 arn:aws-us-gov:iam::00000000000:user/rosa-gov-user
        AWS Account ID:                       00000000000
        AWS Default Region:                 us-gov-east-1
        OCM API:                                   https://api.openshiftusgov.com
        OCM Account Email:                  rosa-gov-user@redhat.com
        OCM Account ID:                       3ZXXXXXXXXXXXXXXXXXXXXXXXXX
        OCM Account Name:                 Rosa Gov
        OCM Account Username:          rosa-gov-user
        OCM Organization External ID:  rosa-gov-user
        OCM Organization ID:                3ZXXXXXXXXXXXXXXXXXXXXXXXXX
        OCM Organization Name:          rosa-gov-user
        ```
1.  You must create a VPC where {{ product_title }} will be deployed.
For instructions on setting up a VPC, see [Amazon VPC architecture for the AWS PrivateLink use case](https://docs.aws.amazon.com/ROSA/latest/userguide/getting-started-private-link.html#getting-started-private-link-step-2).