{%- set _mod_docs_content_type = "CONCEPT" %}
# Amazon EC2 Instance Metadata Service configuration options {id="machine-feature-aws-imds-options_{{ context }}"}

You can restrict the version of the Amazon EC2 Instance Metadata Service (IMDS) that machines on {{ aws_first }} clusters use.
Machines can require the use of IMDSv2, or allow the use of IMDSv1 in addition to IMDSv2. {._abstract}

{% include "./snippets/apply-machine-configuration-method.md" %}


:::important

Before creating machines that require IMDSv2, ensure that any workloads that interact with the IMDS support IMDSv2.

:::


```yaml title="Sample IMDS configuration"
apiVersion: infrastructure.cluster.x-k8s.io/v1beta2
kind: AWSMachineTemplate
# ...
spec:
  template:
    spec:
      instanceMetadataOptions:
        httpEndpoint: enabled
        httpPutResponseHopLimit: 1
        httpTokens: optional
        instanceMetadataTags: disabled
# ...
```

where:


`spec.template.spec.instanceMetadataOptions.httpPutResponseHopLimit`
:   Specifies the number of network hops allowed for IMDSv2 calls.
    If no value is specified, this parameter is set to `1` by default.

`spec.template.spec.instanceMetadataOptions.httpTokens`
:   Specifies whether to require the use of IMDSv2.
    If no value is specified, this parameter is set to `optional` by default.
    The following values are valid:
    *   `optional`: Allow the use of both IMDSv1 and IMDSv2.
    *   `required`: Require IMDSv2.


:::note

The Machine API does not support the `httpEndpoint`, `httpPutResponseHopLimit`, and `instanceMetadataTags` fields.
If you migrate a Cluster API machine template that uses this feature to a Machine API compute machine set, any Machine API machines that it creates will not have these fields and the underlying instances will not use these settings.
Any existing machines that the migrated machine set manages will retain these fields and the underlying instances will continue to use these settings.

:::


Requiring the use of IMDSv2 might cause timeouts.
For more information, including mitigation strategies, see "Instance metadata access considerations".