{%- set _mod_docs_content_type = "PROCEDURE" %}
# Opting out of Tekton Hub in the Developer perspective {id="opting-out-of-tekton-hub-in-the-developer-perspective_{{ context }}"}

Cluster administrators can opt out of displaying {{ tekton_hub }} resources, such as tasks and pipelines, in the ***Pipeline builder*** page of the ***Developer*** perspective of an {{ product_title }} cluster. {._abstract}

**Prerequisite**

*   Ensure that the {{ pipelines_title }} Operator is installed on the cluster, and the `oc` command-line tool is available.

**Procedure**

*   To opt of displaying {{ tekton_hub }} resources in the ***Developer*** perspective, set the value of the `enable-devconsole-integration` field in the `TektonConfig` custom resource (CR) to `false`.
    ```yaml
    apiVersion: operator.tekton.dev/v1alpha1
      kind: TektonConfig
      metadata:
        name: config
      spec:
        targetNamespace: openshift-pipelines
        ...
        hub:
          params:
            - name: enable-devconsole-integration
              value: "false"
        ...
    ```

    By default, the `TektonConfig` CR does not include the `enable-devconsole-integration` field, and the {{ pipelines_title }} Operator assumes that the value is `true`.


:::note

Instead of opting out of displaying {{ tekton_hub }} resources in the ***Developer*** perspective, if you want to completely disable the {{ tekton_hub }} UI, set the `enableUI` field to `false` in the `TektonHub` CR.

:::