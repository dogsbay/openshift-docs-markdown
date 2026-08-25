{%- set _mod_docs_content_type = "PROCEDURE" %}
# Set environment variables for the {{ autonode }} setup {id="rosa-nodes-autonode-managing-set-env-vars_{{ context }}"}

Set the environment variables that are used throughout the {{ autonode }} setup procedures. {._abstract}

**Procedure**

*   Export the following environment variables:
    ```terminal
    $ export CLUSTER_NAME=<cluster_name>
    $ export AWS_REGION=<aws_region>
    $ export CLUSTER_ID=$(rosa describe cluster -c "$CLUSTER_NAME" -o json | jq -r '.id')
    ```

    :::important

    Ensure that your AWS client is using the region where your cluster is deployed.
    
    :::


**Verification**

*   Run the following command to verify that the variables are set:
    ```terminal
    $ echo $CLUSTER_NAME $AWS_REGION $CLUSTER_ID
    ```