{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Knative CLI using the {{ product_title }} web console {id="installing-cli-web-console_{{ context }}"}

Using the {{ product_title }} web console provides a streamlined and intuitive user interface to install the Knative (`kn`) CLI. After the {{ ServerlessOperatorName }} is installed, you will see a link to download the Knative (`kn`) CLI for Linux (amd64, s390x, ppc64le), macOS, or Windows from the **Command Line Tools** page in the {{ product_title }} web console.

**Prerequisites**

*   You have logged in to the {{ product_title }} web console.
*   The {{ ServerlessOperatorName }} and Knative Serving are installed on your {{ product_title }} cluster.

    :::important

    If **libc** is not available, you might see the following error when you run CLI commands:

    ```terminal
    $ kn: No such file or directory
    ```
    
    :::

*   If you want to use the verification steps for this procedure, you must install the OpenShift (`oc`) CLI.

**Procedure**

1.  Download the Knative (`kn`) CLI from the **Command Line Tools** page. You can access the **Command Line Tools** page by clicking the ![title="Help"](/_assets/images/question-circle.png) icon in the top right corner of the web console and selecting **Command Line Tools** in the list.
1.  Unpack the archive:
    ```terminal
    $ tar -xf <file>
    ```
1.  Move the `kn` binary to a directory on your `PATH`.
1.  To check your `PATH`, run:
    ```terminal
    $ echo $PATH
    ```

**Verification**

*   Run the following commands to check that the correct Knative CLI resources and route have been created:
    ```terminal
    $ oc get ConsoleCLIDownload
    ```
    ```terminal title="Example output"
    NAME                  DISPLAY NAME                                             AGE
    kn                    kn - OpenShift Serverless Command Line Interface (CLI)   2022-09-20T08:41:18Z
    oc-cli-downloads      oc - OpenShift Command Line Interface (CLI)              2022-09-20T08:00:20Z
    ```
    ```terminal
    $ oc get route -n openshift-serverless
    ```
    ```terminal title="Example output"
    NAME   HOST/PORT                                  PATH   SERVICES                      PORT       TERMINATION     WILDCARD
    kn     kn-openshift-serverless.apps.example.com          knative-openshift-metrics-3   http-cli   edge/Redirect   None
    ```