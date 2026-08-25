{%- set _mod_docs_content_type = "PROCEDURE" %}
# Tagging your subnets {id="rosa-hcp-vpc-subnet-tagging-rosa-network_{{ context }}"}

Before you can use your VPC to create a {{ product_title }} cluster, you must tag your VPC subnets. Automated service preflight checks verify that these resources are tagged correctly. {._abstract}

The following table shows how to tag your resources:

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
  <td><code>1</code> or no value</td>
</tr>
<tr>
  <td>Private subnet</td>
  <td><code>kubernetes.io/role/internal-elb</code></td>
  <td><code>1</code> or no value</td>
</tr>
</tbody>
</table>


:::note

You must tag at least one private subnet and one public subnet, if applicable.

:::


**Procedure**

*   Tag your resources in your terminal:
    *   For public subnets, run the following command:
        ```terminal
        $ aws ec2 create-tags --resources <public_subnet_id> --region <aws_region> --tags Key=kubernetes.io/role/elb,Value=1
        ```
    *   For private subnets, run the following command:
        ```terminal
        $ aws ec2 create-tags --resources <private_subnet_id> --region <aws_region> --tags Key=kubernetes.io/role/internal-elb,Value=1
        ```

**Verification**

*   Verify that the tag is correct by running the following command:
    ```terminal
    $ aws ec2 describe-tags --filters "Name=resource-id,Values=<subnet_id>"
    ```
    ```text title="Example output"
    TAGS    Name                    <subnet_id>        subnet  <prefix>-subnet-public1-us-east-1a
    TAGS    kubernetes.io/role/elb  <subnet_id>        subnet  1
    ```