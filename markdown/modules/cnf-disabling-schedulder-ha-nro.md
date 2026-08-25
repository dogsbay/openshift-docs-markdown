{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling NUMA-aware scheduling {id="disabling-numa-aware-scheduling_{{ context }}"}

You can disable the NUMA-aware scheduler to stop all running scheduler pods and preventing new ones from starting. {._abstract}

**Procedure**

1.  Save the following minimal required YAML in the `nro-disable-scheduler.yaml` file. Disable the scheduler by setting the `spec.replicas` field to `0`. 
    ```yaml {minja}
    apiVersion: nodetopology.openshift.io/v1
    kind: NUMAResourcesScheduler
    metadata:
      name: example-disable
    spec:
      imageSpec: 'registry.redhat.io/openshift4/noderesourcetopology-scheduler-rhel9:v{{ product_version }}'
      replicas: 0
    # ...
    ```
1.  Disable the NUMA-aware pod scheduler by running the following command: 
    ```terminal
    $ oc apply -f nro-disable-scheduler.yaml
    ```