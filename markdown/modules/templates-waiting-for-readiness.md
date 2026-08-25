{%- set _mod_docs_content_type = "PROCEDURE" %}
# Waiting for template readiness {id="templates-waiting-for-readiness_{{ context }}"}

To delay creating resources from a template until key resources are ready, add the `template.alpha.openshift.io/wait-for-ready: "true"` annotation to supported object kinds. The service catalog, {{ tsb_name }}, and `TemplateInstance` API wait for annotated objects to report ready. {._abstract}

Before starting the procedure, read the following considerations:

*   Set memory, CPU, and storage default sizes to ensure your application is given enough resources to run smoothly.
*   Avoid referencing the `latest` tag from images if that tag is used across major versions. This can cause running applications to break when new images are pushed to that tag.
*   A good template builds and deploys cleanly without requiring modifications after the template is deployed.

**Procedure**

*   To use the template feature, mark one or more objects of kind `Build`, `BuildConfig`, `Deployment`, `DeploymentConfig`, `Job`, or `StatefulSet` in a template with the following annotation:
    ```text
    "template.alpha.openshift.io/wait-for-ready": "true"
    ```

    Creating resources from the template is not complete until all objects marked with the annotation report ready. Similarly, if any of the annotated objects report failed, or if the template fails to become ready within a fixed timeout of one hour, creating resources from the template fails.

    When you create resources from a template, readiness and failure of each object kind are defined as follows:
<table>
<thead>
<tr>
  <th>Kind</th>
  <th>Readiness</th>
  <th>Failure</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>Build</code></td>
  <td>Object reports phase complete.</td>
  <td>Object reports phase canceled, error, or failed.</td>
</tr>
<tr>
  <td><code>BuildConfig</code></td>
  <td>Latest associated build object reports phase complete.</td>
  <td>Latest associated build object reports phase canceled, error, or failed.</td>
</tr>
<tr>
  <td><code>Deployment</code></td>
  <td>Object reports new replica set and deployment available. This honors readiness probes defined on the object.</td>
  <td>Object reports progressing condition as false.</td>
</tr>
<tr>
  <td><code>DeploymentConfig</code></td>
  <td>Object reports new replication controller and deployment available. This honors readiness probes defined on the object.</td>
  <td>Object reports progressing condition as false.</td>
</tr>
<tr>
  <td><code>Job</code></td>
  <td>Object reports completion.</td>
  <td>Object reports that one or more failures have occurred.</td>
</tr>
<tr>
  <td><code>StatefulSet</code></td>
  <td>Object reports all replicas ready. This honors readiness probes defined on the object.</td>
  <td>Not applicable.</td>
</tr>
</tbody>
</table>


    The following is an example template extract, which uses the `wait-for-ready` annotation. Further examples can be found in the {{ product_title }} quick start templates.
    ```yaml
    kind: Template
    apiVersion: template.openshift.io/v1
    metadata:
      name: my-template
    objects:
    - kind: BuildConfig
      apiVersion: build.openshift.io/v1
      metadata:
        name: ...
        annotations:
          # wait-for-ready used on BuildConfig ensures that creating resources from the template
          # fails immediately if the build fails
          template.alpha.openshift.io/wait-for-ready: "true"
      spec:
        ...
    - kind: DeploymentConfig
      apiVersion: apps.openshift.io/v1
      metadata:
        name: ...
        annotations:
          template.alpha.openshift.io/wait-for-ready: "true"
      spec:
        ...
    - kind: Service
      apiVersion: v1
      metadata:
        name: ...
      spec:
        ...
    ```