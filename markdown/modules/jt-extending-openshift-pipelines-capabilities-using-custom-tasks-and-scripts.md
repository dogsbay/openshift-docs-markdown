{%- set _mod_docs_content_type = "PROCEDURE" %}
# Extending {{ pipelines_shortname }} capabilities using custom tasks and scripts {id="jt-extending-openshift-pipelines-capabilities-using-custom-tasks-and-scripts_{{ context }}"}

In {{ pipelines_shortname }}, if you do not find the right task in Tekton Hub, or need greater control over tasks, you can create custom tasks and scripts to extend the capabilities of {{ pipelines_shortname }}.

```yaml title="Example: A custom task for running the maven test command"
apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: maven-test
spec:
  workspaces:
  - name: source
  steps:
  - image: my-maven-image
    command: ["mvn test"]
    workingDir: $(workspaces.source.path)
```

```yaml title="Example: Run a custom shell script by providing its path"
...
steps:
  image: ubuntu
  script: |
      #!/usr/bin/env bash
      /workspace/my-script.sh
...
```

```yaml title="Example: Run a custom Python script by writing it in the YAML file"
...
steps:
  image: python
  script: |
      #!/usr/bin/env python3
      print(“hello from python!”)
...
```