{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing your cluster using the CLI {id="cloud-experts-getting-started-accessing-cli_{{ context }}"}

To access the cluster using the CLI, you must have the `oc` CLI installed. If you are following the tutorials, you already installed the `oc` CLI. {._abstract}

**Procedure**

1.  Log in to the {{ cluster_manager_url }}.
1.  Click your username in the top right corner.
1.  Click **Copy Login Command**.
    ![cloud-experts-getting-started-accessing-copy-login](/images/cloud-experts-getting-started-accessing-copy-login.png)
1.  This opens a new tab with a choice of identity providers (IDPs). Click the IDP you want to use. For example, "rosa-github".
    ![cloud-experts-getting-started-accessing-copy-token](/images/cloud-experts-getting-started-accessing-copy-token.png)
1.  A new tab opens. Click **Display token**.
1.  Run the following command in your terminal:
    ```terminal
    $ oc login --token=sha256~GBAfS4JQ0t1UTKYHbWAK6OUWGUkdMGz000000000000 --server=https://api.my-rosa-cluster.abcd.p1.openshiftapps.com:6443
    ```

    **Example output**
    ```terminal
    Logged into "https://api.my-rosa-cluster.abcd.p1.openshiftapps.com:6443" as "rosa-user" using the token provided.

    You have access to 79 projects, the list has been suppressed. You can list all projects with ' projects'

    Using project "default".
    ```
1.  Confirm that you are logged in by running the following command:
    ```terminal
    $ oc whoami
    ```

    **Example output**
    ```terminal
    rosa-user
    ```
1.  You can now access your cluster.