{%- set _mod_docs_content_type = "CONCEPT" %}
# Comparison of Jenkins and {{ pipelines_shortname }} concepts {id="jt-comparison-of-jenkins-and-openshift-pipelines-concepts_{{ context }}"}

You can review and compare the following equivalent terms used in Jenkins and {{ pipelines_shortname }}.

## Jenkins terminology {id="_jenkins_terminology"}
Jenkins offers declarative and scripted pipelines that are extensible using shared libraries and plugins. Some basic terms in Jenkins are as follows:

*   **Pipeline**: Automates the entire process of building, testing, and deploying applications by using [Groovy](https://groovy-lang.org/) syntax.
*   **Node**: A machine capable of either orchestrating or executing a scripted pipeline.
*   **Stage**: A conceptually distinct subset of tasks performed in a pipeline. Plugins or user interfaces often use this block to display the status or progress of tasks.
*   ***Step***: A single task that specifies the exact action to be taken, either by using a command or a script.

## {{ pipelines_shortname }} terminology {id="_pipelines_shortname_terminology"}
{{ pipelines_shortname }} uses [YAML](https://yaml.org/) syntax for declarative pipelines and consists of tasks. Some basic terms in {{ pipelines_shortname }} are as follows:

*   ***Pipeline***: A set of tasks in a series, in parallel, or both.
*   ***Task***: A sequence of steps as commands, binaries, or scripts.
*   ***PipelineRun***: Execution of a pipeline with one or more tasks.
*   ***TaskRun***: Execution of a task with one or more steps.

    :::note

    You can initiate a PipelineRun or a TaskRun with a set of inputs such as parameters and workspaces, and the execution results in a set of outputs and artifacts.
    
    :::

*   ***Workspace***: In {{ pipelines_shortname }}, workspaces are conceptual blocks that serve the following purposes:
    *   Storage of inputs, outputs, and build artifacts.
    *   Common space to share data among tasks.
    *   Mount points for credentials held in secrets, configurations held in config maps, and common tools shared by an organization.


        :::note

        In Jenkins, there is no direct equivalent of {{ pipelines_shortname }} workspaces. You can think of the control node as a workspace, as it stores the cloned code repository, build history, and artifacts. When a job is assigned to a different node, the cloned code and the generated artifacts are stored in that node, but the control node maintains the build history.
        
        :::


## Mapping of concepts {id="_mapping_of_concepts"}
The building blocks of Jenkins and {{ pipelines_shortname }} are not equivalent, and a specific comparison does not provide a technically accurate mapping. The following terms and concepts in Jenkins and {{ pipelines_shortname }} correlate in general:

**Jenkins and {{ pipelines_shortname }} - basic comparison**

| Jenkins | {{ pipelines_shortname }} |
| --- | --- |
| Pipeline | Pipeline and PipelineRun |
| Stage | Task |
| Step | A step in a task |