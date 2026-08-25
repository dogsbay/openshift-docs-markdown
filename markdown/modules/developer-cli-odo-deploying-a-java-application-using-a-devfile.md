{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying a Java application using a devfile {id="deploying-a-java-application-using-a-devfile_{{ context }}"}

In this section, you will learn how to deploy a sample Java project that uses Maven and Java 8 JDK using a devfile.

**Procedure**

1.  Create a directory to store the source code of your component:
    ```terminal
    $ mkdir <directory-name>
    ```
1.  Create a component configuration of Spring Boot component type named `myspring` and download its sample project:
    ```terminal
    $ odo create java-springboot myspring --starter
    ```

    The previous command produces the following output:
    ```terminal
    Validation
    ✓  Checking devfile compatibility [195728ns]
    ✓  Creating a devfile component from registry: DefaultDevfileRegistry [170275ns]
    ✓  Validating devfile component [281940ns]

    Please use `odo push` command to create the component with source deployed
    ```

    The `odo create` command downloads the associated `devfile.yaml` file from the recorded devfile registries.
1.  List the contents of the directory to confirm that the devfile and the sample Java application were downloaded:
    ```terminal
    $ ls
    ```

    The previous command produces the following output:
    ```terminal
    README.md    devfile.yaml    pom.xml        src
    ```
1.  Create a URL to access the deployed component:
    ```terminal
    $ odo url create --host apps-crc.testing
    ```

    The previous command produces the following output:
    ```terminal
    ✓  URL myspring-8080.apps-crc.testing created for component: myspring

    To apply the URL configuration changes, please use odo push
    ```

    :::note

    You must use your cluster host domain name when creating the URL.
    
    :::

1.  Push the component to the cluster:
    ```terminal
    $ odo push
    ```

    The previous command produces the following output:
    ```terminal
    Validation
     ✓  Validating the devfile [81808ns]

    Creating Kubernetes resources for component myspring
     ✓  Waiting for component to start [5s]

    Applying URL changes
     ✓  URL myspring-8080: http://myspring-8080.apps-crc.testing created

    Syncing to component myspring
     ✓  Checking files for pushing [2ms]
     ✓  Syncing files to the component [1s]

    Executing devfile commands for component myspring
     ✓  Executing devbuild command "/artifacts/bin/build-container-full.sh" [1m]
     ✓  Executing devrun command "/artifacts/bin/start-server.sh" [2s]

    Pushing devfile component myspring
     ✓  Changes successfully pushed to component
    ```
1.  List the URLs of the component to verify that the component was pushed successfully:
    ```terminal
    $ odo url list
    ```

    The previous command produces the following output:
    ```terminal
    Found the following URLs for component myspring
    NAME              URL                                       PORT     SECURE
    myspring-8080     http://myspring-8080.apps-crc.testing     8080     false
    ```
1.  View your deployed application by using the generated URL:
    ```terminal
    $ curl http://myspring-8080.apps-crc.testing
    ```