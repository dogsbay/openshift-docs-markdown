{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the Elastic Load Balancing (ELB) service-linked role {id="rosa-troubleshooting-elb-service-role_{{ context }}"}

If you have not created a load balancer in your AWS account, it is possible that the service-linked role for Elastic Load Balancing (ELB) might not exist yet. You might receive the following error: {._abstract}

```terminal
Error: Error creating network Load Balancer: AccessDenied: User: arn:aws:sts::xxxxxxxxxxxx:assumed-role/ManagedOpenShift-Installer-Role/xxxxxxxxxxxxxxxxxxx is not authorized to perform: iam:CreateServiceLinkedRole on resource: arn:aws:iam::xxxxxxxxxxxx:role/aws-service-role/elasticloadbalancing.amazonaws.com/AWSServiceRoleForElasticLoadBalancing"
```

**Procedure**

*   To resolve this issue, ensure that the role exists on your AWS account. If not, create this role with the following command:
    ```terminal
    aws iam get-role --role-name "AWSServiceRoleForElasticLoadBalancing" || aws iam create-service-linked-role --aws-service-name "elasticloadbalancing.amazonaws.com"
    ```

    :::note

    This command only needs to be executed once per account.
    
    :::