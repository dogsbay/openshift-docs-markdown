{%- set _mod_docs_content_type = "PROCEDURE" %}
# Specifying pipelines resource quota using priority class {id="specifying-pipelines-resource-quota-using-priority-class_{{ context }}"}

A `PriorityClass` object maps priority class names to the integer values that indicates their relative priorities. Higher values increase the priority of a class. After you create a priority class, you can create pods that specify the priority class name in their specifications. In addition, you can control a pod’s consumption of system resources based on the pod’s priority.

Specifying resource quota for a pipeline is similar to setting a resource quota for the subset of pods created by a pipeline run. The following steps provide an example of the workaround by specifying resource quota based on priority class.

**Procedure**

1.  Create a priority class for a pipeline.
    ```yaml title="Example: Priority class for a pipeline"
    apiVersion: scheduling.k8s.io/v1
    kind: PriorityClass
    metadata:
      name: pipeline1-pc
    value: 1000000
    description: "Priority class for pipeline1"
    ```
1.  Create a resource quota for a pipeline.
    ```yaml title="Example: Resource quota for a pipeline"
    apiVersion: v1
    kind: ResourceQuota
    metadata:
      name: pipeline1-rq
    spec:
      hard:
        cpu: "1000"
        memory: 200Gi
        pods: "10"
      scopeSelector:
        matchExpressions:
        - operator : In
          scopeName: PriorityClass
          values: ["pipeline1-pc"]
    ```
1.  Verify the resource quota usage for the pipeline.
    ```terminal title="Example: Verify resource quota usage for the pipeline"
    $ oc describe quota
    ```
    ```text title="Sample output"
    Name:       pipeline1-rq
    Namespace:  default
    Resource    Used  Hard
    --------    ----  ----
    cpu         0     1k
    memory      0     200Gi
    pods        0     10
    ```

    Because pods are not running, the quota is unused.
1.  Create the pipelines and tasks.
    ```yaml title="Example: YAML for the pipeline"
    apiVersion: tekton.dev/v1beta1
    kind: Pipeline
    metadata:
      name: maven-build
    spec:
      workspaces:
      - name: local-maven-repo
      resources:
      - name: app-git
        type: git
      tasks:
      - name: build
        taskRef:
          name: mvn
        resources:
          inputs:
          - name: source
            resource: app-git
        params:
        - name: GOALS
          value: ["package"]
        workspaces:
        - name: maven-repo
          workspace: local-maven-repo
      - name: int-test
        taskRef:
          name: mvn
        runAfter: ["build"]
        resources:
          inputs:
          - name: source
            resource: app-git
        params:
        - name: GOALS
          value: ["verify"]
        workspaces:
        - name: maven-repo
          workspace: local-maven-repo
      - name: gen-report
        taskRef:
          name: mvn
        runAfter: ["build"]
        resources:
          inputs:
          - name: source
            resource: app-git
        params:
        - name: GOALS
          value: ["site"]
        workspaces:
        - name: maven-repo
          workspace: local-maven-repo
    ```
    ```yaml title="Example: YAML for a task in the pipeline"
    apiVersion: tekton.dev/v1beta1
    kind: Task
    metadata:
      name: mvn
    spec:
      workspaces:
      - name: maven-repo
      resources:
        inputs:
        - name: source
          type: git
      params:
      - name: GOALS
        description: The Maven goals to run
        type: array
        default: ["package"]
      steps:
        - name: mvn
          image: gcr.io/cloud-builders/mvn
          workingDir: /workspace/source
          command: ["/usr/bin/mvn"]
          args:
            - -Dmaven.repo.local=$(workspaces.maven-repo.path)
            - "$(params.GOALS)"
    ```
1.  Create and start the pipeline run.
    ```yaml title="Example: YAML for a pipeline run"
    apiVersion: tekton.dev/v1beta1
    kind: PipelineRun
    metadata:
      generateName: petclinic-run-
    spec:
      pipelineRef:
        name: maven-build
      podTemplate:
        priorityClassName: pipeline1-pc
      workspaces:
      - name: local-maven-repo
        emptyDir: {}
      resources:
      - name: app-git
        resourceSpec:
          type: git
          params:
            - name: url
              value: https://github.com/spring-projects/spring-petclinic
    ```

    :::note

    The pipeline run might fail with an error: `failed quota: <quota name> must specify cpu, memory`.

    To avoid this error, set a limit range for the namespace, where the defaults from the `LimitRange` object apply to pods created during the build process.

    For more information about setting limit ranges, refer to _Restrict resource consumption with limit ranges_ in the _Additional resources_ section.
    
    :::

1.  After the pods are created, verify the resource quota usage for the pipeline run.
    ```terminal title="Example: Verify resource quota usage for the pipeline"
    $ oc describe quota
    ```
    ```text title="Sample output"
    Name:       pipeline1-rq
    Namespace:  default
    Resource    Used  Hard
    --------    ----  ----
    cpu         500m  1k
    memory      10Gi  200Gi
    pods        1     10
    ```

    The output indicates that you can manage the combined resource quota for all concurrent running pods belonging to a priority class, by specifying the resource quota per priority class.