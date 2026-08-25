{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing the AWS Load Balancer Operator {id="aws-load-balancer-operator-deleting_{{ context }}"}

If you no longer need to use the AWS Load Balancer Operator, you can remove the Operator and delete any related roles and policies. {._abstract}

**Procedure**

1.  Delete the Operator Subscription:
    ```terminal
    $ oc delete subscription aws-load-balancer-operator -n aws-load-balancer-operator
    ```
1.  Detach and delete the relevant AWS IAM roles:
    ```terminal
    $ aws iam detach-role-policy \
      --role-name "<cluster_id>-alb-operator" \
      --policy-arn <operator_policy_arn>
    ```
    ```terminal
    $ aws iam delete-role \
      --role-name "<cluster_id>-alb-operator"
    ```
1.  Delete the AWS IAM policy:
    ```terminal
    $ aws iam delete-policy --policy-arn <operator_policy_arn>
    ```