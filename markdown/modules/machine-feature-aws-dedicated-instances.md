{%- set _mod_docs_content_type = "CONCEPT" %}
# Dedicated Instance configuration options {id="machine-feature-aws-dedicated-instances_{{ context }}"}

You can deploy machines that are backed by Dedicated Instances on {{ aws_first }} clusters.  {._abstract}

Dedicated Instances run in a virtual private cloud (VPC) on hardware that is dedicated to a single customer. 
These Amazon EC2 instances are physically isolated at the host hardware level. 
The isolation of Dedicated Instances occurs even if the instances belong to different {{ aws_short }} accounts that are linked to a single payer account. 
However, other instances that are not dedicated can share hardware with Dedicated Instances if they belong to the same {{ aws_short }} account.

{{ product_title }} supports instances with public or dedicated tenancy.

{% include "./snippets/apply-machine-configuration-method.md" %}

```yaml title="Sample Dedicated Instances configuration"
apiVersion: infrastructure.cluster.x-k8s.io/v1beta2
kind: AWSMachineTemplate
# ...
spec:
  template:
    spec:
      tenancy: dedicated
# ...
```
The `tenancy` field specifies using instances with dedicated tenancy that run on single-tenant hardware.
If you do not specify the `dedicated` value, instances with public tenancy that run on shared hardware are used by default.