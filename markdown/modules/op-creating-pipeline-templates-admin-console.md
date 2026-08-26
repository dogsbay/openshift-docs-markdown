{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating pipeline templates in the Administrator perspective {id="op-creating-pipeline-templates-admin-console_{{ context }}"}

As a cluster administrator, you can create pipeline templates that developers can reuse when they create a pipeline on the cluster.

**Prerequisites**

*   You have access to an {{ product_title }} cluster with cluster administrator permissions, and have switched to the **Administrator** perspective.
*   You have installed the {{ pipelines_shortname }} Operator in your cluster.

**Procedure**

1.  Navigate to the **Pipelines** page to view existing pipeline templates.
1.  Click the ![import-icon](/images/import-icon.png "Import") icon to go to the **Import YAML** page.
1.  Add the YAML for your pipeline template. The template must include the following information:
    ```yaml
    apiVersion: tekton.dev/v1beta1
    kind: Pipeline
    metadata:
    # ...
      namespace: openshift (1)
      labels:
        pipeline.openshift.io/runtime: <runtime> (2)
        pipeline.openshift.io/type: <pipeline-type> (3)
    # ...
    ```
    1.  The template must be created in the `openshift` namespace.
    1.  The template must contain the `pipeline.openshift.io/runtime` label. The accepted runtime values for this label are `nodejs`, `golang`, `dotnet`, `java`, `php`, `ruby`, `perl`, `python`, `nginx`, and `httpd`.
    1.  The template must contain the `pipeline.openshift.io/type:` label. The accepted type values for this label are `openshift`, `knative`, and `kubernetes`.
1.  Click **Create**. After the pipeline has been created, you are taken to the **Pipeline details** page, where you can view information about or edit your pipeline.