{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the {{ pipelines_title }} control plane {id="op-configuring-pipelines-control-plane_{{ context }}"}

You can customize the {{ pipelines_shortname }} control plane by editing the configuration fields in the `TektonConfig` custom resource (CR). The {{ pipelines_title }} Operator automatically adds the configuration fields with their default values so that you can use the {{ pipelines_shortname }} control plane.

**Procedure**

1.  In the **Administrator** perspective of the web console, navigate to **Administration** → **CustomResourceDefinitions**.
1.  Use the **Search by name** box to search for the `tektonconfigs.operator.tekton.dev` custom resource definition (CRD). Click **TektonConfig** to see the CRD details page.
1.  Click the **Instances** tab.
1.  Click the **config** instance to see the `TektonConfig` CR details.
1.  Click the **YAML** tab.
1.  Edit the `TektonConfig` YAML file based on your requirements.
    ```yaml title="Example of TektonConfig CR with default values"
    apiVersion: operator.tekton.dev/v1alpha1
    kind: TektonConfig
    metadata:
      name: config
    spec:
      pipeline:
        running-in-environment-with-injected-sidecars: true
        metrics.taskrun.duration-type: histogram
        metrics.pipelinerun.duration-type: histogram
        await-sidecar-readiness: true
        params:
          - name: enableMetrics
            value: 'true'
        default-service-account: pipeline
        require-git-ssh-secret-known-hosts: false
        enable-tekton-oci-bundles: false
        metrics.taskrun.level: task
        metrics.pipelinerun.level: pipeline
        enable-api-fields: stable
        enable-provenance-in-status: false
        enable-custom-tasks: true
        disable-creds-init: false
        disable-affinity-assistant: true
    ```