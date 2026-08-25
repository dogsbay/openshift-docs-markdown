{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an IAM role and policy for the ACK controller {id="cloud-experts-deploying-application-integrating-aws-iam-role-policy_{{ context }}"}

Create the IAM roles and policies for the ACK controller by using the provided scripts. {._abstract}

**Procedure**

1.  Run one of the following scripts to create the AWS IAM role for the ACK controller and assign the S3 policy:
    *   Automatically download the [setup-s3-ack-controller.sh](https://www.rosaworkshop.io/ostoy/resources/setup-s3-ack-controller.sh) script, which automates the process for you.
    *   Run the following script in your command-line interface (CLI):
        ```terminal
        $ curl https://raw.githubusercontent.com/openshift-cs/rosaworkshop/master/rosa-workshop/ostoy/resources/setup-s3-ack-controller.sh | bash
        ```
1.  When the script completes, it restarts the deployment which updates the service controller pods with the IAM roles for service accounts environment variables.
1.  Confirm that the environment variables are set by running the following command:
    ```terminal
    $ oc describe pod ack-s3-controller -n ack-system | grep "^\s*AWS_"
    ```

    **Example output**
    ```terminal
    AWS_ROLE_ARN:                 arn:aws:iam::000000000000:role/ack-s3-controller
    AWS_WEB_IDENTITY_TOKEN_FILE:  /var/run/secrets/eks.amazonaws.com/serviceaccount/token
    ```
1.  Confirm successful setup of the ACK controller in the web console by clicking **Operators** and then **Installed operators**.

    ![cloud-experts-deployment-installing-ack-oper-installed](/_assets/images/cloud-experts-deployment-installing-ack-oper-installed.png)
1.  If you do not see a successful Operator installation and the environment variables, manually restart the deployment by running the following command:
    ```terminal
    $ oc rollout restart deployment ack-s3-controller -n ack-system
    ```