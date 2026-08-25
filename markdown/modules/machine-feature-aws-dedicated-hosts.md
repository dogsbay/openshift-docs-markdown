{%- set _mod_docs_content_type = "PROCEDURE" %}
# Place machines on Dedicated Hosts by using machine templates {id="machine-feature-aws-dedicated-hosts_{{ context }}"}

You can configure a machine template to place machines on {{ aws_first }} Dedicated Hosts. With dynamic host allocation, the Cluster API requests a Dedicated Host from {{ aws_short }} and applies the specified tags to the Dedicated Host. {._abstract}

{%- set FeatureName = "{{ aws_short }} Dedicated Host support" %}
{% include "./snippets/technology-preview.md" %}

To deploy compute machines with your configuration, configure the appropriate values in a machine template YAML file.
Then, configure a machine set YAML file to reference the machine template when it deploys machines.

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
          dynamicHostAllocation:
            tags:
              <tag_name>: <tag_value>
    # ...
    ```

    where:

    `spec.template.spec.dynamicHostAllocation.tags`
    :   Optional parameter. Specifies tags to apply to the dynamically allocated Dedicated Host. If you specify tags, you must specify both a key and a value. For `<tag_name>`, specify the tag key, for example `Environment`. For `<tag_value>`, specify the tag value, for example `production`.