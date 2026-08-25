{%- set _mod_docs_content_type = "PROCEDURE" %}
# Place machines on a specific Dedicated Host by using machine templates {id="machine-feature-aws-dedicated-hosts-byo-template_{{ context }}"}

You can configure a machine template to place machines on a specific {{ aws_first }} Dedicated Host by specifying the host ID. {._abstract}

{%- set FeatureName = "{{ aws_short }} Dedicated Host support" %}
{% include "./snippets/technology-preview.md" %}

{% include "./snippets/apply-machine-configuration-method.md" %}

**Procedure**

*   Configure the following fields in your `AWSMachineTemplate` resource:
    ```yaml
    apiVersion: infrastructure.cluster.x-k8s.io/v1beta2
    kind: AWSMachineTemplate
    # ...
    spec:
      template:
        spec:
          tenancy: host
          hostAffinity: host
          hostID: <dedicated_host_id>
    # ...
    ```

    where:

    `<dedicated_host_id>`
    :   Specifies the ID of the {{ aws_short }} Dedicated Host on which to place the machine, for example `h-0123456789abcdef0`.