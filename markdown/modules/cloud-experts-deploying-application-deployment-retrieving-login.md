{%- set _mod_docs_content_type = "PROCEDURE" %}
# Retrieving the login command {id="cloud-experts-deploying-application-deployment-retrieving-login_{{ context }}"}

To deploy your application, you need to get the CLI login command. {._abstract}

**Procedure**

1.  If you are not logged in to the CLI, access your cluster with the web console.
1.  Click the dropdown arrow next to your login name in the upper right, and select **Copy Login Command**.
    ![CLI login screen](/_assets/images/4-cli-login.png)

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