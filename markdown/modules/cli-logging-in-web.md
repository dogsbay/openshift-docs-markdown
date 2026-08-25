{%- set _mod_docs_content_type = "PROCEDURE" %}
# Logging in to the OpenShift CLI using a web browser {id="cli-logging-in-web_{{ context }}"}

You can log in to the {{ oc_first }} with the help of a web browser to access and manage your cluster. This allows you to avoid inserting your access token into the command line. {._abstract}


:::warning

Logging in to the CLI through the web browser runs a server on localhost with HTTP, not HTTPS; use with caution on multi-user workstations.

:::


**Prerequisites**

*   You must have access to an {{ product_title }} cluster.
*   You must have installed the OpenShift CLI (`oc`).
*   You must have a browser installed.

**Procedure**

1.  Enter the `oc login` command with the `--web` flag:
    ```terminal
    $ oc login <cluster_url> --web
    ```

    Optionally, you can specify the server URL and callback port. For example, `oc login <cluster_url> --web --callback-port 8280 localhost:8443`.
1.  The web browser opens automatically. If it does not, click the link in the command output. If you do not specify the {{ product_title }} server `oc` tries to open the web console of the cluster specified in the current `oc` configuration file. If no `oc` configuration exists, `oc` prompts interactively for the server URL.

    ```terminal title="Example output"
    Opening login URL in the default browser: https://openshift.example.com
    Opening in existing browser session.
    ```
1.  If more than one identity provider is available, select your choice from the options provided.
1.  Enter your username and password into the corresponding browser fields. After you are logged in, the browser displays the text `access token received successfully; please return to your terminal`.
1.  Check the CLI for a login confirmation.

    ```terminal title="Example output"
    Login successful.

    You don't have any projects. You can try to create a new project, by running

        oc new-project <projectname>

    ```

    :::note

    The web console defaults to the profile used in the previous session. To switch between Administrator and Developer profiles, log out of the {{ product_title }} web console and clear the cache.
    
    :::


    You can now create a project or issue other commands for managing your cluster.