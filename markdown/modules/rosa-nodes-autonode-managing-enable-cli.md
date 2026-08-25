{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable the {{ autonode }} using {{ rosa_cli }} {id="rosa-nodes-autonode-managing-enable-cli_{{ context }}"}

Enable the {{ autonode }} on your cluster by using {{ rosa_cli_first }} after it finishes installing. {._abstract}

**Procedure**

1.  Wait for the cluster to become ready:
    ```terminal
    $ rosa describe cluster -c $CLUSTER_ID | grep -i State
    ```
    ```terminal title="Example output"
    State:                      ready
    ```
1.  Ensure that your {{ autonode }} IAM role is correctly set:
    ```terminal
    $ ROLE_ARN=$(aws iam get-role --role-name rosa-karpenter-controller-role-${CLUSTER_NAME} --query 'Role.Arn' --output text)
    ```
1.  Enable the {{ autonode }}:
    ```terminal
    $ rosa edit cluster -c $CLUSTER_ID \
      --autonode=enabled \
      --autonode-iam-role-arn=$ROLE_ARN
    ```
1.  If you do not already have cluster admin access, create a cluster admin user:
    ```terminal
    $ rosa create admin -c $CLUSTER_ID
    ```
1.  Log in to the cluster using the credentials from the previous command:
    ```terminal
    $ oc login <api_url> --username cluster-admin --password <password>
    ```
1.  Verify that the {{ autonode }} custom resource definitions (CRDs) are present:
    ```terminal
    $ oc get ec2nodeclass
    ```

    :::note

    The node pool manifest uses the `EC2NodeClass` resource.
    
    :::

    ```terminal title="Example output"
    NAME      READY   AGE
    default   True    5m
    ```
    ```terminal
    $ oc get openshiftec2nodeclass
    ```

    :::note

    The `OpenshiftEC2NodeClass` resource is Red&#160;Hat’s wrapper to communicate with the `EC2NodeClass` resource.
    
    :::

    ```terminal title="Example output"
    NAME      READY
    default   True
    ```