{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an application from a template {id="applications-create-using-cli-template_{{ context }}"}

You can use the `oc new-app` command to create an application from a template stored in your project or from a template file on your local system. Use this procedure when you have a template JSON or YAML file, or a template in the template library of your current project. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }} and logged in to your cluster.
*   You have a template JSON or YAML file, or a template stored in the template library of your current project.

**Procedure**

1.  Upload an application template to the template library of your current project by running the following command:
    ```terminal
    $ oc create -f examples/sample-app/application-template-stibuild.json
    ```
1.  Create a new application from a stored template by running the following command:
    ```terminal
    $ oc new-app ruby-helloworld-sample
    ```
1.  Create a new application from a template file on your local file system without storing it in {{ product_title }} by running the following command:
    ```terminal
    $ oc new-app -f examples/sample-app/application-template-stibuild.json
    ```
1.  Set template parameter values when creating an application by running the following command:
    ```terminal
    $ oc new-app ruby-helloworld-sample \
        -p ADMIN_USERNAME=admin -p ADMIN_PASSWORD=mypassword
    ```
1.  Store template parameters in a file by creating a file such as `helloworld.params` with the following content:
    ```terminal
    ADMIN_USERNAME=admin
    ADMIN_PASSWORD=mypassword
    ```

    You can store your parameters in a file, then use that file with `--param-file` when instantiating a template. If you want to read the parameters from standard input, use `--param-file=-`.
1.  Create a new application from a template by using a parameter file by running the following command:
    ```terminal
    $ oc new-app ruby-helloworld-sample --param-file=helloworld.params
    ```

    :::note

    To read parameters from standard input, use `--param-file=-`.
    
    :::