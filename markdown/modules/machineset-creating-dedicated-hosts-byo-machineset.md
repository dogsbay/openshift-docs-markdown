{%- set _mod_docs_content_type = "PROCEDURE" %}
# Place machines on a specific Dedicated Host by using machine sets {id="machineset-creating-dedicated-hosts-byo-machineset_{{ context }}"}

You can configure a machine set to place machines on a specific {{ aws_first }} Dedicated Host by specifying the host ID. {._abstract}

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
                  id: <dedicated_host_id>
    ```

    where:

    `<dedicated_host_id>`
    :   Specifies the ID of the {{ aws_short }} Dedicated Host on which to place the machine, for example `h-0123456789abcdef0`.

**Verification**

*   Verify that the machine set exists by running the following command:
    ```terminal
    $ oc get machineset -n openshift-machine-api
    ```