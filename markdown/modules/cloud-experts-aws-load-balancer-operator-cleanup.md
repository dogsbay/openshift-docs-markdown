{%- set _mod_docs_content_type = "PROCEDURE" %}
# Clean up AWS resources {id="cloud-experts-aws-load-balancer-operator-cleanup_{{ context }}"}

Remove the sample application, AWS Load Balancer Operator, and associated Identity and Access Management (IAM) roles and policies created during this tutorial. {._abstract}

**Procedure**

1.  Delete the `hello-world` application namespace and all the resources in the namespace:
    ```terminal
    $ oc delete project hello-world
    ```
1.  Delete the AWS Load Balancer Operator and the AWS IAM roles:
    ```terminal
    $ oc delete subscription aws-load-balancer-operator -n aws-load-balancer-operator
    $ aws iam detach-role-policy \
      --role-name "${ROSA_CLUSTER_NAME}-alb-operator" \
      --policy-arn $POLICY_ARN
    $ aws iam delete-role \
      --role-name "${ROSA_CLUSTER_NAME}-alb-operator"
    ```
1.  Delete the AWS IAM policy:
    ```terminal
    $ aws iam delete-policy --policy-arn $POLICY_ARN
    ```