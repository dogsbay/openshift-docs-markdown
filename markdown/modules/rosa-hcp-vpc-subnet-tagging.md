{%- if context == "rosa-hcp-prereqs" %}
{%- set hcp_preqs = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Tagging your subnets {id="rosa-hcp-vpc-subnet-tagging_{{ context }}"}

{% if hcp_preqs %}
If you created your own VPC to create a {{ product_title }} cluster, you must tag your VPC subnets.
{% endif %}
{% if not hcp_preqs %}
Before you can use your VPC to create a {{ product_title }} cluster, you must tag your VPC subnets.
{%- endif %}
Automated service preflight checks verify that these resources are tagged correctly before you can use these resources for a cluster. {._abstract}

**Required subnet tags**

<table>
<thead>
<tr>
  <th>Resource</th>
  <th>Key</th>
  <th>Value</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Public subnet</td>
  <td><code>kubernetes.io/role/elb</code></td>
  <td><code>1</code> (or no value)</td>
</tr>
<tr>
  <td>Private subnet</td>
  <td><code>kubernetes.io/role/internal-elb</code></td>
  <td><code>1</code> (or no value)</td>
</tr>
</tbody>
</table>


:::note

You must tag at least one private subnet and, if applicable, one public subnet.

:::


**Prerequisites**

*   You have created a VPC.
*   You have installed the `aws` CLI.

**Procedure**

*   Tag your resources in your terminal by running the following commands:
    1.  For public subnets, run:
        ```terminal
        $ aws ec2 create-tags --resources <public-subnet-id> --region <aws_region> --tags Key=kubernetes.io/role/elb,Value=1
        ```
    1.  For private subnets, run:
        ```terminal
        $ aws ec2 create-tags --resources <private-subnet-id> --region <aws_region> --tags Key=kubernetes.io/role/internal-elb,Value=1
        ```

**Verification**

*   Verify that the tag is correctly applied by running the following command:
    ```terminal
    $ aws ec2 describe-tags --filters "Name=resource-id,Values=<subnet_id>"
    ```

    For example:
    ```text
    TAGS    Name                    <subnet-id>        subnet  <prefix>-subnet-public1-us-east-1a
    TAGS    kubernetes.io/role/elb  <subnet-id>        subnet  1
    ```
{% if context == "rosa-hcp-prereqs" %}
{%- set hcp_preqs = "" -%}
{% endif %}