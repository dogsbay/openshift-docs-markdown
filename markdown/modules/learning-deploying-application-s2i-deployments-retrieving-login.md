{%- set _mod_docs_content_type = "PROCEDURE" %}
# Retrieving your login command {id="learning-deploying-application-s2i-deployments-retrieving-login_{{ context }}"}

To create your cluster, log in to the {{ rosa_cli_first }}. If you need to authenticate, use a token from {{ cluster_manager_first }}. {._abstract}

**Procedure**

1.  Confirm you are logged in to the {{ rosa_cli }} by running the following command:
    ```terminal
    rosa whoami
    ```

    If you are logged in to the command-line interface, skip to "Creating a new project". If you are not logged in to the command-line interface, continue this procedure.
1.  If you are not logged in to the {{ rosa_cli }}, in {{ cluster_manager_url }}, click the dropdown arrow next to your name in the upper-right and select **Copy login command**.
    ![CLI Login](/_assets/images/ostoy-cli-login.png)
1.  A new tab opens. Enter your username and password, and select the authentication method.
1.  Click **Display Token**
1.  Copy the command under "Log in with this token".
1.  Log in to the CLI by running the copied command in your terminal.

    **For example**:
    ```terminal
    $ oc login --token=RYhFlXXXXXXXXXXXX --server=https://api.osd4-demo.abc1.p1.openshiftapps.com:6443
    ```

    **Example output**:
    ```terminal
    Logged into "https://api.myrosacluster.abcd.p1.openshiftapps.com:6443" as "rosa-user" using the token provided.

    You don't have any projects. You can try to create a new project, by running

    oc new-project <project name>
    ```