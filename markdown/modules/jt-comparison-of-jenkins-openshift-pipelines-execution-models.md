{%- set _mod_docs_content_type = "CONCEPT" %}
# Comparison of Jenkins and {{ pipelines_shortname }} execution models {id="jt-comparison-of-jenkins-openshift-pipelines-execution-models_{{ context }}"}

Jenkins and {{ pipelines_shortname }} offer similar functions but are different in architecture and execution.

**Comparison of execution models in Jenkins and {{ pipelines_shortname }}**

| Jenkins | {{ pipelines_shortname }} |
| --- | --- |
| Jenkins has a controller node. Jenkins runs pipelines and steps centrally, or orchestrates jobs running in other nodes. | {{ pipelines_shortname }} is serverless and distributed, and there is no central dependency for execution. |
| Containers are launched by the Jenkins controller node through the pipeline. | {{ pipelines_shortname }} adopts a 'container-first' approach, where every step runs as a container in a pod (equivalent to nodes in Jenkins). |
| Extensibility is achieved by using plugins. | Extensibility is achieved by using tasks in Tekton Hub or by creating custom tasks and scripts. |