{%- set _mod_docs_content_type = "PROCEDURE" %}
# Confirming the environment variables {id="cloud-experts-deploying-application-integrating-aws-confirm-variables_{{ context }}"}

Before continuing, you need to verify that the environment variables are correct. {._abstract}

**Procedure**

*   Use the following command to describe the pods and verify that the `AWS_WEB_IDENTITY_TOKEN_FILE` and `AWS_ROLE_ARN` environment variables exist for our application:
    ```terminal
    $ oc describe pod ostoy-frontend -n ${OSTOY_NAMESPACE} | grep "^\s*AWS_"
    ```

    **Example output**
    ```terminal
    AWS_ROLE_ARN:                 arn:aws:iam::000000000000:role/ostoy-sa
    AWS_WEB_IDENTITY_TOKEN_FILE:  /var/run/secrets/eks.amazonaws.com/serviceaccount/token
    ```