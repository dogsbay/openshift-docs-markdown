{%- set _mod_docs_content_type = "PROCEDURE" %}
# Specifying a fixed `oc` client version for OpenShift Jenkins images {id="specifying-oc-ocp-jenkins-image_{{ context }}"}

You can ensure that your Jenkins pipeline uses your specified `oc` client version with the Jenkins container image by configuring the version you require. {._abstract}

**Procedure**

*   Define the `oc` tool version explicitly in the pipeline configuration to use a specific OpenShift client version in a Jenkins pipeline as shown in the following example:

```terminal title="Example pipeline configuration:"
pipeline {
    agent any

    tools {
        oc 'oc-{{ product_version }}'
    }

    stages {
        stage('Version') {
            steps {
                sh 'oc version'
            }
        }
    }
}
```