{%- set _mod_docs_content_type = "PROCEDURE" %}
# Place machines on Dedicated Hosts by using machine sets {id="machineset-creating-dedicated-hosts_{{ context }}"}

You can configure a machine set to place machines on {{ aws_first }} Dedicated Hosts. With dynamic host allocation, the Machine API Operator requests a Dedicated Host from {{ aws_short }} and applies the specified tags to the Dedicated Host. {._abstract}

{%- set FeatureName = "{{ aws_short }} Dedicated Host support" %}
{% include "./snippets/technology-preview.md" %}

**Procedure**

*   Specify the following `placement` fields in your machine set YAML file:
    ```yaml
    apiVersion: machine.openshift.io/v1beta1
    kind: MachineSet
    # ...
    spec:
      template:
        spec:
          providerSpec:
            placement:
              tenancy: host
              host:
                affinity: DedicatedHost
                dedicatedHost:
                  allocationStrategy: Dynamic
                  dynamicHostAllocation:
                    tags:
                    - name: <tag_name>
                      value: <tag_value>
    ```

    where:

    `spec.template.spec.providerSpec.placement.host.dedicatedHost.dynamicHostAllocation.tags`
    :   Optional: Specifies tags to apply to the dynamically allocated Dedicated Host. If you specify tags, you must specify both a key and a value. For `<tag_name>`, specify the tag key, for example `Environment`. For `<tag_value>`, specify the tag value, for example `production`.

**Verification**

*   Verify that the machine set exists by running the following command:
    ```terminal
    $ oc get machineset -n openshift-machine-api
    ```