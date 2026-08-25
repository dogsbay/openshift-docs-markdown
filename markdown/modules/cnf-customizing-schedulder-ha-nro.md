{%- set _mod_docs_content_type = "PROCEDURE" %}
# Customizing scheduler replicas {id="customizing-scheduler-replicas_{{ context }}"}

You can set a specific number of scheduler replicas by updating the `spec.replicas` field in the `NUMAResourcesScheduler` custom resource. This configuration overrides the default HA behavior. {._abstract}

**Procedure**

1.  Create the `NUMAResourcesScheduler` CR with the following YAML named for example `custom-ha.yaml` that sets the number of replicas to 2:
    ```yaml
    apiVersion: nodetopology.openshift.io/v1
    kind: NUMAResourcesScheduler
    metadata:
      name: example-custom
    spec:
      imageSpec: 'registry.redhat.io/openshift4/noderesourcetopology-scheduler-rhel9:v{{ product_version }}'
      replicas: 2
    # ...
    ```
1.  Deploy the NUMA-aware pod scheduler by running the following command: 
    ```terminal
    $ oc apply -f custom-ha.yaml
    ```