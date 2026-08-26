{%- set _mod_docs_content_type = "PROCEDURE" %}
# Retrieving the login command {id="learning-deploying-application-deployment-retrieving-login_{{ context }}"}

Before creating a cluster, you must log in to the {{ rosa_cli_first }}. Install the {{ rosa_cli }} by completing the workshop on creating a cluster. {._abstract}

**Procedure**

1.  Confirm you are logged in to the {{ rosa_cli }} by running the following command:
    ```terminal
    rosa whoami
    ```

    If you are logged in to the command-line interface, skip to "Creating a new project". If you are not logged in to the command-line interface, continue this procedure.
1.  Access your cluster with the web console.
1.  Click the dropdown arrow next to your login name in the upper right corner, and select **Copy Login Command**.
    ![CLI login screen](/images/4-cli-login.png)

    A new tab opens. 
1.  Select your authentication method.
1.  Click **Display Token**.
1.  Copy the command under **Log in with this token**. 
1.  From your terminal, paste and run the copied command. If the login is successful, you will see the following confirmation message:
    ```terminal
    $ oc login --token=<your_token> --server=https://api.osd4-demo.abc1.p1.openshiftapps.com:6443
    Logged into "https://api.myrosacluster.abcd.p1.openshiftapps.com:6443" as "rosa-user" using the token provided.

    You don't have any projects. You can try to create a new project, by running

    oc new-project <project name>
    ```