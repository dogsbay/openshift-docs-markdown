{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the ELB service role {id="rosa-getting-started-verify-elb-role_{{ context }}"}

{% if context == "rosa-getting-started" %}
{%- set getting_started = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}

Check if the `AWSServiceRoleForElasticLoadBalancing` AWS Elastic Load Balancing (ELB) service role exists and if not, create it.


:::note

`Error creating network Load Balancer: AccessDenied:` is produced if you attempt to create a {{ product_title }} (ROSA) cluster without the AWS ELB service role in place.

:::


{% if getting_started %}

**Prerequisites**

*   You have an AWS account.
*   You installed and configured the latest AWS CLI (`aws`) on your workstation.
{% endif %}

**Procedure**

1.  Check if the `AWSServiceRoleForElasticLoadBalancing` role exists for your AWS account:
    ```terminal
    $ aws iam get-role --role-name "AWSServiceRoleForElasticLoadBalancing"
    ```

    **Example output**

    The following example output confirms that the role exists:
    ```terminal
    ROLE    arn:aws:iam::<aws_account_number>:role/aws-service-role/elasticloadbalancing.amazonaws.com/AWSServiceRoleForElasticLoadBalancing  2018-09-27T19:49:23+00:00       Allows ELB to call AWS services on your behalf. 3600      /aws-service-role/elasticloadbalancing.amazonaws.com/   <role_id>   AWSServiceRoleForElasticLoadBalancing
    ASSUMEROLEPOLICYDOCUMENT        2012-10-17
    STATEMENT       sts:AssumeRole  Allow
    PRINCIPAL       elasticloadbalancing.amazonaws.com
    ROLELASTUSED    2022-01-06T09:27:57+00:00       us-east-1
    ```
1.  If the AWS ELB service role does not exist, create it:
    ```terminal
    $ aws iam create-service-linked-role --aws-service-name "elasticloadbalancing.amazonaws.com"
    ```

{% if context == "rosa-getting-started" %}
{%- set getting_started = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}