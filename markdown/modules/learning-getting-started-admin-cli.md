{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an admin user using the CLI {id="learning-getting-started-admin-cli_{{ context }}"}

You can use the {{ rosa_cli_first }} to create an admin user for your clusters. Admin users perform tasks such as creating new clusters, scheduling cluster upgrades, monitoring health, and managing cluster resources. {._abstract}


:::note

An admin user works well in this tutorial setting. For actual deployment, use a formal identity provider to access the cluster and grant the user admin privileges. For more information on identity providers, see the _Additional resources_ section.

:::


**Procedure**

1.  Run the following command to create the admin user:
    ```terminal
    $ rosa create admin --cluster=<cluster-name>
    ```

    **Example output**:
    ```terminal
    W: It is recommended to add an identity provider to login to this cluster. See 'rosa create idp --help' for more information.
    I: Admin account has been added to cluster 'my-rosa-cluster'. It may take up to a minute for the account to become active.
    I: To login, run the following command:
    oc login https://api.my-rosa-cluster.abcd.p1.openshiftapps.com:6443 \
    --username cluster-admin \
    --password FWGYL-2mkJI-00000-00000
    ```
1.  Copy the log in command returned to you in the previous step and paste it into your terminal. This will log you in to the cluster using the CLI so you can start using the cluster.
    ```terminal
    $ oc login https://api.my-rosa-cluster.abcd.p1.openshiftapps.com:6443 \
    >    --username cluster-admin \
    >    --password FWGYL-2mkJI-00000-00000
    ```

    **Example output**:
    ```terminal
    Login successful.

    You have access to 79 projects, the list has been suppressed. You can list all projects with ' projects'

    Using project "default".
    ```
1.  To check that you are logged in as the admin user, run one of the following commands:
    *   Option 1:
        ```terminal
        $ oc whoami
        ```

        **For example**:
        ```terminal
        cluster-admin
        ```
    *   Option 2:
        ```terminal
        oc get all -n openshift-apiserver
        ```

        Only an admin user can run this command without errors.