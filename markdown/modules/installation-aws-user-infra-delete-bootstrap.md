{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting the bootstrap resources {id="installation-aws-user-infra-delete-bootstrap_{{ context }}"}

After completing the initial Operator configuration for your {{ product_title }} cluster, you can delete the bootstrap resources from {{ aws_short }} to free up capacity and reduce costs. {._abstract}

**Prerequisites**

*   You completed the initial Operator configuration for your cluster.

**Procedure**

1.  Delete the bootstrap resources. If you used the `CloudFormation` template,
[delete its stack](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-delete-stack.html):
    *   Delete the stack by using the {{ aws_short }} CLI:
        ```terminal
        $ aws cloudformation delete-stack --stack-name <name>
        ```

        `<name>` is the name of your bootstrap stack.
    *   Delete the stack by using the [{{ aws_short }} CloudFormation console](https://console.aws.amazon.com/cloudformation/).