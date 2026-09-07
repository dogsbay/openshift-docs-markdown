{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an application from source code {id="applications-create-using-cli-source-code_{{ context }}"}

You can create an application on your {{ product_title }} cluster from a local or remote Git repository using the `oc new-app` command. Use command flags to target a specific branch or subdirectory, authenticate to a private repository, or control the build strategy and builder image. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }} and logged in to your cluster.
*   You have access to a Git repository containing your application source code.

**Procedure**

1.  Create an application from a Git repository in a local directory by running the following command:
    ```terminal
    $ oc new-app /<path_to_source_code>
    ```

    :::note

    If you use a local Git repository, the repository must have a remote named `origin` that points to a URL that is accessible by the {{ product_title }} cluster. If there is no recognized remote, running the `new-app` command creates a binary build.
    
    :::

1.  Create an application from a public remote Git repository by running the following command:
    ```terminal
    $ oc new-app https://github.com/sclorg/cakephp-ex
    ```
1.  Create an application from a private remote Git repository by running the following command:
    ```terminal
    $ oc new-app https://github.com/<your_user>/<your_private_repo> --source-secret=yoursecret
    ```

    :::note

    If you use a private remote Git repository, use the `--source-secret` flag to specify a source clone secret for access to the repository.
    
    :::

1.  Use a subdirectory of your source repository by running the following command:
    ```terminal
    $ oc new-app https://github.com/sclorg/s2i-ruby-container.git \
        --context-dir=2.0/test/puma-test-app
    ```
1.  Specify a Git branch by running the following command:
    ```terminal
    $ oc new-app https://github.com/openshift/ruby-hello-world.git#beta4
    ```
1.  Override the automatically detected build strategy by running the following command:
    ```terminal
    $ oc new-app /home/user/code/myapp --strategy=docker
    ```

    :::note

    The `oc` command requires that files containing build sources are available in a remote Git repository. For all source builds, you must use `git remote -v`.
    
    :::

1.  Specify the builder image and source repository:
    1.  Specify the builder image and source repository for a remote repository by running the following command:
        ```terminal
        $ oc new-app myproject/my-ruby~https://github.com/openshift/ruby-hello-world.git
        ```
    1.  Specify the builder image and source repository for a local repository by running the following command:
        ```terminal
        $ oc new-app openshift/ruby-20-centos7:latest~/home/user/code/my-ruby-app
        ```