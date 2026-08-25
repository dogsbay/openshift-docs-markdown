{%- set _mod_docs_content_type = "PROCEDURE" %}
# Building and deploying functions on the cluster {id="serverless-functions-creating-on-cluster-builds_{{ context }}"}

You can use the Knative (`kn`) CLI to initiate a function project build and then deploy the function directly on the cluster. To build a function project in this way, the source code for your function project must exist in a Git repository branch that is accessible to your cluster.

**Prerequisites**

*   {{ pipelines_title }} must be installed on your cluster.
*   You have installed the OpenShift CLI (`oc`).
*   You have installed the Knative (`kn`) CLI.

**Procedure**

1.  In each namespace where you want to run {{ pipelines_shortname }} and deploy a function, you must create the following resources:
    1.  Create the `s2i` Tekton task to be able to use Source-to-Image in the pipeline:
        ```terminal
        $ oc apply -f https://raw.githubusercontent.com/openshift-knative/kn-plugin-func/serverless-1.28.0/pipelines/resources/tekton/task/func-s2i/0.1/func-s2i.yaml
        ```
    1.  Create the `kn func` deploy Tekton task to be able to deploy the function in the pipeline:
        ```terminal
        $ oc apply -f https://raw.githubusercontent.com/openshift-knative/kn-plugin-func/serverless-1.28.0/pipelines/resources/tekton/task/func-deploy/0.1/func-deploy.yaml
        ```
1.  Create a function:
    ```terminal
    $ kn func create <function_name> -l <runtime>
    ```
1.  After you have created a new function project, you must add the project to a Git repository and ensure that the repository is available to the cluster. Information about this Git repository is used to update the `func.yaml` file in the next step.
1.  Update the configuration in the `func.yaml` file for your function project to enable on-cluster builds for the Git repository:
    ```yaml
    ...
    git:
      url: <git_repository_url> (1)
      revision: main (2)
      contextDir: <directory_path> (3)
    ...
    ```
    1.  Required. Specify the Git repository that contains your function’s source code.
    1.  Optional. Specify the Git repository revision to be used. This can be a branch, tag, or commit.
    1.  Optional. Specify the function’s directory path if the function is not located in the Git repository root folder.
1.  Implement the business logic of your function. Then, use Git to commit and push the changes.
1.  Deploy your function:
    ```terminal
    $ kn func deploy --remote
    ```

    If you are not logged into the container registry referenced in your function configuration, you are prompted to provide credentials for the remote container registry that hosts the function image:
    ```terminal title="Example output and prompts"
    🕕 Creating Pipeline resources
    Please provide credentials for image registry used by Pipeline.
    ? Server: https://index.docker.io/v1/
    ? Username: my-repo
    ? Password: ********
       Function deployed at URL: http://test-function.default.svc.cluster.local
    ```
1.  To update your function, commit and push new changes by using Git, then run the `kn func deploy --remote` command again.